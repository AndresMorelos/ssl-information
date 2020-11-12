import https from 'https'
import { TLSSocket } from 'tls'
import { RequestOptions } from '../utils'
import { Cert } from './Certificate'

export class Request {

    getCertificate(options: RequestOptions, callback: Function) {
        https.request(options, (res) => {
            const certificate = ((res.socket) as TLSSocket).getPeerCertificate();

            if (this.isEmpty(certificate) || certificate === null || certificate === undefined) {
                throw new Error(`The site did not provide a certificate`)
            }
            
            callback(new Cert(certificate));
        }).end()
    }

    private isEmpty(certificate: Object): boolean {
        return Object.keys(certificate).length === 0 && certificate.constructor === Object
    }
}