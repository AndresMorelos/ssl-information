# SSL-INFORMATION

[![GitHub license](https://img.shields.io/github/license/AndresMorelos/ssl-information?style=flat-square)](https://github.com/AndresMorelos/ssl-info/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AndresMorelos/ssl-info?style=flat-square)](https://github.com/AndresMorelos/ssl-info/stargazers)
[![Version](https://img.shields.io/npm/v/ssl-information.svg?style=flat-square)](https://www.npmjs.com/package/ssl-information)
[![npm](https://img.shields.io/npm/dw/ssl-information?style=flat-square)](https://www.npmjs.com/package/ssl-information)

Get the information about any SSL certificate.

### How to install?
```js
 npm i ssl-information
```

### How to use?

``` js
const {
    certManager
} = require('ssl-information')

certManager
    .get({
        host: 'andresmorelos.dev'
    })
    .then((cert) => console.log(cert))
    .catch((err) => console.error(err));
```

### Request Options

| Name   | Required | Default   |
| ------ | ---------| --------- |
| host   | true     | None      |
| port   | false    | 443       |
| method | false    | GET       |
| path   | false    | undefined |


### Certificate Object

```js

{ 
    subject: Object;
    issuer: Object;
    subjectaltname: string;
    infoAccess: Array<String>;
    modulus: string;
    exponent: string;
    valid_from: string;
    valid_to: string;
    fingerprint: string;
    fingerprint256: string;
    ext_key_usage: Array<String>;
    serialNumber: string;
    raw: Buffer;
    isValid: boolean;
    content: string; // Parse raw content
}
```