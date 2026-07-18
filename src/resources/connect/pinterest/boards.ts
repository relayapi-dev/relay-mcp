// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Boards extends APIResource {
  /**
   * List Pinterest boards after OAuth
   */
  list(options?: RequestOptions): APIPromise<BoardListResponse> {
    return this._client.get('/v1/connect/pinterest/boards', options);
  }

  /**
   * Select Pinterest board
   */
  select(body: BoardSelectParams, options?: RequestOptions): APIPromise<BoardSelectResponse> {
    return this._client.post('/v1/connect/pinterest/boards', { body, ...options });
  }
}

export interface BoardListResponse {
  boards: Array<BoardListResponse.Board>;
}

export namespace BoardListResponse {
  export interface Board {
    /**
     * Pinterest board ID
     */
    id: string;

    /**
     * Board name
     */
    name: string;

    /**
     * Board description
     */
    description?: string | null;

    /**
     * Number of pins on the board
     */
    pin_count?: number;
  }
}

export interface BoardSelectResponse {
  account: BoardSelectResponse.Account;
}

export namespace BoardSelectResponse {
  export interface Account {
    /**
     * Account ID
     */
    id: string;

    avatar_url: string | null;

    connected_at: string;

    display_name: string | null;

    metadata: { [key: string]: unknown } | null;

    platform:
      | 'twitter'
      | 'instagram'
      | 'facebook'
      | 'linkedin'
      | 'tiktok'
      | 'youtube'
      | 'pinterest'
      | 'reddit'
      | 'bluesky'
      | 'threads'
      | 'telegram'
      | 'snapchat'
      | 'googlebusiness'
      | 'whatsapp'
      | 'mastodon'
      | 'discord'
      | 'sms'
      | 'beehiiv'
      | 'convertkit'
      | 'mailchimp'
      | 'listmonk';

    platform_account_id: string;

    updated_at: string;

    username: string | null;

    /**
     * Account workspace
     */
    workspace: Account.Workspace | null;
  }

  export namespace Account {
    /**
     * Account workspace
     */
    export interface Workspace {
      id: string;

      name: string;
    }
  }
}

export interface BoardSelectParams {
  /**
   * Selected Pinterest board ID
   */
  board_id: string;

  /**
   * Token from pending data or OAuth flow
   */
  connect_token: string;
}

export declare namespace Boards {
  export {
    type BoardListResponse as BoardListResponse,
    type BoardSelectResponse as BoardSelectResponse,
    type BoardSelectParams as BoardSelectParams,
  };
}
