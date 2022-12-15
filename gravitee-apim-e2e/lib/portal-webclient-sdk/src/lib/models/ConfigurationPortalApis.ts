/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Enabled,
    EnabledFromJSON,
    EnabledFromJSONTyped,
    EnabledToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfigurationPortalApis
 */
export interface ConfigurationPortalApis {
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationPortalApis
     */
    tilesMode?: Enabled;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationPortalApis
     */
    categoryMode?: Enabled;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationPortalApis
     */
    promotedApiMode?: Enabled;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationPortalApis
     */
    apiHeaderShowTags?: Enabled;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationPortalApis
     */
    apiHeaderShowCategories?: Enabled;
}

export function ConfigurationPortalApisFromJSON(json: any): ConfigurationPortalApis {
    return ConfigurationPortalApisFromJSONTyped(json, false);
}

export function ConfigurationPortalApisFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPortalApis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tilesMode': !exists(json, 'tilesMode') ? undefined : EnabledFromJSON(json['tilesMode']),
        'categoryMode': !exists(json, 'categoryMode') ? undefined : EnabledFromJSON(json['categoryMode']),
        'promotedApiMode': !exists(json, 'promotedApiMode') ? undefined : EnabledFromJSON(json['promotedApiMode']),
        'apiHeaderShowTags': !exists(json, 'apiHeaderShowTags') ? undefined : EnabledFromJSON(json['apiHeaderShowTags']),
        'apiHeaderShowCategories': !exists(json, 'apiHeaderShowCategories') ? undefined : EnabledFromJSON(json['apiHeaderShowCategories']),
    };
}

export function ConfigurationPortalApisToJSON(value?: ConfigurationPortalApis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tilesMode': EnabledToJSON(value.tilesMode),
        'categoryMode': EnabledToJSON(value.categoryMode),
        'promotedApiMode': EnabledToJSON(value.promotedApiMode),
        'apiHeaderShowTags': EnabledToJSON(value.apiHeaderShowTags),
        'apiHeaderShowCategories': EnabledToJSON(value.apiHeaderShowCategories),
    };
}

