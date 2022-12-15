/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * Some news resources are in alpha version. This implies that they are likely to be modified or even removed in future versions. They are marked with the 🧪 symbol
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PortalReCaptcha
 */
export interface PortalReCaptcha {
    /**
     * 
     * @type {boolean}
     * @memberof PortalReCaptcha
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PortalReCaptcha
     */
    siteKey?: string;
}

/**
 * Check if a given object implements the PortalReCaptcha interface.
 */
export function instanceOfPortalReCaptcha(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PortalReCaptchaFromJSON(json: any): PortalReCaptcha {
    return PortalReCaptchaFromJSONTyped(json, false);
}

export function PortalReCaptchaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalReCaptcha {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'siteKey': !exists(json, 'siteKey') ? undefined : json['siteKey'],
    };
}

export function PortalReCaptchaToJSON(value?: PortalReCaptcha | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'siteKey': value.siteKey,
    };
}
