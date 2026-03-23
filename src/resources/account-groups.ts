// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountGroups extends APIResource {
  /**
   * Create an account group
   */
  create(body: AccountGroupCreateParams, options?: RequestOptions): APIPromise<AccountGroupCreateResponse> {
    return this._client.post('/v1/account-groups', { body, ...options });
  }

  /**
   * Update an account group
   */
  update(
    id: string,
    body: AccountGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroupUpdateResponse> {
    return this._client.put(path`/v1/account-groups/${id}`, { body, ...options });
  }

  /**
   * List account groups
   */
  list(options?: RequestOptions): APIPromise<AccountGroupListResponse> {
    return this._client.get('/v1/account-groups', options);
  }

  /**
   * Delete an account group
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/account-groups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AccountGroupCreateResponse {
  /**
   * Group ID
   */
  id: string;

  /**
   * Account IDs in the group
   */
  account_ids: Array<string>;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Group name
   */
  name: string;

  /**
   * Last updated timestamp
   */
  updated_at: string;
}

export interface AccountGroupUpdateResponse {
  /**
   * Group ID
   */
  id: string;

  /**
   * Account IDs in the group
   */
  account_ids: Array<string>;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Group name
   */
  name: string;

  /**
   * Last updated timestamp
   */
  updated_at: string;
}

export interface AccountGroupListResponse {
  data: Array<AccountGroupListResponse.Data>;
}

export namespace AccountGroupListResponse {
  export interface Data {
    /**
     * Group ID
     */
    id: string;

    /**
     * Account IDs in the group
     */
    account_ids: Array<string>;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Group name
     */
    name: string;

    /**
     * Last updated timestamp
     */
    updated_at: string;
  }
}

export interface AccountGroupCreateParams {
  /**
   * Group name
   */
  name: string;

  /**
   * Account IDs to include in the group
   */
  account_ids?: Array<string>;
}

export interface AccountGroupUpdateParams {
  /**
   * Account IDs to include in the group
   */
  account_ids?: Array<string>;

  /**
   * Group name
   */
  name?: string;
}

export declare namespace AccountGroups {
  export {
    type AccountGroupCreateResponse as AccountGroupCreateResponse,
    type AccountGroupUpdateResponse as AccountGroupUpdateResponse,
    type AccountGroupListResponse as AccountGroupListResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
  };
}
