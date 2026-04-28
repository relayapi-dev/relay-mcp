// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FacebookPagesAPI from './facebook-pages';
import {
  FacebookPageRetrieveResponse,
  FacebookPageSetDefaultParams,
  FacebookPageSetDefaultResponse,
  FacebookPages,
} from './facebook-pages';
import * as GmbLocationsAPI from './gmb-locations';
import {
  GmbLocationRetrieveResponse,
  GmbLocationSetDefaultParams,
  GmbLocationSetDefaultResponse,
  GmbLocations,
} from './gmb-locations';
import * as HealthAPI from './health';
import { Health, HealthListParams, HealthListResponse, HealthRetrieveResponse } from './health';
import * as LinkedinOrganizationsAPI from './linkedin-organizations';
import {
  LinkedinOrganizationRetrieveResponse,
  LinkedinOrganizationSwitchTypeParams,
  LinkedinOrganizationSwitchTypeResponse,
  LinkedinOrganizations,
} from './linkedin-organizations';
import * as PinterestBoardsAPI from './pinterest-boards';
import {
  PinterestBoardRetrieveResponse,
  PinterestBoardSetDefaultParams,
  PinterestBoardSetDefaultResponse,
  PinterestBoards,
} from './pinterest-boards';
import * as RedditFlairsAPI from './reddit-flairs';
import { RedditFlairRetrieveParams, RedditFlairRetrieveResponse, RedditFlairs } from './reddit-flairs';
import * as RedditSubredditsAPI from './reddit-subreddits';
import {
  RedditSubredditRetrieveResponse,
  RedditSubredditSetDefaultParams,
  RedditSubredditSetDefaultResponse,
  RedditSubreddits,
} from './reddit-subreddits';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  redditFlairs: RedditFlairsAPI.RedditFlairs = new RedditFlairsAPI.RedditFlairs(this._client);
  facebookPages: FacebookPagesAPI.FacebookPages = new FacebookPagesAPI.FacebookPages(this._client);
  linkedinOrganizations: LinkedinOrganizationsAPI.LinkedinOrganizations =
    new LinkedinOrganizationsAPI.LinkedinOrganizations(this._client);
  pinterestBoards: PinterestBoardsAPI.PinterestBoards = new PinterestBoardsAPI.PinterestBoards(this._client);
  redditSubreddits: RedditSubredditsAPI.RedditSubreddits = new RedditSubredditsAPI.RedditSubreddits(
    this._client,
  );
  gmbLocations: GmbLocationsAPI.GmbLocations = new GmbLocationsAPI.GmbLocations(this._client);

  /**
   * Get a connected account
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/v1/accounts/${id}`, options);
  }

  /**
   * Update account metadata
   */
  update(
    id: string,
    body: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUpdateResponse> {
    return this._client.patch(path`/v1/accounts/${id}`, { body, ...options });
  }

  /**
   * List connected accounts
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/v1/accounts', { query, ...options });
  }

  /**
   * Disconnect a social account
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/accounts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AccountRetrieveResponse {
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
  workspace: AccountRetrieveResponse.Workspace | null;
}

export namespace AccountRetrieveResponse {
  /**
   * Account workspace
   */
  export interface Workspace {
    id: string;

    name: string;
  }
}

export interface AccountUpdateResponse {
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
  workspace: AccountUpdateResponse.Workspace | null;
}

export namespace AccountUpdateResponse {
  /**
   * Account workspace
   */
  export interface Workspace {
    id: string;

    name: string;
  }
}

export interface AccountListResponse {
  data: Array<AccountListResponse.Data>;

  /**
   * Whether more items exist
   */
  has_more: boolean;

  /**
   * Cursor for next page
   */
  next_cursor: string | null;
}

export namespace AccountListResponse {
  export interface Data {
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
    workspace: Data.Workspace | null;
  }

  export namespace Data {
    /**
     * Account workspace
     */
    export interface Workspace {
      id: string;

      name: string;
    }
  }
}

export interface AccountUpdateParams {
  display_name?: string;

  metadata?: { [key: string]: unknown };

  /**
   * Workspace ID (null to unassign)
   */
  workspace_id?: string | null;
}

export interface AccountListParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Filter: start date (ISO 8601)
   */
  from?: string;

  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Comma-separated platform filter (e.g. instagram,facebook)
   */
  platforms?: string;

  /**
   * Search by name or username
   */
  search?: string;

  /**
   * Filter: end date (ISO 8601)
   */
  to?: string;

  /**
   * Only show ungrouped accounts
   */
  ungrouped?: boolean | null;

  /**
   * Filter by workspace ID
   */
  workspace_id?: string;
}

Accounts.Health = Health;
Accounts.RedditFlairs = RedditFlairs;
Accounts.FacebookPages = FacebookPages;
Accounts.LinkedinOrganizations = LinkedinOrganizations;
Accounts.PinterestBoards = PinterestBoards;
Accounts.RedditSubreddits = RedditSubreddits;
Accounts.GmbLocations = GmbLocations;

export declare namespace Accounts {
  export {
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountUpdateResponse as AccountUpdateResponse,
    type AccountListResponse as AccountListResponse,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
  };

  export {
    Health as Health,
    type HealthRetrieveResponse as HealthRetrieveResponse,
    type HealthListResponse as HealthListResponse,
    type HealthListParams as HealthListParams,
  };

  export {
    RedditFlairs as RedditFlairs,
    type RedditFlairRetrieveResponse as RedditFlairRetrieveResponse,
    type RedditFlairRetrieveParams as RedditFlairRetrieveParams,
  };

  export {
    FacebookPages as FacebookPages,
    type FacebookPageRetrieveResponse as FacebookPageRetrieveResponse,
    type FacebookPageSetDefaultResponse as FacebookPageSetDefaultResponse,
    type FacebookPageSetDefaultParams as FacebookPageSetDefaultParams,
  };

  export {
    LinkedinOrganizations as LinkedinOrganizations,
    type LinkedinOrganizationRetrieveResponse as LinkedinOrganizationRetrieveResponse,
    type LinkedinOrganizationSwitchTypeResponse as LinkedinOrganizationSwitchTypeResponse,
    type LinkedinOrganizationSwitchTypeParams as LinkedinOrganizationSwitchTypeParams,
  };

  export {
    PinterestBoards as PinterestBoards,
    type PinterestBoardRetrieveResponse as PinterestBoardRetrieveResponse,
    type PinterestBoardSetDefaultResponse as PinterestBoardSetDefaultResponse,
    type PinterestBoardSetDefaultParams as PinterestBoardSetDefaultParams,
  };

  export {
    RedditSubreddits as RedditSubreddits,
    type RedditSubredditRetrieveResponse as RedditSubredditRetrieveResponse,
    type RedditSubredditSetDefaultResponse as RedditSubredditSetDefaultResponse,
    type RedditSubredditSetDefaultParams as RedditSubredditSetDefaultParams,
  };

  export {
    GmbLocations as GmbLocations,
    type GmbLocationRetrieveResponse as GmbLocationRetrieveResponse,
    type GmbLocationSetDefaultResponse as GmbLocationSetDefaultResponse,
    type GmbLocationSetDefaultParams as GmbLocationSetDefaultParams,
  };
}
