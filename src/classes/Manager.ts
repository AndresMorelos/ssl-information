import { OptionsType, RequestOptions } from '../utils';
import { Cert } from './Certificate';
import { Request } from './Request'

export class Manager {
    private request: Request

    constructor() {
        this.request = new Request();
    }

    public get(options: OptionsType) {
        const _options = this.getOptions(options)
        return new Promise((resolve, reject) => {
            this.request.getCertificate(_options, (certificate: Cert, error: Error) => {
                if (error) {
                    reject(error)
                }
                resolve(certificate)
            })
        })
    }

    private getOptions(options: OptionsType): RequestOptions {

        return {
            host: options.host,
            port: options.port ? options.port : 443,
            method: options.method ? options.method : 'GET',
            path: options.path
        }
    }

}