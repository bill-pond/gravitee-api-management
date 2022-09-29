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
import type { ThemeDefinition } from './ThemeDefinition';
import {
    ThemeDefinitionFromJSON,
    ThemeDefinitionFromJSONTyped,
    ThemeDefinitionToJSON,
} from './ThemeDefinition';

/**
 * 
 * @export
 * @interface NewThemeEntity
 */
export interface NewThemeEntity {
    /**
     * 
     * @type {string}
     * @memberof NewThemeEntity
     */
    backgroundImage?: string;
    /**
     * 
     * @type {ThemeDefinition}
     * @memberof NewThemeEntity
     */
    definition?: ThemeDefinition;
    /**
     * 
     * @type {boolean}
     * @memberof NewThemeEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewThemeEntity
     */
    favicon?: string;
    /**
     * 
     * @type {string}
     * @memberof NewThemeEntity
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof NewThemeEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewThemeEntity
     */
    optionalLogo?: string;
}

/**
 * Check if a given object implements the NewThemeEntity interface.
 */
export function instanceOfNewThemeEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function NewThemeEntityFromJSON(json: any): NewThemeEntity {
    return NewThemeEntityFromJSONTyped(json, false);
}

export function NewThemeEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewThemeEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backgroundImage': !exists(json, 'backgroundImage') ? undefined : json['backgroundImage'],
        'definition': !exists(json, 'definition') ? undefined : ThemeDefinitionFromJSON(json['definition']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'favicon': !exists(json, 'favicon') ? undefined : json['favicon'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': json['name'],
        'optionalLogo': !exists(json, 'optionalLogo') ? undefined : json['optionalLogo'],
    };
}

export function NewThemeEntityToJSON(value?: NewThemeEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backgroundImage': value.backgroundImage,
        'definition': ThemeDefinitionToJSON(value.definition),
        'enabled': value.enabled,
        'favicon': value.favicon,
        'logo': value.logo,
        'name': value.name,
        'optionalLogo': value.optionalLogo,
    };
}
