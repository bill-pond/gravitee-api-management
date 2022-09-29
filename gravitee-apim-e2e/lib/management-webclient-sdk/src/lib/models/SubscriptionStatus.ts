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
export const SubscriptionStatus = {
    PENDING: 'PENDING',
    REJECTED: 'REJECTED',
    ACCEPTED: 'ACCEPTED',
    CLOSED: 'CLOSED',
    PAUSED: 'PAUSED',
    RESUMED: 'RESUMED'
} as const;
export type SubscriptionStatus = typeof SubscriptionStatus[keyof typeof SubscriptionStatus];


export function SubscriptionStatusFromJSON(json: any): SubscriptionStatus {
    return SubscriptionStatusFromJSONTyped(json, false);
}

export function SubscriptionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionStatus {
    return json as SubscriptionStatus;
}

export function SubscriptionStatusToJSON(value?: SubscriptionStatus | null): any {
    return value as any;
}
