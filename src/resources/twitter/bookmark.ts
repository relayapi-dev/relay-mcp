// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Bookmark extends APIResource {
  /**
   * Bookmark a tweet
   */
  create(body: BookmarkCreateParams, options?: RequestOptions): APIPromise<BookmarkCreateResponse> {
    return this._client.post('/v1/twitter/bookmark', { body, ...options });
  }

  /**
   * Remove a bookmark
   */
  remove(body: BookmarkRemoveParams, options?: RequestOptions): APIPromise<BookmarkRemoveResponse> {
    return this._client.delete('/v1/twitter/bookmark', { body, ...options });
  }
}

export interface BookmarkCreateResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Action result data from Twitter API
   */
  data?: BookmarkCreateResponse.Data;

  /**
   * Error details when success is false
   */
  error?: BookmarkCreateResponse.Error;
}

export namespace BookmarkCreateResponse {
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

export interface BookmarkRemoveResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Action result data from Twitter API
   */
  data?: BookmarkRemoveResponse.Data;

  /**
   * Error details when success is false
   */
  error?: BookmarkRemoveResponse.Error;
}

export namespace BookmarkRemoveResponse {
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

export interface BookmarkCreateParams {
  /**
   * Twitter account ID
   */
  account_id: string;

  /**
   * Tweet ID to bookmark
   */
  tweet_id: string;
}

export interface BookmarkRemoveParams {
  /**
   * Twitter account ID
   */
  account_id: string;

  /**
   * Tweet ID to bookmark
   */
  tweet_id: string;
}

export declare namespace Bookmark {
  export {
    type BookmarkCreateResponse as BookmarkCreateResponse,
    type BookmarkRemoveResponse as BookmarkRemoveResponse,
    type BookmarkCreateParams as BookmarkCreateParams,
    type BookmarkRemoveParams as BookmarkRemoveParams,
  };
}
