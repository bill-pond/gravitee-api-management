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
import type { UserMembership } from './UserMembership';
import {
    UserMembershipFromJSON,
    UserMembershipFromJSONTyped,
    UserMembershipToJSON,
} from './UserMembership';

/**
 * 
 * @export
 * @interface UserMembershipList
 */
export interface UserMembershipList {
    /**
     * 
     * @type {Array<UserMembership>}
     * @memberof UserMembershipList
     */
    memberships?: Array<UserMembership>;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof UserMembershipList
     */
    metadata?: { [key: string]: { [key: string]: any; }; };
}

/**
 * Check if a given object implements the UserMembershipList interface.
 */
export function instanceOfUserMembershipList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserMembershipListFromJSON(json: any): UserMembershipList {
    return UserMembershipListFromJSONTyped(json, false);
}

export function UserMembershipListFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMembershipList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memberships': !exists(json, 'memberships') ? undefined : ((json['memberships'] as Array<any>).map(UserMembershipFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function UserMembershipListToJSON(value?: UserMembershipList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memberships': value.memberships === undefined ? undefined : ((value.memberships as Array<any>).map(UserMembershipToJSON)),
        'metadata': value.metadata,
    };
}
