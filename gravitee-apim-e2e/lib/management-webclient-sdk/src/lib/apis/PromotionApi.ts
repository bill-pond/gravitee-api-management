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
  PromotionEntity,
  PromotionTargetEntity,
} from '../models';
import {
    PromotionEntityFromJSON,
    PromotionEntityToJSON,
    PromotionTargetEntityFromJSON,
    PromotionTargetEntityToJSON,
} from '../models';

export interface GetPromotionTargetsRequest {
    envId: string;
    orgId: string;
}

export interface ProcessPromotionRequest {
    promotion: string;
    orgId: string;
    body?: boolean;
}

/**
 * 
 */
export class PromotionApi extends runtime.BaseAPI {

    /**
     * List available targets (environments) for a promotion
     */
    async getPromotionTargetsRaw(requestParameters: GetPromotionTargetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PromotionTargetEntity>>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getPromotionTargets.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getPromotionTargets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/promotion-targets`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PromotionTargetEntityFromJSON));
    }

    /**
     * List available targets (environments) for a promotion
     */
    async getPromotionTargets(requestParameters: GetPromotionTargetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PromotionTargetEntity>> {
        const response = await this.getPromotionTargetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Process an API promotion by accepting or rejecting it
     */
    async processPromotionRaw(requestParameters: ProcessPromotionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotionEntity>> {
        if (requestParameters.promotion === null || requestParameters.promotion === undefined) {
            throw new runtime.RequiredError('promotion','Required parameter requestParameters.promotion was null or undefined when calling processPromotion.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling processPromotion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/promotions/{promotion}/_process`.replace(`{${"promotion"}}`, encodeURIComponent(String(requestParameters.promotion))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PromotionEntityFromJSON(jsonValue));
    }

    /**
     * Process an API promotion by accepting or rejecting it
     */
    async processPromotion(requestParameters: ProcessPromotionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotionEntity> {
        const response = await this.processPromotionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}