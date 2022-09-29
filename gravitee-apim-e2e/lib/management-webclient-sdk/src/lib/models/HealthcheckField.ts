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


/**
 * 
 * @export
 */
export const HealthcheckField = {
    ENDPOINT: 'ENDPOINT',
    GATEWAY: 'GATEWAY'
} as const;
export type HealthcheckField = typeof HealthcheckField[keyof typeof HealthcheckField];


export function HealthcheckFieldFromJSON(json: any): HealthcheckField {
    return HealthcheckFieldFromJSONTyped(json, false);
}

export function HealthcheckFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthcheckField {
    return json as HealthcheckField;
}

export function HealthcheckFieldToJSON(value?: HealthcheckField | null): any {
    return value as any;
}
