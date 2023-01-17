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
export const PromotionEntityStatus = {
    CREATED: 'CREATED',
    TO_BE_VALIDATED: 'TO_BE_VALIDATED',
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED',
    ERROR: 'ERROR'
} as const;
export type PromotionEntityStatus = typeof PromotionEntityStatus[keyof typeof PromotionEntityStatus];


export function PromotionEntityStatusFromJSON(json: any): PromotionEntityStatus {
    return PromotionEntityStatusFromJSONTyped(json, false);
}

export function PromotionEntityStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionEntityStatus {
    return json as PromotionEntityStatus;
}

export function PromotionEntityStatusToJSON(value?: PromotionEntityStatus | null): any {
    return value as any;
}
