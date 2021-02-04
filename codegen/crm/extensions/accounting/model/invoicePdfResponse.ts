/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* A response that contains the PDF of an invoice
*/
export class InvoicePdfResponse {
    /**
    * Designates if the response is a success (\'OK\') or failure (\'ERR\').
    */
    'result'?: InvoicePdfResponse.ResultEnum;
    /**
    * The bytes of the invoice PDF.
    */
    'invoice': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "InvoicePdfResponse.ResultEnum"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InvoicePdfResponse.attributeTypeMap;
    }
}

export namespace InvoicePdfResponse {
    export enum ResultEnum {
        OK = <any> 'OK',
        ERR = <any> 'ERR'
    }
}
