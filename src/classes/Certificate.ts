import { Certificate, PeerCertificate } from "tls";

export class Cert implements PeerCertificate {
    subject: Certificate;
    issuer: Certificate;
    subjectaltname: string;
    infoAccess: NodeJS.Dict<string[]>;
    modulus: string;
    exponent: string;
    valid_from: string;
    valid_to: string;
    fingerprint: string;
    fingerprint256: string;
    ext_key_usage: string[];
    serialNumber: string;
    raw: Buffer;
    isValid?: boolean;
    content?: string;

    constructor({ subject, issuer, subjectaltname, infoAccess, modulus, exponent, valid_from, valid_to, fingerprint, fingerprint256, ext_key_usage, serialNumber, raw }: { subject: any; issuer: any; subjectaltname: any; infoAccess: any; modulus: any; exponent: any; valid_from: any; valid_to: any; fingerprint: any; fingerprint256: any; ext_key_usage: any; serialNumber: any; raw: any; }) {
        this.subject = subject;
        this.issuer = issuer;
        this.subjectaltname = subjectaltname;
        this.infoAccess = infoAccess;
        this.modulus = modulus;
        this.exponent = exponent;
        this.valid_from = valid_from;
        this.valid_to = valid_to;
        this.fingerprint = fingerprint;
        this.fingerprint256 = fingerprint256;
        this.ext_key_usage = ext_key_usage;
        this.serialNumber = serialNumber;
        this.raw = raw;
        this.isValid = this.setIsValid();
        this.content = this.getFileContent();
    }

    private getFileContent(): string {
        return this.raw.toString('base64')
    }

    private setIsValid(): boolean {
        const today = new Date();
        const validFrom = new Date(this.valid_from);
        const validTo = new Date(this.valid_to)

        if ((validTo < today) || (today < validFrom)) {
            return false;
        }
        return true;
    }

}