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
import type { ApiEntrypointEntity } from './ApiEntrypointEntity';
import {
    ApiEntrypointEntityFromJSON,
    ApiEntrypointEntityFromJSONTyped,
    ApiEntrypointEntityToJSON,
} from './ApiEntrypointEntity';
import type { ApiLifecycleState } from './ApiLifecycleState';
import {
    ApiLifecycleStateFromJSON,
    ApiLifecycleStateFromJSONTyped,
    ApiLifecycleStateToJSON,
} from './ApiLifecycleState';
import type { DefinitionContext } from './DefinitionContext';
import {
    DefinitionContextFromJSON,
    DefinitionContextFromJSONTyped,
    DefinitionContextToJSON,
} from './DefinitionContext';
import type { Flow } from './Flow';
import {
    FlowFromJSON,
    FlowFromJSONTyped,
    FlowToJSON,
} from './Flow';
import type { HttpRequest } from './HttpRequest';
import {
    HttpRequestFromJSON,
    HttpRequestFromJSONTyped,
    HttpRequestToJSON,
} from './HttpRequest';
import type { HttpResponse } from './HttpResponse';
import {
    HttpResponseFromJSON,
    HttpResponseFromJSONTyped,
    HttpResponseToJSON,
} from './HttpResponse';
import type { PlanEntity } from './PlanEntity';
import {
    PlanEntityFromJSON,
    PlanEntityFromJSONTyped,
    PlanEntityToJSON,
} from './PlanEntity';
import type { PrimaryOwnerEntity } from './PrimaryOwnerEntity';
import {
    PrimaryOwnerEntityFromJSON,
    PrimaryOwnerEntityFromJSONTyped,
    PrimaryOwnerEntityToJSON,
} from './PrimaryOwnerEntity';
import type { Property } from './Property';
import {
    PropertyFromJSON,
    PropertyFromJSONTyped,
    PropertyToJSON,
} from './Property';
import type { Proxy } from './Proxy';
import {
    ProxyFromJSON,
    ProxyFromJSONTyped,
    ProxyToJSON,
} from './Proxy';
import type { Resource } from './Resource';
import {
    ResourceFromJSON,
    ResourceFromJSONTyped,
    ResourceToJSON,
} from './Resource';
import type { ResponseTemplate } from './ResponseTemplate';
import {
    ResponseTemplateFromJSON,
    ResponseTemplateFromJSONTyped,
    ResponseTemplateToJSON,
} from './ResponseTemplate';
import type { Rule } from './Rule';
import {
    RuleFromJSON,
    RuleFromJSONTyped,
    RuleToJSON,
} from './Rule';
import type { Services } from './Services';
import {
    ServicesFromJSON,
    ServicesFromJSONTyped,
    ServicesToJSON,
} from './Services';
import type { Visibility } from './Visibility';
import {
    VisibilityFromJSON,
    VisibilityFromJSONTyped,
    VisibilityToJSON,
} from './Visibility';
import type { WorkflowState } from './WorkflowState';
import {
    WorkflowStateFromJSON,
    WorkflowStateFromJSONTyped,
    WorkflowStateToJSON,
} from './WorkflowState';

/**
 * 
 * @export
 * @interface DebugApiEntity
 */
export interface DebugApiEntity {
    /**
     * the API background encoded in base64
     * @type {string}
     * @memberof DebugApiEntity
     */
    background?: string;
    /**
     * the API background url.
     * @type {string}
     * @memberof DebugApiEntity
     */
    background_url?: string;
    /**
     * the list of categories associated with this API
     * @type {Array<string>}
     * @memberof DebugApiEntity
     */
    categories?: Array<string>;
    /**
     * API's context path.
     * @type {string}
     * @memberof DebugApiEntity
     */
    context_path?: string;
    /**
     * The date (as a timestamp) when the API was created.
     * @type {Date}
     * @memberof DebugApiEntity
     */
    created_at?: Date;
    /**
     * API's crossId. Identifies API across environments.
     * @type {string}
     * @memberof DebugApiEntity
     */
    crossId?: string;
    /**
     * 
     * @type {DefinitionContext}
     * @memberof DebugApiEntity
     */
    definition_context?: DefinitionContext;
    /**
     * The last date (as timestamp) when the API was deployed.
     * @type {Date}
     * @memberof DebugApiEntity
     */
    deployed_at?: Date;
    /**
     * API's description. A short description of your API.
     * @type {string}
     * @memberof DebugApiEntity
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DebugApiEntity
     */
    disable_membership_notifications?: boolean;
    /**
     * 
     * @type {Array<ApiEntrypointEntity>}
     * @memberof DebugApiEntity
     */
    entrypoints?: Array<ApiEntrypointEntity>;
    /**
     * Api's execution mode. Define if the execution mode should use v3 or jupiter mode.
     * @type {string}
     * @memberof DebugApiEntity
     */
    execution_mode?: DebugApiEntityExecutionModeEnum;
    /**
     * API's flow mode.
     * @type {string}
     * @memberof DebugApiEntity
     */
    flow_mode?: DebugApiEntityFlowModeEnum;
    /**
     * a list of flows (the policies configuration)
     * @type {Array<Flow>}
     * @memberof DebugApiEntity
     */
    flows?: Array<Flow>;
    /**
     * API's gravitee definition version
     * @type {string}
     * @memberof DebugApiEntity
     */
    gravitee?: string;
    /**
     * API's groups. Used to add team in your API.
     * @type {Array<string>}
     * @memberof DebugApiEntity
     */
    groups?: Array<string>;
    /**
     * API's uuid.
     * @type {string}
     * @memberof DebugApiEntity
     */
    id?: string;
    /**
     * the free list of labels associated with this API
     * @type {Array<string>}
     * @memberof DebugApiEntity
     */
    labels?: Array<string>;
    /**
     * 
     * @type {ApiLifecycleState}
     * @memberof DebugApiEntity
     */
    lifecycle_state?: ApiLifecycleState;
    /**
     * API's name. Duplicate names can exists.
     * @type {string}
     * @memberof DebugApiEntity
     */
    name?: string;
    /**
     * 
     * @type {PrimaryOwnerEntity}
     * @memberof DebugApiEntity
     */
    owner?: PrimaryOwnerEntity;
    /**
     * A list of paths used to aggregate data in analytics
     * @type {Array<string>}
     * @memberof DebugApiEntity
     */
    path_mappings?: Array<string>;
    /**
     * a map where you can associate a path to a configuration (the policies configuration)
     * @type {{ [key: string]: Array<Rule>; }}
     * @memberof DebugApiEntity
     */
    paths?: { [key: string]: Array<Rule>; };
    /**
     * the API logo encoded in base64
     * @type {string}
     * @memberof DebugApiEntity
     */
    picture?: string;
    /**
     * the API logo url.
     * @type {string}
     * @memberof DebugApiEntity
     */
    picture_url?: string;
    /**
     * a list of plans with flows (the policies configuration)
     * @type {Array<PlanEntity>}
     * @memberof DebugApiEntity
     */
    plans?: Array<PlanEntity>;
    /**
     * A dictionary (could be dynamic) of properties available in the API context.
     * @type {Array<Property>}
     * @memberof DebugApiEntity
     */
    properties?: Array<Property>;
    /**
     * 
     * @type {Proxy}
     * @memberof DebugApiEntity
     */
    proxy: Proxy;
    /**
     * 
     * @type {HttpRequest}
     * @memberof DebugApiEntity
     */
    request?: HttpRequest;
    /**
     * The list of API resources used by policies like cache resources or oauth2
     * @type {Array<Resource>}
     * @memberof DebugApiEntity
     */
    resources?: Array<Resource>;
    /**
     * 
     * @type {HttpResponse}
     * @memberof DebugApiEntity
     */
    response?: HttpResponse;
    /**
     * A map that allows you to configure the output of a request based on the event throws by the gateway. Example : Quota exceeded, api-ky is missing, ...
     * @type {{ [key: string]: { [key: string]: ResponseTemplate; }; }}
     * @memberof DebugApiEntity
     */
    response_templates?: { [key: string]: { [key: string]: ResponseTemplate; }; };
    /**
     * 
     * @type {Services}
     * @memberof DebugApiEntity
     */
    services?: Services;
    /**
     * The status of the API regarding the gateway.
     * @type {string}
     * @memberof DebugApiEntity
     */
    state?: DebugApiEntityStateEnum;
    /**
     * the list of sharding tags associated with this API.
     * @type {Array<string>}
     * @memberof DebugApiEntity
     */
    tags?: Array<string>;
    /**
     * The last date (as a timestamp) when the API was updated.
     * @type {Date}
     * @memberof DebugApiEntity
     */
    updated_at?: Date;
    /**
     * Api's version. It's a simple string only used in the portal.
     * @type {string}
     * @memberof DebugApiEntity
     */
    version?: string;
    /**
     * 
     * @type {Visibility}
     * @memberof DebugApiEntity
     */
    visibility?: Visibility;
    /**
     * 
     * @type {WorkflowState}
     * @memberof DebugApiEntity
     */
    workflow_state?: WorkflowState;
}


/**
 * @export
 */
export const DebugApiEntityExecutionModeEnum = {
    V3: 'V3',
    JUPITER: 'JUPITER'
} as const;
export type DebugApiEntityExecutionModeEnum = typeof DebugApiEntityExecutionModeEnum[keyof typeof DebugApiEntityExecutionModeEnum];

/**
 * @export
 */
export const DebugApiEntityFlowModeEnum = {
    DEFAULT: 'DEFAULT',
    BEST_MATCH: 'BEST_MATCH'
} as const;
export type DebugApiEntityFlowModeEnum = typeof DebugApiEntityFlowModeEnum[keyof typeof DebugApiEntityFlowModeEnum];

/**
 * @export
 */
export const DebugApiEntityStateEnum = {
    INITIALIZED: 'INITIALIZED',
    STOPPED: 'STOPPED',
    STOPPING: 'STOPPING',
    STARTED: 'STARTED',
    CLOSED: 'CLOSED'
} as const;
export type DebugApiEntityStateEnum = typeof DebugApiEntityStateEnum[keyof typeof DebugApiEntityStateEnum];


/**
 * Check if a given object implements the DebugApiEntity interface.
 */
export function instanceOfDebugApiEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "proxy" in value;

    return isInstance;
}

export function DebugApiEntityFromJSON(json: any): DebugApiEntity {
    return DebugApiEntityFromJSONTyped(json, false);
}

export function DebugApiEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebugApiEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'background': !exists(json, 'background') ? undefined : json['background'],
        'background_url': !exists(json, 'background_url') ? undefined : json['background_url'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'context_path': !exists(json, 'context_path') ? undefined : json['context_path'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'crossId': !exists(json, 'crossId') ? undefined : json['crossId'],
        'definition_context': !exists(json, 'definition_context') ? undefined : DefinitionContextFromJSON(json['definition_context']),
        'deployed_at': !exists(json, 'deployed_at') ? undefined : (new Date(json['deployed_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'disable_membership_notifications': !exists(json, 'disable_membership_notifications') ? undefined : json['disable_membership_notifications'],
        'entrypoints': !exists(json, 'entrypoints') ? undefined : ((json['entrypoints'] as Array<any>).map(ApiEntrypointEntityFromJSON)),
        'execution_mode': !exists(json, 'execution_mode') ? undefined : json['execution_mode'],
        'flow_mode': !exists(json, 'flow_mode') ? undefined : json['flow_mode'],
        'flows': !exists(json, 'flows') ? undefined : ((json['flows'] as Array<any>).map(FlowFromJSON)),
        'gravitee': !exists(json, 'gravitee') ? undefined : json['gravitee'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'lifecycle_state': !exists(json, 'lifecycle_state') ? undefined : ApiLifecycleStateFromJSON(json['lifecycle_state']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : PrimaryOwnerEntityFromJSON(json['owner']),
        'path_mappings': !exists(json, 'path_mappings') ? undefined : json['path_mappings'],
        'paths': !exists(json, 'paths') ? undefined : json['paths'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'picture_url': !exists(json, 'picture_url') ? undefined : json['picture_url'],
        'plans': !exists(json, 'plans') ? undefined : ((json['plans'] as Array<any>).map(PlanEntityFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(PropertyFromJSON)),
        'proxy': ProxyFromJSON(json['proxy']),
        'request': !exists(json, 'request') ? undefined : HttpRequestFromJSON(json['request']),
        'resources': !exists(json, 'resources') ? undefined : ((json['resources'] as Array<any>).map(ResourceFromJSON)),
        'response': !exists(json, 'response') ? undefined : HttpResponseFromJSON(json['response']),
        'response_templates': !exists(json, 'response_templates') ? undefined : json['response_templates'],
        'services': !exists(json, 'services') ? undefined : ServicesFromJSON(json['services']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'visibility': !exists(json, 'visibility') ? undefined : VisibilityFromJSON(json['visibility']),
        'workflow_state': !exists(json, 'workflow_state') ? undefined : WorkflowStateFromJSON(json['workflow_state']),
    };
}

export function DebugApiEntityToJSON(value?: DebugApiEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'background': value.background,
        'background_url': value.background_url,
        'categories': value.categories,
        'context_path': value.context_path,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'crossId': value.crossId,
        'definition_context': DefinitionContextToJSON(value.definition_context),
        'deployed_at': value.deployed_at === undefined ? undefined : (value.deployed_at.toISOString()),
        'description': value.description,
        'disable_membership_notifications': value.disable_membership_notifications,
        'entrypoints': value.entrypoints === undefined ? undefined : ((value.entrypoints as Array<any>).map(ApiEntrypointEntityToJSON)),
        'execution_mode': value.execution_mode,
        'flow_mode': value.flow_mode,
        'flows': value.flows === undefined ? undefined : ((value.flows as Array<any>).map(FlowToJSON)),
        'gravitee': value.gravitee,
        'groups': value.groups,
        'id': value.id,
        'labels': value.labels,
        'lifecycle_state': ApiLifecycleStateToJSON(value.lifecycle_state),
        'name': value.name,
        'owner': PrimaryOwnerEntityToJSON(value.owner),
        'path_mappings': value.path_mappings,
        'paths': value.paths,
        'picture': value.picture,
        'picture_url': value.picture_url,
        'plans': value.plans === undefined ? undefined : ((value.plans as Array<any>).map(PlanEntityToJSON)),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(PropertyToJSON)),
        'proxy': ProxyToJSON(value.proxy),
        'request': HttpRequestToJSON(value.request),
        'resources': value.resources === undefined ? undefined : ((value.resources as Array<any>).map(ResourceToJSON)),
        'response': HttpResponseToJSON(value.response),
        'response_templates': value.response_templates,
        'services': ServicesToJSON(value.services),
        'state': value.state,
        'tags': value.tags,
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'version': value.version,
        'visibility': VisibilityToJSON(value.visibility),
        'workflow_state': WorkflowStateToJSON(value.workflow_state),
    };
}
