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
export const AnalyticsAverageType = {
    AVAILABILITY: 'AVAILABILITY',
    RESPONSE_TIME: 'RESPONSE_TIME'
} as const;
export type AnalyticsAverageType = typeof AnalyticsAverageType[keyof typeof AnalyticsAverageType];


export function AnalyticsAverageTypeFromJSON(json: any): AnalyticsAverageType {
    return AnalyticsAverageTypeFromJSONTyped(json, false);
}

export function AnalyticsAverageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsAverageType {
    return json as AnalyticsAverageType;
}

export function AnalyticsAverageTypeToJSON(value?: AnalyticsAverageType | null): any {
    return value as any;
}
