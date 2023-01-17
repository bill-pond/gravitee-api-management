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
export const LifecycleAction = {
    START: 'START',
    STOP: 'STOP'
} as const;
export type LifecycleAction = typeof LifecycleAction[keyof typeof LifecycleAction];


export function LifecycleActionFromJSON(json: any): LifecycleAction {
    return LifecycleActionFromJSONTyped(json, false);
}

export function LifecycleActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LifecycleAction {
    return json as LifecycleAction;
}

export function LifecycleActionToJSON(value?: LifecycleAction | null): any {
    return value as any;
}
