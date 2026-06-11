// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Like extends APIResource {
  /**
   * Like a comment
   */
  create(
    commentID: string,
    params: LikeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LikeCreateResponse> {
    const { account_id } = params ?? {};
    return this._client.post(path`/v1/inbox/comments/${commentID}/like`, {
      query: { account_id },
      ...options,
    });
  }

  /**
   * Unlike a comment
   */
  delete(
    commentID: string,
    params: LikeDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LikeDeleteResponse> {
    const { account_id } = params ?? {};
    return this._client.delete(path`/v1/inbox/comments/${commentID}/like`, {
      query: { account_id },
      ...options,
    });
  }
}

export interface LikeCreateResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Comment ID
   */
  comment_id?: string;
}

export interface LikeDeleteResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Comment ID
   */
  comment_id?: string;
}

export interface LikeCreateParams {
  /**
   * Target a specific account instead of fanning out to all org accounts
   */
  account_id?: string;
}

export interface LikeDeleteParams {
  /**
   * Target a specific account instead of fanning out to all org accounts
   */
  account_id?: string;
}

export declare namespace Like {
  export {
    type LikeCreateResponse as LikeCreateResponse,
    type LikeDeleteResponse as LikeDeleteResponse,
    type LikeCreateParams as LikeCreateParams,
    type LikeDeleteParams as LikeDeleteParams,
  };
}
