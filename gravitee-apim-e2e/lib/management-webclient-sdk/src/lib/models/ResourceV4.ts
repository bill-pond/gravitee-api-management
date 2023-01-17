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
 * The list of API resources used by policies like cache resources or oauth2
 * @export
 * @interface ResourceV4
 */
export interface ResourceV4 {
    /**
     * 
     * @type {string}
     * @memberof ResourceV4
     */
    configuration: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResourceV4
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ResourceV4
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceV4
     */
    type: string;
}

/**
 * Check if a given object implements the ResourceV4 interface.
 */
export function instanceOfResourceV4(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "configuration" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ResourceV4FromJSON(json: any): ResourceV4 {
    return ResourceV4FromJSONTyped(json, false);
}

export function ResourceV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceV4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configuration': json['configuration'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'name': json['name'],
        'type': json['type'],
    };
}

export function ResourceV4ToJSON(value?: ResourceV4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value.configuration,
        'enabled': value.enabled,
        'name': value.name,
        'type': value.type,
    };
}
