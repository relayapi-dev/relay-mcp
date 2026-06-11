// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Hide extends APIResource {
  /**
   * Hide a comment
   */
  create(
    commentID: string,
    params: HideCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HideCreateResponse> {
    const { account_id } = params ?? {};
    return this._client.post(path`/v1/inbox/comments/${commentID}/hide`, {
      query: { account_id },
      ...options,
    });
  }

  /**
   * Unhide a comment
   */
  delete(
    commentID: string,
    params: HideDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HideDeleteResponse> {
    const { account_id } = params ?? {};
    return this._client.delete(path`/v1/inbox/comments/${commentID}/hide`, {
      query: { account_id },
      ...options,
    });
  }
}

export interface HideCreateResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Comment ID
   */
  comment_id?: string;
}

export interface HideDeleteResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Comment ID
   */
  comment_id?: string;
}

export interface HideCreateParams {
  /**
   * Target a specific account instead of fanning out to all org accounts
   */
  account_id?: string;
}

export interface HideDeleteParams {
  /**
   * Target a specific account instead of fanning out to all org accounts
   */
  account_id?: string;
}

export declare namespace Hide {
  export {
    type HideCreateResponse as HideCreateResponse,
    type HideDeleteResponse as HideDeleteResponse,
    type HideCreateParams as HideCreateParams,
    type HideDeleteParams as HideDeleteParams,
  };
}
