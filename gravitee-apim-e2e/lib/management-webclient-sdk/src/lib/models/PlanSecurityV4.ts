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
 * @interface PlanSecurityV4
 */
export interface PlanSecurityV4 {
    /**
     * 
     * @type {any}
     * @memberof PlanSecurityV4
     */
    configuration?: any;
    /**
     * 
     * @type {string}
     * @memberof PlanSecurityV4
     */
    type: string;
}

/**
 * Check if a given object implements the PlanSecurityV4 interface.
 */
export function instanceOfPlanSecurityV4(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function PlanSecurityV4FromJSON(json: any): PlanSecurityV4 {
    return PlanSecurityV4FromJSONTyped(json, false);
}

export function PlanSecurityV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanSecurityV4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'type': json['type'],
    };
}

export function PlanSecurityV4ToJSON(value?: PlanSecurityV4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value.configuration,
        'type': value.type,
    };
}
