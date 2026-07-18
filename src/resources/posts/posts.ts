// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, LogRetrieveResponse, Logs } from './logs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Posts extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a post. Use scheduled_at: "now" to publish immediately, "draft" to save
   * as draft, or an ISO timestamp to schedule.
   *
   * @example
   * ```ts
   * const post = await client.posts.create({
   *   scheduled_at: 'now',
   *   targets: ['string'],
   * });
   * ```
   */
  create(body: PostCreateParams, options?: RequestOptions): APIPromise<PostCreateResponse> {
    return this._client.post('/v1/posts', { body, ...options });
  }

  /**
   * Get a post
   *
   * @example
   * ```ts
   * const post = await client.posts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PostRetrieveResponse> {
    return this._client.get(path`/v1/posts/${id}`, options);
  }

  /**
   * Update a draft or scheduled post.
   *
   * @example
   * ```ts
   * const post = await client.posts.update('id');
   * ```
   */
  update(
    id: string,
    body: PostUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostUpdateResponse> {
    return this._client.patch(path`/v1/posts/${id}`, { body, ...options });
  }

  /**
   * List posts
   *
   * @example
   * ```ts
   * const posts = await client.posts.list();
   * ```
   */
  list(
    query: PostListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostListResponse> {
    return this._client.get('/v1/posts', { query, ...options });
  }

  /**
   * Delete a post.
   *
   * @example
   * ```ts
   * await client.posts.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/posts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create multiple posts in a single request. Each item follows the same schema as
   * single post creation.
   *
   * @example
   * ```ts
   * const response = await client.posts.bulkCreate({
   *   posts: [{ scheduled_at: 'now', targets: ['string'] }],
   * });
   * ```
   */
  bulkCreate(body: PostBulkCreateParams, options?: RequestOptions): APIPromise<PostBulkCreateResponse> {
    return this._client.post('/v1/posts/bulk', { body, ...options });
  }

  /**
   * Retry publishing for failed targets on a post.
   *
   * @example
   * ```ts
   * const response = await client.posts.retry('id');
   * ```
   */
  retry(id: string, options?: RequestOptions): APIPromise<PostRetryResponse> {
    return this._client.post(path`/v1/posts/${id}/retry`, options);
  }

  /**
   * Attempt to delete the post from each platform and set the post status to
   * cancelled.
   *
   * @example
   * ```ts
   * const response = await client.posts.unpublish('id');
   * ```
   */
  unpublish(
    id: string,
    body: PostUnpublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostUnpublishResponse> {
    return this._client.post(path`/v1/posts/${id}/unpublish`, { body, ...options });
  }
}

export interface PostCreateResponse {
  /**
   * Post ID
   */
  id: string;

  content: string | null;

  created_at: string;

  media: Array<PostCreateResponse.Media> | null;

  /**
   * When the post was published
   */
  published_at: string | null;

  /**
   * Source post ID if this is a recycled copy
   */
  recycled_from_id: string | null;

  /**
   * Recycling configuration, if any
   */
  recycling: PostCreateResponse.Recycling | null;

  scheduled_at: string | null;

  status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

  /**
   * Per-target results
   */
  targets: { [key: string]: PostCreateResponse.Targets };

  updated_at: string;

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  metrics?: PostCreateResponse.Metrics;

  /**
   * Per-target customizations
   */
  target_options?: { [key: string]: { [key: string]: unknown } } | null;

  /**
   * Thread group ID (non-null if part of a thread)
   */
  thread_group_id?: string | null;

  /**
   * Position within thread (0 = root)
   */
  thread_position?: number | null;

  /**
   * IANA timezone
   */
  timezone?: string | null;
}

export namespace PostCreateResponse {
  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration, if any
   */
  export interface Recycling {
    id: string;

    content_variation_index: number;

    content_variations: Array<string>;

    created_at: string;

    enabled: boolean;

    expire_count: number | null;

    expire_date: string | null;

    gap: number;

    gap_freq: 'day' | 'week' | 'month';

    last_recycled_at: string | null;

    next_recycle_at: string | null;

    recycle_count: number;

    start_date: string;

    updated_at: string;
  }

  export interface Targets {
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

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    accounts?: Array<Targets.Account>;

    error?: Targets.Error;
  }

  export namespace Targets {
    export interface Account {
      id: string;

      /**
       * Account avatar URL
       */
      avatar_url: string | null;

      /**
       * Account display name
       */
      display_name: string | null;

      /**
       * Platform-native post ID
       */
      platform_post_id: string | null;

      /**
       * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
       */
      target_id: string | null;

      /**
       * Published post URL on the platform
       */
      url: string | null;

      username: string | null;
    }

    export interface Error {
      code: string;

      message: string;

      /**
       * Raw platform error (HTTP status + response body), sanitized and truncated
       */
      detail?: string;
    }
  }

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  export interface Metrics {
    clicks?: number;

    comments?: number;

    engagement_rate?: number;

    impressions?: number;

    likes?: number;

    reach?: number;

    saves?: number;

    shares?: number;

    views?: number;
  }
}

export interface PostRetrieveResponse {
  /**
   * Post ID
   */
  id: string;

  content: string | null;

  created_at: string;

  media: Array<PostRetrieveResponse.Media> | null;

  /**
   * When the post was published
   */
  published_at: string | null;

  /**
   * Source post ID if this is a recycled copy
   */
  recycled_from_id: string | null;

  /**
   * Recycling configuration, if any
   */
  recycling: PostRetrieveResponse.Recycling | null;

  scheduled_at: string | null;

  status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

  /**
   * Per-target results
   */
  targets: { [key: string]: PostRetrieveResponse.Targets };

  updated_at: string;

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  metrics?: PostRetrieveResponse.Metrics;

  /**
   * Per-target customizations
   */
  target_options?: { [key: string]: { [key: string]: unknown } } | null;

  /**
   * Thread group ID (non-null if part of a thread)
   */
  thread_group_id?: string | null;

  /**
   * Position within thread (0 = root)
   */
  thread_position?: number | null;

  /**
   * IANA timezone
   */
  timezone?: string | null;
}

export namespace PostRetrieveResponse {
  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration, if any
   */
  export interface Recycling {
    id: string;

    content_variation_index: number;

    content_variations: Array<string>;

    created_at: string;

    enabled: boolean;

    expire_count: number | null;

    expire_date: string | null;

    gap: number;

    gap_freq: 'day' | 'week' | 'month';

    last_recycled_at: string | null;

    next_recycle_at: string | null;

    recycle_count: number;

    start_date: string;

    updated_at: string;
  }

  export interface Targets {
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

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    accounts?: Array<Targets.Account>;

    error?: Targets.Error;
  }

  export namespace Targets {
    export interface Account {
      id: string;

      /**
       * Account avatar URL
       */
      avatar_url: string | null;

      /**
       * Account display name
       */
      display_name: string | null;

      /**
       * Platform-native post ID
       */
      platform_post_id: string | null;

      /**
       * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
       */
      target_id: string | null;

      /**
       * Published post URL on the platform
       */
      url: string | null;

      username: string | null;
    }

    export interface Error {
      code: string;

      message: string;

      /**
       * Raw platform error (HTTP status + response body), sanitized and truncated
       */
      detail?: string;
    }
  }

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  export interface Metrics {
    clicks?: number;

    comments?: number;

    engagement_rate?: number;

    impressions?: number;

    likes?: number;

    reach?: number;

    saves?: number;

    shares?: number;

    views?: number;
  }
}

export interface PostUpdateResponse {
  /**
   * Post ID
   */
  id: string;

  content: string | null;

  created_at: string;

  media: Array<PostUpdateResponse.Media> | null;

  /**
   * When the post was published
   */
  published_at: string | null;

  /**
   * Source post ID if this is a recycled copy
   */
  recycled_from_id: string | null;

  /**
   * Recycling configuration, if any
   */
  recycling: PostUpdateResponse.Recycling | null;

  scheduled_at: string | null;

  status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

  /**
   * Per-target results
   */
  targets: { [key: string]: PostUpdateResponse.Targets };

  updated_at: string;

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  metrics?: PostUpdateResponse.Metrics;

  /**
   * Per-target customizations
   */
  target_options?: { [key: string]: { [key: string]: unknown } } | null;

  /**
   * Thread group ID (non-null if part of a thread)
   */
  thread_group_id?: string | null;

  /**
   * Position within thread (0 = root)
   */
  thread_position?: number | null;

  /**
   * IANA timezone
   */
  timezone?: string | null;
}

export namespace PostUpdateResponse {
  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration, if any
   */
  export interface Recycling {
    id: string;

    content_variation_index: number;

    content_variations: Array<string>;

    created_at: string;

    enabled: boolean;

    expire_count: number | null;

    expire_date: string | null;

    gap: number;

    gap_freq: 'day' | 'week' | 'month';

    last_recycled_at: string | null;

    next_recycle_at: string | null;

    recycle_count: number;

    start_date: string;

    updated_at: string;
  }

  export interface Targets {
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

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    accounts?: Array<Targets.Account>;

    error?: Targets.Error;
  }

  export namespace Targets {
    export interface Account {
      id: string;

      /**
       * Account avatar URL
       */
      avatar_url: string | null;

      /**
       * Account display name
       */
      display_name: string | null;

      /**
       * Platform-native post ID
       */
      platform_post_id: string | null;

      /**
       * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
       */
      target_id: string | null;

      /**
       * Published post URL on the platform
       */
      url: string | null;

      username: string | null;
    }

    export interface Error {
      code: string;

      message: string;

      /**
       * Raw platform error (HTTP status + response body), sanitized and truncated
       */
      detail?: string;
    }
  }

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  export interface Metrics {
    clicks?: number;

    comments?: number;

    engagement_rate?: number;

    impressions?: number;

    likes?: number;

    reach?: number;

    saves?: number;

    shares?: number;

    views?: number;
  }
}

export interface PostListResponse {
  data: Array<PostListResponse.Data>;

  /**
   * Whether more items exist
   */
  has_more: boolean;

  /**
   * Cursor for next page
   */
  next_cursor: string | null;
}

export namespace PostListResponse {
  export interface Data {
    /**
     * Post ID
     */
    id: string;

    content: string | null;

    created_at: string;

    media: Array<Data.Media> | null;

    /**
     * When the post was published
     */
    published_at: string | null;

    /**
     * Source post ID if this is a recycled copy
     */
    recycled_from_id: string | null;

    /**
     * Recycling configuration, if any
     */
    recycling: Data.Recycling | null;

    scheduled_at: string | null;

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    /**
     * Per-target results
     */
    targets: { [key: string]: Data.Targets };

    updated_at: string;

    /**
     * Engagement metrics (reactions, comments, views, etc.)
     */
    metrics?: Data.Metrics;

    /**
     * Per-target customizations
     */
    target_options?: { [key: string]: { [key: string]: unknown } } | null;

    /**
     * Thread group ID (non-null if part of a thread)
     */
    thread_group_id?: string | null;

    /**
     * Position within thread (0 = root)
     */
    thread_position?: number | null;

    /**
     * IANA timezone
     */
    timezone?: string | null;
  }

  export namespace Data {
    export interface Media {
      /**
       * Public URL of the media file
       */
      url: string;

      /**
       * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
       * original expires. Ignored on write.
       */
      thumbnail?: string;

      /**
       * Media type. Inferred from URL extension if omitted.
       */
      type?: 'image' | 'video' | 'gif' | 'document';
    }

    /**
     * Recycling configuration, if any
     */
    export interface Recycling {
      id: string;

      content_variation_index: number;

      content_variations: Array<string>;

      created_at: string;

      enabled: boolean;

      expire_count: number | null;

      expire_date: string | null;

      gap: number;

      gap_freq: 'day' | 'week' | 'month';

      last_recycled_at: string | null;

      next_recycle_at: string | null;

      recycle_count: number;

      start_date: string;

      updated_at: string;
    }

    export interface Targets {
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

      status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

      accounts?: Array<Targets.Account>;

      error?: Targets.Error;
    }

    export namespace Targets {
      export interface Account {
        id: string;

        /**
         * Account avatar URL
         */
        avatar_url: string | null;

        /**
         * Account display name
         */
        display_name: string | null;

        /**
         * Platform-native post ID
         */
        platform_post_id: string | null;

        /**
         * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
         */
        target_id: string | null;

        /**
         * Published post URL on the platform
         */
        url: string | null;

        username: string | null;
      }

      export interface Error {
        code: string;

        message: string;

        /**
         * Raw platform error (HTTP status + response body), sanitized and truncated
         */
        detail?: string;
      }
    }

    /**
     * Engagement metrics (reactions, comments, views, etc.)
     */
    export interface Metrics {
      clicks?: number;

      comments?: number;

      engagement_rate?: number;

      impressions?: number;

      likes?: number;

      reach?: number;

      saves?: number;

      shares?: number;

      views?: number;
    }
  }
}

export interface PostBulkCreateResponse {
  data: Array<PostBulkCreateResponse.Data>;

  summary: PostBulkCreateResponse.Summary;
}

export namespace PostBulkCreateResponse {
  export interface Data {
    /**
     * Post ID
     */
    id: string;

    content: string | null;

    created_at: string;

    media: Array<Data.Media> | null;

    /**
     * When the post was published
     */
    published_at: string | null;

    /**
     * Source post ID if this is a recycled copy
     */
    recycled_from_id: string | null;

    /**
     * Recycling configuration, if any
     */
    recycling: Data.Recycling | null;

    scheduled_at: string | null;

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    /**
     * Per-target results
     */
    targets: { [key: string]: Data.Targets };

    updated_at: string;

    /**
     * Engagement metrics (reactions, comments, views, etc.)
     */
    metrics?: Data.Metrics;

    /**
     * Per-target customizations
     */
    target_options?: { [key: string]: { [key: string]: unknown } } | null;

    /**
     * Thread group ID (non-null if part of a thread)
     */
    thread_group_id?: string | null;

    /**
     * Position within thread (0 = root)
     */
    thread_position?: number | null;

    /**
     * IANA timezone
     */
    timezone?: string | null;
  }

  export namespace Data {
    export interface Media {
      /**
       * Public URL of the media file
       */
      url: string;

      /**
       * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
       * original expires. Ignored on write.
       */
      thumbnail?: string;

      /**
       * Media type. Inferred from URL extension if omitted.
       */
      type?: 'image' | 'video' | 'gif' | 'document';
    }

    /**
     * Recycling configuration, if any
     */
    export interface Recycling {
      id: string;

      content_variation_index: number;

      content_variations: Array<string>;

      created_at: string;

      enabled: boolean;

      expire_count: number | null;

      expire_date: string | null;

      gap: number;

      gap_freq: 'day' | 'week' | 'month';

      last_recycled_at: string | null;

      next_recycle_at: string | null;

      recycle_count: number;

      start_date: string;

      updated_at: string;
    }

    export interface Targets {
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

      status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

      accounts?: Array<Targets.Account>;

      error?: Targets.Error;
    }

    export namespace Targets {
      export interface Account {
        id: string;

        /**
         * Account avatar URL
         */
        avatar_url: string | null;

        /**
         * Account display name
         */
        display_name: string | null;

        /**
         * Platform-native post ID
         */
        platform_post_id: string | null;

        /**
         * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
         */
        target_id: string | null;

        /**
         * Published post URL on the platform
         */
        url: string | null;

        username: string | null;
      }

      export interface Error {
        code: string;

        message: string;

        /**
         * Raw platform error (HTTP status + response body), sanitized and truncated
         */
        detail?: string;
      }
    }

    /**
     * Engagement metrics (reactions, comments, views, etc.)
     */
    export interface Metrics {
      clicks?: number;

      comments?: number;

      engagement_rate?: number;

      impressions?: number;

      likes?: number;

      reach?: number;

      saves?: number;

      shares?: number;

      views?: number;
    }
  }

  export interface Summary {
    failed: number;

    succeeded: number;

    total: number;
  }
}

export interface PostRetryResponse {
  /**
   * Post ID
   */
  id: string;

  content: string | null;

  created_at: string;

  media: Array<PostRetryResponse.Media> | null;

  /**
   * When the post was published
   */
  published_at: string | null;

  /**
   * Source post ID if this is a recycled copy
   */
  recycled_from_id: string | null;

  /**
   * Recycling configuration, if any
   */
  recycling: PostRetryResponse.Recycling | null;

  scheduled_at: string | null;

  status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

  /**
   * Per-target results
   */
  targets: { [key: string]: PostRetryResponse.Targets };

  updated_at: string;

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  metrics?: PostRetryResponse.Metrics;

  /**
   * Per-target customizations
   */
  target_options?: { [key: string]: { [key: string]: unknown } } | null;

  /**
   * Thread group ID (non-null if part of a thread)
   */
  thread_group_id?: string | null;

  /**
   * Position within thread (0 = root)
   */
  thread_position?: number | null;

  /**
   * IANA timezone
   */
  timezone?: string | null;
}

export namespace PostRetryResponse {
  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration, if any
   */
  export interface Recycling {
    id: string;

    content_variation_index: number;

    content_variations: Array<string>;

    created_at: string;

    enabled: boolean;

    expire_count: number | null;

    expire_date: string | null;

    gap: number;

    gap_freq: 'day' | 'week' | 'month';

    last_recycled_at: string | null;

    next_recycle_at: string | null;

    recycle_count: number;

    start_date: string;

    updated_at: string;
  }

  export interface Targets {
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

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    accounts?: Array<Targets.Account>;

    error?: Targets.Error;
  }

  export namespace Targets {
    export interface Account {
      id: string;

      /**
       * Account avatar URL
       */
      avatar_url: string | null;

      /**
       * Account display name
       */
      display_name: string | null;

      /**
       * Platform-native post ID
       */
      platform_post_id: string | null;

      /**
       * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
       */
      target_id: string | null;

      /**
       * Published post URL on the platform
       */
      url: string | null;

      username: string | null;
    }

    export interface Error {
      code: string;

      message: string;

      /**
       * Raw platform error (HTTP status + response body), sanitized and truncated
       */
      detail?: string;
    }
  }

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  export interface Metrics {
    clicks?: number;

    comments?: number;

    engagement_rate?: number;

    impressions?: number;

    likes?: number;

    reach?: number;

    saves?: number;

    shares?: number;

    views?: number;
  }
}

export interface PostUnpublishResponse {
  /**
   * Post ID
   */
  id: string;

  content: string | null;

  created_at: string;

  media: Array<PostUnpublishResponse.Media> | null;

  /**
   * When the post was published
   */
  published_at: string | null;

  /**
   * Source post ID if this is a recycled copy
   */
  recycled_from_id: string | null;

  /**
   * Recycling configuration, if any
   */
  recycling: PostUnpublishResponse.Recycling | null;

  scheduled_at: string | null;

  status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

  /**
   * Per-target results
   */
  targets: { [key: string]: PostUnpublishResponse.Targets };

  updated_at: string;

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  metrics?: PostUnpublishResponse.Metrics;

  /**
   * Per-target customizations
   */
  target_options?: { [key: string]: { [key: string]: unknown } } | null;

  /**
   * Thread group ID (non-null if part of a thread)
   */
  thread_group_id?: string | null;

  /**
   * Position within thread (0 = root)
   */
  thread_position?: number | null;

  /**
   * IANA timezone
   */
  timezone?: string | null;
}

export namespace PostUnpublishResponse {
  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration, if any
   */
  export interface Recycling {
    id: string;

    content_variation_index: number;

    content_variations: Array<string>;

    created_at: string;

    enabled: boolean;

    expire_count: number | null;

    expire_date: string | null;

    gap: number;

    gap_freq: 'day' | 'week' | 'month';

    last_recycled_at: string | null;

    next_recycle_at: string | null;

    recycle_count: number;

    start_date: string;

    updated_at: string;
  }

  export interface Targets {
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

    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial';

    accounts?: Array<Targets.Account>;

    error?: Targets.Error;
  }

  export namespace Targets {
    export interface Account {
      id: string;

      /**
       * Account avatar URL
       */
      avatar_url: string | null;

      /**
       * Account display name
       */
      display_name: string | null;

      /**
       * Platform-native post ID
       */
      platform_post_id: string | null;

      /**
       * Post target ID (pt\_) — pass to /v1/ads/boost as post_target_id
       */
      target_id: string | null;

      /**
       * Published post URL on the platform
       */
      url: string | null;

      username: string | null;
    }

    export interface Error {
      code: string;

      message: string;

      /**
       * Raw platform error (HTTP status + response body), sanitized and truncated
       */
      detail?: string;
    }
  }

  /**
   * Engagement metrics (reactions, comments, views, etc.)
   */
  export interface Metrics {
    clicks?: number;

    comments?: number;

    engagement_rate?: number;

    impressions?: number;

    likes?: number;

    reach?: number;

    saves?: number;

    shares?: number;

    views?: number;
  }
}

export interface PostCreateParams {
  /**
   * Publish intent. Use "now" to publish immediately, "draft" to save as draft,
   * "auto" to auto-schedule to the best available slot, or an ISO 8601 timestamp to
   * schedule (max 30 days ahead).
   */
  scheduled_at: string;

  /**
   * Account IDs, platform names, or workspace IDs to publish to
   */
  targets: Array<string>;

  /**
   * Post text. Optional if target_options provide per-target content.
   */
  content?: string;

  /**
   * Cross-post actions to execute after publishing (e.g., repost from another
   * account, comment from another account)
   */
  cross_post_actions?: Array<PostCreateParams.CrossPostAction>;

  /**
   * Create post from an idea. Pre-fills content from the idea. Explicit 'content'
   * field takes precedence.
   */
  idea_id?: string;

  /**
   * Media attachments
   */
  media?: Array<PostCreateParams.Media>;

  /**
   * Recycling configuration for evergreen content (Pro plan only)
   */
  recycling?: PostCreateParams.Recycling;

  /**
   * Shorten URLs in post content. Only relevant when short link mode is 'ask'.
   * Ignored when mode is 'always' or 'never'. (Pro plan only)
   */
  shorten_urls?: boolean;

  /**
   * When true, the default signature is not auto-appended even if one is configured.
   */
  skip_signature?: boolean;

  /**
   * Per-target customizations keyed by target value (account ID or platform name).
   * Supports platform-specific features such as Twitter polls (poll.options,
   * poll.duration_minutes), threads, reply_to, and reply_settings.
   */
  target_options?: { [key: string]: { [key: string]: unknown } };

  /**
   * Content template ID. When provided, the template content is used as the base for
   * the post. Explicit 'content' field takes precedence.
   */
  template_id?: string;

  /**
   * Variables to interpolate in the template (e.g., { "promo_code": "SUMMER25" }).
   * Built-in variables: {{date}}, {{account_name}}.
   */
  template_variables?: { [key: string]: string };

  /**
   * IANA timezone for scheduling
   */
  timezone?: string;

  /**
   * Workspace ID to scope this post to
   */
  workspace_id?: string;
}

export namespace PostCreateParams {
  export interface CrossPostAction {
    /**
     * Type of cross-post action
     */
    action_type: 'repost' | 'comment' | 'quote';

    /**
     * Account to perform the action from
     */
    target_account_id: string;

    /**
     * Text content for comment/quote actions (required for comment and quote)
     */
    content?: string;

    /**
     * Delay in minutes after publishing
     */
    delay_minutes?: number;
  }

  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration for evergreen content (Pro plan only)
   */
  export interface Recycling {
    /**
     * Interval value
     */
    gap: number;

    /**
     * Interval unit
     */
    gap_freq: 'day' | 'week' | 'month';

    /**
     * When to start recycling
     */
    start_date: string;

    /**
     * Alternate content texts (round-robin)
     */
    content_variations?: Array<string>;

    /**
     * Whether recycling is active
     */
    enabled?: boolean;

    /**
     * Stop after this many recycles
     */
    expire_count?: number;

    /**
     * Stop after this date
     */
    expire_date?: string;
  }
}

export interface PostUpdateParams {
  /**
   * Post text
   */
  content?: string;

  /**
   * Updated media
   */
  media?: Array<PostUpdateParams.Media>;

  /**
   * Internal notes for this post
   */
  notes?: string | null;

  /**
   * Recycling configuration (Pro plan only)
   */
  recycling?: PostUpdateParams.Recycling;

  /**
   * Publish intent. Use "now" to publish immediately, "draft" to save as draft,
   * "auto" to auto-schedule to the best available slot, or an ISO 8601 timestamp to
   * schedule (max 30 days ahead).
   */
  scheduled_at?: string;

  target_options?: { [key: string]: { [key: string]: unknown } };

  /**
   * Updated targets
   */
  targets?: Array<string>;

  timezone?: string;
}

export namespace PostUpdateParams {
  export interface Media {
    /**
     * Public URL of the media file
     */
    url: string;

    /**
     * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
     * original expires. Ignored on write.
     */
    thumbnail?: string;

    /**
     * Media type. Inferred from URL extension if omitted.
     */
    type?: 'image' | 'video' | 'gif' | 'document';
  }

  /**
   * Recycling configuration (Pro plan only)
   */
  export interface Recycling {
    /**
     * Interval value
     */
    gap: number;

    /**
     * Interval unit
     */
    gap_freq: 'day' | 'week' | 'month';

    /**
     * When to start recycling
     */
    start_date: string;

    /**
     * Alternate content texts (round-robin)
     */
    content_variations?: Array<string>;

    /**
     * Whether recycling is active
     */
    enabled?: boolean;

    /**
     * Stop after this many recycles
     */
    expire_count?: number;

    /**
     * Stop after this date
     */
    expire_date?: string;
  }
}

export interface PostListParams {
  /**
   * Filter by specific account ID
   */
  account_id?: string;

  /**
   * Filter by any of several account IDs (comma-separated). Takes precedence over
   * account_id.
   */
  account_ids?: string;

  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Filter: start date (ISO 8601)
   */
  from?: string;

  /**
   * Comma-separated list of fields to include in the response (e.g. 'targets,media')
   */
  include?: string;

  /**
   * When true, also return external posts merged by published_at (works with
   * status=published or no status filter)
   */
  include_external?: 'true' | 'false';

  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Filter by post status
   */
  status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed';

  /**
   * Filter: end date (ISO 8601)
   */
  to?: string;

  /**
   * Filter by workspace ID
   */
  workspace_id?: string;
}

export interface PostBulkCreateParams {
  /**
   * Array of posts to create (max 50)
   */
  posts: Array<PostBulkCreateParams.Post>;
}

export namespace PostBulkCreateParams {
  export interface Post {
    /**
     * Publish intent. Use "now" to publish immediately, "draft" to save as draft,
     * "auto" to auto-schedule to the best available slot, or an ISO 8601 timestamp to
     * schedule (max 30 days ahead).
     */
    scheduled_at: string;

    /**
     * Account IDs, platform names, or workspace IDs to publish to
     */
    targets: Array<string>;

    /**
     * Post text. Optional if target_options provide per-target content.
     */
    content?: string;

    /**
     * Cross-post actions to execute after publishing (e.g., repost from another
     * account, comment from another account)
     */
    cross_post_actions?: Array<Post.CrossPostAction>;

    /**
     * Create post from an idea. Pre-fills content from the idea. Explicit 'content'
     * field takes precedence.
     */
    idea_id?: string;

    /**
     * Media attachments
     */
    media?: Array<Post.Media>;

    /**
     * Recycling configuration for evergreen content (Pro plan only)
     */
    recycling?: Post.Recycling;

    /**
     * Shorten URLs in post content. Only relevant when short link mode is 'ask'.
     * Ignored when mode is 'always' or 'never'. (Pro plan only)
     */
    shorten_urls?: boolean;

    /**
     * When true, the default signature is not auto-appended even if one is configured.
     */
    skip_signature?: boolean;

    /**
     * Per-target customizations keyed by target value (account ID or platform name).
     * Supports platform-specific features such as Twitter polls (poll.options,
     * poll.duration_minutes), threads, reply_to, and reply_settings.
     */
    target_options?: { [key: string]: { [key: string]: unknown } };

    /**
     * Content template ID. When provided, the template content is used as the base for
     * the post. Explicit 'content' field takes precedence.
     */
    template_id?: string;

    /**
     * Variables to interpolate in the template (e.g., { "promo_code": "SUMMER25" }).
     * Built-in variables: {{date}}, {{account_name}}.
     */
    template_variables?: { [key: string]: string };

    /**
     * IANA timezone for scheduling
     */
    timezone?: string;

    /**
     * Workspace ID to scope this post to
     */
    workspace_id?: string;
  }

  export namespace Post {
    export interface CrossPostAction {
      /**
       * Type of cross-post action
       */
      action_type: 'repost' | 'comment' | 'quote';

      /**
       * Account to perform the action from
       */
      target_account_id: string;

      /**
       * Text content for comment/quote actions (required for comment and quote)
       */
      content?: string;

      /**
       * Delay in minutes after publishing
       */
      delay_minutes?: number;
    }

    export interface Media {
      /**
       * Public URL of the media file
       */
      url: string;

      /**
       * Read-only. Stable, hyper-optimized preview URL that persists after the full-res
       * original expires. Ignored on write.
       */
      thumbnail?: string;

      /**
       * Media type. Inferred from URL extension if omitted.
       */
      type?: 'image' | 'video' | 'gif' | 'document';
    }

    /**
     * Recycling configuration for evergreen content (Pro plan only)
     */
    export interface Recycling {
      /**
       * Interval value
       */
      gap: number;

      /**
       * Interval unit
       */
      gap_freq: 'day' | 'week' | 'month';

      /**
       * When to start recycling
       */
      start_date: string;

      /**
       * Alternate content texts (round-robin)
       */
      content_variations?: Array<string>;

      /**
       * Whether recycling is active
       */
      enabled?: boolean;

      /**
       * Stop after this many recycles
       */
      expire_count?: number;

      /**
       * Stop after this date
       */
      expire_date?: string;
    }
  }
}

export interface PostUnpublishParams {
  /**
   * Platforms to unpublish from. If omitted, unpublishes from all.
   */
  platforms?: Array<string>;
}

Posts.Logs = Logs;

export declare namespace Posts {
  export {
    type PostCreateResponse as PostCreateResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostListResponse as PostListResponse,
    type PostBulkCreateResponse as PostBulkCreateResponse,
    type PostRetryResponse as PostRetryResponse,
    type PostUnpublishResponse as PostUnpublishResponse,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostBulkCreateParams as PostBulkCreateParams,
    type PostUnpublishParams as PostUnpublishParams,
  };

  export {
    Logs as Logs,
    type LogRetrieveResponse as LogRetrieveResponse,
    type LogListResponse as LogListResponse,
    type LogListParams as LogListParams,
  };
}
