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
import type { ApiRequestItem } from './ApiRequestItem';
import {
    ApiRequestItemFromJSON,
    ApiRequestItemFromJSONTyped,
    ApiRequestItemToJSON,
} from './ApiRequestItem';

/**
 * 
 * @export
 * @interface SearchLogResponseApiRequestItem
 */
export interface SearchLogResponseApiRequestItem {
    /**
     * 
     * @type {Array<ApiRequestItem>}
     * @memberof SearchLogResponseApiRequestItem
     */
    logs?: Array<ApiRequestItem>;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof SearchLogResponseApiRequestItem
     */
    metadata?: { [key: string]: { [key: string]: string; }; };
    /**
     * 
     * @type {number}
     * @memberof SearchLogResponseApiRequestItem
     */
    total?: number;
}

/**
 * Check if a given object implements the SearchLogResponseApiRequestItem interface.
 */
export function instanceOfSearchLogResponseApiRequestItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchLogResponseApiRequestItemFromJSON(json: any): SearchLogResponseApiRequestItem {
    return SearchLogResponseApiRequestItemFromJSONTyped(json, false);
}

export function SearchLogResponseApiRequestItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchLogResponseApiRequestItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<any>).map(ApiRequestItemFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function SearchLogResponseApiRequestItemToJSON(value?: SearchLogResponseApiRequestItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(ApiRequestItemToJSON)),
        'metadata': value.metadata,
        'total': value.total,
    };
}
