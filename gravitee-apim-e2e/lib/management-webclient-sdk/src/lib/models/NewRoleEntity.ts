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
import type { RoleScope } from './RoleScope';
import {
    RoleScopeFromJSON,
    RoleScopeFromJSONTyped,
    RoleScopeToJSON,
} from './RoleScope';

/**
 * 
 * @export
 * @interface NewRoleEntity
 */
export interface NewRoleEntity {
    /**
     * 
     * @type {boolean}
     * @memberof NewRoleEntity
     */
    _default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewRoleEntity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof NewRoleEntity
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof NewRoleEntity
     */
    permissions?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {RoleScope}
     * @memberof NewRoleEntity
     */
    scope: RoleScope;
}

/**
 * Check if a given object implements the NewRoleEntity interface.
 */
export function instanceOfNewRoleEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "scope" in value;

    return isInstance;
}

export function NewRoleEntityFromJSON(json: any): NewRoleEntity {
    return NewRoleEntityFromJSONTyped(json, false);
}

export function NewRoleEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewRoleEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
        'scope': RoleScopeFromJSON(json['scope']),
    };
}

export function NewRoleEntityToJSON(value?: NewRoleEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default': value._default,
        'description': value.description,
        'name': value.name,
        'permissions': value.permissions,
        'scope': RoleScopeToJSON(value.scope),
    };
}
