// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Health extends APIResource {
  /**
   * Check health of a single connected account
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<HealthRetrieveResponse> {
    return this._client.get(path`/v1/accounts/${id}/health`, options);
  }

  /**
   * Check health of all connected accounts
   */
  list(query: HealthListParams | null | undefined = {}, options?: RequestOptions): APIPromise<HealthListResponse> {
    return this._client.get('/v1/accounts/health', { query, ...options });
  }
}

export interface HealthRetrieveResponse {
  id: string;

  avatar_url: string | null;

  display_name: string | null;

  healthy: boolean;

  platform: string;

  scopes: Array<string>;

  token_expires_at: string | null;

  username: string | null;

  error?: HealthRetrieveResponse.Error;

  sync?: HealthRetrieveResponse.Sync | null;
}

export namespace HealthRetrieveResponse {
  export interface Error {
    code: string;

    message: string;
  }

  export interface Sync {
    consecutive_errors: number;

    enabled: boolean;

    last_error: string | null;

    last_error_at: string | null;

    last_sync_at: string | null;

    next_sync_at: string | null;

    rate_limit_reset_at: string | null;

    total_posts_synced: number;

    total_sync_runs: number;
  }
}

export interface HealthListResponse {
  data: Array<HealthListResponse.Data>;

  /**
   * Whether more items exist
   */
  has_more: boolean;

  /**
   * Cursor for next page
   */
  next_cursor: string | null;
}

export namespace HealthListResponse {
  export interface Data {
    id: string;

    avatar_url: string | null;

    display_name: string | null;

    healthy: boolean;

    platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin' | 'tiktok' | 'youtube' | 'pinterest' | 'reddit' | 'bluesky' | 'threads' | 'telegram' | 'snapchat' | 'googlebusiness' | 'whatsapp' | 'mastodon' | 'discord' | 'sms' | 'beehiiv' | 'convertkit' | 'mailchimp' | 'listmonk';

    scopes: Array<string>;

    token_expires_at: string | null;

    username: string | null;

    workspace: Data.Workspace | null;

    error?: Data.Error;

    sync?: Data.Sync | null;
  }

  export namespace Data {
    export interface Workspace {
      id: string;

      name: string;
    }

    export interface Error {
      code: string;

      message: string;
    }

    export interface Sync {
      consecutive_errors: number;

      enabled: boolean;

      last_error: string | null;

      last_error_at: string | null;

      last_sync_at: string | null;

      next_sync_at: string | null;

      rate_limit_reset_at: string | null;

      total_posts_synced: number;

      total_sync_runs: number;
    }
  }
}

export interface HealthListParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items per page
   */
  limit?: number;
}

export declare namespace Health {
  export {
    type HealthRetrieveResponse as HealthRetrieveResponse,
    type HealthListResponse as HealthListResponse,
    type HealthListParams as HealthListParams
  };
}
