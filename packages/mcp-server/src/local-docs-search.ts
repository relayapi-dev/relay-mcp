// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/v1/posts',
    httpMethod: 'post',
    summary: 'Create a post',
    description:
      'Create a post. Use scheduled_at: "now" to publish immediately, "draft" to save as draft, or an ISO timestamp to schedule.',
    stainlessPath: '(resource) posts > (method) create',
    qualified: 'client.posts.create',
    params: [
      'scheduled_at: string;',
      'targets: string[];',
      'content?: string;',
      "media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[];",
      'target_options?: object;',
      'timezone?: string;',
    ],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## create\n\n`client.posts.create(scheduled_at: string, targets: string[], content?: string, media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[], target_options?: object, timezone?: string): { id: string; content: string; created_at: string; media: object[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**post** `/v1/posts`\n\nCreate a post. Use scheduled_at: \"now\" to publish immediately, \"draft\" to save as draft, or an ISO timestamp to schedule.\n\n### Parameters\n\n- `scheduled_at: string`\n  Publish intent. Use \"now\" to publish immediately, \"draft\" to save as draft, or an ISO 8601 timestamp to schedule.\n\n- `targets: string[]`\n  Account IDs, platform names, or group IDs to publish to\n\n- `content?: string`\n  Post text. Optional if target_options provide per-target content.\n\n- `media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  Media attachments\n\n- `target_options?: object`\n  Per-target customizations keyed by target value (account ID or platform name)\n\n- `timezone?: string`\n  IANA timezone for scheduling\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst post = await client.posts.create({ scheduled_at: 'now', targets: ['string'] });\n\nconsole.log(post);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/posts/{id}',
    httpMethod: 'get',
    summary: 'Get a post',
    description: 'Get a post',
    stainlessPath: '(resource) posts > (method) retrieve',
    qualified: 'client.posts.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.posts.retrieve(id: string): { id: string; content: string; created_at: string; media: object[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**get** `/v1/posts/{id}`\n\nGet a post\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst post = await client.posts.retrieve('id');\n\nconsole.log(post);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/posts/{id}',
    httpMethod: 'patch',
    summary: 'Update a post',
    description: 'Update a draft or scheduled post.',
    stainlessPath: '(resource) posts > (method) update',
    qualified: 'client.posts.update',
    params: [
      'id: string;',
      'content?: string;',
      "media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[];",
      'scheduled_at?: string;',
      'target_options?: object;',
      'targets?: string[];',
      'timezone?: string;',
    ],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## update\n\n`client.posts.update(id: string, content?: string, media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[], scheduled_at?: string, target_options?: object, targets?: string[], timezone?: string): { id: string; content: string; created_at: string; media: object[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**patch** `/v1/posts/{id}`\n\nUpdate a draft or scheduled post.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `content?: string`\n  Post text\n\n- `media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  Updated media\n\n- `scheduled_at?: string`\n  Publish intent. Use \"now\" to publish immediately, \"draft\" to save as draft, or an ISO 8601 timestamp to schedule.\n\n- `target_options?: object`\n\n- `targets?: string[]`\n  Updated targets\n\n- `timezone?: string`\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst post = await client.posts.update('id');\n\nconsole.log(post);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/posts',
    httpMethod: 'get',
    summary: 'List posts',
    description: 'List posts',
    stainlessPath: '(resource) posts > (method) list',
    qualified: 'client.posts.list',
    params: [
      'account_id?: string;',
      'cursor?: string;',
      'from?: string;',
      'group_id?: string;',
      'limit?: number;',
      "status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed';",
      'to?: string;',
    ],
    response:
      "{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; has_more: boolean; next_cursor: string; }",
    markdown:
      "## list\n\n`client.posts.list(account_id?: string, cursor?: string, from?: string, group_id?: string, limit?: number, status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed', to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/posts`\n\nList posts\n\n### Parameters\n\n- `account_id?: string`\n  Filter by specific account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `group_id?: string`\n  Filter by account group ID\n\n- `limit?: number`\n  Number of items per page\n\n- `status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed'`\n  Filter by post status\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst posts = await client.posts.list();\n\nconsole.log(posts);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/posts/{id}',
    httpMethod: 'delete',
    summary: 'Delete a post',
    description: 'Delete a post.',
    stainlessPath: '(resource) posts > (method) delete',
    qualified: 'client.posts.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.posts.delete(id: string): void`\n\n**delete** `/v1/posts/{id}`\n\nDelete a post.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.posts.delete('id')\n```",
  },
  {
    name: 'bulk_create',
    endpoint: '/v1/posts/bulk',
    httpMethod: 'post',
    summary: 'Bulk create posts',
    description:
      'Create multiple posts in a single request. Each item follows the same schema as single post creation.',
    stainlessPath: '(resource) posts > (method) bulk_create',
    qualified: 'client.posts.bulkCreate',
    params: [
      "posts: { scheduled_at: string; targets: string[]; content?: string; media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; target_options?: object; timezone?: string; }[];",
    ],
    response:
      "{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; summary: { failed: number; succeeded: number; total: number; }; }",
    markdown:
      "## bulk_create\n\n`client.posts.bulkCreate(posts: { scheduled_at: string; targets: string[]; content?: string; media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; target_options?: object; timezone?: string; }[]): { data: object[]; summary: object; }`\n\n**post** `/v1/posts/bulk`\n\nCreate multiple posts in a single request. Each item follows the same schema as single post creation.\n\n### Parameters\n\n- `posts: { scheduled_at: string; targets: string[]; content?: string; media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; target_options?: object; timezone?: string; }[]`\n  Array of posts to create (max 50)\n\n### Returns\n\n- `{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; summary: { failed: number; succeeded: number; total: number; }; }`\n\n  - `data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]`\n  - `summary: { failed: number; succeeded: number; total: number; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.posts.bulkCreate({ posts: [{ scheduled_at: 'now', targets: ['string'] }] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retry',
    endpoint: '/v1/posts/{id}/retry',
    httpMethod: 'post',
    summary: 'Retry failed targets',
    description: 'Retry publishing for failed targets on a post.',
    stainlessPath: '(resource) posts > (method) retry',
    qualified: 'client.posts.retry',
    params: ['id: string;'],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## retry\n\n`client.posts.retry(id: string): { id: string; content: string; created_at: string; media: object[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**post** `/v1/posts/{id}/retry`\n\nRetry publishing for failed targets on a post.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.posts.retry('id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'unpublish',
    endpoint: '/v1/posts/{id}/unpublish',
    httpMethod: 'post',
    summary: 'Unpublish a published post',
    description: 'Attempt to delete the post from each platform and set the post status to cancelled.',
    stainlessPath: '(resource) posts > (method) unpublish',
    qualified: 'client.posts.unpublish',
    params: ['id: string;', 'platforms?: string[];'],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## unpublish\n\n`client.posts.unpublish(id: string, platforms?: string[]): { id: string; content: string; created_at: string; media: object[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**post** `/v1/posts/{id}/unpublish`\n\nAttempt to delete the post from each platform and set the post status to cancelled.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `platforms?: string[]`\n  Platforms to unpublish from. If omitted, unpublishes from all.\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.posts.unpublish('id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/posts/{id}/logs',
    httpMethod: 'get',
    summary: 'Get publishing logs for a post',
    description: 'Get publishing logs for a post',
    stainlessPath: '(resource) posts.logs > (method) retrieve',
    qualified: 'client.posts.logs.retrieve',
    params: ['id: string;'],
    response:
      '{ data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## retrieve\n\n`client.posts.logs.retrieve(id: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/posts/{id}/logs`\n\nGet publishing logs for a post\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst log = await client.posts.logs.retrieve('id');\n\nconsole.log(log);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/posts/logs',
    httpMethod: 'get',
    summary: 'List all publishing logs',
    description: 'Query publishing logs across all posts with pagination.',
    stainlessPath: '(resource) posts.logs > (method) list',
    qualified: 'client.posts.logs.list',
    params: ['cursor?: string;', 'from?: string;', 'limit?: number;', 'to?: string;'],
    response:
      '{ data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.posts.logs.list(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/posts/logs`\n\nQuery publishing logs across all posts with pagination.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst logs = await client.posts.logs.list();\n\nconsole.log(logs);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}',
    httpMethod: 'get',
    summary: 'Get a connected account',
    description: 'Get a connected account',
    stainlessPath: '(resource) accounts > (method) retrieve',
    qualified: 'client.accounts.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## retrieve\n\n`client.accounts.retrieve(id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**get** `/v1/accounts/{id}`\n\nGet a connected account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst account = await client.accounts.retrieve('id');\n\nconsole.log(account);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/accounts/{id}',
    httpMethod: 'patch',
    summary: 'Update account metadata',
    description: 'Update account metadata',
    stainlessPath: '(resource) accounts > (method) update',
    qualified: 'client.accounts.update',
    params: ['id: string;', 'display_name?: string;', 'group_id?: string;', 'metadata?: object;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## update\n\n`client.accounts.update(id: string, display_name?: string, group_id?: string, metadata?: object): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**patch** `/v1/accounts/{id}`\n\nUpdate account metadata\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `display_name?: string`\n\n- `group_id?: string`\n  Group ID (null to ungroup)\n\n- `metadata?: object`\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst account = await client.accounts.update('id');\n\nconsole.log(account);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/accounts',
    httpMethod: 'get',
    summary: 'List connected accounts',
    description: 'List connected accounts',
    stainlessPath: '(resource) accounts > (method) list',
    qualified: 'client.accounts.list',
    params: [
      'cursor?: string;',
      'from?: string;',
      'group_id?: string;',
      'limit?: number;',
      'search?: string;',
      'to?: string;',
      'ungrouped?: boolean;',
    ],
    response:
      '{ data: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.accounts.list(cursor?: string, from?: string, group_id?: string, limit?: number, search?: string, to?: string, ungrouped?: boolean): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/accounts`\n\nList connected accounts\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `group_id?: string`\n  Filter by group ID\n\n- `limit?: number`\n  Number of items per page\n\n- `search?: string`\n  Search by name or username\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n- `ungrouped?: boolean`\n  Only show ungrouped accounts\n\n### Returns\n\n- `{ data: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst accounts = await client.accounts.list();\n\nconsole.log(accounts);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/accounts/{id}',
    httpMethod: 'delete',
    summary: 'Disconnect a social account',
    description: 'Disconnect a social account',
    stainlessPath: '(resource) accounts > (method) delete',
    qualified: 'client.accounts.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.accounts.delete(id: string): void`\n\n**delete** `/v1/accounts/{id}`\n\nDisconnect a social account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.accounts.delete('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/health',
    httpMethod: 'get',
    summary: 'Check health of a single connected account',
    description: 'Check health of a single connected account',
    stainlessPath: '(resource) accounts.health > (method) retrieve',
    qualified: 'client.accounts.health.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }',
    markdown:
      "## retrieve\n\n`client.accounts.health.retrieve(id: string): { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: object; }`\n\n**get** `/v1/accounts/{id}/health`\n\nCheck health of a single connected account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }`\n\n  - `id: string`\n  - `healthy: boolean`\n  - `platform: string`\n  - `token_expires_at: string`\n  - `username: string`\n  - `error?: { code: string; message: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst health = await client.accounts.health.retrieve('id');\n\nconsole.log(health);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/accounts/health',
    httpMethod: 'get',
    summary: 'Check health of all connected accounts',
    description: 'Check health of all connected accounts',
    stainlessPath: '(resource) accounts.health > (method) list',
    qualified: 'client.accounts.health.list',
    response:
      '{ data: { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }[]; }',
    markdown:
      "## list\n\n`client.accounts.health.list(): { data: object[]; }`\n\n**get** `/v1/accounts/health`\n\nCheck health of all connected accounts\n\n### Returns\n\n- `{ data: { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }[]; }`\n\n  - `data: { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst health = await client.accounts.health.list();\n\nconsole.log(health);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/reddit-flairs',
    httpMethod: 'get',
    summary: 'Fetch Reddit flairs for a subreddit',
    description: 'Fetch Reddit flairs for a subreddit',
    stainlessPath: '(resource) accounts.reddit_flairs > (method) retrieve',
    qualified: 'client.accounts.redditFlairs.retrieve',
    params: ['id: string;', 'subreddit: string;'],
    response: '{ data: { id: string; text: string; }[]; }',
    markdown:
      "## retrieve\n\n`client.accounts.redditFlairs.retrieve(id: string, subreddit: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/reddit-flairs`\n\nFetch Reddit flairs for a subreddit\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `subreddit: string`\n  Subreddit name\n\n### Returns\n\n- `{ data: { id: string; text: string; }[]; }`\n\n  - `data: { id: string; text: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst redditFlair = await client.accounts.redditFlairs.retrieve('id', { subreddit: 'subreddit' });\n\nconsole.log(redditFlair);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/facebook-pages',
    httpMethod: 'get',
    summary: 'Fetch Facebook pages for an account',
    description: 'Fetch Facebook pages for an account',
    stainlessPath: '(resource) accounts.facebook_pages > (method) retrieve',
    qualified: 'client.accounts.facebookPages.retrieve',
    params: ['id: string;'],
    response: '{ data: { id: string; name: string; access_token?: string; }[]; }',
    markdown:
      "## retrieve\n\n`client.accounts.facebookPages.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/facebook-pages`\n\nFetch Facebook pages for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; name: string; access_token?: string; }[]; }`\n\n  - `data: { id: string; name: string; access_token?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst facebookPage = await client.accounts.facebookPages.retrieve('id');\n\nconsole.log(facebookPage);\n```",
  },
  {
    name: 'set_default',
    endpoint: '/v1/accounts/{id}/facebook-pages',
    httpMethod: 'put',
    summary: 'Set default Facebook page',
    description: 'Set default Facebook page',
    stainlessPath: '(resource) accounts.facebook_pages > (method) set_default',
    qualified: 'client.accounts.facebookPages.setDefault',
    params: ['id: string;', 'page_id: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## set_default\n\n`client.accounts.facebookPages.setDefault(id: string, page_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/facebook-pages`\n\nSet default Facebook page\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `page_id: string`\n  Facebook page ID to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.accounts.facebookPages.setDefault('id', { page_id: 'page_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/linkedin-organizations',
    httpMethod: 'get',
    summary: 'Fetch LinkedIn organizations for an account',
    description: 'Fetch LinkedIn organizations for an account',
    stainlessPath: '(resource) accounts.linkedin_organizations > (method) retrieve',
    qualified: 'client.accounts.linkedinOrganizations.retrieve',
    params: ['id: string;'],
    response: '{ data: { id: string; name: string; vanity_name: string; }[]; }',
    markdown:
      "## retrieve\n\n`client.accounts.linkedinOrganizations.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/linkedin-organizations`\n\nFetch LinkedIn organizations for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; name: string; vanity_name: string; }[]; }`\n\n  - `data: { id: string; name: string; vanity_name: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst linkedinOrganization = await client.accounts.linkedinOrganizations.retrieve('id');\n\nconsole.log(linkedinOrganization);\n```",
  },
  {
    name: 'switch_type',
    endpoint: '/v1/accounts/{id}/linkedin-organizations',
    httpMethod: 'put',
    summary: 'Switch LinkedIn account type',
    description: 'Switch LinkedIn account type',
    stainlessPath: '(resource) accounts.linkedin_organizations > (method) switch_type',
    qualified: 'client.accounts.linkedinOrganizations.switchType',
    params: ['id: string;', "account_type: 'personal' | 'organization';", 'organization_id: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## switch_type\n\n`client.accounts.linkedinOrganizations.switchType(id: string, account_type: 'personal' | 'organization', organization_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/linkedin-organizations`\n\nSwitch LinkedIn account type\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `account_type: 'personal' | 'organization'`\n  Account type to switch to\n\n- `organization_id: string`\n  LinkedIn organization ID\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.accounts.linkedinOrganizations.switchType('id', { account_type: 'personal', organization_id: 'organization_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/pinterest-boards',
    httpMethod: 'get',
    summary: 'Fetch Pinterest boards for an account',
    description: 'Fetch Pinterest boards for an account',
    stainlessPath: '(resource) accounts.pinterest_boards > (method) retrieve',
    qualified: 'client.accounts.pinterestBoards.retrieve',
    params: ['id: string;'],
    response: '{ data: { id: string; name: string; url: string; }[]; }',
    markdown:
      "## retrieve\n\n`client.accounts.pinterestBoards.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/pinterest-boards`\n\nFetch Pinterest boards for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; name: string; url: string; }[]; }`\n\n  - `data: { id: string; name: string; url: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst pinterestBoard = await client.accounts.pinterestBoards.retrieve('id');\n\nconsole.log(pinterestBoard);\n```",
  },
  {
    name: 'set_default',
    endpoint: '/v1/accounts/{id}/pinterest-boards',
    httpMethod: 'put',
    summary: 'Set default Pinterest board',
    description: 'Set default Pinterest board',
    stainlessPath: '(resource) accounts.pinterest_boards > (method) set_default',
    qualified: 'client.accounts.pinterestBoards.setDefault',
    params: ['id: string;', 'board_id: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## set_default\n\n`client.accounts.pinterestBoards.setDefault(id: string, board_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/pinterest-boards`\n\nSet default Pinterest board\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `board_id: string`\n  Pinterest board ID to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.accounts.pinterestBoards.setDefault('id', { board_id: 'board_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/reddit-subreddits',
    httpMethod: 'get',
    summary: 'Fetch Reddit subreddits for an account',
    description: 'Fetch Reddit subreddits for an account',
    stainlessPath: '(resource) accounts.reddit_subreddits > (method) retrieve',
    qualified: 'client.accounts.redditSubreddits.retrieve',
    params: ['id: string;'],
    response: '{ data: { display_name: string; name: string; subscribers: number; }[]; }',
    markdown:
      "## retrieve\n\n`client.accounts.redditSubreddits.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/reddit-subreddits`\n\nFetch Reddit subreddits for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { display_name: string; name: string; subscribers: number; }[]; }`\n\n  - `data: { display_name: string; name: string; subscribers: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst redditSubreddit = await client.accounts.redditSubreddits.retrieve('id');\n\nconsole.log(redditSubreddit);\n```",
  },
  {
    name: 'set_default',
    endpoint: '/v1/accounts/{id}/reddit-subreddits',
    httpMethod: 'put',
    summary: 'Set default Reddit subreddit',
    description: 'Set default Reddit subreddit',
    stainlessPath: '(resource) accounts.reddit_subreddits > (method) set_default',
    qualified: 'client.accounts.redditSubreddits.setDefault',
    params: ['id: string;', 'subreddit: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## set_default\n\n`client.accounts.redditSubreddits.setDefault(id: string, subreddit: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/reddit-subreddits`\n\nSet default Reddit subreddit\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `subreddit: string`\n  Subreddit name to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.accounts.redditSubreddits.setDefault('id', { subreddit: 'subreddit' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/accounts/{id}/gmb-locations',
    httpMethod: 'get',
    summary: 'Fetch Google My Business locations',
    description: 'Fetch Google My Business locations',
    stainlessPath: '(resource) accounts.gmb_locations > (method) retrieve',
    qualified: 'client.accounts.gmbLocations.retrieve',
    params: ['id: string;'],
    response: '{ data: { id: string; address: string; name: string; }[]; }',
    markdown:
      "## retrieve\n\n`client.accounts.gmbLocations.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/gmb-locations`\n\nFetch Google My Business locations\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; address: string; name: string; }[]; }`\n\n  - `data: { id: string; address: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst gmbLocation = await client.accounts.gmbLocations.retrieve('id');\n\nconsole.log(gmbLocation);\n```",
  },
  {
    name: 'set_default',
    endpoint: '/v1/accounts/{id}/gmb-locations',
    httpMethod: 'put',
    summary: 'Set default GMB location',
    description: 'Set default GMB location',
    stainlessPath: '(resource) accounts.gmb_locations > (method) set_default',
    qualified: 'client.accounts.gmbLocations.setDefault',
    params: ['id: string;', 'location_id: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## set_default\n\n`client.accounts.gmbLocations.setDefault(id: string, location_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/gmb-locations`\n\nSet default GMB location\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `location_id: string`\n  Google My Business location ID to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.accounts.gmbLocations.setDefault('id', { location_id: 'location_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/media/{id}',
    httpMethod: 'get',
    summary: 'Get media details',
    description: 'Get media details',
    stainlessPath: '(resource) media > (method) retrieve',
    qualified: 'client.media.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; created_at: string; filename: string; mime_type: string; size: number; url: string; duration?: number; height?: number; width?: number; }',
    markdown:
      "## retrieve\n\n`client.media.retrieve(id: string): { id: string; created_at: string; filename: string; mime_type: string; size: number; url: string; duration?: number; height?: number; width?: number; }`\n\n**get** `/v1/media/{id}`\n\nGet media details\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; created_at: string; filename: string; mime_type: string; size: number; url: string; duration?: number; height?: number; width?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `filename: string`\n  - `mime_type: string`\n  - `size: number`\n  - `url: string`\n  - `duration?: number`\n  - `height?: number`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst media = await client.media.retrieve('id');\n\nconsole.log(media);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/media/{id}',
    httpMethod: 'delete',
    summary: 'Delete media',
    description: 'Delete media',
    stainlessPath: '(resource) media > (method) delete',
    qualified: 'client.media.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.media.delete(id: string): void`\n\n**delete** `/v1/media/{id}`\n\nDelete media\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.media.delete('id')\n```",
  },
  {
    name: 'get_presign_url',
    endpoint: '/v1/media/presign',
    httpMethod: 'post',
    summary: 'Get a pre-signed upload URL',
    description:
      'Generate a pre-signed URL for direct upload to R2. The client can PUT the file to the returned URL.',
    stainlessPath: '(resource) media > (method) get_presign_url',
    qualified: 'client.media.getPresignURL',
    params: ['content_type: string;', 'filename: string;'],
    response: '{ expires_in: number; upload_url: string; url: string; }',
    markdown:
      "## get_presign_url\n\n`client.media.getPresignURL(content_type: string, filename: string): { expires_in: number; upload_url: string; url: string; }`\n\n**post** `/v1/media/presign`\n\nGenerate a pre-signed URL for direct upload to R2. The client can PUT the file to the returned URL.\n\n### Parameters\n\n- `content_type: string`\n  MIME type of the file to upload\n\n- `filename: string`\n  Desired filename\n\n### Returns\n\n- `{ expires_in: number; upload_url: string; url: string; }`\n\n  - `expires_in: number`\n  - `upload_url: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.media.getPresignURL({ content_type: 'content_type', filename: 'filename' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'upload',
    endpoint: '/v1/media/upload',
    httpMethod: 'post',
    summary: 'Upload a file',
    description:
      'Upload a raw file body. Pass the filename as a query parameter and set the Content-Type header.',
    stainlessPath: '(resource) media > (method) upload',
    qualified: 'client.media.upload',
    params: ['filename: string;', 'body: string;'],
    response: '{ filename: string; size: number; type: string; url: string; }',
    markdown:
      "## upload\n\n`client.media.upload(filename: string, body: string): { filename: string; size: number; type: string; url: string; }`\n\n**post** `/v1/media/upload`\n\nUpload a raw file body. Pass the filename as a query parameter and set the Content-Type header.\n\n### Parameters\n\n- `filename: string`\n  Original filename\n\n- `body: string`\n\n### Returns\n\n- `{ filename: string; size: number; type: string; url: string; }`\n\n  - `filename: string`\n  - `size: number`\n  - `type: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.media.upload(fs.createReadStream('path/to/file'), { filename: 'filename' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/webhooks',
    httpMethod: 'post',
    summary: 'Create a webhook endpoint',
    description: 'Create a new webhook endpoint. The signing secret is returned only once in the response.',
    stainlessPath: '(resource) webhooks > (method) create',
    qualified: 'client.webhooks.create',
    params: ['events: string[];', 'url: string;'],
    response:
      '{ id: string; created_at: string; enabled: boolean; events: string[]; secret: string; url: string; }',
    markdown:
      "## create\n\n`client.webhooks.create(events: string[], url: string): { id: string; created_at: string; enabled: boolean; events: string[]; secret: string; url: string; }`\n\n**post** `/v1/webhooks`\n\nCreate a new webhook endpoint. The signing secret is returned only once in the response.\n\n### Parameters\n\n- `events: string[]`\n  Events to subscribe to\n\n- `url: string`\n  Webhook endpoint URL\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; events: string[]; secret: string; url: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `secret: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst webhook = await client.webhooks.create({ events: ['post.published'], url: 'https://example.com' });\n\nconsole.log(webhook);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/webhooks/{id}',
    httpMethod: 'patch',
    summary: 'Update a webhook endpoint',
    description: 'Update a webhook endpoint',
    stainlessPath: '(resource) webhooks > (method) update',
    qualified: 'client.webhooks.update',
    params: ['id: string;', 'enabled?: boolean;', 'events?: string[];', 'url?: string;'],
    response:
      '{ id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }',
    markdown:
      "## update\n\n`client.webhooks.update(id: string, enabled?: boolean, events?: string[], url?: string): { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }`\n\n**patch** `/v1/webhooks/{id}`\n\nUpdate a webhook endpoint\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `enabled?: boolean`\n  Enable or disable the webhook\n\n- `events?: string[]`\n  Updated events\n\n- `url?: string`\n  Updated endpoint URL\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `updated_at: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst webhook = await client.webhooks.update('id');\n\nconsole.log(webhook);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/webhooks',
    httpMethod: 'get',
    summary: 'List webhook endpoints',
    description: 'List webhook endpoints',
    stainlessPath: '(resource) webhooks > (method) list',
    qualified: 'client.webhooks.list',
    params: ['cursor?: string;', 'from?: string;', 'limit?: number;', 'to?: string;'],
    response:
      '{ data: { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.webhooks.list(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/webhooks`\n\nList webhook endpoints\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst webhooks = await client.webhooks.list();\n\nconsole.log(webhooks);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/webhooks/{id}',
    httpMethod: 'delete',
    summary: 'Delete a webhook endpoint',
    description: 'Delete a webhook endpoint',
    stainlessPath: '(resource) webhooks > (method) delete',
    qualified: 'client.webhooks.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.webhooks.delete(id: string): void`\n\n**delete** `/v1/webhooks/{id}`\n\nDelete a webhook endpoint\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.webhooks.delete('id')\n```",
  },
  {
    name: 'list_logs',
    endpoint: '/v1/webhooks/logs',
    httpMethod: 'get',
    summary: 'List webhook delivery logs',
    description: 'Returns delivery logs from the last 7 days.',
    stainlessPath: '(resource) webhooks > (method) list_logs',
    qualified: 'client.webhooks.listLogs',
    params: ['cursor?: string;', 'from?: string;', 'limit?: number;', 'to?: string;'],
    response:
      '{ data: { id: string; created_at: string; error: string; event: string; response_time_ms: number; status_code: number; success: boolean; webhook_id: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list_logs\n\n`client.webhooks.listLogs(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/webhooks/logs`\n\nReturns delivery logs from the last 7 days.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; created_at: string; error: string; event: string; response_time_ms: number; status_code: number; success: boolean; webhook_id: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; error: string; event: string; response_time_ms: number; status_code: number; success: boolean; webhook_id: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.webhooks.listLogs();\n\nconsole.log(response);\n```",
  },
  {
    name: 'send_test',
    endpoint: '/v1/webhooks/test',
    httpMethod: 'post',
    summary: 'Send a test webhook delivery',
    description: 'Send a test POST request to the webhook URL to verify it is reachable.',
    stainlessPath: '(resource) webhooks > (method) send_test',
    qualified: 'client.webhooks.sendTest',
    params: ['webhook_id: string;'],
    response: '{ response_time_ms: number; status_code: number; success: boolean; }',
    markdown:
      "## send_test\n\n`client.webhooks.sendTest(webhook_id: string): { response_time_ms: number; status_code: number; success: boolean; }`\n\n**post** `/v1/webhooks/test`\n\nSend a test POST request to the webhook URL to verify it is reachable.\n\n### Parameters\n\n- `webhook_id: string`\n  ID of the webhook to test\n\n### Returns\n\n- `{ response_time_ms: number; status_code: number; success: boolean; }`\n\n  - `response_time_ms: number`\n  - `status_code: number`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.webhooks.sendTest({ webhook_id: 'webhook_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/api-keys',
    httpMethod: 'post',
    summary: 'Create an API key',
    description:
      'Create a new API key. The full key is returned only once in the response — store it securely.',
    stainlessPath: '(resource) api_keys > (method) create',
    qualified: 'client.apiKeys.create',
    params: ['name: string;', 'expires_in_days?: number;'],
    response:
      '{ id: string; created_at: string; expires_at: string; key: string; name: string; prefix: string; }',
    markdown:
      "## create\n\n`client.apiKeys.create(name: string, expires_in_days?: number): { id: string; created_at: string; expires_at: string; key: string; name: string; prefix: string; }`\n\n**post** `/v1/api-keys`\n\nCreate a new API key. The full key is returned only once in the response — store it securely.\n\n### Parameters\n\n- `name: string`\n  Name for the API key\n\n- `expires_in_days?: number`\n  Number of days until the key expires\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; key: string; name: string; prefix: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `key: string`\n  - `name: string`\n  - `prefix: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst apiKey = await client.apiKeys.create({ name: 'x' });\n\nconsole.log(apiKey);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/api-keys',
    httpMethod: 'get',
    summary: 'List API keys',
    description: 'List API keys',
    stainlessPath: '(resource) api_keys > (method) list',
    qualified: 'client.apiKeys.list',
    params: ['cursor?: string;', 'from?: string;', 'limit?: number;', 'to?: string;'],
    response:
      '{ data: { id: string; created_at: string; enabled: boolean; expires_at: string; name: string; prefix: string; start: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.apiKeys.list(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/api-keys`\n\nList API keys\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; created_at: string; enabled: boolean; expires_at: string; name: string; prefix: string; start: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; enabled: boolean; expires_at: string; name: string; prefix: string; start: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst apiKeys = await client.apiKeys.list();\n\nconsole.log(apiKeys);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/api-keys/{id}',
    httpMethod: 'delete',
    summary: 'Delete an API key',
    description: 'Delete an API key',
    stainlessPath: '(resource) api_keys > (method) delete',
    qualified: 'client.apiKeys.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.apiKeys.delete(id: string): void`\n\n**delete** `/v1/api-keys/{id}`\n\nDelete an API key\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.apiKeys.delete('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/usage',
    httpMethod: 'get',
    summary: 'Get subscription usage',
    description: 'Returns current plan details and API call usage statistics for the organization.',
    stainlessPath: '(resource) usage > (method) retrieve',
    qualified: 'client.usage.retrieve',
    response:
      "{ plan: { api_calls_limit: number; api_calls_per_min: number; features: { analytics: boolean; inbox: boolean; }; name: 'free' | 'pro'; }; rate_limit: { limit_per_minute: number; }; subscription: { monthly_price_cents: number; price_per_thousand_calls_cents: number; status: string; }; usage: { api_calls_remaining: number; api_calls_used: number; cycle_end: string; cycle_start: string; overage_calls: number; overage_cost_cents: number; }; }",
    markdown:
      "## retrieve\n\n`client.usage.retrieve(): { plan: object; rate_limit: object; subscription: object; usage: object; }`\n\n**get** `/v1/usage`\n\nReturns current plan details and API call usage statistics for the organization.\n\n### Returns\n\n- `{ plan: { api_calls_limit: number; api_calls_per_min: number; features: { analytics: boolean; inbox: boolean; }; name: 'free' | 'pro'; }; rate_limit: { limit_per_minute: number; }; subscription: { monthly_price_cents: number; price_per_thousand_calls_cents: number; status: string; }; usage: { api_calls_remaining: number; api_calls_used: number; cycle_end: string; cycle_start: string; overage_calls: number; overage_cost_cents: number; }; }`\n\n  - `plan: { api_calls_limit: number; api_calls_per_min: number; features: { analytics: boolean; inbox: boolean; }; name: 'free' | 'pro'; }`\n  - `rate_limit: { limit_per_minute: number; }`\n  - `subscription: { monthly_price_cents: number; price_per_thousand_calls_cents: number; status: string; }`\n  - `usage: { api_calls_remaining: number; api_calls_used: number; cycle_end: string; cycle_start: string; overage_calls: number; overage_cost_cents: number; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst usage = await client.usage.retrieve();\n\nconsole.log(usage);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/account-groups',
    httpMethod: 'post',
    summary: 'Create an account group',
    description: 'Create an account group',
    stainlessPath: '(resource) account_groups > (method) create',
    qualified: 'client.accountGroups.create',
    params: ['name: string;', 'description?: string;'],
    response:
      '{ id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }',
    markdown:
      "## create\n\n`client.accountGroups.create(name: string, description?: string): { id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }`\n\n**post** `/v1/account-groups`\n\nCreate an account group\n\n### Parameters\n\n- `name: string`\n  Group name\n\n- `description?: string`\n  Group description\n\n### Returns\n\n- `{ id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }`\n\n  - `id: string`\n  - `account_count: number`\n  - `created_at: string`\n  - `description: string`\n  - `name: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst accountGroup = await client.accountGroups.create({ name: 'x' });\n\nconsole.log(accountGroup);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/account-groups/{id}',
    httpMethod: 'put',
    summary: 'Update an account group',
    description: 'Update an account group',
    stainlessPath: '(resource) account_groups > (method) update',
    qualified: 'client.accountGroups.update',
    params: ['id: string;', 'description?: string;', 'name?: string;'],
    response:
      '{ id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }',
    markdown:
      "## update\n\n`client.accountGroups.update(id: string, description?: string, name?: string): { id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }`\n\n**put** `/v1/account-groups/{id}`\n\nUpdate an account group\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `description?: string`\n  Group description\n\n- `name?: string`\n  Group name\n\n### Returns\n\n- `{ id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }`\n\n  - `id: string`\n  - `account_count: number`\n  - `created_at: string`\n  - `description: string`\n  - `name: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst accountGroup = await client.accountGroups.update('id');\n\nconsole.log(accountGroup);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/account-groups',
    httpMethod: 'get',
    summary: 'List account groups',
    description: 'List account groups',
    stainlessPath: '(resource) account_groups > (method) list',
    qualified: 'client.accountGroups.list',
    params: ['cursor?: string;', 'limit?: number;', 'search?: string;'],
    response:
      '{ data: { id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.accountGroups.list(cursor?: string, limit?: number, search?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/account-groups`\n\nList account groups\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Page size\n\n- `search?: string`\n  Search groups by name\n\n### Returns\n\n- `{ data: { id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; account_count: number; created_at: string; description: string; name: string; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst accountGroups = await client.accountGroups.list();\n\nconsole.log(accountGroups);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/account-groups/{id}',
    httpMethod: 'delete',
    summary: 'Delete an account group',
    description: 'Delete an account group',
    stainlessPath: '(resource) account_groups > (method) delete',
    qualified: 'client.accountGroups.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.accountGroups.delete(id: string): void`\n\n**delete** `/v1/account-groups/{id}`\n\nDelete an account group\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.accountGroups.delete('id')\n```",
  },
  {
    name: 'complete_oauth_callback',
    endpoint: '/v1/connect/{platform}',
    httpMethod: 'post',
    summary: 'Complete OAuth callback',
    description: 'Exchange OAuth code for tokens and save the account.',
    stainlessPath: '(resource) connect > (method) complete_oauth_callback',
    qualified: 'client.connect.completeOAuthCallback',
    params: ['platform: string;', 'code: string;', 'redirect_url?: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## complete_oauth_callback\n\n`client.connect.completeOAuthCallback(platform: string, code: string, redirect_url?: string): { account: object; }`\n\n**post** `/v1/connect/{platform}`\n\nExchange OAuth code for tokens and save the account.\n\n### Parameters\n\n- `platform: string`\n  OAuth platform to complete\n\n- `code: string`\n  OAuth authorization code\n\n- `redirect_url?: string`\n  Redirect URL used during the OAuth flow (must match)\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.completeOAuthCallback('twitter', { code: 'code' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_bluesky_connection',
    endpoint: '/v1/connect/bluesky',
    httpMethod: 'post',
    summary: 'Connect Bluesky via app password',
    description: 'Connect Bluesky via app password',
    stainlessPath: '(resource) connect > (method) create_bluesky_connection',
    qualified: 'client.connect.createBlueskyConnection',
    params: ['app_password: string;', 'handle: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## create_bluesky_connection\n\n`client.connect.createBlueskyConnection(app_password: string, handle: string): { account: object; }`\n\n**post** `/v1/connect/bluesky`\n\nConnect Bluesky via app password\n\n### Parameters\n\n- `app_password: string`\n  Bluesky app password\n\n- `handle: string`\n  Bluesky handle (e.g. user.bsky.social)\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.createBlueskyConnection({ app_password: 'app_password', handle: 'handle' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'fetch_pending_data',
    endpoint: '/v1/connect/pending-data',
    httpMethod: 'get',
    summary: 'Fetch pending OAuth data',
    description: 'One-time use, expires after 10 minutes. For headless OAuth flows.',
    stainlessPath: '(resource) connect > (method) fetch_pending_data',
    qualified: 'client.connect.fetchPendingData',
    params: ['token: string;'],
    response:
      '{ platform: string; temp_token: string; user_profile: { id: string; avatar_url: string; name: string; username: string; }; boards?: object[]; locations?: object[]; organizations?: object[]; pages?: object[]; profiles?: object[]; }',
    markdown:
      "## fetch_pending_data\n\n`client.connect.fetchPendingData(token: string): { platform: string; temp_token: string; user_profile: object; boards?: object[]; locations?: object[]; organizations?: object[]; pages?: object[]; profiles?: object[]; }`\n\n**get** `/v1/connect/pending-data`\n\nOne-time use, expires after 10 minutes. For headless OAuth flows.\n\n### Parameters\n\n- `token: string`\n  Temporary token from headless OAuth flow\n\n### Returns\n\n- `{ platform: string; temp_token: string; user_profile: { id: string; avatar_url: string; name: string; username: string; }; boards?: object[]; locations?: object[]; organizations?: object[]; pages?: object[]; profiles?: object[]; }`\n\n  - `platform: string`\n  - `temp_token: string`\n  - `user_profile: { id: string; avatar_url: string; name: string; username: string; }`\n  - `boards?: object[]`\n  - `locations?: object[]`\n  - `organizations?: object[]`\n  - `pages?: object[]`\n  - `profiles?: object[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.fetchPendingData({ token: 'token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'start_oauth_flow',
    endpoint: '/v1/connect/{platform}',
    httpMethod: 'get',
    summary: 'Start OAuth flow',
    description: 'Returns an auth_url to redirect the user for OAuth authorization.',
    stainlessPath: '(resource) connect > (method) start_oauth_flow',
    qualified: 'client.connect.startOAuthFlow',
    params: ['platform: string;', 'headless?: string;', 'method?: string;', 'redirect_url?: string;'],
    response: '{ auth_url: string; }',
    markdown:
      '## start_oauth_flow\n\n`client.connect.startOAuthFlow(platform: string, headless?: string, method?: string, redirect_url?: string): { auth_url: string; }`\n\n**get** `/v1/connect/{platform}`\n\nReturns an auth_url to redirect the user for OAuth authorization.\n\n### Parameters\n\n- `platform: string`\n  OAuth platform to connect\n\n- `headless?: string`\n  Set to "true" for headless mode (returns data instead of redirecting)\n\n- `method?: string`\n  Auth method variant (e.g. "direct" for Instagram Login instead of Facebook Login)\n\n- `redirect_url?: string`\n  URL to redirect after OAuth completes\n\n### Returns\n\n- `{ auth_url: string; }`\n\n  - `auth_url: string`\n\n### Example\n\n```typescript\nimport Relay from \'relay\';\n\nconst client = new Relay();\n\nconst response = await client.connect.startOAuthFlow(\'twitter\');\n\nconsole.log(response);\n```',
  },
  {
    name: 'connect_directly',
    endpoint: '/v1/connect/telegram/direct',
    httpMethod: 'post',
    summary: 'Connect Telegram directly with chat ID',
    description: 'Connect Telegram directly with chat ID',
    stainlessPath: '(resource) connect.telegram > (method) connect_directly',
    qualified: 'client.connect.telegram.connectDirectly',
    params: ['chat_id: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## connect_directly\n\n`client.connect.telegram.connectDirectly(chat_id: string): { account: object; }`\n\n**post** `/v1/connect/telegram/direct`\n\nConnect Telegram directly with chat ID\n\n### Parameters\n\n- `chat_id: string`\n  Telegram chat or channel ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.telegram.connectDirectly({ chat_id: 'chat_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'initiate_connection',
    endpoint: '/v1/connect/telegram',
    httpMethod: 'post',
    summary: 'Initiate Telegram bot connection',
    description: 'Generates a 6-character access code (valid 15 minutes).',
    stainlessPath: '(resource) connect.telegram > (method) initiate_connection',
    qualified: 'client.connect.telegram.initiateConnection',
    response:
      '{ bot_username: string; code: string; expires_at: string; expires_in: number; instructions: string[]; }',
    markdown:
      "## initiate_connection\n\n`client.connect.telegram.initiateConnection(): { bot_username: string; code: string; expires_at: string; expires_in: number; instructions: string[]; }`\n\n**post** `/v1/connect/telegram`\n\nGenerates a 6-character access code (valid 15 minutes).\n\n### Returns\n\n- `{ bot_username: string; code: string; expires_at: string; expires_in: number; instructions: string[]; }`\n\n  - `bot_username: string`\n  - `code: string`\n  - `expires_at: string`\n  - `expires_in: number`\n  - `instructions: string[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.telegram.initiateConnection();\n\nconsole.log(response);\n```",
  },
  {
    name: 'poll_connection_status',
    endpoint: '/v1/connect/telegram',
    httpMethod: 'get',
    summary: 'Poll Telegram connection status',
    description: 'Poll Telegram connection status',
    stainlessPath: '(resource) connect.telegram > (method) poll_connection_status',
    qualified: 'client.connect.telegram.pollConnectionStatus',
    params: ['code: string;'],
    response:
      "{ status: 'pending' | 'connected' | 'expired'; account?: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; chat_id?: string; chat_title?: string; chat_type?: string; expires_at?: string; }",
    markdown:
      "## poll_connection_status\n\n`client.connect.telegram.pollConnectionStatus(code: string): { status: 'pending' | 'connected' | 'expired'; account?: object; chat_id?: string; chat_title?: string; chat_type?: string; expires_at?: string; }`\n\n**get** `/v1/connect/telegram`\n\nPoll Telegram connection status\n\n### Parameters\n\n- `code: string`\n  The 6-character access code to check\n\n### Returns\n\n- `{ status: 'pending' | 'connected' | 'expired'; account?: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; chat_id?: string; chat_title?: string; chat_type?: string; expires_at?: string; }`\n\n  - `status: 'pending' | 'connected' | 'expired'`\n  - `account?: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n  - `chat_id?: string`\n  - `chat_title?: string`\n  - `chat_type?: string`\n  - `expires_at?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.telegram.pollConnectionStatus({ code: 'code' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'complete_embedded_signup',
    endpoint: '/v1/connect/whatsapp/embedded-signup',
    httpMethod: 'post',
    summary: 'Complete WhatsApp Embedded Signup',
    description: 'Complete WhatsApp Embedded Signup',
    stainlessPath: '(resource) connect.whatsapp > (method) complete_embedded_signup',
    qualified: 'client.connect.whatsapp.completeEmbeddedSignup',
    params: ['code: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## complete_embedded_signup\n\n`client.connect.whatsapp.completeEmbeddedSignup(code: string): { account: object; }`\n\n**post** `/v1/connect/whatsapp/embedded-signup`\n\nComplete WhatsApp Embedded Signup\n\n### Parameters\n\n- `code: string`\n  Code from WhatsApp embedded signup flow\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.whatsapp.completeEmbeddedSignup({ code: 'code' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'connect_via_credentials',
    endpoint: '/v1/connect/whatsapp/credentials',
    httpMethod: 'post',
    summary: 'Connect WhatsApp via System User credentials',
    description: 'Connect WhatsApp via System User credentials',
    stainlessPath: '(resource) connect.whatsapp > (method) connect_via_credentials',
    qualified: 'client.connect.whatsapp.connectViaCredentials',
    params: ['access_token: string;', 'phone_number_id: string;', 'waba_id: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## connect_via_credentials\n\n`client.connect.whatsapp.connectViaCredentials(access_token: string, phone_number_id: string, waba_id: string): { account: object; }`\n\n**post** `/v1/connect/whatsapp/credentials`\n\nConnect WhatsApp via System User credentials\n\n### Parameters\n\n- `access_token: string`\n  WhatsApp Business API access token\n\n- `phone_number_id: string`\n  WhatsApp phone number ID\n\n- `waba_id: string`\n  WhatsApp Business Account ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.whatsapp.connectViaCredentials({\n  access_token: 'access_token',\n  phone_number_id: 'phone_number_id',\n  waba_id: 'waba_id',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_sdk_config',
    endpoint: '/v1/connect/whatsapp/sdk-config',
    httpMethod: 'get',
    summary: 'Get WhatsApp Embedded Signup SDK config',
    description: 'Get WhatsApp Embedded Signup SDK config',
    stainlessPath: '(resource) connect.whatsapp > (method) get_sdk_config',
    qualified: 'client.connect.whatsapp.getSDKConfig',
    response: '{ app_id: string; config_id: string; }',
    markdown:
      "## get_sdk_config\n\n`client.connect.whatsapp.getSDKConfig(): { app_id: string; config_id: string; }`\n\n**get** `/v1/connect/whatsapp/sdk-config`\n\nGet WhatsApp Embedded Signup SDK config\n\n### Returns\n\n- `{ app_id: string; config_id: string; }`\n\n  - `app_id: string`\n  - `config_id: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.whatsapp.getSDKConfig();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/connect/facebook/pages',
    httpMethod: 'get',
    summary: 'List Facebook Pages after OAuth',
    description: 'List Facebook Pages after OAuth',
    stainlessPath: '(resource) connect.facebook.pages > (method) list',
    qualified: 'client.connect.facebook.pages.list',
    response: '{ pages: { id: string; name: string; category?: string; picture_url?: string; }[]; }',
    markdown:
      "## list\n\n`client.connect.facebook.pages.list(): { pages: object[]; }`\n\n**get** `/v1/connect/facebook/pages`\n\nList Facebook Pages after OAuth\n\n### Returns\n\n- `{ pages: { id: string; name: string; category?: string; picture_url?: string; }[]; }`\n\n  - `pages: { id: string; name: string; category?: string; picture_url?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst pages = await client.connect.facebook.pages.list();\n\nconsole.log(pages);\n```",
  },
  {
    name: 'select',
    endpoint: '/v1/connect/facebook/pages',
    httpMethod: 'post',
    summary: 'Select Facebook Page to connect',
    description: 'Select Facebook Page to connect',
    stainlessPath: '(resource) connect.facebook.pages > (method) select',
    qualified: 'client.connect.facebook.pages.select',
    params: ['connect_token: string;', 'page_id: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## select\n\n`client.connect.facebook.pages.select(connect_token: string, page_id: string): { account: object; }`\n\n**post** `/v1/connect/facebook/pages`\n\nSelect Facebook Page to connect\n\n### Parameters\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `page_id: string`\n  Selected Facebook page ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.facebook.pages.select({ connect_token: 'connect_token', page_id: 'page_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/connect/linkedin/organizations',
    httpMethod: 'get',
    summary: 'List LinkedIn organizations after OAuth',
    description: 'List LinkedIn organizations after OAuth',
    stainlessPath: '(resource) connect.linkedin.organizations > (method) list',
    qualified: 'client.connect.linkedin.organizations.list',
    response:
      '{ organizations: { name: string; urn: string; logo_url?: string; vanity_name?: string; }[]; personal_profile?: { name: string; urn: string; }; }',
    markdown:
      "## list\n\n`client.connect.linkedin.organizations.list(): { organizations: object[]; personal_profile?: object; }`\n\n**get** `/v1/connect/linkedin/organizations`\n\nList LinkedIn organizations after OAuth\n\n### Returns\n\n- `{ organizations: { name: string; urn: string; logo_url?: string; vanity_name?: string; }[]; personal_profile?: { name: string; urn: string; }; }`\n\n  - `organizations: { name: string; urn: string; logo_url?: string; vanity_name?: string; }[]`\n  - `personal_profile?: { name: string; urn: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst organizations = await client.connect.linkedin.organizations.list();\n\nconsole.log(organizations);\n```",
  },
  {
    name: 'select',
    endpoint: '/v1/connect/linkedin/organizations',
    httpMethod: 'post',
    summary: 'Select LinkedIn organization',
    description: 'Select LinkedIn organization',
    stainlessPath: '(resource) connect.linkedin.organizations > (method) select',
    qualified: 'client.connect.linkedin.organizations.select',
    params: [
      "account_type: 'personal' | 'organization';",
      'connect_token: string;',
      'organization_urn?: string;',
    ],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## select\n\n`client.connect.linkedin.organizations.select(account_type: 'personal' | 'organization', connect_token: string, organization_urn?: string): { account: object; }`\n\n**post** `/v1/connect/linkedin/organizations`\n\nSelect LinkedIn organization\n\n### Parameters\n\n- `account_type: 'personal' | 'organization'`\n  Whether to connect as a personal profile or organization\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `organization_urn?: string`\n  LinkedIn organization URN (required if account_type is organization)\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.linkedin.organizations.select({ account_type: 'personal', connect_token: 'connect_token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/connect/pinterest/boards',
    httpMethod: 'get',
    summary: 'List Pinterest boards after OAuth',
    description: 'List Pinterest boards after OAuth',
    stainlessPath: '(resource) connect.pinterest.boards > (method) list',
    qualified: 'client.connect.pinterest.boards.list',
    response: '{ boards: { id: string; name: string; description?: string; pin_count?: number; }[]; }',
    markdown:
      "## list\n\n`client.connect.pinterest.boards.list(): { boards: object[]; }`\n\n**get** `/v1/connect/pinterest/boards`\n\nList Pinterest boards after OAuth\n\n### Returns\n\n- `{ boards: { id: string; name: string; description?: string; pin_count?: number; }[]; }`\n\n  - `boards: { id: string; name: string; description?: string; pin_count?: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst boards = await client.connect.pinterest.boards.list();\n\nconsole.log(boards);\n```",
  },
  {
    name: 'select',
    endpoint: '/v1/connect/pinterest/boards',
    httpMethod: 'post',
    summary: 'Select Pinterest board',
    description: 'Select Pinterest board',
    stainlessPath: '(resource) connect.pinterest.boards > (method) select',
    qualified: 'client.connect.pinterest.boards.select',
    params: ['board_id: string;', 'connect_token: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## select\n\n`client.connect.pinterest.boards.select(board_id: string, connect_token: string): { account: object; }`\n\n**post** `/v1/connect/pinterest/boards`\n\nSelect Pinterest board\n\n### Parameters\n\n- `board_id: string`\n  Selected Pinterest board ID\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.pinterest.boards.select({ board_id: 'board_id', connect_token: 'connect_token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/connect/googlebusiness/locations',
    httpMethod: 'get',
    summary: 'List Google Business locations after OAuth',
    description: 'List Google Business locations after OAuth',
    stainlessPath: '(resource) connect.googlebusiness.locations > (method) list',
    qualified: 'client.connect.googlebusiness.locations.list',
    response: '{ locations: { id: string; name: string; address?: string; phone?: string; }[]; }',
    markdown:
      "## list\n\n`client.connect.googlebusiness.locations.list(): { locations: object[]; }`\n\n**get** `/v1/connect/googlebusiness/locations`\n\nList Google Business locations after OAuth\n\n### Returns\n\n- `{ locations: { id: string; name: string; address?: string; phone?: string; }[]; }`\n\n  - `locations: { id: string; name: string; address?: string; phone?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst locations = await client.connect.googlebusiness.locations.list();\n\nconsole.log(locations);\n```",
  },
  {
    name: 'select',
    endpoint: '/v1/connect/googlebusiness/locations',
    httpMethod: 'post',
    summary: 'Select Google Business location',
    description: 'Select Google Business location',
    stainlessPath: '(resource) connect.googlebusiness.locations > (method) select',
    qualified: 'client.connect.googlebusiness.locations.select',
    params: ['connect_token: string;', 'location_id: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## select\n\n`client.connect.googlebusiness.locations.select(connect_token: string, location_id: string): { account: object; }`\n\n**post** `/v1/connect/googlebusiness/locations`\n\nSelect Google Business location\n\n### Parameters\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `location_id: string`\n  Selected Google Business location ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.googlebusiness.locations.select({ connect_token: 'connect_token', location_id: 'location_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/connect/snapchat/profiles',
    httpMethod: 'get',
    summary: 'List Snapchat Public Profiles after OAuth',
    description: 'List Snapchat Public Profiles after OAuth',
    stainlessPath: '(resource) connect.snapchat.profiles > (method) list',
    qualified: 'client.connect.snapchat.profiles.list',
    response:
      '{ profiles: { id: string; display_name: string; username: string; profile_image_url?: string; subscriber_count?: number; }[]; }',
    markdown:
      "## list\n\n`client.connect.snapchat.profiles.list(): { profiles: object[]; }`\n\n**get** `/v1/connect/snapchat/profiles`\n\nList Snapchat Public Profiles after OAuth\n\n### Returns\n\n- `{ profiles: { id: string; display_name: string; username: string; profile_image_url?: string; subscriber_count?: number; }[]; }`\n\n  - `profiles: { id: string; display_name: string; username: string; profile_image_url?: string; subscriber_count?: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst profiles = await client.connect.snapchat.profiles.list();\n\nconsole.log(profiles);\n```",
  },
  {
    name: 'select',
    endpoint: '/v1/connect/snapchat/profiles',
    httpMethod: 'post',
    summary: 'Select Snapchat Public Profile',
    description: 'Select Snapchat Public Profile',
    stainlessPath: '(resource) connect.snapchat.profiles > (method) select',
    qualified: 'client.connect.snapchat.profiles.select',
    params: ['connect_token: string;', 'profile_id: string;'],
    response:
      '{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }',
    markdown:
      "## select\n\n`client.connect.snapchat.profiles.select(connect_token: string, profile_id: string): { account: object; }`\n\n**post** `/v1/connect/snapchat/profiles`\n\nSelect Snapchat Public Profile\n\n### Parameters\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `profile_id: string`\n  Selected Snapchat profile ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connect.snapchat.profiles.select({ connect_token: 'connect_token', profile_id: 'profile_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_logs',
    endpoint: '/v1/connections/logs',
    httpMethod: 'get',
    summary: 'List connection logs',
    description: 'Returns connection event history for the organization.',
    stainlessPath: '(resource) connections > (method) list_logs',
    qualified: 'client.connections.listLogs',
    params: ['cursor?: string;', 'from?: string;', 'limit?: number;', 'to?: string;'],
    response:
      "{ data: { id: string; account_id: string; created_at: string; event: 'connected' | 'disconnected' | 'token_refreshed' | 'error'; message: string; platform: string; }[]; has_more: boolean; next_cursor: string; }",
    markdown:
      "## list_logs\n\n`client.connections.listLogs(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/connections/logs`\n\nReturns connection event history for the organization.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; account_id: string; created_at: string; event: 'connected' | 'disconnected' | 'token_refreshed' | 'error'; message: string; platform: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; account_id: string; created_at: string; event: 'connected' | 'disconnected' | 'token_refreshed' | 'error'; message: string; platform: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.connections.listLogs();\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/analytics',
    httpMethod: 'get',
    summary: 'Get post analytics',
    description: 'Get post analytics',
    stainlessPath: '(resource) analytics > (method) retrieve',
    qualified: 'client.analytics.retrieve',
    params: [
      'account_id?: string;',
      'from_date?: string;',
      'limit?: number;',
      'offset?: number;',
      'platform?: string;',
      'post_id?: string;',
      'to_date?: string;',
    ],
    response:
      '{ data: { platform: string; post_id: string; published_at: string; clicks?: number; comments?: number; impressions?: number; likes?: number; reach?: number; saves?: number; shares?: number; views?: number; }[]; overview?: { total_clicks: number; total_comments: number; total_impressions: number; total_likes: number; total_posts: number; total_shares: number; total_views: number; }; }',
    markdown:
      "## retrieve\n\n`client.analytics.retrieve(account_id?: string, from_date?: string, limit?: number, offset?: number, platform?: string, post_id?: string, to_date?: string): { data: object[]; overview?: object; }`\n\n**get** `/v1/analytics`\n\nGet post analytics\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601 date string)\n\n- `limit?: number`\n  Number of items\n\n- `offset?: number`\n  Offset\n\n- `platform?: string`\n  Filter by platform\n\n- `post_id?: string`\n  Filter by post ID\n\n- `to_date?: string`\n  End date (ISO 8601 date string)\n\n### Returns\n\n- `{ data: { platform: string; post_id: string; published_at: string; clicks?: number; comments?: number; impressions?: number; likes?: number; reach?: number; saves?: number; shares?: number; views?: number; }[]; overview?: { total_clicks: number; total_comments: number; total_impressions: number; total_likes: number; total_posts: number; total_shares: number; total_views: number; }; }`\n\n  - `data: { platform: string; post_id: string; published_at: string; clicks?: number; comments?: number; impressions?: number; likes?: number; reach?: number; saves?: number; shares?: number; views?: number; }[]`\n  - `overview?: { total_clicks: number; total_comments: number; total_impressions: number; total_likes: number; total_posts: number; total_shares: number; total_views: number; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst analytics = await client.analytics.retrieve();\n\nconsole.log(analytics);\n```",
  },
  {
    name: 'get_best_time',
    endpoint: '/v1/analytics/best-time',
    httpMethod: 'get',
    summary: 'Get best posting times based on engagement',
    description: 'Get best posting times based on engagement',
    stainlessPath: '(resource) analytics > (method) get_best_time',
    qualified: 'client.analytics.getBestTime',
    params: ['account_id?: string;', 'from_date?: string;', 'platform?: string;', 'to_date?: string;'],
    response:
      '{ data: { avg_engagement: number; day_of_week: number; hour_utc: number; post_count: number; }[]; }',
    markdown:
      "## get_best_time\n\n`client.analytics.getBestTime(account_id?: string, from_date?: string, platform?: string, to_date?: string): { data: object[]; }`\n\n**get** `/v1/analytics/best-time`\n\nGet best posting times based on engagement\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `platform?: string`\n  Filter by platform\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { avg_engagement: number; day_of_week: number; hour_utc: number; post_count: number; }[]; }`\n\n  - `data: { avg_engagement: number; day_of_week: number; hour_utc: number; post_count: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getBestTime();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_content_decay',
    endpoint: '/v1/analytics/content-decay',
    httpMethod: 'get',
    summary: 'Get engagement decay curve for a post',
    description: 'Get engagement decay curve for a post',
    stainlessPath: '(resource) analytics > (method) get_content_decay',
    qualified: 'client.analytics.getContentDecay',
    params: ['post_id: string;', 'days?: number;'],
    response:
      '{ data: { cumulative_engagement: number; cumulative_impressions: number; day: number; engagement: number; impressions: number; }[]; half_life_days: number; platform: string; post_id: string; }',
    markdown:
      "## get_content_decay\n\n`client.analytics.getContentDecay(post_id: string, days?: number): { data: object[]; half_life_days: number; platform: string; post_id: string; }`\n\n**get** `/v1/analytics/content-decay`\n\nGet engagement decay curve for a post\n\n### Parameters\n\n- `post_id: string`\n  Post ID to analyze decay for\n\n- `days?: number`\n  Number of days to analyze\n\n### Returns\n\n- `{ data: { cumulative_engagement: number; cumulative_impressions: number; day: number; engagement: number; impressions: number; }[]; half_life_days: number; platform: string; post_id: string; }`\n\n  - `data: { cumulative_engagement: number; cumulative_impressions: number; day: number; engagement: number; impressions: number; }[]`\n  - `half_life_days: number`\n  - `platform: string`\n  - `post_id: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getContentDecay({ post_id: 'post_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_post_timeline',
    endpoint: '/v1/analytics/post-timeline',
    httpMethod: 'get',
    summary: 'Get per-post daily timeline of metrics',
    description: 'Get per-post daily timeline of metrics',
    stainlessPath: '(resource) analytics > (method) get_post_timeline',
    qualified: 'client.analytics.getPostTimeline',
    params: ['post_id: string;', 'from_date?: string;', 'to_date?: string;'],
    response:
      '{ data: { clicks: number; comments: number; date: string; impressions: number; likes: number; shares: number; views: number; }[]; post_id: string; }',
    markdown:
      "## get_post_timeline\n\n`client.analytics.getPostTimeline(post_id: string, from_date?: string, to_date?: string): { data: object[]; post_id: string; }`\n\n**get** `/v1/analytics/post-timeline`\n\nGet per-post daily timeline of metrics\n\n### Parameters\n\n- `post_id: string`\n  Post ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { clicks: number; comments: number; date: string; impressions: number; likes: number; shares: number; views: number; }[]; post_id: string; }`\n\n  - `data: { clicks: number; comments: number; date: string; impressions: number; likes: number; shares: number; views: number; }[]`\n  - `post_id: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getPostTimeline({ post_id: 'post_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_posting_frequency',
    endpoint: '/v1/analytics/posting-frequency',
    httpMethod: 'get',
    summary: 'Get posting frequency vs engagement analysis',
    description: 'Get posting frequency vs engagement analysis',
    stainlessPath: '(resource) analytics > (method) get_posting_frequency',
    qualified: 'client.analytics.getPostingFrequency',
    params: ['account_id?: string;', 'from_date?: string;', 'platform?: string;', 'to_date?: string;'],
    response:
      '{ data: { avg_engagement: number; avg_impressions: number; posts_per_week: number; sample_weeks: number; }[]; optimal_frequency: number; }',
    markdown:
      "## get_posting_frequency\n\n`client.analytics.getPostingFrequency(account_id?: string, from_date?: string, platform?: string, to_date?: string): { data: object[]; optimal_frequency: number; }`\n\n**get** `/v1/analytics/posting-frequency`\n\nGet posting frequency vs engagement analysis\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `platform?: string`\n  Filter by platform\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { avg_engagement: number; avg_impressions: number; posts_per_week: number; sample_weeks: number; }[]; optimal_frequency: number; }`\n\n  - `data: { avg_engagement: number; avg_impressions: number; posts_per_week: number; sample_weeks: number; }[]`\n  - `optimal_frequency: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getPostingFrequency();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_daily_metrics',
    endpoint: '/v1/analytics/daily-metrics',
    httpMethod: 'get',
    summary: 'Get daily aggregated metrics',
    description: 'Get daily aggregated metrics',
    stainlessPath: '(resource) analytics > (method) list_daily_metrics',
    qualified: 'client.analytics.listDailyMetrics',
    params: ['account_id?: string;', 'from_date?: string;', 'platform?: string;', 'to_date?: string;'],
    response:
      '{ data: { clicks: number; comments: number; date: string; impressions: number; likes: number; platforms: object; post_count: number; shares: number; views: number; }[]; }',
    markdown:
      "## list_daily_metrics\n\n`client.analytics.listDailyMetrics(account_id?: string, from_date?: string, platform?: string, to_date?: string): { data: object[]; }`\n\n**get** `/v1/analytics/daily-metrics`\n\nGet daily aggregated metrics\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `platform?: string`\n  Filter by platform\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { clicks: number; comments: number; date: string; impressions: number; likes: number; platforms: object; post_count: number; shares: number; views: number; }[]; }`\n\n  - `data: { clicks: number; comments: number; date: string; impressions: number; likes: number; platforms: object; post_count: number; shares: number; views: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.analytics.listDailyMetrics();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_daily_views',
    endpoint: '/v1/analytics/youtube/daily-views',
    httpMethod: 'get',
    summary: 'Get YouTube daily views and watch time',
    description: 'Get YouTube daily views and watch time',
    stainlessPath: '(resource) analytics.youtube > (method) get_daily_views',
    qualified: 'client.analytics.youtube.getDailyViews',
    params: ['account_id: string;', 'from_date?: string;', 'to_date?: string;'],
    response:
      '{ data: { date: string; subscribers_gained: number; views: number; watch_time_minutes: number; }[]; }',
    markdown:
      "## get_daily_views\n\n`client.analytics.youtube.getDailyViews(account_id: string, from_date?: string, to_date?: string): { data: object[]; }`\n\n**get** `/v1/analytics/youtube/daily-views`\n\nGet YouTube daily views and watch time\n\n### Parameters\n\n- `account_id: string`\n  YouTube account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { date: string; subscribers_gained: number; views: number; watch_time_minutes: number; }[]; }`\n\n  - `data: { date: string; subscribers_gained: number; views: number; watch_time_minutes: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.analytics.youtube.getDailyViews({ account_id: 'account_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'check_post_length',
    endpoint: '/v1/tools/validate/post-length',
    httpMethod: 'post',
    summary: 'Check character counts against platform limits',
    description: 'Check character counts against platform limits',
    stainlessPath: '(resource) tools.validate > (method) check_post_length',
    qualified: 'client.tools.validate.checkPostLength',
    params: ['content: string;'],
    response:
      '{ platforms: { bluesky?: { count: number; limit: number; within_limit: boolean; }; discord?: { count: number; limit: number; within_limit: boolean; }; facebook?: { count: number; limit: number; within_limit: boolean; }; googlebusiness?: { count: number; limit: number; within_limit: boolean; }; instagram?: { count: number; limit: number; within_limit: boolean; }; linkedin?: { count: number; limit: number; within_limit: boolean; }; mastodon?: { count: number; limit: number; within_limit: boolean; }; pinterest?: { count: number; limit: number; within_limit: boolean; }; reddit?: { count: number; limit: number; within_limit: boolean; }; sms?: { count: number; limit: number; within_limit: boolean; }; snapchat?: { count: number; limit: number; within_limit: boolean; }; telegram?: { count: number; limit: number; within_limit: boolean; }; threads?: { count: number; limit: number; within_limit: boolean; }; tiktok?: { count: number; limit: number; within_limit: boolean; }; twitter?: { count: number; limit: number; within_limit: boolean; }; whatsapp?: { count: number; limit: number; within_limit: boolean; }; youtube?: { count: number; limit: number; within_limit: boolean; }; }; }',
    markdown:
      "## check_post_length\n\n`client.tools.validate.checkPostLength(content: string): { platforms: object; }`\n\n**post** `/v1/tools/validate/post-length`\n\nCheck character counts against platform limits\n\n### Parameters\n\n- `content: string`\n  Post content to check\n\n### Returns\n\n- `{ platforms: { bluesky?: { count: number; limit: number; within_limit: boolean; }; discord?: { count: number; limit: number; within_limit: boolean; }; facebook?: { count: number; limit: number; within_limit: boolean; }; googlebusiness?: { count: number; limit: number; within_limit: boolean; }; instagram?: { count: number; limit: number; within_limit: boolean; }; linkedin?: { count: number; limit: number; within_limit: boolean; }; mastodon?: { count: number; limit: number; within_limit: boolean; }; pinterest?: { count: number; limit: number; within_limit: boolean; }; reddit?: { count: number; limit: number; within_limit: boolean; }; sms?: { count: number; limit: number; within_limit: boolean; }; snapchat?: { count: number; limit: number; within_limit: boolean; }; telegram?: { count: number; limit: number; within_limit: boolean; }; threads?: { count: number; limit: number; within_limit: boolean; }; tiktok?: { count: number; limit: number; within_limit: boolean; }; twitter?: { count: number; limit: number; within_limit: boolean; }; whatsapp?: { count: number; limit: number; within_limit: boolean; }; youtube?: { count: number; limit: number; within_limit: boolean; }; }; }`\n\n  - `platforms: { bluesky?: { count: number; limit: number; within_limit: boolean; }; discord?: { count: number; limit: number; within_limit: boolean; }; facebook?: { count: number; limit: number; within_limit: boolean; }; googlebusiness?: { count: number; limit: number; within_limit: boolean; }; instagram?: { count: number; limit: number; within_limit: boolean; }; linkedin?: { count: number; limit: number; within_limit: boolean; }; mastodon?: { count: number; limit: number; within_limit: boolean; }; pinterest?: { count: number; limit: number; within_limit: boolean; }; reddit?: { count: number; limit: number; within_limit: boolean; }; sms?: { count: number; limit: number; within_limit: boolean; }; snapchat?: { count: number; limit: number; within_limit: boolean; }; telegram?: { count: number; limit: number; within_limit: boolean; }; threads?: { count: number; limit: number; within_limit: boolean; }; tiktok?: { count: number; limit: number; within_limit: boolean; }; twitter?: { count: number; limit: number; within_limit: boolean; }; whatsapp?: { count: number; limit: number; within_limit: boolean; }; youtube?: { count: number; limit: number; within_limit: boolean; }; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.checkPostLength({ content: 'content' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_subreddit',
    endpoint: '/v1/tools/validate/subreddit',
    httpMethod: 'get',
    summary: 'Check if a subreddit exists and get its details',
    description: 'Check if a subreddit exists and get its details',
    stainlessPath: '(resource) tools.validate > (method) retrieve_subreddit',
    qualified: 'client.tools.validate.retrieveSubreddit',
    params: ['name: string;'],
    response:
      '{ exists: boolean; name?: string; nsfw?: boolean; post_types?: { image: boolean; link: boolean; self: boolean; }; subscribers?: number; title?: string; }',
    markdown:
      "## retrieve_subreddit\n\n`client.tools.validate.retrieveSubreddit(name: string): { exists: boolean; name?: string; nsfw?: boolean; post_types?: object; subscribers?: number; title?: string; }`\n\n**get** `/v1/tools/validate/subreddit`\n\nCheck if a subreddit exists and get its details\n\n### Parameters\n\n- `name: string`\n  Subreddit name (without r/ prefix)\n\n### Returns\n\n- `{ exists: boolean; name?: string; nsfw?: boolean; post_types?: { image: boolean; link: boolean; self: boolean; }; subscribers?: number; title?: string; }`\n\n  - `exists: boolean`\n  - `name?: string`\n  - `nsfw?: boolean`\n  - `post_types?: { image: boolean; link: boolean; self: boolean; }`\n  - `subscribers?: number`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.retrieveSubreddit({ name: 'name' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'validate_media',
    endpoint: '/v1/tools/validate/media',
    httpMethod: 'post',
    summary: 'Validate a media URL for platform compatibility',
    description: 'Validate a media URL for platform compatibility',
    stainlessPath: '(resource) tools.validate > (method) validate_media',
    qualified: 'client.tools.validate.validateMedia',
    params: ['url: string;'],
    response:
      '{ accessible: boolean; platform_limits: { bluesky?: { max_size: number; within_limit: boolean; }; discord?: { max_size: number; within_limit: boolean; }; facebook?: { max_size: number; within_limit: boolean; }; googlebusiness?: { max_size: number; within_limit: boolean; }; instagram?: { max_size: number; within_limit: boolean; }; linkedin?: { max_size: number; within_limit: boolean; }; mastodon?: { max_size: number; within_limit: boolean; }; pinterest?: { max_size: number; within_limit: boolean; }; reddit?: { max_size: number; within_limit: boolean; }; sms?: { max_size: number; within_limit: boolean; }; snapchat?: { max_size: number; within_limit: boolean; }; telegram?: { max_size: number; within_limit: boolean; }; threads?: { max_size: number; within_limit: boolean; }; tiktok?: { max_size: number; within_limit: boolean; }; twitter?: { max_size: number; within_limit: boolean; }; whatsapp?: { max_size: number; within_limit: boolean; }; youtube?: { max_size: number; within_limit: boolean; }; }; content_type?: string; size?: number; }',
    markdown:
      "## validate_media\n\n`client.tools.validate.validateMedia(url: string): { accessible: boolean; platform_limits: object; content_type?: string; size?: number; }`\n\n**post** `/v1/tools/validate/media`\n\nValidate a media URL for platform compatibility\n\n### Parameters\n\n- `url: string`\n  Media URL to validate\n\n### Returns\n\n- `{ accessible: boolean; platform_limits: { bluesky?: { max_size: number; within_limit: boolean; }; discord?: { max_size: number; within_limit: boolean; }; facebook?: { max_size: number; within_limit: boolean; }; googlebusiness?: { max_size: number; within_limit: boolean; }; instagram?: { max_size: number; within_limit: boolean; }; linkedin?: { max_size: number; within_limit: boolean; }; mastodon?: { max_size: number; within_limit: boolean; }; pinterest?: { max_size: number; within_limit: boolean; }; reddit?: { max_size: number; within_limit: boolean; }; sms?: { max_size: number; within_limit: boolean; }; snapchat?: { max_size: number; within_limit: boolean; }; telegram?: { max_size: number; within_limit: boolean; }; threads?: { max_size: number; within_limit: boolean; }; tiktok?: { max_size: number; within_limit: boolean; }; twitter?: { max_size: number; within_limit: boolean; }; whatsapp?: { max_size: number; within_limit: boolean; }; youtube?: { max_size: number; within_limit: boolean; }; }; content_type?: string; size?: number; }`\n\n  - `accessible: boolean`\n  - `platform_limits: { bluesky?: { max_size: number; within_limit: boolean; }; discord?: { max_size: number; within_limit: boolean; }; facebook?: { max_size: number; within_limit: boolean; }; googlebusiness?: { max_size: number; within_limit: boolean; }; instagram?: { max_size: number; within_limit: boolean; }; linkedin?: { max_size: number; within_limit: boolean; }; mastodon?: { max_size: number; within_limit: boolean; }; pinterest?: { max_size: number; within_limit: boolean; }; reddit?: { max_size: number; within_limit: boolean; }; sms?: { max_size: number; within_limit: boolean; }; snapchat?: { max_size: number; within_limit: boolean; }; telegram?: { max_size: number; within_limit: boolean; }; threads?: { max_size: number; within_limit: boolean; }; tiktok?: { max_size: number; within_limit: boolean; }; twitter?: { max_size: number; within_limit: boolean; }; whatsapp?: { max_size: number; within_limit: boolean; }; youtube?: { max_size: number; within_limit: boolean; }; }`\n  - `content_type?: string`\n  - `size?: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.validateMedia({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'validate_post',
    endpoint: '/v1/tools/validate/post',
    httpMethod: 'post',
    summary: 'Validate a post (dry-run without publishing)',
    description: 'Validate a post (dry-run without publishing)',
    stainlessPath: '(resource) tools.validate > (method) validate_post',
    qualified: 'client.tools.validate.validatePost',
    params: [
      'scheduled_at: string;',
      'targets: string[];',
      'content?: string;',
      "media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[];",
      'target_options?: object;',
      'timezone?: string;',
    ],
    response:
      '{ errors: { code: string; message: string; target: string; }[]; valid: boolean; warnings: { code: string; message: string; target: string; }[]; }',
    markdown:
      "## validate_post\n\n`client.tools.validate.validatePost(scheduled_at: string, targets: string[], content?: string, media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[], target_options?: object, timezone?: string): { errors: object[]; valid: boolean; warnings: object[]; }`\n\n**post** `/v1/tools/validate/post`\n\nValidate a post (dry-run without publishing)\n\n### Parameters\n\n- `scheduled_at: string`\n  Publish intent. Use \"now\" to publish immediately, \"draft\" to save as draft, or an ISO 8601 timestamp to schedule.\n\n- `targets: string[]`\n  Account IDs, platform names, or group IDs to publish to\n\n- `content?: string`\n  Post text. Optional if target_options provide per-target content.\n\n- `media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  Media attachments\n\n- `target_options?: object`\n  Per-target customizations keyed by target value (account ID or platform name)\n\n- `timezone?: string`\n  IANA timezone for scheduling\n\n### Returns\n\n- `{ errors: { code: string; message: string; target: string; }[]; valid: boolean; warnings: { code: string; message: string; target: string; }[]; }`\n\n  - `errors: { code: string; message: string; target: string; }[]`\n  - `valid: boolean`\n  - `warnings: { code: string; message: string; target: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.validatePost({ scheduled_at: 'now', targets: ['string'] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'check_hashtag_safety',
    endpoint: '/v1/tools/instagram/hashtag-checker',
    httpMethod: 'post',
    summary: 'Check Instagram hashtag safety status',
    description: 'Check Instagram hashtag safety status',
    stainlessPath: '(resource) tools.instagram > (method) check_hashtag_safety',
    qualified: 'client.tools.instagram.checkHashtagSafety',
    params: ['hashtags: string[];'],
    response: "{ results: { hashtag: string; status: 'safe' | 'restricted' | 'banned'; }[]; }",
    markdown:
      "## check_hashtag_safety\n\n`client.tools.instagram.checkHashtagSafety(hashtags: string[]): { results: object[]; }`\n\n**post** `/v1/tools/instagram/hashtag-checker`\n\nCheck Instagram hashtag safety status\n\n### Parameters\n\n- `hashtags: string[]`\n  Hashtags to check (without # prefix)\n\n### Returns\n\n- `{ results: { hashtag: string; status: 'safe' | 'restricted' | 'banned'; }[]; }`\n\n  - `results: { hashtag: string; status: 'safe' | 'restricted' | 'banned'; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.tools.instagram.checkHashtagSafety({ hashtags: ['string'] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_next_slot',
    endpoint: '/v1/queue/next-slot',
    httpMethod: 'get',
    summary: 'Get next available queue slot',
    description: 'Get next available queue slot',
    stainlessPath: '(resource) queue > (method) get_next_slot',
    qualified: 'client.queue.getNextSlot',
    response: '{ next_slot_at: string; queue_id: string; }',
    markdown:
      "## get_next_slot\n\n`client.queue.getNextSlot(): { next_slot_at: string; queue_id: string; }`\n\n**get** `/v1/queue/next-slot`\n\nGet next available queue slot\n\n### Returns\n\n- `{ next_slot_at: string; queue_id: string; }`\n\n  - `next_slot_at: string`\n  - `queue_id: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.queue.getNextSlot();\n\nconsole.log(response);\n```",
  },
  {
    name: 'preview',
    endpoint: '/v1/queue/preview',
    httpMethod: 'get',
    summary: 'Preview upcoming queue slots',
    description: 'Preview upcoming queue slots',
    stainlessPath: '(resource) queue > (method) preview',
    qualified: 'client.queue.preview',
    params: ['count?: number;'],
    response: '{ slots: string[]; }',
    markdown:
      "## preview\n\n`client.queue.preview(count?: number): { slots: string[]; }`\n\n**get** `/v1/queue/preview`\n\nPreview upcoming queue slots\n\n### Parameters\n\n- `count?: number`\n  Number of upcoming slots to preview\n\n### Returns\n\n- `{ slots: string[]; }`\n\n  - `slots: string[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.queue.preview();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/queue/slots',
    httpMethod: 'post',
    summary: 'Create a queue schedule',
    description: 'Create a queue schedule',
    stainlessPath: '(resource) queue.slots > (method) create',
    qualified: 'client.queue.slots.create',
    params: [
      'slots: { day_of_week: number; time: string; timezone: string; }[];',
      'timezone: string;',
      'name?: string;',
    ],
    response:
      '{ id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }',
    markdown:
      "## create\n\n`client.queue.slots.create(slots: { day_of_week: number; time: string; timezone: string; }[], timezone: string, name?: string): { id: string; created_at: string; is_default: boolean; slots: object[]; updated_at: string; name?: string; }`\n\n**post** `/v1/queue/slots`\n\nCreate a queue schedule\n\n### Parameters\n\n- `slots: { day_of_week: number; time: string; timezone: string; }[]`\n  Time slots\n\n- `timezone: string`\n  Default timezone for slots\n\n- `name?: string`\n  Schedule name\n\n### Returns\n\n- `{ id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `slots: { day_of_week: number; time: string; timezone: string; }[]`\n  - `updated_at: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst slot = await client.queue.slots.create({ slots: [{\n  day_of_week: 0,\n  time: '73:16',\n  timezone: 'timezone',\n}], timezone: 'timezone' });\n\nconsole.log(slot);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/queue/slots',
    httpMethod: 'put',
    summary: 'Update queue schedule',
    description: 'Update queue schedule',
    stainlessPath: '(resource) queue.slots > (method) update',
    qualified: 'client.queue.slots.update',
    params: [
      'name?: string;',
      'set_as_default?: boolean;',
      'slots?: { day_of_week: number; time: string; timezone: string; }[];',
    ],
    response:
      '{ id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }',
    markdown:
      "## update\n\n`client.queue.slots.update(name?: string, set_as_default?: boolean, slots?: { day_of_week: number; time: string; timezone: string; }[]): { id: string; created_at: string; is_default: boolean; slots: object[]; updated_at: string; name?: string; }`\n\n**put** `/v1/queue/slots`\n\nUpdate queue schedule\n\n### Parameters\n\n- `name?: string`\n  Schedule name\n\n- `set_as_default?: boolean`\n  Set this schedule as the default\n\n- `slots?: { day_of_week: number; time: string; timezone: string; }[]`\n  Updated time slots\n\n### Returns\n\n- `{ id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `slots: { day_of_week: number; time: string; timezone: string; }[]`\n  - `updated_at: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst slot = await client.queue.slots.update();\n\nconsole.log(slot);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/queue/slots',
    httpMethod: 'get',
    summary: 'List queue schedules',
    description: 'List queue schedules',
    stainlessPath: '(resource) queue.slots > (method) list',
    qualified: 'client.queue.slots.list',
    response:
      '{ data: { id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }[]; }',
    markdown:
      "## list\n\n`client.queue.slots.list(): { data: object[]; }`\n\n**get** `/v1/queue/slots`\n\nList queue schedules\n\n### Returns\n\n- `{ data: { id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }[]; }`\n\n  - `data: { id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst slots = await client.queue.slots.list();\n\nconsole.log(slots);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/queue/slots',
    httpMethod: 'delete',
    summary: 'Delete queue schedule',
    description: 'Delete queue schedule',
    stainlessPath: '(resource) queue.slots > (method) delete',
    qualified: 'client.queue.slots.delete',
    markdown:
      "## delete\n\n`client.queue.slots.delete(): void`\n\n**delete** `/v1/queue/slots`\n\nDelete queue schedule\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.queue.slots.delete()\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/twitter/retweet',
    httpMethod: 'post',
    summary: 'Retweet a tweet',
    description: 'Retweet a tweet',
    stainlessPath: '(resource) twitter.retweet > (method) create',
    qualified: 'client.twitter.retweet.create',
    params: ['account_id: string;', 'tweet_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## create\n\n`client.twitter.retweet.create(account_id: string, tweet_id: string): { success: boolean; }`\n\n**post** `/v1/twitter/retweet`\n\nRetweet a tweet\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to retweet\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst retweet = await client.twitter.retweet.create({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(retweet);\n```",
  },
  {
    name: 'undo',
    endpoint: '/v1/twitter/retweet',
    httpMethod: 'delete',
    summary: 'Undo a retweet',
    description: 'Undo a retweet',
    stainlessPath: '(resource) twitter.retweet > (method) undo',
    qualified: 'client.twitter.retweet.undo',
    params: ['account_id: string;', 'tweet_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## undo\n\n`client.twitter.retweet.undo(account_id: string, tweet_id: string): { success: boolean; }`\n\n**delete** `/v1/twitter/retweet`\n\nUndo a retweet\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to retweet\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.twitter.retweet.undo({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/twitter/bookmark',
    httpMethod: 'post',
    summary: 'Bookmark a tweet',
    description: 'Bookmark a tweet',
    stainlessPath: '(resource) twitter.bookmark > (method) create',
    qualified: 'client.twitter.bookmark.create',
    params: ['account_id: string;', 'tweet_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## create\n\n`client.twitter.bookmark.create(account_id: string, tweet_id: string): { success: boolean; }`\n\n**post** `/v1/twitter/bookmark`\n\nBookmark a tweet\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to bookmark\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst bookmark = await client.twitter.bookmark.create({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(bookmark);\n```",
  },
  {
    name: 'remove',
    endpoint: '/v1/twitter/bookmark',
    httpMethod: 'delete',
    summary: 'Remove a bookmark',
    description: 'Remove a bookmark',
    stainlessPath: '(resource) twitter.bookmark > (method) remove',
    qualified: 'client.twitter.bookmark.remove',
    params: ['account_id: string;', 'tweet_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## remove\n\n`client.twitter.bookmark.remove(account_id: string, tweet_id: string): { success: boolean; }`\n\n**delete** `/v1/twitter/bookmark`\n\nRemove a bookmark\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to bookmark\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst bookmark = await client.twitter.bookmark.remove({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(bookmark);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/twitter/follow',
    httpMethod: 'post',
    summary: 'Follow a user',
    description: 'Follow a user',
    stainlessPath: '(resource) twitter.follow > (method) create',
    qualified: 'client.twitter.follow.create',
    params: ['account_id: string;', 'target_user_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## create\n\n`client.twitter.follow.create(account_id: string, target_user_id: string): { success: boolean; }`\n\n**post** `/v1/twitter/follow`\n\nFollow a user\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `target_user_id: string`\n  User ID to follow\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst follow = await client.twitter.follow.create({ account_id: 'account_id', target_user_id: 'target_user_id' });\n\nconsole.log(follow);\n```",
  },
  {
    name: 'unfollow',
    endpoint: '/v1/twitter/follow',
    httpMethod: 'delete',
    summary: 'Unfollow a user',
    description: 'Unfollow a user',
    stainlessPath: '(resource) twitter.follow > (method) unfollow',
    qualified: 'client.twitter.follow.unfollow',
    params: ['account_id: string;', 'target_user_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## unfollow\n\n`client.twitter.follow.unfollow(account_id: string, target_user_id: string): { success: boolean; }`\n\n**delete** `/v1/twitter/follow`\n\nUnfollow a user\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `target_user_id: string`\n  User ID to follow\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.twitter.follow.unfollow({ account_id: 'account_id', target_user_id: 'target_user_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/inbox/comments/{post_id}',
    httpMethod: 'get',
    summary: 'Get comments for a specific post',
    description: 'Get comments for a specific post',
    stainlessPath: '(resource) inbox.comments > (method) retrieve',
    qualified: 'client.inbox.comments.retrieve',
    params: [
      'post_id: string;',
      'account_id?: string;',
      'cursor?: string;',
      'limit?: number;',
      'platform?: string;',
    ],
    response:
      '{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }',
    markdown:
      "## retrieve\n\n`client.inbox.comments.retrieve(post_id: string, account_id?: string, cursor?: string, limit?: number, platform?: string): { data: object[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n**get** `/v1/inbox/comments/{post_id}`\n\nGet comments for a specific post\n\n### Parameters\n\n- `post_id: string`\n  Post ID\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n  - `data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]`\n  - `has_more?: boolean`\n  - `next_cursor?: string`\n  - `platform?: string`\n  - `post_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst comment = await client.inbox.comments.retrieve('post_id');\n\nconsole.log(comment);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/inbox/comments',
    httpMethod: 'get',
    summary: 'List comments across platforms',
    description: 'List comments across platforms',
    stainlessPath: '(resource) inbox.comments > (method) list',
    qualified: 'client.inbox.comments.list',
    params: ['account_id?: string;', 'cursor?: string;', 'limit?: number;', 'platform?: string;'],
    response:
      '{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }',
    markdown:
      "## list\n\n`client.inbox.comments.list(account_id?: string, cursor?: string, limit?: number, platform?: string): { data: object[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n**get** `/v1/inbox/comments`\n\nList comments across platforms\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n  - `data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]`\n  - `has_more?: boolean`\n  - `next_cursor?: string`\n  - `platform?: string`\n  - `post_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst comments = await client.inbox.comments.list();\n\nconsole.log(comments);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/inbox/comments/{comment_id}',
    httpMethod: 'delete',
    summary: 'Delete a comment',
    description: 'Delete a comment',
    stainlessPath: '(resource) inbox.comments > (method) delete',
    qualified: 'client.inbox.comments.delete',
    params: ['comment_id: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## delete\n\n`client.inbox.comments.delete(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**delete** `/v1/inbox/comments/{comment_id}`\n\nDelete a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst comment = await client.inbox.comments.delete('comment_id');\n\nconsole.log(comment);\n```",
  },
  {
    name: 'private_reply',
    endpoint: '/v1/inbox/comments/{comment_id}/private-reply',
    httpMethod: 'post',
    summary: 'Send a private reply to a commenter',
    description: 'Send a private reply to a commenter',
    stainlessPath: '(resource) inbox.comments > (method) private_reply',
    qualified: 'client.inbox.comments.privateReply',
    params: ['comment_id: string;', 'account_id: string;', 'text: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## private_reply\n\n`client.inbox.comments.privateReply(comment_id: string, account_id: string, text: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{comment_id}/private-reply`\n\nSend a private reply to a commenter\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n- `account_id: string`\n  Account ID to reply from\n\n- `text: string`\n  Private reply text\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.inbox.comments.privateReply('comment_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'reply',
    endpoint: '/v1/inbox/comments/{post_id}/reply',
    httpMethod: 'post',
    summary: 'Reply to a comment',
    description: 'Reply to a comment',
    stainlessPath: '(resource) inbox.comments > (method) reply',
    qualified: 'client.inbox.comments.reply',
    params: ['post_id: string;', 'account_id: string;', 'text: string;', 'comment_id?: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## reply\n\n`client.inbox.comments.reply(post_id: string, account_id: string, text: string, comment_id?: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{post_id}/reply`\n\nReply to a comment\n\n### Parameters\n\n- `post_id: string`\n  Post ID\n\n- `account_id: string`\n  Account ID to reply from\n\n- `text: string`\n  Reply text\n\n- `comment_id?: string`\n  Parent comment ID for threaded replies\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.inbox.comments.reply('post_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/inbox/comments/{comment_id}/hide',
    httpMethod: 'post',
    summary: 'Hide a comment',
    description: 'Hide a comment',
    stainlessPath: '(resource) inbox.comments.hide > (method) create',
    qualified: 'client.inbox.comments.hide.create',
    params: ['comment_id: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## create\n\n`client.inbox.comments.hide.create(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{comment_id}/hide`\n\nHide a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst hide = await client.inbox.comments.hide.create('comment_id');\n\nconsole.log(hide);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/inbox/comments/{comment_id}/hide',
    httpMethod: 'delete',
    summary: 'Unhide a comment',
    description: 'Unhide a comment',
    stainlessPath: '(resource) inbox.comments.hide > (method) delete',
    qualified: 'client.inbox.comments.hide.delete',
    params: ['comment_id: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## delete\n\n`client.inbox.comments.hide.delete(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**delete** `/v1/inbox/comments/{comment_id}/hide`\n\nUnhide a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst hide = await client.inbox.comments.hide.delete('comment_id');\n\nconsole.log(hide);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/inbox/comments/{comment_id}/like',
    httpMethod: 'post',
    summary: 'Like a comment',
    description: 'Like a comment',
    stainlessPath: '(resource) inbox.comments.like > (method) create',
    qualified: 'client.inbox.comments.like.create',
    params: ['comment_id: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## create\n\n`client.inbox.comments.like.create(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{comment_id}/like`\n\nLike a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst like = await client.inbox.comments.like.create('comment_id');\n\nconsole.log(like);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/inbox/comments/{comment_id}/like',
    httpMethod: 'delete',
    summary: 'Unlike a comment',
    description: 'Unlike a comment',
    stainlessPath: '(resource) inbox.comments.like > (method) delete',
    qualified: 'client.inbox.comments.like.delete',
    params: ['comment_id: string;'],
    response: '{ success: boolean; comment_id?: string; }',
    markdown:
      "## delete\n\n`client.inbox.comments.like.delete(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**delete** `/v1/inbox/comments/{comment_id}/like`\n\nUnlike a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst like = await client.inbox.comments.like.delete('comment_id');\n\nconsole.log(like);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/inbox/messages/{conversation_id}',
    httpMethod: 'get',
    summary: 'Get messages in a conversation',
    description: 'Get messages in a conversation',
    stainlessPath: '(resource) inbox.messages > (method) retrieve',
    qualified: 'client.inbox.messages.retrieve',
    params: ['conversation_id: string;'],
    response:
      "{ data: { id: string; created_at: string; sender: 'user' | 'participant'; text: string; attachments?: { type: string; url: string; }[]; }[]; has_more?: boolean; next_cursor?: string; }",
    markdown:
      "## retrieve\n\n`client.inbox.messages.retrieve(conversation_id: string): { data: object[]; has_more?: boolean; next_cursor?: string; }`\n\n**get** `/v1/inbox/messages/{conversation_id}`\n\nGet messages in a conversation\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n### Returns\n\n- `{ data: { id: string; created_at: string; sender: 'user' | 'participant'; text: string; attachments?: { type: string; url: string; }[]; }[]; has_more?: boolean; next_cursor?: string; }`\n\n  - `data: { id: string; created_at: string; sender: 'user' | 'participant'; text: string; attachments?: { type: string; url: string; }[]; }[]`\n  - `has_more?: boolean`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst message = await client.inbox.messages.retrieve('conversation_id');\n\nconsole.log(message);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/inbox/messages',
    httpMethod: 'get',
    summary: 'List message conversations',
    description: 'List message conversations',
    stainlessPath: '(resource) inbox.messages > (method) list',
    qualified: 'client.inbox.messages.list',
    params: ['account_id?: string;', 'cursor?: string;', 'limit?: number;', 'platform?: string;'],
    response:
      '{ data: { id: string; account_id: string; participant_name: string; platform: string; updated_at: string; last_message?: string; participant_avatar?: string; unread_count?: number; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.inbox.messages.list(account_id?: string, cursor?: string, limit?: number, platform?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/inbox/messages`\n\nList message conversations\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; account_id: string; participant_name: string; platform: string; updated_at: string; last_message?: string; participant_avatar?: string; unread_count?: number; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; account_id: string; participant_name: string; platform: string; updated_at: string; last_message?: string; participant_avatar?: string; unread_count?: number; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst messages = await client.inbox.messages.list();\n\nconsole.log(messages);\n```",
  },
  {
    name: 'archive',
    endpoint: '/v1/inbox/messages/{conversation_id}/archive',
    httpMethod: 'put',
    summary: 'Archive a conversation',
    description: 'Archive a conversation',
    stainlessPath: '(resource) inbox.messages > (method) archive',
    qualified: 'client.inbox.messages.archive',
    params: ['conversation_id: string;'],
    response: '{ success: boolean; message_id?: string; }',
    markdown:
      "## archive\n\n`client.inbox.messages.archive(conversation_id: string): { success: boolean; message_id?: string; }`\n\n**put** `/v1/inbox/messages/{conversation_id}/archive`\n\nArchive a conversation\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n### Returns\n\n- `{ success: boolean; message_id?: string; }`\n\n  - `success: boolean`\n  - `message_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.inbox.messages.archive('conversation_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'edit',
    endpoint: '/v1/inbox/messages/{conversation_id}/{message_id}',
    httpMethod: 'patch',
    summary: 'Edit a sent message',
    description: 'Edit a sent message',
    stainlessPath: '(resource) inbox.messages > (method) edit',
    qualified: 'client.inbox.messages.edit',
    params: ['conversation_id: string;', 'message_id: string;', 'text: string;'],
    response: '{ success: boolean; message_id?: string; }',
    markdown:
      "## edit\n\n`client.inbox.messages.edit(conversation_id: string, message_id: string, text: string): { success: boolean; message_id?: string; }`\n\n**patch** `/v1/inbox/messages/{conversation_id}/{message_id}`\n\nEdit a sent message\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n- `message_id: string`\n  Message ID\n\n- `text: string`\n  Updated message text\n\n### Returns\n\n- `{ success: boolean; message_id?: string; }`\n\n  - `success: boolean`\n  - `message_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.inbox.messages.edit('message_id', { conversation_id: 'conversation_id', text: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'send',
    endpoint: '/v1/inbox/messages/{conversation_id}',
    httpMethod: 'post',
    summary: 'Send a message in a conversation',
    description: 'Send a message in a conversation',
    stainlessPath: '(resource) inbox.messages > (method) send',
    qualified: 'client.inbox.messages.send',
    params: [
      'conversation_id: string;',
      'account_id: string;',
      'text: string;',
      'attachments?: { type: string; url: string; }[];',
      'message_tag?: string;',
      'reply_to?: string;',
    ],
    response: '{ success: boolean; message_id?: string; }',
    markdown:
      "## send\n\n`client.inbox.messages.send(conversation_id: string, account_id: string, text: string, attachments?: { type: string; url: string; }[], message_tag?: string, reply_to?: string): { success: boolean; message_id?: string; }`\n\n**post** `/v1/inbox/messages/{conversation_id}`\n\nSend a message in a conversation\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n- `account_id: string`\n  Account ID to send from\n\n- `text: string`\n  Message text\n\n- `attachments?: { type: string; url: string; }[]`\n  Attachments\n\n- `message_tag?: string`\n  Message tag (e.g. for Facebook outside 24h window)\n\n- `reply_to?: string`\n  Message ID to reply to\n\n### Returns\n\n- `{ success: boolean; message_id?: string; }`\n\n  - `success: boolean`\n  - `message_id?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.inbox.messages.send('conversation_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/inbox/reviews',
    httpMethod: 'get',
    summary: 'List reviews across platforms',
    description: 'List reviews across platforms',
    stainlessPath: '(resource) inbox.reviews > (method) list',
    qualified: 'client.inbox.reviews.list',
    params: [
      'account_id?: string;',
      'cursor?: string;',
      'limit?: number;',
      'max_rating?: number;',
      'min_rating?: number;',
      'platform?: string;',
    ],
    response:
      '{ data: { id: string; author_name: string; created_at: string; platform: string; rating: number; reply?: string; text?: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.inbox.reviews.list(account_id?: string, cursor?: string, limit?: number, max_rating?: number, min_rating?: number, platform?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/inbox/reviews`\n\nList reviews across platforms\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `max_rating?: number`\n\n- `min_rating?: number`\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; author_name: string; created_at: string; platform: string; rating: number; reply?: string; text?: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; author_name: string; created_at: string; platform: string; rating: number; reply?: string; text?: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst reviews = await client.inbox.reviews.list();\n\nconsole.log(reviews);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/inbox/reviews/{review_id}/reply',
    httpMethod: 'post',
    summary: 'Reply to a review',
    description: 'Reply to a review',
    stainlessPath: '(resource) inbox.reviews.reply > (method) create',
    qualified: 'client.inbox.reviews.reply.create',
    params: ['review_id: string;', 'account_id: string;', 'text: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## create\n\n`client.inbox.reviews.reply.create(review_id: string, account_id: string, text: string): { success: boolean; }`\n\n**post** `/v1/inbox/reviews/{review_id}/reply`\n\nReply to a review\n\n### Parameters\n\n- `review_id: string`\n  Review ID\n\n- `account_id: string`\n  Account ID\n\n- `text: string`\n  Reply text\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst reply = await client.inbox.reviews.reply.create('review_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(reply);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/inbox/reviews/{review_id}/reply',
    httpMethod: 'delete',
    summary: 'Delete a review reply',
    description: 'Delete a review reply',
    stainlessPath: '(resource) inbox.reviews.reply > (method) delete',
    qualified: 'client.inbox.reviews.reply.delete',
    params: ['review_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## delete\n\n`client.inbox.reviews.reply.delete(review_id: string): { success: boolean; }`\n\n**delete** `/v1/inbox/reviews/{review_id}/reply`\n\nDelete a review reply\n\n### Parameters\n\n- `review_id: string`\n  Review ID\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst reply = await client.inbox.reviews.reply.delete('review_id');\n\nconsole.log(reply);\n```",
  },
  {
    name: 'get_feed',
    endpoint: '/v1/reddit/feed',
    httpMethod: 'get',
    summary: 'Get subreddit feed',
    description: 'Get subreddit feed',
    stainlessPath: '(resource) reddit > (method) get_feed',
    qualified: 'client.reddit.getFeed',
    params: [
      'account_id: string;',
      'subreddit: string;',
      'cursor?: string;',
      'from?: string;',
      'limit?: number;',
      "sort?: 'hot' | 'new' | 'top' | 'rising';",
      "time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';",
      'to?: string;',
    ],
    response:
      '{ data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## get_feed\n\n`client.reddit.getFeed(account_id: string, subreddit: string, cursor?: string, from?: string, limit?: number, sort?: 'hot' | 'new' | 'top' | 'rising', time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all', to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/reddit/feed`\n\nGet subreddit feed\n\n### Parameters\n\n- `account_id: string`\n  Reddit account ID\n\n- `subreddit: string`\n  Subreddit name\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `sort?: 'hot' | 'new' | 'top' | 'rising'`\n  Sort order\n\n- `time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'`\n  Time filter (for top sort)\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.reddit.getFeed({ account_id: 'account_id', subreddit: 'subreddit' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'search',
    endpoint: '/v1/reddit/search',
    httpMethod: 'get',
    summary: 'Search Reddit posts',
    description: 'Search Reddit posts',
    stainlessPath: '(resource) reddit > (method) search',
    qualified: 'client.reddit.search',
    params: [
      'account_id: string;',
      'query: string;',
      'cursor?: string;',
      'from?: string;',
      'limit?: number;',
      "sort?: 'relevance' | 'hot' | 'top' | 'new' | 'comments';",
      'subreddit?: string;',
      "time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';",
      'to?: string;',
    ],
    response:
      '{ data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## search\n\n`client.reddit.search(account_id: string, query: string, cursor?: string, from?: string, limit?: number, sort?: 'relevance' | 'hot' | 'top' | 'new' | 'comments', subreddit?: string, time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all', to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/reddit/search`\n\nSearch Reddit posts\n\n### Parameters\n\n- `account_id: string`\n  Reddit account ID\n\n- `query: string`\n  Search query\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `sort?: 'relevance' | 'hot' | 'top' | 'new' | 'comments'`\n  Sort order\n\n- `subreddit?: string`\n  Limit to subreddit\n\n- `time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'`\n  Time filter\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.reddit.search({ account_id: 'account_id', query: 'query' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'bulk_send',
    endpoint: '/v1/whatsapp/bulk-send',
    httpMethod: 'post',
    summary: 'Send bulk WhatsApp messages via template',
    description: 'Send bulk WhatsApp messages via template',
    stainlessPath: '(resource) whatsapp > (method) bulk_send',
    qualified: 'client.whatsapp.bulkSend',
    params: [
      'account_id: string;',
      'recipients: { phone: string; variables?: object; }[];',
      "template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; };",
    ],
    response:
      "{ results: { phone: string; status: 'sent' | 'failed'; error?: string; }[]; summary: { failed: number; sent: number; }; }",
    markdown:
      "## bulk_send\n\n`client.whatsapp.bulkSend(account_id: string, recipients: { phone: string; variables?: object; }[], template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }): { results: object[]; summary: object; }`\n\n**post** `/v1/whatsapp/bulk-send`\n\nSend bulk WhatsApp messages via template\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `recipients: { phone: string; variables?: object; }[]`\n  Recipients\n\n- `template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }`\n  - `language: string`\n    Template language code\n  - `name: string`\n    Template name\n  - `components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]`\n    Template components\n\n### Returns\n\n- `{ results: { phone: string; status: 'sent' | 'failed'; error?: string; }[]; summary: { failed: number; sent: number; }; }`\n\n  - `results: { phone: string; status: 'sent' | 'failed'; error?: string; }[]`\n  - `summary: { failed: number; sent: number; }`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.bulkSend({\n  account_id: 'account_id',\n  recipients: [{ phone: 'phone' }],\n  template: { language: 'language', name: 'name' },\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_phone_numbers',
    endpoint: '/v1/whatsapp/phone-numbers',
    httpMethod: 'get',
    summary: 'List registered phone numbers',
    description: 'List registered phone numbers',
    stainlessPath: '(resource) whatsapp > (method) list_phone_numbers',
    qualified: 'client.whatsapp.listPhoneNumbers',
    params: ['account_id: string;'],
    response:
      "{ data: { id: string; phone_number: string; status: 'active' | 'inactive' | 'pending'; display_name?: string; }[]; }",
    markdown:
      "## list_phone_numbers\n\n`client.whatsapp.listPhoneNumbers(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/phone-numbers`\n\nList registered phone numbers\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { id: string; phone_number: string; status: 'active' | 'inactive' | 'pending'; display_name?: string; }[]; }`\n\n  - `data: { id: string; phone_number: string; status: 'active' | 'inactive' | 'pending'; display_name?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.listPhoneNumbers({ account_id: 'account_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/whatsapp/broadcasts',
    httpMethod: 'post',
    summary: 'Create a broadcast',
    description: 'Create a broadcast',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) create',
    qualified: 'client.whatsapp.broadcasts.create',
    params: [
      'account_id: string;',
      'name: string;',
      'recipients: { phone: string; variables?: object; }[];',
      "template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; };",
      'scheduled_at?: string;',
    ],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## create\n\n`client.whatsapp.broadcasts.create(account_id: string, name: string, recipients: { phone: string; variables?: object; }[], template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }, scheduled_at?: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**post** `/v1/whatsapp/broadcasts`\n\nCreate a broadcast\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `name: string`\n  Broadcast name\n\n- `recipients: { phone: string; variables?: object; }[]`\n  Recipient list\n\n- `template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }`\n  - `language: string`\n    Template language code\n  - `name: string`\n    Template name\n  - `components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]`\n\n- `scheduled_at?: string`\n  ISO 8601 timestamp to schedule send\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst broadcast = await client.whatsapp.broadcasts.create({\n  account_id: 'account_id',\n  name: 'name',\n  recipients: [{ phone: 'phone' }],\n  template: { language: 'language', name: 'name' },\n});\n\nconsole.log(broadcast);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}',
    httpMethod: 'get',
    summary: 'Get broadcast details',
    description: 'Get broadcast details',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) retrieve',
    qualified: 'client.whatsapp.broadcasts.retrieve',
    params: ['broadcast_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## retrieve\n\n`client.whatsapp.broadcasts.retrieve(broadcast_id: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**get** `/v1/whatsapp/broadcasts/{broadcast_id}`\n\nGet broadcast details\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst broadcast = await client.whatsapp.broadcasts.retrieve('broadcast_id');\n\nconsole.log(broadcast);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/whatsapp/broadcasts',
    httpMethod: 'get',
    summary: 'List broadcasts',
    description: 'List broadcasts',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) list',
    qualified: 'client.whatsapp.broadcasts.list',
    params: ['account_id: string;'],
    response:
      "{ data: { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }[]; }",
    markdown:
      "## list\n\n`client.whatsapp.broadcasts.list(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/broadcasts`\n\nList broadcasts\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }[]; }`\n\n  - `data: { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst broadcasts = await client.whatsapp.broadcasts.list({ account_id: 'account_id' });\n\nconsole.log(broadcasts);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}',
    httpMethod: 'delete',
    summary: 'Delete a broadcast',
    description: 'Delete a broadcast',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) delete',
    qualified: 'client.whatsapp.broadcasts.delete',
    params: ['broadcast_id: string;'],
    markdown:
      "## delete\n\n`client.whatsapp.broadcasts.delete(broadcast_id: string): void`\n\n**delete** `/v1/whatsapp/broadcasts/{broadcast_id}`\n\nDelete a broadcast\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.whatsapp.broadcasts.delete('broadcast_id')\n```",
  },
  {
    name: 'schedule',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}/schedule',
    httpMethod: 'post',
    summary: 'Schedule a broadcast',
    description: 'Schedule a broadcast',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) schedule',
    qualified: 'client.whatsapp.broadcasts.schedule',
    params: ['broadcast_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## schedule\n\n`client.whatsapp.broadcasts.schedule(broadcast_id: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**post** `/v1/whatsapp/broadcasts/{broadcast_id}/schedule`\n\nSchedule a broadcast\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.broadcasts.schedule('broadcast_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'send',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}/send',
    httpMethod: 'post',
    summary: 'Send a broadcast immediately',
    description: 'Send a broadcast immediately',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) send',
    qualified: 'client.whatsapp.broadcasts.send',
    params: ['broadcast_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## send\n\n`client.whatsapp.broadcasts.send(broadcast_id: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**post** `/v1/whatsapp/broadcasts/{broadcast_id}/send`\n\nSend a broadcast immediately\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.broadcasts.send('broadcast_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/whatsapp/templates',
    httpMethod: 'post',
    summary: 'Create a message template',
    description: 'Create a message template',
    stainlessPath: '(resource) whatsapp.templates > (method) create',
    qualified: 'client.whatsapp.templates.create',
    params: [
      'account_id: string;',
      "category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';",
      "components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[];",
      'language: string;',
      'name: string;',
    ],
    response:
      "{ category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }",
    markdown:
      "## create\n\n`client.whatsapp.templates.create(account_id: string, category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION', components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[], language: string, name: string): { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: object[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n**post** `/v1/whatsapp/templates`\n\nCreate a message template\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'`\n  Template category\n\n- `components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]`\n  Template components\n\n- `language: string`\n  Template language code\n\n- `name: string`\n  Template name\n\n### Returns\n\n- `{ category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n  - `category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'`\n  - `components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]`\n  - `language: string`\n  - `name: string`\n  - `status: 'APPROVED' | 'PENDING' | 'REJECTED'`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst template = await client.whatsapp.templates.create({\n  account_id: 'account_id',\n  category: 'MARKETING',\n  components: [{ type: 'HEADER' }],\n  language: 'language',\n  name: 'name',\n});\n\nconsole.log(template);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/whatsapp/templates/{template_name}',
    httpMethod: 'get',
    summary: 'Get template details',
    description: 'Get template details',
    stainlessPath: '(resource) whatsapp.templates > (method) retrieve',
    qualified: 'client.whatsapp.templates.retrieve',
    params: ['template_name: string;', 'account_id: string;'],
    response:
      "{ category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }",
    markdown:
      "## retrieve\n\n`client.whatsapp.templates.retrieve(template_name: string, account_id: string): { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: object[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n**get** `/v1/whatsapp/templates/{template_name}`\n\nGet template details\n\n### Parameters\n\n- `template_name: string`\n  Template name\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n  - `category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'`\n  - `components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]`\n  - `language: string`\n  - `name: string`\n  - `status: 'APPROVED' | 'PENDING' | 'REJECTED'`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst template = await client.whatsapp.templates.retrieve('template_name', { account_id: 'account_id' });\n\nconsole.log(template);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/whatsapp/templates',
    httpMethod: 'get',
    summary: 'List message templates',
    description: 'List message templates',
    stainlessPath: '(resource) whatsapp.templates > (method) list',
    qualified: 'client.whatsapp.templates.list',
    params: ['account_id: string;'],
    response:
      "{ data: { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: object[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }[]; }",
    markdown:
      "## list\n\n`client.whatsapp.templates.list(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/templates`\n\nList message templates\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: object[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }[]; }`\n\n  - `data: { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst templates = await client.whatsapp.templates.list({ account_id: 'account_id' });\n\nconsole.log(templates);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/whatsapp/templates/{template_name}',
    httpMethod: 'delete',
    summary: 'Delete a message template',
    description: 'Delete a message template',
    stainlessPath: '(resource) whatsapp.templates > (method) delete',
    qualified: 'client.whatsapp.templates.delete',
    params: ['template_name: string;', 'account_id: string;'],
    markdown:
      "## delete\n\n`client.whatsapp.templates.delete(template_name: string, account_id: string): void`\n\n**delete** `/v1/whatsapp/templates/{template_name}`\n\nDelete a message template\n\n### Parameters\n\n- `template_name: string`\n  Template name\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.whatsapp.templates.delete('template_name', { account_id: 'account_id' })\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/whatsapp/contacts',
    httpMethod: 'post',
    summary: 'Create a contact',
    description: 'Create a contact',
    stainlessPath: '(resource) whatsapp.contacts > (method) create',
    qualified: 'client.whatsapp.contacts.create',
    params: [
      'account_id: string;',
      'phone: string;',
      'email?: string;',
      'name?: string;',
      'tags?: string[];',
    ],
    response:
      '{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }',
    markdown:
      "## create\n\n`client.whatsapp.contacts.create(account_id: string, phone: string, email?: string, name?: string, tags?: string[]): { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n**post** `/v1/whatsapp/contacts`\n\nCreate a contact\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `phone: string`\n  Phone number in E.164 format\n\n- `email?: string`\n  Email address\n\n- `name?: string`\n  Contact name\n\n- `tags?: string[]`\n  Tags\n\n### Returns\n\n- `{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `opted_in: boolean`\n  - `phone: string`\n  - `email?: string`\n  - `groups?: string[]`\n  - `name?: string`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst contact = await client.whatsapp.contacts.create({ account_id: 'account_id', phone: 'phone' });\n\nconsole.log(contact);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/whatsapp/contacts/{contact_id}',
    httpMethod: 'get',
    summary: 'Get contact details',
    description: 'Get contact details',
    stainlessPath: '(resource) whatsapp.contacts > (method) retrieve',
    qualified: 'client.whatsapp.contacts.retrieve',
    params: ['contact_id: string;'],
    response:
      '{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }',
    markdown:
      "## retrieve\n\n`client.whatsapp.contacts.retrieve(contact_id: string): { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n**get** `/v1/whatsapp/contacts/{contact_id}`\n\nGet contact details\n\n### Parameters\n\n- `contact_id: string`\n  Contact ID\n\n### Returns\n\n- `{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `opted_in: boolean`\n  - `phone: string`\n  - `email?: string`\n  - `groups?: string[]`\n  - `name?: string`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst contact = await client.whatsapp.contacts.retrieve('contact_id');\n\nconsole.log(contact);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/whatsapp/contacts',
    httpMethod: 'get',
    summary: 'List contacts',
    description: 'List contacts',
    stainlessPath: '(resource) whatsapp.contacts > (method) list',
    qualified: 'client.whatsapp.contacts.list',
    params: [
      'account_id: string;',
      'cursor?: string;',
      'limit?: number;',
      'search?: string;',
      'tag?: string;',
    ],
    response:
      '{ data: { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.whatsapp.contacts.list(account_id: string, cursor?: string, limit?: number, search?: string, tag?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/whatsapp/contacts`\n\nList contacts\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `search?: string`\n  Search by name or phone\n\n- `tag?: string`\n  Filter by tag\n\n### Returns\n\n- `{ data: { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst contacts = await client.whatsapp.contacts.list({ account_id: 'account_id' });\n\nconsole.log(contacts);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/whatsapp/contacts/{contact_id}',
    httpMethod: 'delete',
    summary: 'Delete a contact',
    description: 'Delete a contact',
    stainlessPath: '(resource) whatsapp.contacts > (method) delete',
    qualified: 'client.whatsapp.contacts.delete',
    params: ['contact_id: string;'],
    markdown:
      "## delete\n\n`client.whatsapp.contacts.delete(contact_id: string): void`\n\n**delete** `/v1/whatsapp/contacts/{contact_id}`\n\nDelete a contact\n\n### Parameters\n\n- `contact_id: string`\n  Contact ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.whatsapp.contacts.delete('contact_id')\n```",
  },
  {
    name: 'bulk_operations',
    endpoint: '/v1/whatsapp/contacts/bulk',
    httpMethod: 'post',
    summary: 'Bulk contact operations (add/remove tags, delete)',
    description: 'Bulk contact operations (add/remove tags, delete)',
    stainlessPath: '(resource) whatsapp.contacts > (method) bulk_operations',
    qualified: 'client.whatsapp.contacts.bulkOperations',
    params: [
      'account_id: string;',
      "action: 'add_tags' | 'remove_tags' | 'delete';",
      'contact_ids: string[];',
      'tags?: string[];',
    ],
    response: '{ affected: number; }',
    markdown:
      "## bulk_operations\n\n`client.whatsapp.contacts.bulkOperations(account_id: string, action: 'add_tags' | 'remove_tags' | 'delete', contact_ids: string[], tags?: string[]): { affected: number; }`\n\n**post** `/v1/whatsapp/contacts/bulk`\n\nBulk contact operations (add/remove tags, delete)\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `action: 'add_tags' | 'remove_tags' | 'delete'`\n  Action\n\n- `contact_ids: string[]`\n  Contact IDs\n\n- `tags?: string[]`\n  Tags (for tag actions)\n\n### Returns\n\n- `{ affected: number; }`\n\n  - `affected: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.contacts.bulkOperations({\n  account_id: 'account_id',\n  action: 'add_tags',\n  contact_ids: ['string'],\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'import',
    endpoint: '/v1/whatsapp/contacts/import',
    httpMethod: 'post',
    summary: 'Bulk import contacts',
    description: 'Bulk import contacts',
    stainlessPath: '(resource) whatsapp.contacts > (method) import',
    qualified: 'client.whatsapp.contacts.import',
    params: [
      'account_id: string;',
      'contacts: { phone: string; email?: string; name?: string; tags?: string[]; }[];',
    ],
    response: '{ failed: number; imported: number; skipped: number; }',
    markdown:
      "## import\n\n`client.whatsapp.contacts.import(account_id: string, contacts: { phone: string; email?: string; name?: string; tags?: string[]; }[]): { failed: number; imported: number; skipped: number; }`\n\n**post** `/v1/whatsapp/contacts/import`\n\nBulk import contacts\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `contacts: { phone: string; email?: string; name?: string; tags?: string[]; }[]`\n  Contacts to import\n\n### Returns\n\n- `{ failed: number; imported: number; skipped: number; }`\n\n  - `failed: number`\n  - `imported: number`\n  - `skipped: number`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.contacts.import({ account_id: 'account_id', contacts: [{ phone: 'phone' }] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/whatsapp/groups',
    httpMethod: 'post',
    summary: 'Create a contact group',
    description: 'Create a contact group',
    stainlessPath: '(resource) whatsapp.groups > (method) create',
    qualified: 'client.whatsapp.groups.create',
    params: ['account_id: string;', 'name: string;', 'contact_ids?: string[];', 'description?: string;'],
    response:
      '{ id: string; contact_count: number; created_at: string; name: string; description?: string; }',
    markdown:
      "## create\n\n`client.whatsapp.groups.create(account_id: string, name: string, contact_ids?: string[], description?: string): { id: string; contact_count: number; created_at: string; name: string; description?: string; }`\n\n**post** `/v1/whatsapp/groups`\n\nCreate a contact group\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `name: string`\n  Group name\n\n- `contact_ids?: string[]`\n  Initial contact IDs\n\n- `description?: string`\n  Group description\n\n### Returns\n\n- `{ id: string; contact_count: number; created_at: string; name: string; description?: string; }`\n\n  - `id: string`\n  - `contact_count: number`\n  - `created_at: string`\n  - `name: string`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst group = await client.whatsapp.groups.create({ account_id: 'account_id', name: 'name' });\n\nconsole.log(group);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/whatsapp/groups',
    httpMethod: 'get',
    summary: 'List contact groups',
    description: 'List contact groups',
    stainlessPath: '(resource) whatsapp.groups > (method) list',
    qualified: 'client.whatsapp.groups.list',
    params: ['account_id: string;'],
    response:
      '{ data: { id: string; contact_count: number; created_at: string; name: string; description?: string; }[]; }',
    markdown:
      "## list\n\n`client.whatsapp.groups.list(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/groups`\n\nList contact groups\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { id: string; contact_count: number; created_at: string; name: string; description?: string; }[]; }`\n\n  - `data: { id: string; contact_count: number; created_at: string; name: string; description?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst groups = await client.whatsapp.groups.list({ account_id: 'account_id' });\n\nconsole.log(groups);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/whatsapp/groups/{group_id}',
    httpMethod: 'delete',
    summary: 'Delete a contact group',
    description: 'Delete a contact group',
    stainlessPath: '(resource) whatsapp.groups > (method) delete',
    qualified: 'client.whatsapp.groups.delete',
    params: ['group_id: string;'],
    markdown:
      "## delete\n\n`client.whatsapp.groups.delete(group_id: string): void`\n\n**delete** `/v1/whatsapp/groups/{group_id}`\n\nDelete a contact group\n\n### Parameters\n\n- `group_id: string`\n  Group ID\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nawait client.whatsapp.groups.delete('group_id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/whatsapp/business-profile',
    httpMethod: 'get',
    summary: 'Get WhatsApp Business profile',
    description: 'Get WhatsApp Business profile',
    stainlessPath: '(resource) whatsapp.business_profile > (method) retrieve',
    qualified: 'client.whatsapp.businessProfile.retrieve',
    params: ['account_id: string;'],
    response:
      '{ about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }',
    markdown:
      "## retrieve\n\n`client.whatsapp.businessProfile.retrieve(account_id: string): { about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n**get** `/v1/whatsapp/business-profile`\n\nGet WhatsApp Business profile\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n  - `about?: string`\n  - `address?: string`\n  - `description?: string`\n  - `email?: string`\n  - `profile_picture_url?: string`\n  - `websites?: string[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst businessProfile = await client.whatsapp.businessProfile.retrieve({ account_id: 'account_id' });\n\nconsole.log(businessProfile);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/whatsapp/business-profile',
    httpMethod: 'put',
    summary: 'Update WhatsApp Business profile',
    description: 'Update WhatsApp Business profile',
    stainlessPath: '(resource) whatsapp.business_profile > (method) update',
    qualified: 'client.whatsapp.businessProfile.update',
    params: [
      'account_id: string;',
      'about?: string;',
      'address?: string;',
      'description?: string;',
      'email?: string;',
      'websites?: string[];',
    ],
    response:
      '{ about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }',
    markdown:
      "## update\n\n`client.whatsapp.businessProfile.update(account_id: string, about?: string, address?: string, description?: string, email?: string, websites?: string[]): { about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n**put** `/v1/whatsapp/business-profile`\n\nUpdate WhatsApp Business profile\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `about?: string`\n\n- `address?: string`\n\n- `description?: string`\n\n- `email?: string`\n\n- `websites?: string[]`\n\n### Returns\n\n- `{ about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n  - `about?: string`\n  - `address?: string`\n  - `description?: string`\n  - `email?: string`\n  - `profile_picture_url?: string`\n  - `websites?: string[]`\n\n### Example\n\n```typescript\nimport Relay from 'relay';\n\nconst client = new Relay();\n\nconst businessProfile = await client.whatsapp.businessProfile.update({ account_id: 'account_id' });\n\nconsole.log(businessProfile);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
