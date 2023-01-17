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
import type { AggregationConditionAllOf } from './AggregationConditionAllOf';
import {
    AggregationConditionAllOfFromJSON,
    AggregationConditionAllOfFromJSONTyped,
    AggregationConditionAllOfToJSON,
} from './AggregationConditionAllOf';
import type { Condition } from './Condition';
import {
    ConditionFromJSON,
    ConditionFromJSONTyped,
    ConditionToJSON,
} from './Condition';
import type { Projection } from './Projection';
import {
    ProjectionFromJSON,
    ProjectionFromJSONTyped,
    ProjectionToJSON,
} from './Projection';

/**
 * 
 * @export
 * @interface AggregationCondition
 */
export interface AggregationCondition extends Condition {
    /**
     * 
     * @type {string}
     * @memberof AggregationCondition
     */
    _function: AggregationConditionFunctionEnum;
    /**
     * 
     * @type {string}
     * @memberof AggregationCondition
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof AggregationCondition
     */
    operator: AggregationConditionOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof AggregationCondition
     */
    threshold: number;
    /**
     * 
     * @type {string}
     * @memberof AggregationCondition
     */
    timeUnit?: AggregationConditionTimeUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof AggregationCondition
     */
    duration: number;
}


/**
 * @export
 */
export const AggregationConditionFunctionEnum = {
    COUNT: 'COUNT',
    AVG: 'AVG',
    MIN: 'MIN',
    MAX: 'MAX',
    P50: 'P50',
    P90: 'P90',
    P95: 'P95',
    P99: 'P99'
} as const;
export type AggregationConditionFunctionEnum = typeof AggregationConditionFunctionEnum[keyof typeof AggregationConditionFunctionEnum];

/**
 * @export
 */
export const AggregationConditionOperatorEnum = {
    LT: 'LT',
    LTE: 'LTE',
    GTE: 'GTE',
    GT: 'GT'
} as const;
export type AggregationConditionOperatorEnum = typeof AggregationConditionOperatorEnum[keyof typeof AggregationConditionOperatorEnum];

/**
 * @export
 */
export const AggregationConditionTimeUnitEnum = {
    NANOSECONDS: 'NANOSECONDS',
    MICROSECONDS: 'MICROSECONDS',
    MILLISECONDS: 'MILLISECONDS',
    SECONDS: 'SECONDS',
    MINUTES: 'MINUTES',
    HOURS: 'HOURS',
    DAYS: 'DAYS'
} as const;
export type AggregationConditionTimeUnitEnum = typeof AggregationConditionTimeUnitEnum[keyof typeof AggregationConditionTimeUnitEnum];


/**
 * Check if a given object implements the AggregationCondition interface.
 */
export function instanceOfAggregationCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_function" in value;
    isInstance = isInstance && "operator" in value;
    isInstance = isInstance && "threshold" in value;
    isInstance = isInstance && "duration" in value;

    return isInstance;
}

export function AggregationConditionFromJSON(json: any): AggregationCondition {
    return AggregationConditionFromJSONTyped(json, false);
}

export function AggregationConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregationCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ConditionFromJSONTyped(json, ignoreDiscriminator),
        '_function': json['function'],
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operator': json['operator'],
        'threshold': json['threshold'],
        'timeUnit': !exists(json, 'timeUnit') ? undefined : json['timeUnit'],
        'duration': json['duration'],
    };
}

export function AggregationConditionToJSON(value?: AggregationCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...ConditionToJSON(value),
        'function': value._function,
        'property': value.property,
        'operator': value.operator,
        'threshold': value.threshold,
        'timeUnit': value.timeUnit,
        'duration': value.duration,
    };
}
