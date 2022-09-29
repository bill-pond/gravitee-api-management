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
 * @interface MembershipListItem
 */
export interface MembershipListItem {
    /**
     * 
     * @type {string}
     * @memberof MembershipListItem
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipListItem
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipListItem
     */
    role?: string;
}

/**
 * Check if a given object implements the MembershipListItem interface.
 */
export function instanceOfMembershipListItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipListItemFromJSON(json: any): MembershipListItem {
    return MembershipListItemFromJSONTyped(json, false);
}

export function MembershipListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function MembershipListItemToJSON(value?: MembershipListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'id': value.id,
        'role': value.role,
    };
}
