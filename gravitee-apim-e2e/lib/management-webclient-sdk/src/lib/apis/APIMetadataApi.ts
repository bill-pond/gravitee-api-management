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


import * as runtime from '../runtime';
import type {
  ApiMetadataEntity,
  NewApiMetadataEntity,
  UpdateApiMetadataEntity,
} from '../models';
import {
    ApiMetadataEntityFromJSON,
    ApiMetadataEntityToJSON,
    NewApiMetadataEntityFromJSON,
    NewApiMetadataEntityToJSON,
    UpdateApiMetadataEntityFromJSON,
    UpdateApiMetadataEntityToJSON,
} from '../models';

export interface CreateApiMetadataRequest {
    api: string;
    envId: string;
    orgId: string;
    newApiMetadataEntity: NewApiMetadataEntity;
}

export interface CreateApiMetadata1Request {
    api: string;
    envId: string;
    orgId: string;
    newApiMetadataEntity: NewApiMetadataEntity;
}

export interface DeleteApiMetadataRequest {
    metadata: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface DeleteApiMetadata1Request {
    metadata: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface GetApiMetadataRequest {
    metadata: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface GetApiMetadata1Request {
    metadata: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface GetApiMetadatasRequest {
    api: string;
    envId: string;
    orgId: string;
}

export interface GetApiMetadatas1Request {
    api: string;
    envId: string;
    orgId: string;
}

export interface UpdateApiMetadataRequest {
    metadata: string;
    api: string;
    envId: string;
    orgId: string;
    updateApiMetadataEntity: UpdateApiMetadataEntity;
}

export interface UpdateApiMetadata1Request {
    metadata: string;
    api: string;
    envId: string;
    orgId: string;
    updateApiMetadataEntity: UpdateApiMetadataEntity;
}

/**
 * 
 */
export class APIMetadataApi extends runtime.BaseAPI {

    /**
     * User must have the API_METADATA[CREATE] permission to use this service
     * Create an API metadata
     */
    async createApiMetadataRaw(requestParameters: CreateApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMetadataEntity>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling createApiMetadata.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createApiMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createApiMetadata.');
        }

        if (requestParameters.newApiMetadataEntity === null || requestParameters.newApiMetadataEntity === undefined) {
            throw new runtime.RequiredError('newApiMetadataEntity','Required parameter requestParameters.newApiMetadataEntity was null or undefined when calling createApiMetadata.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/metadata`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewApiMetadataEntityToJSON(requestParameters.newApiMetadataEntity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_METADATA[CREATE] permission to use this service
     * Create an API metadata
     */
    async createApiMetadata(requestParameters: CreateApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMetadataEntity> {
        const response = await this.createApiMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[CREATE] permission to use this service
     * Create an API metadata
     */
    async createApiMetadata1Raw(requestParameters: CreateApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMetadataEntity>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling createApiMetadata1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createApiMetadata1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createApiMetadata1.');
        }

        if (requestParameters.newApiMetadataEntity === null || requestParameters.newApiMetadataEntity === undefined) {
            throw new runtime.RequiredError('newApiMetadataEntity','Required parameter requestParameters.newApiMetadataEntity was null or undefined when calling createApiMetadata1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/v4/apis/{api}/metadata`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewApiMetadataEntityToJSON(requestParameters.newApiMetadataEntity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_METADATA[CREATE] permission to use this service
     * Create an API metadata
     */
    async createApiMetadata1(requestParameters: CreateApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMetadataEntity> {
        const response = await this.createApiMetadata1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[DELETE] permission to use this service
     * Delete a metadata
     */
    async deleteApiMetadataRaw(requestParameters: DeleteApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling deleteApiMetadata.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling deleteApiMetadata.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling deleteApiMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling deleteApiMetadata.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the API_METADATA[DELETE] permission to use this service
     * Delete a metadata
     */
    async deleteApiMetadata(requestParameters: DeleteApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApiMetadataRaw(requestParameters, initOverrides);
    }

    /**
     * User must have the API_METADATA[DELETE] permission to use this service
     * Delete a metadata
     */
    async deleteApiMetadata1Raw(requestParameters: DeleteApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling deleteApiMetadata1.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling deleteApiMetadata1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling deleteApiMetadata1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling deleteApiMetadata1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/v4/apis/{api}/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the API_METADATA[DELETE] permission to use this service
     * Delete a metadata
     */
    async deleteApiMetadata1(requestParameters: DeleteApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApiMetadata1Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * A metadata for the given API and metadata id
     */
    async getApiMetadataRaw(requestParameters: GetApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMetadataEntity>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling getApiMetadata.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling getApiMetadata.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiMetadata.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * A metadata for the given API and metadata id
     */
    async getApiMetadata(requestParameters: GetApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMetadataEntity> {
        const response = await this.getApiMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * A metadata for the given API and metadata id
     */
    async getApiMetadata1Raw(requestParameters: GetApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMetadataEntity>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling getApiMetadata1.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling getApiMetadata1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiMetadata1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiMetadata1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/v4/apis/{api}/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * A metadata for the given API and metadata id
     */
    async getApiMetadata1(requestParameters: GetApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMetadataEntity> {
        const response = await this.getApiMetadata1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * List metadata for the given API
     */
    async getApiMetadatasRaw(requestParameters: GetApiMetadatasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApiMetadataEntity>>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling getApiMetadatas.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiMetadatas.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiMetadatas.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/metadata`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiMetadataEntityFromJSON));
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * List metadata for the given API
     */
    async getApiMetadatas(requestParameters: GetApiMetadatasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApiMetadataEntity>> {
        const response = await this.getApiMetadatasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * List metadata for the given API
     */
    async getApiMetadatas1Raw(requestParameters: GetApiMetadatas1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApiMetadataEntity>>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling getApiMetadatas1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiMetadatas1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiMetadatas1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/v4/apis/{api}/metadata`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiMetadataEntityFromJSON));
    }

    /**
     * User must have the API_METADATA[READ] permission to use this service
     * List metadata for the given API
     */
    async getApiMetadatas1(requestParameters: GetApiMetadatas1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApiMetadataEntity>> {
        const response = await this.getApiMetadatas1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[UPDATE] permission to use this service
     * Update an API metadata
     */
    async updateApiMetadataRaw(requestParameters: UpdateApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMetadataEntity>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling updateApiMetadata.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling updateApiMetadata.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling updateApiMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateApiMetadata.');
        }

        if (requestParameters.updateApiMetadataEntity === null || requestParameters.updateApiMetadataEntity === undefined) {
            throw new runtime.RequiredError('updateApiMetadataEntity','Required parameter requestParameters.updateApiMetadataEntity was null or undefined when calling updateApiMetadata.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateApiMetadataEntityToJSON(requestParameters.updateApiMetadataEntity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_METADATA[UPDATE] permission to use this service
     * Update an API metadata
     */
    async updateApiMetadata(requestParameters: UpdateApiMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMetadataEntity> {
        const response = await this.updateApiMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the API_METADATA[UPDATE] permission to use this service
     * Update an API metadata
     */
    async updateApiMetadata1Raw(requestParameters: UpdateApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMetadataEntity>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling updateApiMetadata1.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling updateApiMetadata1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling updateApiMetadata1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateApiMetadata1.');
        }

        if (requestParameters.updateApiMetadataEntity === null || requestParameters.updateApiMetadataEntity === undefined) {
            throw new runtime.RequiredError('updateApiMetadataEntity','Required parameter requestParameters.updateApiMetadataEntity was null or undefined when calling updateApiMetadata1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/v4/apis/{api}/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateApiMetadataEntityToJSON(requestParameters.updateApiMetadataEntity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_METADATA[UPDATE] permission to use this service
     * Update an API metadata
     */
    async updateApiMetadata1(requestParameters: UpdateApiMetadata1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMetadataEntity> {
        const response = await this.updateApiMetadata1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}