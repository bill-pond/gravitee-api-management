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
 * @interface PortalScheduler
 */
export interface PortalScheduler {
    /**
     * 
     * @type {number}
     * @memberof PortalScheduler
     */
    notifications?: number;
    /**
     * 
     * @type {number}
     * @memberof PortalScheduler
     */
    tasks?: number;
}

/**
 * Check if a given object implements the PortalScheduler interface.
 */
export function instanceOfPortalScheduler(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PortalSchedulerFromJSON(json: any): PortalScheduler {
    return PortalSchedulerFromJSONTyped(json, false);
}

export function PortalSchedulerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalScheduler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'notifications': !exists(json, 'notifications') ? undefined : json['notifications'],
        'tasks': !exists(json, 'tasks') ? undefined : json['tasks'],
    };
}

export function PortalSchedulerToJSON(value?: PortalScheduler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'notifications': value.notifications,
        'tasks': value.tasks,
    };
}
