// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Retweet extends APIResource {
  /**
   * Retweet a tweet
   */
  create(body: RetweetCreateParams, options?: RequestOptions): APIPromise<RetweetCreateResponse> {
    return this._client.post('/v1/twitter/retweet', { body, ...options });
  }

  /**
   * Undo a retweet
   */
  undo(body: RetweetUndoParams, options?: RequestOptions): APIPromise<RetweetUndoResponse> {
    return this._client.delete('/v1/twitter/retweet', { body, ...options });
  }
}

export interface RetweetCreateResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Action result data from Twitter API
   */
  data?: RetweetCreateResponse.Data;

  /**
   * Error details when success is false
   */
  error?: RetweetCreateResponse.Error;
}

export namespace RetweetCreateResponse {
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

export interface RetweetUndoResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Action result data from Twitter API
   */
  data?: RetweetUndoResponse.Data;

  /**
   * Error details when success is false
   */
  error?: RetweetUndoResponse.Error;
}

export namespace RetweetUndoResponse {
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

export interface RetweetCreateParams {
  /**
   * Twitter account ID
   */
  account_id: string;

  /**
   * Tweet ID to retweet
   */
  tweet_id: string;
}

export interface RetweetUndoParams {
  /**
   * Twitter account ID
   */
  account_id: string;

  /**
   * Tweet ID to retweet
   */
  tweet_id: string;
}

export declare namespace Retweet {
  export {
    type RetweetCreateResponse as RetweetCreateResponse,
    type RetweetUndoResponse as RetweetUndoResponse,
    type RetweetCreateParams as RetweetCreateParams,
    type RetweetUndoParams as RetweetUndoParams,
  };
}
