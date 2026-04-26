// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Follow extends APIResource {
  /**
   * Follow a user
   */
  create(body: FollowCreateParams, options?: RequestOptions): APIPromise<FollowCreateResponse> {
    return this._client.post('/v1/twitter/follow', { body, ...options });
  }

  /**
   * Unfollow a user
   */
  unfollow(body: FollowUnfollowParams, options?: RequestOptions): APIPromise<FollowUnfollowResponse> {
    return this._client.delete('/v1/twitter/follow', { body, ...options });
  }
}

export interface FollowCreateResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Action result data from Twitter API
   */
  data?: FollowCreateResponse.Data;

  /**
   * Error details when success is false
   */
  error?: FollowCreateResponse.Error;
}

export namespace FollowCreateResponse {
  /**
   * Action result data from Twitter API
   */
  export interface Data {
    bookmarked?: boolean;

    following?: boolean;

    pending_follow?: boolean;

    retweeted?: boolean;
  }

  /**
   * Error details when success is false
   */
  export interface Error {
    /**
     * Error code (e.g. ACCOUNT_NOT_FOUND, TOKEN_MISSING, TWITTER_API_ERROR)
     */
    code: string;

    /**
     * Human-readable error message
     */
    message: string;

    /**
     * Twitter API error code if available
     */
    twitter_error_code?: number;
  }
}

export interface FollowUnfollowResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Action result data from Twitter API
   */
  data?: FollowUnfollowResponse.Data;

  /**
   * Error details when success is false
   */
  error?: FollowUnfollowResponse.Error;
}

export namespace FollowUnfollowResponse {
  /**
   * Action result data from Twitter API
   */
  export interface Data {
    bookmarked?: boolean;

    following?: boolean;

    pending_follow?: boolean;

    retweeted?: boolean;
  }

  /**
   * Error details when success is false
   */
  export interface Error {
    /**
     * Error code (e.g. ACCOUNT_NOT_FOUND, TOKEN_MISSING, TWITTER_API_ERROR)
     */
    code: string;

    /**
     * Human-readable error message
     */
    message: string;

    /**
     * Twitter API error code if available
     */
    twitter_error_code?: number;
  }
}

export interface FollowCreateParams {
  /**
   * Twitter account ID
   */
  account_id: string;

  /**
   * User ID to follow
   */
  target_user_id: string;
}

export interface FollowUnfollowParams {
  /**
   * Twitter account ID
   */
  account_id: string;

  /**
   * User ID to follow
   */
  target_user_id: string;
}

export declare namespace Follow {
  export {
    type FollowCreateResponse as FollowCreateResponse,
    type FollowUnfollowResponse as FollowUnfollowResponse,
    type FollowCreateParams as FollowCreateParams,
    type FollowUnfollowParams as FollowUnfollowParams
  };
}
