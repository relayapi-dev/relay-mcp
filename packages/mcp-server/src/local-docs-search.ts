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
      'limit?: number;',
      "status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed';",
      'to?: string;',
      'workspace_id?: string;',
    ],
    response:
      "{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; has_more: boolean; next_cursor: string; }",
    markdown:
      "## list\n\n`client.posts.list(account_id?: string, cursor?: string, from?: string, limit?: number, status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed', to?: string, workspace_id?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/posts`\n\nList posts\n\n### Parameters\n\n- `account_id?: string`\n  Filter by specific account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `status?: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed'`\n  Filter by post status\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n- `workspace_id?: string`\n  Filter by workspace ID\n\n### Returns\n\n- `{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst posts = await client.posts.list();\n\nconsole.log(posts);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tposts, err := client.Posts.List(context.TODO(), relaygo.PostListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", posts.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.relayapi.dev/v1/posts \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostListParams;\nimport dev.relayapi.models.posts.PostListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostListResponse posts = client.posts().list();\n    }\n}',
      },
      python: {
        method: 'posts.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nposts = client.posts.list()\nprint(posts.data)',
      },
      typescript: {
        method: 'client.posts.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst posts = await client.posts.list();\n\nconsole.log(posts.data);",
      },
    },
  },
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
      "recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; };",
      'target_options?: object;',
      'timezone?: string;',
      'workspace_id?: string;',
    ],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## create\n\n`client.posts.create(scheduled_at: string, targets: string[], content?: string, media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[], recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }, target_options?: object, timezone?: string, workspace_id?: string): { id: string; content: string; created_at: string; media: object[]; recycled_from_id: string; recycling: object; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**post** `/v1/posts`\n\nCreate a post. Use scheduled_at: \"now\" to publish immediately, \"draft\" to save as draft, or an ISO timestamp to schedule.\n\n### Parameters\n\n- `scheduled_at: string`\n  Publish intent. Use \"now\" to publish immediately, \"draft\" to save as draft, or an ISO 8601 timestamp to schedule.\n\n- `targets: string[]`\n  Account IDs, platform names, or workspace IDs to publish to\n\n- `content?: string`\n  Post text. Optional if target_options provide per-target content.\n\n- `media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  Media attachments\n\n- `recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }`\n  Recycling configuration for evergreen content (Pro plan only)\n  - `gap: number`\n    Interval value\n  - `gap_freq: 'day' | 'week' | 'month'`\n    Interval unit\n  - `start_date: string`\n    When to start recycling\n  - `content_variations?: string[]`\n    Alternate content texts (round-robin)\n  - `enabled?: boolean`\n    Whether recycling is active\n  - `expire_count?: number`\n    Stop after this many recycles\n  - `expire_date?: string`\n    Stop after this date\n\n- `target_options?: object`\n  Per-target customizations keyed by target value (account ID or platform name). Supports platform-specific features such as Twitter polls (poll.options, poll.duration_minutes), threads, reply_to, and reply_settings.\n\n- `timezone?: string`\n  IANA timezone for scheduling\n\n- `workspace_id?: string`\n  Workspace ID to scope this post to\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `recycled_from_id: string`\n  - `recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst post = await client.posts.create({ scheduled_at: 'now', targets: ['string'] });\n\nconsole.log(post);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpost, err := client.Posts.New(context.TODO(), relaygo.PostNewParams{\n\t\tScheduledAt: relaygo.F("now"),\n\t\tTargets:     relaygo.F([]string{"string"}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", post.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "scheduled_at": "now",\n          "targets": [\n            "string"\n          ]\n        }\'',
      },
      java: {
        method: 'posts().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostCreateParams;\nimport dev.relayapi.models.posts.PostCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostCreateParams params = PostCreateParams.builder()\n            .scheduledAt("now")\n            .addTarget("string")\n            .build();\n        PostCreateResponse post = client.posts().create(params);\n    }\n}',
      },
      python: {
        method: 'posts.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\npost = client.posts.create(\n    scheduled_at="now",\n    targets=["string"],\n)\nprint(post.id)',
      },
      typescript: {
        method: 'client.posts.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst post = await client.posts.create({ scheduled_at: 'now', targets: ['string'] });\n\nconsole.log(post.id);",
      },
    },
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
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.posts.retrieve(id: string): { id: string; content: string; created_at: string; media: object[]; recycled_from_id: string; recycling: object; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**get** `/v1/posts/{id}`\n\nGet a post\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `recycled_from_id: string`\n  - `recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst post = await client.posts.retrieve('id');\n\nconsole.log(post);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpost, err := client.Posts.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", post.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/$ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostRetrieveParams;\nimport dev.relayapi.models.posts.PostRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostRetrieveResponse post = client.posts().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'posts.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\npost = client.posts.retrieve(\n    "id",\n)\nprint(post.id)',
      },
      typescript: {
        method: 'client.posts.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst post = await client.posts.retrieve('id');\n\nconsole.log(post.id);",
      },
    },
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
      "recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; };",
      'scheduled_at?: string;',
      'target_options?: object;',
      'targets?: string[];',
      'timezone?: string;',
    ],
    response:
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## update\n\n`client.posts.update(id: string, content?: string, media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[], recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }, scheduled_at?: string, target_options?: object, targets?: string[], timezone?: string): { id: string; content: string; created_at: string; media: object[]; recycled_from_id: string; recycling: object; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**patch** `/v1/posts/{id}`\n\nUpdate a draft or scheduled post.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `content?: string`\n  Post text\n\n- `media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  Updated media\n\n- `recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }`\n  Recycling configuration (Pro plan only)\n  - `gap: number`\n    Interval value\n  - `gap_freq: 'day' | 'week' | 'month'`\n    Interval unit\n  - `start_date: string`\n    When to start recycling\n  - `content_variations?: string[]`\n    Alternate content texts (round-robin)\n  - `enabled?: boolean`\n    Whether recycling is active\n  - `expire_count?: number`\n    Stop after this many recycles\n  - `expire_date?: string`\n    Stop after this date\n\n- `scheduled_at?: string`\n  Publish intent. Use \"now\" to publish immediately, \"draft\" to save as draft, or an ISO 8601 timestamp to schedule.\n\n- `target_options?: object`\n\n- `targets?: string[]`\n  Updated targets\n\n- `timezone?: string`\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `recycled_from_id: string`\n  - `recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst post = await client.posts.update('id');\n\nconsole.log(post);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpost, err := client.Posts.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.PostUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", post.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().update',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostUpdateParams;\nimport dev.relayapi.models.posts.PostUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostUpdateResponse post = client.posts().update("id");\n    }\n}',
      },
      python: {
        method: 'posts.update',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\npost = client.posts.update(\n    id="id",\n)\nprint(post.id)',
      },
      typescript: {
        method: 'client.posts.update',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst post = await client.posts.update('id');\n\nconsole.log(post.id);",
      },
    },
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
      "## delete\n\n`client.posts.delete(id: string): void`\n\n**delete** `/v1/posts/{id}`\n\nDelete a post.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.posts.delete('id')\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Posts.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.posts().delete("id");\n    }\n}',
      },
      python: {
        method: 'posts.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.posts.delete(\n    "id",\n)',
      },
      typescript: {
        method: 'client.posts.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.posts.delete('id');",
      },
    },
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
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## retry\n\n`client.posts.retry(id: string): { id: string; content: string; created_at: string; media: object[]; recycled_from_id: string; recycling: object; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**post** `/v1/posts/{id}/retry`\n\nRetry publishing for failed targets on a post.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `recycled_from_id: string`\n  - `recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.posts.retry('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Retry',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Posts.Retry(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/$ID/retry \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().retry',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostRetryParams;\nimport dev.relayapi.models.posts.PostRetryResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostRetryResponse response = client.posts().retry("id");\n    }\n}',
      },
      python: {
        method: 'posts.retry',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.posts.retry(\n    "id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.posts.retry',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.posts.retry('id');\n\nconsole.log(response.id);",
      },
    },
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
      "posts: { scheduled_at: string; targets: string[]; content?: string; media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }; target_options?: object; timezone?: string; workspace_id?: string; }[];",
    ],
    response:
      "{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; summary: { failed: number; succeeded: number; total: number; }; }",
    markdown:
      "## bulk_create\n\n`client.posts.bulkCreate(posts: { scheduled_at: string; targets: string[]; content?: string; media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }; target_options?: object; timezone?: string; workspace_id?: string; }[]): { data: object[]; summary: object; }`\n\n**post** `/v1/posts/bulk`\n\nCreate multiple posts in a single request. Each item follows the same schema as single post creation.\n\n### Parameters\n\n- `posts: { scheduled_at: string; targets: string[]; content?: string; media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }; target_options?: object; timezone?: string; workspace_id?: string; }[]`\n  Array of posts to create (max 50)\n\n### Returns\n\n- `{ data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]; summary: { failed: number; succeeded: number; total: number; }; }`\n\n  - `data: { id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }[]`\n  - `summary: { failed: number; succeeded: number; total: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.posts.bulkCreate({ posts: [{ scheduled_at: 'now', targets: ['string'] }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.BulkNew',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Posts.BulkNew(context.TODO(), relaygo.PostBulkNewParams{\n\t\tPosts: relaygo.F([]relaygo.PostBulkNewParamsPost{{\n\t\t\tScheduledAt: relaygo.F("now"),\n\t\t\tTargets:     relaygo.F([]string{"string"}),\n\t\t}}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/bulk \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "posts": [\n            {\n              "scheduled_at": "now",\n              "targets": [\n                "string"\n              ]\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'posts().bulkCreate',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostBulkCreateParams;\nimport dev.relayapi.models.posts.PostBulkCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostBulkCreateParams params = PostBulkCreateParams.builder()\n            .addPost(PostBulkCreateParams.Post.builder()\n                .scheduledAt("now")\n                .addTarget("string")\n                .build())\n            .build();\n        PostBulkCreateResponse response = client.posts().bulkCreate(params);\n    }\n}',
      },
      python: {
        method: 'posts.bulk_create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.posts.bulk_create(\n    posts=[{\n        "scheduled_at": "now",\n        "targets": ["string"],\n    }],\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.posts.bulkCreate',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.posts.bulkCreate({\n  posts: [{ scheduled_at: 'now', targets: ['string'] }],\n});\n\nconsole.log(response.data);",
      },
    },
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
      "{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }",
    markdown:
      "## unpublish\n\n`client.posts.unpublish(id: string, platforms?: string[]): { id: string; content: string; created_at: string; media: object[]; recycled_from_id: string; recycling: object; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n**post** `/v1/posts/{id}/unpublish`\n\nAttempt to delete the post from each platform and set the post status to cancelled.\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `platforms?: string[]`\n  Platforms to unpublish from. If omitted, unpublishes from all.\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]; recycled_from_id: string; recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }; scheduled_at: string; status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'; targets: object; updated_at: string; }`\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `media: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  - `recycled_from_id: string`\n  - `recycling: { id: string; content_variation_index: number; content_variations: string[]; created_at: string; enabled: boolean; expire_count: number; expire_date: string; gap: number; gap_freq: 'day' | 'week' | 'month'; last_recycled_at: string; next_recycle_at: string; recycle_count: number; start_date: string; updated_at: string; }`\n  - `scheduled_at: string`\n  - `status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'partial'`\n  - `targets: object`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.posts.unpublish('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Unpublish',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Posts.Unpublish(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.PostUnpublishParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/$ID/unpublish \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().unpublish',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostUnpublishParams;\nimport dev.relayapi.models.posts.PostUnpublishResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PostUnpublishResponse response = client.posts().unpublish("id");\n    }\n}',
      },
      python: {
        method: 'posts.unpublish',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.posts.unpublish(\n    id="id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.posts.unpublish',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.posts.unpublish('id');\n\nconsole.log(response.id);",
      },
    },
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
      "## list\n\n`client.posts.logs.list(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/posts/logs`\n\nQuery publishing logs across all posts with pagination.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst logs = await client.posts.logs.list();\n\nconsole.log(logs);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Logs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlogs, err := client.Posts.Logs.List(context.TODO(), relaygo.PostLogListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", logs.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/logs \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().logs().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.logs.LogListParams;\nimport dev.relayapi.models.posts.logs.LogListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LogListResponse logs = client.posts().logs().list();\n    }\n}',
      },
      python: {
        method: 'posts.logs.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nlogs = client.posts.logs.list()\nprint(logs.data)',
      },
      typescript: {
        method: 'client.posts.logs.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst logs = await client.posts.logs.list();\n\nconsole.log(logs.data);",
      },
    },
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
      "## retrieve\n\n`client.posts.logs.retrieve(id: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/posts/{id}/logs`\n\nGet publishing logs for a post\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; error: string; platform: string; platform_post_id: string; platform_url: string; post_id: string; published_at: string; social_account_id: string; status: string; updated_at: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst log = await client.posts.logs.retrieve('id');\n\nconsole.log(log);\n```",
    perLanguage: {
      go: {
        method: 'client.Posts.Logs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlog, err := client.Posts.Logs.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", log.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/posts/$ID/logs \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'posts().logs().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.logs.LogRetrieveParams;\nimport dev.relayapi.models.posts.logs.LogRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LogRetrieveResponse log = client.posts().logs().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'posts.logs.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nlog = client.posts.logs.retrieve(\n    "id",\n)\nprint(log.data)',
      },
      typescript: {
        method: 'client.posts.logs.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst log = await client.posts.logs.retrieve('id');\n\nconsole.log(log.data);",
      },
    },
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
      'limit?: number;',
      'platforms?: string;',
      'search?: string;',
      'to?: string;',
      'ungrouped?: boolean;',
      'workspace_id?: string;',
    ],
    response:
      '{ data: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.accounts.list(cursor?: string, from?: string, limit?: number, platforms?: string, search?: string, to?: string, ungrouped?: boolean, workspace_id?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/accounts`\n\nList connected accounts\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `platforms?: string`\n  Comma-separated platform filter (e.g. instagram,facebook)\n\n- `search?: string`\n  Search by name or username\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n- `ungrouped?: boolean`\n  Only show ungrouped accounts\n\n- `workspace_id?: string`\n  Filter by group ID\n\n### Returns\n\n- `{ data: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst accounts = await client.accounts.list();\n\nconsole.log(accounts);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccounts, err := client.Accounts.List(context.TODO(), relaygo.AccountListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accounts.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.AccountListParams;\nimport dev.relayapi.models.accounts.AccountListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AccountListResponse accounts = client.accounts().list();\n    }\n}',
      },
      python: {
        method: 'accounts.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\naccounts = client.accounts.list()\nprint(accounts.data)',
      },
      typescript: {
        method: 'client.accounts.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst accounts = await client.accounts.list();\n\nconsole.log(accounts.data);",
      },
    },
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
      "## retrieve\n\n`client.accounts.retrieve(id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**get** `/v1/accounts/{id}`\n\nGet a connected account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst account = await client.accounts.retrieve('id');\n\nconsole.log(account);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccount, err := client.Accounts.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.AccountRetrieveParams;\nimport dev.relayapi.models.accounts.AccountRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AccountRetrieveResponse account = client.accounts().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\naccount = client.accounts.retrieve(\n    "id",\n)\nprint(account.id)',
      },
      typescript: {
        method: 'client.accounts.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.accounts.retrieve('id');\n\nconsole.log(account.id);",
      },
    },
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
      "## delete\n\n`client.accounts.delete(id: string): void`\n\n**delete** `/v1/accounts/{id}`\n\nDisconnect a social account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.accounts.delete('id')\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Accounts.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.AccountDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.accounts().delete("id");\n    }\n}',
      },
      python: {
        method: 'accounts.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.accounts.delete(\n    "id",\n)',
      },
      typescript: {
        method: 'client.accounts.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.accounts.delete('id');",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/accounts/{id}',
    httpMethod: 'patch',
    summary: 'Update account metadata',
    description: 'Update account metadata',
    stainlessPath: '(resource) accounts > (method) update',
    qualified: 'client.accounts.update',
    params: ['id: string;', 'display_name?: string;', 'metadata?: object;', 'workspace_id?: string;'],
    response:
      '{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }',
    markdown:
      "## update\n\n`client.accounts.update(id: string, display_name?: string, metadata?: object, workspace_id?: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**patch** `/v1/accounts/{id}`\n\nUpdate account metadata\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `display_name?: string`\n\n- `metadata?: object`\n\n- `workspace_id?: string`\n  Workspace ID (null to unassign)\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst account = await client.accounts.update('id');\n\nconsole.log(account);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccount, err := client.Accounts.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().update',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.AccountUpdateParams;\nimport dev.relayapi.models.accounts.AccountUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AccountUpdateResponse account = client.accounts().update("id");\n    }\n}',
      },
      python: {
        method: 'accounts.update',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\naccount = client.accounts.update(\n    id="id",\n)\nprint(account.id)',
      },
      typescript: {
        method: 'client.accounts.update',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.accounts.update('id');\n\nconsole.log(account.id);",
      },
    },
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
      '{ id: string; avatar_url: string; display_name: string; healthy: boolean; platform: string; scopes: string[]; token_expires_at: string; username: string; error?: { code: string; message: string; }; }',
    markdown:
      "## retrieve\n\n`client.accounts.health.retrieve(id: string): { id: string; avatar_url: string; display_name: string; healthy: boolean; platform: string; scopes: string[]; token_expires_at: string; username: string; error?: object; }`\n\n**get** `/v1/accounts/{id}/health`\n\nCheck health of a single connected account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; avatar_url: string; display_name: string; healthy: boolean; platform: string; scopes: string[]; token_expires_at: string; username: string; error?: { code: string; message: string; }; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `display_name: string`\n  - `healthy: boolean`\n  - `platform: string`\n  - `scopes: string[]`\n  - `token_expires_at: string`\n  - `username: string`\n  - `error?: { code: string; message: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst health = await client.accounts.health.retrieve('id');\n\nconsole.log(health);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.Health.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thealth, err := client.Accounts.Health.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", health.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/health \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().health().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.health.HealthRetrieveParams;\nimport dev.relayapi.models.accounts.health.HealthRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        HealthRetrieveResponse health = client.accounts().health().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.health.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nhealth = client.accounts.health.retrieve(\n    "id",\n)\nprint(health.id)',
      },
      typescript: {
        method: 'client.accounts.health.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst health = await client.accounts.health.retrieve('id');\n\nconsole.log(health.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/accounts/health',
    httpMethod: 'get',
    summary: 'Check health of all connected accounts',
    description: 'Check health of all connected accounts',
    stainlessPath: '(resource) accounts.health > (method) list',
    qualified: 'client.accounts.health.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      '{ data: { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.accounts.health.list(cursor?: string, limit?: number): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/accounts/health`\n\nCheck health of all connected accounts\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items per page\n\n### Returns\n\n- `{ data: { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; healthy: boolean; platform: string; token_expires_at: string; username: string; error?: { code: string; message: string; }; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst health = await client.accounts.health.list();\n\nconsole.log(health);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.Health.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thealth, err := client.Accounts.Health.List(context.TODO(), relaygo.AccountHealthListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", health.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/health \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().health().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.health.HealthListParams;\nimport dev.relayapi.models.accounts.health.HealthListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        HealthListResponse health = client.accounts().health().list();\n    }\n}',
      },
      python: {
        method: 'accounts.health.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nhealth = client.accounts.health.list()\nprint(health.data)',
      },
      typescript: {
        method: 'client.accounts.health.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst health = await client.accounts.health.list();\n\nconsole.log(health.data);",
      },
    },
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
      "## retrieve\n\n`client.accounts.redditFlairs.retrieve(id: string, subreddit: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/reddit-flairs`\n\nFetch Reddit flairs for a subreddit\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `subreddit: string`\n  Subreddit name\n\n### Returns\n\n- `{ data: { id: string; text: string; }[]; }`\n\n  - `data: { id: string; text: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst redditFlair = await client.accounts.redditFlairs.retrieve('id', { subreddit: 'subreddit' });\n\nconsole.log(redditFlair);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.RedditFlairs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tredditFlair, err := client.Accounts.RedditFlairs.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountRedditFlairGetParams{\n\t\t\tSubreddit: relaygo.F("subreddit"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", redditFlair.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/reddit-flairs \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().redditFlairs().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.redditflairs.RedditFlairRetrieveParams;\nimport dev.relayapi.models.accounts.redditflairs.RedditFlairRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RedditFlairRetrieveParams params = RedditFlairRetrieveParams.builder()\n            .id("id")\n            .subreddit("subreddit")\n            .build();\n        RedditFlairRetrieveResponse redditFlair = client.accounts().redditFlairs().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'accounts.reddit_flairs.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nreddit_flair = client.accounts.reddit_flairs.retrieve(\n    id="id",\n    subreddit="subreddit",\n)\nprint(reddit_flair.data)',
      },
      typescript: {
        method: 'client.accounts.redditFlairs.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst redditFlair = await client.accounts.redditFlairs.retrieve('id', { subreddit: 'subreddit' });\n\nconsole.log(redditFlair.data);",
      },
    },
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
      "## retrieve\n\n`client.accounts.facebookPages.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/facebook-pages`\n\nFetch Facebook pages for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; name: string; access_token?: string; }[]; }`\n\n  - `data: { id: string; name: string; access_token?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst facebookPage = await client.accounts.facebookPages.retrieve('id');\n\nconsole.log(facebookPage);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.FacebookPages.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfacebookPage, err := client.Accounts.FacebookPages.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", facebookPage.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/facebook-pages \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().facebookPages().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.facebookpages.FacebookPageRetrieveParams;\nimport dev.relayapi.models.accounts.facebookpages.FacebookPageRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        FacebookPageRetrieveResponse facebookPage = client.accounts().facebookPages().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.facebook_pages.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nfacebook_page = client.accounts.facebook_pages.retrieve(\n    "id",\n)\nprint(facebook_page.data)',
      },
      typescript: {
        method: 'client.accounts.facebookPages.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst facebookPage = await client.accounts.facebookPages.retrieve('id');\n\nconsole.log(facebookPage.data);",
      },
    },
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
      "## set_default\n\n`client.accounts.facebookPages.setDefault(id: string, page_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/facebook-pages`\n\nSet default Facebook page\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `page_id: string`\n  Facebook page ID to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.accounts.facebookPages.setDefault('id', { page_id: 'page_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.FacebookPages.SetDefault',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Accounts.FacebookPages.SetDefault(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountFacebookPageSetDefaultParams{\n\t\t\tPageID: relaygo.F("page_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/facebook-pages \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "page_id": "page_id"\n        }\'',
      },
      java: {
        method: 'accounts().facebookPages().setDefault',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.facebookpages.FacebookPageSetDefaultParams;\nimport dev.relayapi.models.accounts.facebookpages.FacebookPageSetDefaultResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        FacebookPageSetDefaultParams params = FacebookPageSetDefaultParams.builder()\n            .id("id")\n            .pageId("page_id")\n            .build();\n        FacebookPageSetDefaultResponse response = client.accounts().facebookPages().setDefault(params);\n    }\n}',
      },
      python: {
        method: 'accounts.facebook_pages.set_default',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.accounts.facebook_pages.set_default(\n    id="id",\n    page_id="page_id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.accounts.facebookPages.setDefault',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.accounts.facebookPages.setDefault('id', { page_id: 'page_id' });\n\nconsole.log(response.id);",
      },
    },
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
      "## retrieve\n\n`client.accounts.linkedinOrganizations.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/linkedin-organizations`\n\nFetch LinkedIn organizations for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; name: string; vanity_name: string; }[]; }`\n\n  - `data: { id: string; name: string; vanity_name: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst linkedinOrganization = await client.accounts.linkedinOrganizations.retrieve('id');\n\nconsole.log(linkedinOrganization);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.LinkedinOrganizations.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlinkedinOrganization, err := client.Accounts.LinkedinOrganizations.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", linkedinOrganization.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/linkedin-organizations \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().linkedinOrganizations().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.linkedinorganizations.LinkedinOrganizationRetrieveParams;\nimport dev.relayapi.models.accounts.linkedinorganizations.LinkedinOrganizationRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LinkedinOrganizationRetrieveResponse linkedinOrganization = client.accounts().linkedinOrganizations().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.linkedin_organizations.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nlinkedin_organization = client.accounts.linkedin_organizations.retrieve(\n    "id",\n)\nprint(linkedin_organization.data)',
      },
      typescript: {
        method: 'client.accounts.linkedinOrganizations.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst linkedinOrganization = await client.accounts.linkedinOrganizations.retrieve('id');\n\nconsole.log(linkedinOrganization.data);",
      },
    },
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
      "## switch_type\n\n`client.accounts.linkedinOrganizations.switchType(id: string, account_type: 'personal' | 'organization', organization_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/linkedin-organizations`\n\nSwitch LinkedIn account type\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `account_type: 'personal' | 'organization'`\n  Account type to switch to\n\n- `organization_id: string`\n  LinkedIn organization ID\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.accounts.linkedinOrganizations.switchType('id', { account_type: 'personal', organization_id: 'organization_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.LinkedinOrganizations.SwitchType',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Accounts.LinkedinOrganizations.SwitchType(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountLinkedinOrganizationSwitchTypeParams{\n\t\t\tAccountType:    relaygo.F(relaygo.AccountLinkedinOrganizationSwitchTypeParamsAccountTypePersonal),\n\t\t\tOrganizationID: relaygo.F("organization_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/linkedin-organizations \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_type": "personal",\n          "organization_id": "organization_id"\n        }\'',
      },
      java: {
        method: 'accounts().linkedinOrganizations().switchType',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.linkedinorganizations.LinkedinOrganizationSwitchTypeParams;\nimport dev.relayapi.models.accounts.linkedinorganizations.LinkedinOrganizationSwitchTypeResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LinkedinOrganizationSwitchTypeParams params = LinkedinOrganizationSwitchTypeParams.builder()\n            .id("id")\n            .accountType(LinkedinOrganizationSwitchTypeParams.AccountType.PERSONAL)\n            .organizationId("organization_id")\n            .build();\n        LinkedinOrganizationSwitchTypeResponse response = client.accounts().linkedinOrganizations().switchType(params);\n    }\n}',
      },
      python: {
        method: 'accounts.linkedin_organizations.switch_type',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.accounts.linkedin_organizations.switch_type(\n    id="id",\n    account_type="personal",\n    organization_id="organization_id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.accounts.linkedinOrganizations.switchType',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.accounts.linkedinOrganizations.switchType('id', {\n  account_type: 'personal',\n  organization_id: 'organization_id',\n});\n\nconsole.log(response.id);",
      },
    },
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
      "## retrieve\n\n`client.accounts.pinterestBoards.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/pinterest-boards`\n\nFetch Pinterest boards for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; name: string; url: string; }[]; }`\n\n  - `data: { id: string; name: string; url: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst pinterestBoard = await client.accounts.pinterestBoards.retrieve('id');\n\nconsole.log(pinterestBoard);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.PinterestBoards.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpinterestBoard, err := client.Accounts.PinterestBoards.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pinterestBoard.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/pinterest-boards \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().pinterestBoards().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.pinterestboards.PinterestBoardRetrieveParams;\nimport dev.relayapi.models.accounts.pinterestboards.PinterestBoardRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PinterestBoardRetrieveResponse pinterestBoard = client.accounts().pinterestBoards().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.pinterest_boards.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\npinterest_board = client.accounts.pinterest_boards.retrieve(\n    "id",\n)\nprint(pinterest_board.data)',
      },
      typescript: {
        method: 'client.accounts.pinterestBoards.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst pinterestBoard = await client.accounts.pinterestBoards.retrieve('id');\n\nconsole.log(pinterestBoard.data);",
      },
    },
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
      "## set_default\n\n`client.accounts.pinterestBoards.setDefault(id: string, board_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/pinterest-boards`\n\nSet default Pinterest board\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `board_id: string`\n  Pinterest board ID to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.accounts.pinterestBoards.setDefault('id', { board_id: 'board_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.PinterestBoards.SetDefault',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Accounts.PinterestBoards.SetDefault(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountPinterestBoardSetDefaultParams{\n\t\t\tBoardID: relaygo.F("board_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/pinterest-boards \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "board_id": "board_id"\n        }\'',
      },
      java: {
        method: 'accounts().pinterestBoards().setDefault',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.pinterestboards.PinterestBoardSetDefaultParams;\nimport dev.relayapi.models.accounts.pinterestboards.PinterestBoardSetDefaultResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PinterestBoardSetDefaultParams params = PinterestBoardSetDefaultParams.builder()\n            .id("id")\n            .boardId("board_id")\n            .build();\n        PinterestBoardSetDefaultResponse response = client.accounts().pinterestBoards().setDefault(params);\n    }\n}',
      },
      python: {
        method: 'accounts.pinterest_boards.set_default',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.accounts.pinterest_boards.set_default(\n    id="id",\n    board_id="board_id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.accounts.pinterestBoards.setDefault',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.accounts.pinterestBoards.setDefault('id', { board_id: 'board_id' });\n\nconsole.log(response.id);",
      },
    },
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
      "## retrieve\n\n`client.accounts.redditSubreddits.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/reddit-subreddits`\n\nFetch Reddit subreddits for an account\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { display_name: string; name: string; subscribers: number; }[]; }`\n\n  - `data: { display_name: string; name: string; subscribers: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst redditSubreddit = await client.accounts.redditSubreddits.retrieve('id');\n\nconsole.log(redditSubreddit);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.RedditSubreddits.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tredditSubreddit, err := client.Accounts.RedditSubreddits.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", redditSubreddit.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/reddit-subreddits \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().redditSubreddits().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.redditsubreddits.RedditSubredditRetrieveParams;\nimport dev.relayapi.models.accounts.redditsubreddits.RedditSubredditRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RedditSubredditRetrieveResponse redditSubreddit = client.accounts().redditSubreddits().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.reddit_subreddits.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nreddit_subreddit = client.accounts.reddit_subreddits.retrieve(\n    "id",\n)\nprint(reddit_subreddit.data)',
      },
      typescript: {
        method: 'client.accounts.redditSubreddits.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst redditSubreddit = await client.accounts.redditSubreddits.retrieve('id');\n\nconsole.log(redditSubreddit.data);",
      },
    },
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
      "## set_default\n\n`client.accounts.redditSubreddits.setDefault(id: string, subreddit: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/reddit-subreddits`\n\nSet default Reddit subreddit\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `subreddit: string`\n  Subreddit name to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.accounts.redditSubreddits.setDefault('id', { subreddit: 'subreddit' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.RedditSubreddits.SetDefault',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Accounts.RedditSubreddits.SetDefault(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountRedditSubredditSetDefaultParams{\n\t\t\tSubreddit: relaygo.F("subreddit"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/reddit-subreddits \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "subreddit": "subreddit"\n        }\'',
      },
      java: {
        method: 'accounts().redditSubreddits().setDefault',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.redditsubreddits.RedditSubredditSetDefaultParams;\nimport dev.relayapi.models.accounts.redditsubreddits.RedditSubredditSetDefaultResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RedditSubredditSetDefaultParams params = RedditSubredditSetDefaultParams.builder()\n            .id("id")\n            .subreddit("subreddit")\n            .build();\n        RedditSubredditSetDefaultResponse response = client.accounts().redditSubreddits().setDefault(params);\n    }\n}',
      },
      python: {
        method: 'accounts.reddit_subreddits.set_default',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.accounts.reddit_subreddits.set_default(\n    id="id",\n    subreddit="subreddit",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.accounts.redditSubreddits.setDefault',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.accounts.redditSubreddits.setDefault('id', {\n  subreddit: 'subreddit',\n});\n\nconsole.log(response.id);",
      },
    },
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
      "## retrieve\n\n`client.accounts.gmbLocations.retrieve(id: string): { data: object[]; }`\n\n**get** `/v1/accounts/{id}/gmb-locations`\n\nFetch Google My Business locations\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ data: { id: string; address: string; name: string; }[]; }`\n\n  - `data: { id: string; address: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst gmbLocation = await client.accounts.gmbLocations.retrieve('id');\n\nconsole.log(gmbLocation);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.GmbLocations.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tgmbLocation, err := client.Accounts.GmbLocations.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", gmbLocation.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/gmb-locations \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'accounts().gmbLocations().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.gmblocations.GmbLocationRetrieveParams;\nimport dev.relayapi.models.accounts.gmblocations.GmbLocationRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        GmbLocationRetrieveResponse gmbLocation = client.accounts().gmbLocations().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'accounts.gmb_locations.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ngmb_location = client.accounts.gmb_locations.retrieve(\n    "id",\n)\nprint(gmb_location.data)',
      },
      typescript: {
        method: 'client.accounts.gmbLocations.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst gmbLocation = await client.accounts.gmbLocations.retrieve('id');\n\nconsole.log(gmbLocation.data);",
      },
    },
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
      "## set_default\n\n`client.accounts.gmbLocations.setDefault(id: string, location_id: string): { id: string; avatar_url: string; connected_at: string; display_name: string; group: object; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n**put** `/v1/accounts/{id}/gmb-locations`\n\nSet default GMB location\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `location_id: string`\n  Google My Business location ID to set as default\n\n### Returns\n\n- `{ id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n  - `id: string`\n  - `avatar_url: string`\n  - `connected_at: string`\n  - `display_name: string`\n  - `group: { id: string; name: string; }`\n  - `metadata: object`\n  - `platform: string`\n  - `platform_account_id: string`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.accounts.gmbLocations.setDefault('id', { location_id: 'location_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Accounts.GmbLocations.SetDefault',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Accounts.GmbLocations.SetDefault(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.AccountGmbLocationSetDefaultParams{\n\t\t\tLocationID: relaygo.F("location_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/accounts/$ID/gmb-locations \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "location_id": "location_id"\n        }\'',
      },
      java: {
        method: 'accounts().gmbLocations().setDefault',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.accounts.gmblocations.GmbLocationSetDefaultParams;\nimport dev.relayapi.models.accounts.gmblocations.GmbLocationSetDefaultResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        GmbLocationSetDefaultParams params = GmbLocationSetDefaultParams.builder()\n            .id("id")\n            .locationId("location_id")\n            .build();\n        GmbLocationSetDefaultResponse response = client.accounts().gmbLocations().setDefault(params);\n    }\n}',
      },
      python: {
        method: 'accounts.gmb_locations.set_default',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.accounts.gmb_locations.set_default(\n    id="id",\n    location_id="location_id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.accounts.gmbLocations.setDefault',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.accounts.gmbLocations.setDefault('id', {\n  location_id: 'location_id',\n});\n\nconsole.log(response.id);",
      },
    },
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
      "## upload\n\n`client.media.upload(filename: string, body: string): { filename: string; size: number; type: string; url: string; }`\n\n**post** `/v1/media/upload`\n\nUpload a raw file body. Pass the filename as a query parameter and set the Content-Type header.\n\n### Parameters\n\n- `filename: string`\n  Original filename\n\n- `body: string`\n\n### Returns\n\n- `{ filename: string; size: number; type: string; url: string; }`\n\n  - `filename: string`\n  - `size: number`\n  - `type: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.media.upload(fs.createReadStream('path/to/file'), { filename: 'filename' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Media.Upload',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.Upload(\n\t\tcontext.TODO(),\n\t\tio.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\trelaygo.MediaUploadParams{\n\t\t\tFilename: relaygo.F("filename"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Filename)\n}\n',
      },
      http: {
        example:
          "curl https://api.relayapi.dev/v1/media/upload \\\n    -H 'Content-Type: application/octet-stream' \\\n    -H \"Authorization: Bearer $RELAY_API_KEY\" \\\n    -F 'body=@/path/to/body'",
      },
      java: {
        method: 'media().upload',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.media.MediaUploadParams;\nimport dev.relayapi.models.media.MediaUploadResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MediaUploadParams params = MediaUploadParams.builder()\n            .filename("filename")\n            .body("Example data")\n            .build();\n        MediaUploadResponse response = client.media().upload(params);\n    }\n}',
      },
      python: {
        method: 'media.upload',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.upload(\n    body=b"Example data",\n    filename="filename",\n)\nprint(response.filename)',
      },
      typescript: {
        method: 'client.media.upload',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.upload(fs.createReadStream('path/to/file'), {\n  filename: 'filename',\n});\n\nconsole.log(response.filename);",
      },
    },
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
      "## get_presign_url\n\n`client.media.getPresignURL(content_type: string, filename: string): { expires_in: number; upload_url: string; url: string; }`\n\n**post** `/v1/media/presign`\n\nGenerate a pre-signed URL for direct upload to R2. The client can PUT the file to the returned URL.\n\n### Parameters\n\n- `content_type: string`\n  MIME type of the file to upload\n\n- `filename: string`\n  Desired filename\n\n### Returns\n\n- `{ expires_in: number; upload_url: string; url: string; }`\n\n  - `expires_in: number`\n  - `upload_url: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.media.getPresignURL({ content_type: 'content_type', filename: 'filename' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Media.GetPresignURL',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.GetPresignURL(context.TODO(), relaygo.MediaGetPresignURLParams{\n\t\tContentType: relaygo.F("content_type"),\n\t\tFilename:    relaygo.F("filename"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ExpiresIn)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/media/presign \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "content_type": "content_type",\n          "filename": "filename"\n        }\'',
      },
      java: {
        method: 'media().getPresignUrl',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.media.MediaGetPresignUrlParams;\nimport dev.relayapi.models.media.MediaGetPresignUrlResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MediaGetPresignUrlParams params = MediaGetPresignUrlParams.builder()\n            .contentType("content_type")\n            .filename("filename")\n            .build();\n        MediaGetPresignUrlResponse response = client.media().getPresignUrl(params);\n    }\n}',
      },
      python: {
        method: 'media.get_presign_url',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.get_presign_url(\n    content_type="content_type",\n    filename="filename",\n)\nprint(response.expires_in)',
      },
      typescript: {
        method: 'client.media.getPresignURL',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.getPresignURL({\n  content_type: 'content_type',\n  filename: 'filename',\n});\n\nconsole.log(response.expires_in);",
      },
    },
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
      "## retrieve\n\n`client.media.retrieve(id: string): { id: string; created_at: string; filename: string; mime_type: string; size: number; url: string; duration?: number; height?: number; width?: number; }`\n\n**get** `/v1/media/{id}`\n\nGet media details\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Returns\n\n- `{ id: string; created_at: string; filename: string; mime_type: string; size: number; url: string; duration?: number; height?: number; width?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `filename: string`\n  - `mime_type: string`\n  - `size: number`\n  - `url: string`\n  - `duration?: number`\n  - `height?: number`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst media = await client.media.retrieve('id');\n\nconsole.log(media);\n```",
    perLanguage: {
      go: {
        method: 'client.Media.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmedia, err := client.Media.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", media.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/media/$ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'media().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.media.MediaRetrieveParams;\nimport dev.relayapi.models.media.MediaRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MediaRetrieveResponse media = client.media().retrieve("id");\n    }\n}',
      },
      python: {
        method: 'media.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nmedia = client.media.retrieve(\n    "id",\n)\nprint(media.id)',
      },
      typescript: {
        method: 'client.media.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst media = await client.media.retrieve('id');\n\nconsole.log(media.id);",
      },
    },
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
      "## delete\n\n`client.media.delete(id: string): void`\n\n**delete** `/v1/media/{id}`\n\nDelete media\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.media.delete('id')\n```",
    perLanguage: {
      go: {
        method: 'client.Media.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Media.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/media/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'media().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.media.MediaDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.media().delete("id");\n    }\n}',
      },
      python: {
        method: 'media.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.media.delete(\n    "id",\n)',
      },
      typescript: {
        method: 'client.media.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.media.delete('id');",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/webhooks',
    httpMethod: 'get',
    summary: 'List webhook endpoints',
    description: 'List webhook endpoints',
    stainlessPath: '(resource) webhooks > (method) list',
    qualified: 'client.webhooks.list',
    params: [
      'cursor?: string;',
      'from?: string;',
      'limit?: number;',
      'to?: string;',
      'workspace_id?: string;',
    ],
    response:
      '{ data: { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.webhooks.list(cursor?: string, from?: string, limit?: number, to?: string, workspace_id?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/webhooks`\n\nList webhook endpoints\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n- `workspace_id?: string`\n  Filter by workspace ID\n\n### Returns\n\n- `{ data: { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst webhooks = await client.webhooks.list();\n\nconsole.log(webhooks);\n```",
    perLanguage: {
      go: {
        method: 'client.Webhooks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\twebhooks, err := client.Webhooks.List(context.TODO(), relaygo.WebhookListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", webhooks.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/webhooks \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'webhooks().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.webhooks.WebhookListParams;\nimport dev.relayapi.models.webhooks.WebhookListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WebhookListResponse webhooks = client.webhooks().list();\n    }\n}',
      },
      python: {
        method: 'webhooks.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nwebhooks = client.webhooks.list()\nprint(webhooks.data)',
      },
      typescript: {
        method: 'client.webhooks.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhooks = await client.webhooks.list();\n\nconsole.log(webhooks.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/webhooks',
    httpMethod: 'post',
    summary: 'Create a webhook endpoint',
    description: 'Create a new webhook endpoint. The signing secret is returned only once in the response.',
    stainlessPath: '(resource) webhooks > (method) create',
    qualified: 'client.webhooks.create',
    params: ['events: string[];', 'url: string;', 'workspace_id?: string;'],
    response:
      '{ id: string; created_at: string; enabled: boolean; events: string[]; secret: string; url: string; }',
    markdown:
      "## create\n\n`client.webhooks.create(events: string[], url: string, workspace_id?: string): { id: string; created_at: string; enabled: boolean; events: string[]; secret: string; url: string; }`\n\n**post** `/v1/webhooks`\n\nCreate a new webhook endpoint. The signing secret is returned only once in the response.\n\n### Parameters\n\n- `events: string[]`\n  Events to subscribe to\n\n- `url: string`\n  Webhook endpoint URL\n\n- `workspace_id?: string`\n  Workspace ID to scope this webhook to\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; events: string[]; secret: string; url: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `secret: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst webhook = await client.webhooks.create({ events: ['post.published'], url: 'https://example.com' });\n\nconsole.log(webhook);\n```",
    perLanguage: {
      go: {
        method: 'client.Webhooks.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\twebhook, err := client.Webhooks.New(context.TODO(), relaygo.WebhookNewParams{\n\t\tEvents: relaygo.F([]relaygo.WebhookNewParamsEvent{relaygo.WebhookNewParamsEventPostPublished}),\n\t\tURL:    relaygo.F("https://example.com"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", webhook.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/webhooks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "events": [\n            "post.published"\n          ],\n          "url": "https://example.com"\n        }\'',
      },
      java: {
        method: 'webhooks().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.webhooks.WebhookCreateParams;\nimport dev.relayapi.models.webhooks.WebhookCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WebhookCreateParams params = WebhookCreateParams.builder()\n            .addEvent(WebhookCreateParams.Event.POST_PUBLISHED)\n            .url("https://example.com")\n            .build();\n        WebhookCreateResponse webhook = client.webhooks().create(params);\n    }\n}',
      },
      python: {
        method: 'webhooks.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.create(\n    events=["post.published"],\n    url="https://example.com",\n)\nprint(webhook.id)',
      },
      typescript: {
        method: 'client.webhooks.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.create({\n  events: ['post.published'],\n  url: 'https://example.com',\n});\n\nconsole.log(webhook.id);",
      },
    },
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
      "## update\n\n`client.webhooks.update(id: string, enabled?: boolean, events?: string[], url?: string): { id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }`\n\n**patch** `/v1/webhooks/{id}`\n\nUpdate a webhook endpoint\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n- `enabled?: boolean`\n  Enable or disable the webhook\n\n- `events?: string[]`\n  Updated events\n\n- `url?: string`\n  Updated endpoint URL\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; events: string[]; updated_at: string; url: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `updated_at: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst webhook = await client.webhooks.update('id');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      go: {
        method: 'client.Webhooks.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\twebhook, err := client.Webhooks.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\trelaygo.WebhookUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", webhook.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/webhooks/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'webhooks().update',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.webhooks.WebhookUpdateParams;\nimport dev.relayapi.models.webhooks.WebhookUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WebhookUpdateResponse webhook = client.webhooks().update("id");\n    }\n}',
      },
      python: {
        method: 'webhooks.update',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.update(\n    id="id",\n)\nprint(webhook.id)',
      },
      typescript: {
        method: 'client.webhooks.update',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.update('id');\n\nconsole.log(webhook.id);",
      },
    },
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
      "## delete\n\n`client.webhooks.delete(id: string): void`\n\n**delete** `/v1/webhooks/{id}`\n\nDelete a webhook endpoint\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.webhooks.delete('id')\n```",
    perLanguage: {
      go: {
        method: 'client.Webhooks.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Webhooks.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/webhooks/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'webhooks().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.webhooks.WebhookDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.webhooks().delete("id");\n    }\n}',
      },
      python: {
        method: 'webhooks.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.webhooks.delete(\n    "id",\n)',
      },
      typescript: {
        method: 'client.webhooks.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.webhooks.delete('id');",
      },
    },
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
      "## send_test\n\n`client.webhooks.sendTest(webhook_id: string): { response_time_ms: number; status_code: number; success: boolean; }`\n\n**post** `/v1/webhooks/test`\n\nSend a test POST request to the webhook URL to verify it is reachable.\n\n### Parameters\n\n- `webhook_id: string`\n  ID of the webhook to test\n\n### Returns\n\n- `{ response_time_ms: number; status_code: number; success: boolean; }`\n\n  - `response_time_ms: number`\n  - `status_code: number`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.webhooks.sendTest({ webhook_id: 'webhook_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Webhooks.SendTest',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Webhooks.SendTest(context.TODO(), relaygo.WebhookSendTestParams{\n\t\tWebhookID: relaygo.F("webhook_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ResponseTimeMs)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/webhooks/test \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "webhook_id": "webhook_id"\n        }\'',
      },
      java: {
        method: 'webhooks().sendTest',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.webhooks.WebhookSendTestParams;\nimport dev.relayapi.models.webhooks.WebhookSendTestResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WebhookSendTestParams params = WebhookSendTestParams.builder()\n            .webhookId("webhook_id")\n            .build();\n        WebhookSendTestResponse response = client.webhooks().sendTest(params);\n    }\n}',
      },
      python: {
        method: 'webhooks.send_test',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.webhooks.send_test(\n    webhook_id="webhook_id",\n)\nprint(response.response_time_ms)',
      },
      typescript: {
        method: 'client.webhooks.sendTest',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.webhooks.sendTest({ webhook_id: 'webhook_id' });\n\nconsole.log(response.response_time_ms);",
      },
    },
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
      "## list_logs\n\n`client.webhooks.listLogs(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/webhooks/logs`\n\nReturns delivery logs from the last 7 days.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; created_at: string; error: string; event: string; response_time_ms: number; status_code: number; success: boolean; webhook_id: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; error: string; event: string; response_time_ms: number; status_code: number; success: boolean; webhook_id: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.webhooks.listLogs();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Webhooks.ListLogs',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Webhooks.ListLogs(context.TODO(), relaygo.WebhookListLogsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/webhooks/logs \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'webhooks().listLogs',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.webhooks.WebhookListLogsParams;\nimport dev.relayapi.models.webhooks.WebhookListLogsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WebhookListLogsResponse response = client.webhooks().listLogs();\n    }\n}',
      },
      python: {
        method: 'webhooks.list_logs',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.webhooks.list_logs()\nprint(response.data)',
      },
      typescript: {
        method: 'client.webhooks.listLogs',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.webhooks.listLogs();\n\nconsole.log(response.data);",
      },
    },
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
      "{ data: { id: string; created_at: string; enabled: boolean; expires_at: string; name: string; permission: 'read_write' | 'read_only'; prefix: string; start: string; workspace_scope: 'all' | string[]; }[]; has_more: boolean; next_cursor: string; }",
    markdown:
      "## list\n\n`client.apiKeys.list(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/api-keys`\n\nList API keys\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; created_at: string; enabled: boolean; expires_at: string; name: string; permission: 'read_write' | 'read_only'; prefix: string; start: string; workspace_scope: 'all' | string[]; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; enabled: boolean; expires_at: string; name: string; permission: 'read_write' | 'read_only'; prefix: string; start: string; workspace_scope: 'all' | string[]; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst apiKeys = await client.apiKeys.list();\n\nconsole.log(apiKeys);\n```",
    perLanguage: {
      go: {
        method: 'client.APIKeys.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKeys, err := client.APIKeys.List(context.TODO(), relaygo.APIKeyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKeys.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/api-keys \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'apiKeys().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.apikeys.ApiKeyListParams;\nimport dev.relayapi.models.apikeys.ApiKeyListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ApiKeyListResponse apiKeys = client.apiKeys().list();\n    }\n}',
      },
      python: {
        method: 'api_keys.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\napi_keys = client.api_keys.list()\nprint(api_keys.data)',
      },
      typescript: {
        method: 'client.apiKeys.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKeys = await client.apiKeys.list();\n\nconsole.log(apiKeys.data);",
      },
    },
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
    params: [
      'name: string;',
      'expires_in_days?: number;',
      "permission?: 'read_write' | 'read_only';",
      "workspace_scope?: 'all' | string[];",
    ],
    response:
      "{ id: string; created_at: string; expires_at: string; key: string; name: string; permission: 'read_write' | 'read_only'; prefix: string; workspace_scope: 'all' | string[]; }",
    markdown:
      "## create\n\n`client.apiKeys.create(name: string, expires_in_days?: number, permission?: 'read_write' | 'read_only', workspace_scope?: 'all' | string[]): { id: string; created_at: string; expires_at: string; key: string; name: string; permission: 'read_write' | 'read_only'; prefix: string; workspace_scope: 'all' | string[]; }`\n\n**post** `/v1/api-keys`\n\nCreate a new API key. The full key is returned only once in the response — store it securely.\n\n### Parameters\n\n- `name: string`\n  Name for the API key\n\n- `expires_in_days?: number`\n  Number of days until the key expires\n\n- `permission?: 'read_write' | 'read_only'`\n  Permission level: read_write (default) or read_only\n\n- `workspace_scope?: 'all' | string[]`\n  Workspace access: 'all' for unrestricted, or array of workspace IDs\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; key: string; name: string; permission: 'read_write' | 'read_only'; prefix: string; workspace_scope: 'all' | string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `key: string`\n  - `name: string`\n  - `permission: 'read_write' | 'read_only'`\n  - `prefix: string`\n  - `workspace_scope: 'all' | string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst apiKey = await client.apiKeys.create({ name: 'x' });\n\nconsole.log(apiKey);\n```",
    perLanguage: {
      go: {
        method: 'client.APIKeys.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKey, err := client.APIKeys.New(context.TODO(), relaygo.APIKeyNewParams{\n\t\tName: relaygo.F("x"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKey.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/api-keys \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
      java: {
        method: 'apiKeys().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.apikeys.ApiKeyCreateParams;\nimport dev.relayapi.models.apikeys.ApiKeyCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ApiKeyCreateParams params = ApiKeyCreateParams.builder()\n            .name("x")\n            .build();\n        ApiKeyCreateResponse apiKey = client.apiKeys().create(params);\n    }\n}',
      },
      python: {
        method: 'api_keys.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\napi_key = client.api_keys.create(\n    name="x",\n)\nprint(api_key.id)',
      },
      typescript: {
        method: 'client.apiKeys.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKey = await client.apiKeys.create({ name: 'x' });\n\nconsole.log(apiKey.id);",
      },
    },
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
      "## delete\n\n`client.apiKeys.delete(id: string): void`\n\n**delete** `/v1/api-keys/{id}`\n\nDelete an API key\n\n### Parameters\n\n- `id: string`\n  Resource ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.apiKeys.delete('id')\n```",
    perLanguage: {
      go: {
        method: 'client.APIKeys.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.APIKeys.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/api-keys/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'apiKeys().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.apikeys.ApiKeyDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.apiKeys().delete("id");\n    }\n}',
      },
      python: {
        method: 'api_keys.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.api_keys.delete(\n    "id",\n)',
      },
      typescript: {
        method: 'client.apiKeys.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.apiKeys.delete('id');",
      },
    },
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
      "## retrieve\n\n`client.usage.retrieve(): { plan: object; rate_limit: object; subscription: object; usage: object; }`\n\n**get** `/v1/usage`\n\nReturns current plan details and API call usage statistics for the organization.\n\n### Returns\n\n- `{ plan: { api_calls_limit: number; api_calls_per_min: number; features: { analytics: boolean; inbox: boolean; }; name: 'free' | 'pro'; }; rate_limit: { limit_per_minute: number; }; subscription: { monthly_price_cents: number; price_per_thousand_calls_cents: number; status: string; }; usage: { api_calls_remaining: number; api_calls_used: number; cycle_end: string; cycle_start: string; overage_calls: number; overage_cost_cents: number; }; }`\n\n  - `plan: { api_calls_limit: number; api_calls_per_min: number; features: { analytics: boolean; inbox: boolean; }; name: 'free' | 'pro'; }`\n  - `rate_limit: { limit_per_minute: number; }`\n  - `subscription: { monthly_price_cents: number; price_per_thousand_calls_cents: number; status: string; }`\n  - `usage: { api_calls_remaining: number; api_calls_used: number; cycle_end: string; cycle_start: string; overage_calls: number; overage_cost_cents: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst usage = await client.usage.retrieve();\n\nconsole.log(usage);\n```",
    perLanguage: {
      go: {
        method: 'client.Usage.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tusage, err := client.Usage.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", usage.Plan)\n}\n',
      },
      http: {
        example: 'curl https://api.relayapi.dev/v1/usage \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'usage().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.usage.UsageRetrieveParams;\nimport dev.relayapi.models.usage.UsageRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        UsageRetrieveResponse usage = client.usage().retrieve();\n    }\n}',
      },
      python: {
        method: 'usage.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nusage = client.usage.retrieve()\nprint(usage.plan)',
      },
      typescript: {
        method: 'client.usage.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst usage = await client.usage.retrieve();\n\nconsole.log(usage.plan);",
      },
    },
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
      "## create_bluesky_connection\n\n`client.connect.createBlueskyConnection(app_password: string, handle: string): { account: object; }`\n\n**post** `/v1/connect/bluesky`\n\nConnect Bluesky via app password\n\n### Parameters\n\n- `app_password: string`\n  Bluesky app password\n\n- `handle: string`\n  Bluesky handle (e.g. user.bsky.social)\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.createBlueskyConnection({ app_password: 'app_password', handle: 'handle' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.NewBlueskyConnection',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.NewBlueskyConnection(context.TODO(), relaygo.ConnectNewBlueskyConnectionParams{\n\t\tAppPassword: relaygo.F("app_password"),\n\t\tHandle:      relaygo.F("handle"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/bluesky \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "app_password": "app_password",\n          "handle": "handle"\n        }\'',
      },
      java: {
        method: 'connect().createBlueskyConnection',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.ConnectCreateBlueskyConnectionParams;\nimport dev.relayapi.models.connect.ConnectCreateBlueskyConnectionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ConnectCreateBlueskyConnectionParams params = ConnectCreateBlueskyConnectionParams.builder()\n            .appPassword("app_password")\n            .handle("handle")\n            .build();\n        ConnectCreateBlueskyConnectionResponse response = client.connect().createBlueskyConnection(params);\n    }\n}',
      },
      python: {
        method: 'connect.create_bluesky_connection',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.create_bluesky_connection(\n    app_password="app_password",\n    handle="handle",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.createBlueskyConnection',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.createBlueskyConnection({\n  app_password: 'app_password',\n  handle: 'handle',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## fetch_pending_data\n\n`client.connect.fetchPendingData(token: string): { platform: string; temp_token: string; user_profile: object; boards?: object[]; locations?: object[]; organizations?: object[]; pages?: object[]; profiles?: object[]; }`\n\n**get** `/v1/connect/pending-data`\n\nOne-time use, expires after 10 minutes. For headless OAuth flows.\n\n### Parameters\n\n- `token: string`\n  Temporary token from headless OAuth flow\n\n### Returns\n\n- `{ platform: string; temp_token: string; user_profile: { id: string; avatar_url: string; name: string; username: string; }; boards?: object[]; locations?: object[]; organizations?: object[]; pages?: object[]; profiles?: object[]; }`\n\n  - `platform: string`\n  - `temp_token: string`\n  - `user_profile: { id: string; avatar_url: string; name: string; username: string; }`\n  - `boards?: object[]`\n  - `locations?: object[]`\n  - `organizations?: object[]`\n  - `pages?: object[]`\n  - `profiles?: object[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.fetchPendingData({ token: 'token' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.FetchPendingData',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.FetchPendingData(context.TODO(), relaygo.ConnectFetchPendingDataParams{\n\t\tToken: relaygo.F("token"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Platform)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/pending-data \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().fetchPendingData',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.ConnectFetchPendingDataParams;\nimport dev.relayapi.models.connect.ConnectFetchPendingDataResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ConnectFetchPendingDataParams params = ConnectFetchPendingDataParams.builder()\n            .token("token")\n            .build();\n        ConnectFetchPendingDataResponse response = client.connect().fetchPendingData(params);\n    }\n}',
      },
      python: {
        method: 'connect.fetch_pending_data',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.fetch_pending_data(\n    token="token",\n)\nprint(response.platform)',
      },
      typescript: {
        method: 'client.connect.fetchPendingData',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.fetchPendingData({ token: 'token' });\n\nconsole.log(response.platform);",
      },
    },
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
      '## start_oauth_flow\n\n`client.connect.startOAuthFlow(platform: string, headless?: string, method?: string, redirect_url?: string): { auth_url: string; }`\n\n**get** `/v1/connect/{platform}`\n\nReturns an auth_url to redirect the user for OAuth authorization.\n\n### Parameters\n\n- `platform: string`\n  OAuth platform to connect\n\n- `headless?: string`\n  Set to "true" for headless mode (returns data instead of redirecting)\n\n- `method?: string`\n  Auth method variant (e.g. "direct" for Instagram Login instead of Facebook Login)\n\n- `redirect_url?: string`\n  URL to redirect after OAuth completes\n\n### Returns\n\n- `{ auth_url: string; }`\n\n  - `auth_url: string`\n\n### Example\n\n```typescript\nimport Relay from \'@relayapi/mcp\';\n\nconst client = new Relay();\n\nconst response = await client.connect.startOAuthFlow(\'twitter\');\n\nconsole.log(response);\n```',
    perLanguage: {
      go: {
        method: 'client.Connect.StartOAuthFlow',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.StartOAuthFlow(\n\t\tcontext.TODO(),\n\t\trelaygo.ConnectStartOAuthFlowParamsPlatformTwitter,\n\t\trelaygo.ConnectStartOAuthFlowParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AuthURL)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/$PLATFORM \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().startOAuthFlow',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.ConnectStartOAuthFlowParams;\nimport dev.relayapi.models.connect.ConnectStartOAuthFlowResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ConnectStartOAuthFlowResponse response = client.connect().startOAuthFlow(ConnectStartOAuthFlowParams.Platform.TWITTER);\n    }\n}',
      },
      python: {
        method: 'connect.start_oauth_flow',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.start_oauth_flow(\n    platform="twitter",\n)\nprint(response.auth_url)',
      },
      typescript: {
        method: 'client.connect.startOAuthFlow',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.startOAuthFlow('twitter');\n\nconsole.log(response.auth_url);",
      },
    },
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
      "## complete_oauth_callback\n\n`client.connect.completeOAuthCallback(platform: string, code: string, redirect_url?: string): { account: object; }`\n\n**post** `/v1/connect/{platform}`\n\nExchange OAuth code for tokens and save the account.\n\n### Parameters\n\n- `platform: string`\n  OAuth platform to complete\n\n- `code: string`\n  OAuth authorization code\n\n- `redirect_url?: string`\n  Redirect URL used during the OAuth flow (must match)\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.completeOAuthCallback('twitter', { code: 'code' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.CompleteOAuthCallback',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.CompleteOAuthCallback(\n\t\tcontext.TODO(),\n\t\trelaygo.ConnectCompleteOAuthCallbackParamsPlatformTwitter,\n\t\trelaygo.ConnectCompleteOAuthCallbackParams{\n\t\t\tCode: relaygo.F("code"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/$PLATFORM \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "code": "code"\n        }\'',
      },
      java: {
        method: 'connect().completeOAuthCallback',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.ConnectCompleteOAuthCallbackParams;\nimport dev.relayapi.models.connect.ConnectCompleteOAuthCallbackResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ConnectCompleteOAuthCallbackParams params = ConnectCompleteOAuthCallbackParams.builder()\n            .platform(ConnectCompleteOAuthCallbackParams.Platform.TWITTER)\n            .code("code")\n            .build();\n        ConnectCompleteOAuthCallbackResponse response = client.connect().completeOAuthCallback(params);\n    }\n}',
      },
      python: {
        method: 'connect.complete_oauth_callback',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.complete_oauth_callback(\n    platform="twitter",\n    code="code",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.completeOAuthCallback',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.completeOAuthCallback('twitter', { code: 'code' });\n\nconsole.log(response.account);",
      },
    },
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
      "## initiate_connection\n\n`client.connect.telegram.initiateConnection(): { bot_username: string; code: string; expires_at: string; expires_in: number; instructions: string[]; }`\n\n**post** `/v1/connect/telegram`\n\nGenerates a 6-character access code (valid 15 minutes).\n\n### Returns\n\n- `{ bot_username: string; code: string; expires_at: string; expires_in: number; instructions: string[]; }`\n\n  - `bot_username: string`\n  - `code: string`\n  - `expires_at: string`\n  - `expires_in: number`\n  - `instructions: string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.telegram.initiateConnection();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Telegram.InitiateConnection',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Telegram.InitiateConnection(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BotUsername)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/telegram \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().telegram().initiateConnection',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.telegram.TelegramInitiateConnectionParams;\nimport dev.relayapi.models.connect.telegram.TelegramInitiateConnectionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TelegramInitiateConnectionResponse response = client.connect().telegram().initiateConnection();\n    }\n}',
      },
      python: {
        method: 'connect.telegram.initiate_connection',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.telegram.initiate_connection()\nprint(response.bot_username)',
      },
      typescript: {
        method: 'client.connect.telegram.initiateConnection',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.telegram.initiateConnection();\n\nconsole.log(response.bot_username);",
      },
    },
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
      "## poll_connection_status\n\n`client.connect.telegram.pollConnectionStatus(code: string): { status: 'pending' | 'connected' | 'expired'; account?: object; chat_id?: string; chat_title?: string; chat_type?: string; expires_at?: string; }`\n\n**get** `/v1/connect/telegram`\n\nPoll Telegram connection status\n\n### Parameters\n\n- `code: string`\n  The 6-character access code to check\n\n### Returns\n\n- `{ status: 'pending' | 'connected' | 'expired'; account?: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; chat_id?: string; chat_title?: string; chat_type?: string; expires_at?: string; }`\n\n  - `status: 'pending' | 'connected' | 'expired'`\n  - `account?: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n  - `chat_id?: string`\n  - `chat_title?: string`\n  - `chat_type?: string`\n  - `expires_at?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.telegram.pollConnectionStatus({ code: 'code' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Telegram.PollConnectionStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Telegram.PollConnectionStatus(context.TODO(), relaygo.ConnectTelegramPollConnectionStatusParams{\n\t\tCode: relaygo.F("code"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ChatID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/telegram \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().telegram().pollConnectionStatus',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.telegram.TelegramPollConnectionStatusParams;\nimport dev.relayapi.models.connect.telegram.TelegramPollConnectionStatusResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TelegramPollConnectionStatusParams params = TelegramPollConnectionStatusParams.builder()\n            .code("code")\n            .build();\n        TelegramPollConnectionStatusResponse response = client.connect().telegram().pollConnectionStatus(params);\n    }\n}',
      },
      python: {
        method: 'connect.telegram.poll_connection_status',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.telegram.poll_connection_status(\n    code="code",\n)\nprint(response.chat_id)',
      },
      typescript: {
        method: 'client.connect.telegram.pollConnectionStatus',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.telegram.pollConnectionStatus({ code: 'code' });\n\nconsole.log(response.chat_id);",
      },
    },
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
      "## connect_directly\n\n`client.connect.telegram.connectDirectly(chat_id: string): { account: object; }`\n\n**post** `/v1/connect/telegram/direct`\n\nConnect Telegram directly with chat ID\n\n### Parameters\n\n- `chat_id: string`\n  Telegram chat or channel ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.telegram.connectDirectly({ chat_id: 'chat_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Telegram.ConnectDirectly',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Telegram.ConnectDirectly(context.TODO(), relaygo.ConnectTelegramConnectDirectlyParams{\n\t\tChatID: relaygo.F("chat_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/telegram/direct \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "chat_id": "chat_id"\n        }\'',
      },
      java: {
        method: 'connect().telegram().connectDirectly',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.telegram.TelegramConnectDirectlyParams;\nimport dev.relayapi.models.connect.telegram.TelegramConnectDirectlyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TelegramConnectDirectlyParams params = TelegramConnectDirectlyParams.builder()\n            .chatId("chat_id")\n            .build();\n        TelegramConnectDirectlyResponse response = client.connect().telegram().connectDirectly(params);\n    }\n}',
      },
      python: {
        method: 'connect.telegram.connect_directly',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.telegram.connect_directly(\n    chat_id="chat_id",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.telegram.connectDirectly',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.telegram.connectDirectly({ chat_id: 'chat_id' });\n\nconsole.log(response.account);",
      },
    },
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
      "## get_sdk_config\n\n`client.connect.whatsapp.getSDKConfig(): { app_id: string; config_id: string; }`\n\n**get** `/v1/connect/whatsapp/sdk-config`\n\nGet WhatsApp Embedded Signup SDK config\n\n### Returns\n\n- `{ app_id: string; config_id: string; }`\n\n  - `app_id: string`\n  - `config_id: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.whatsapp.getSDKConfig();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Whatsapp.GetSDKConfig',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Whatsapp.GetSDKConfig(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AppID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/whatsapp/sdk-config \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().whatsapp().getSdkConfig',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.whatsapp.WhatsappGetSdkConfigParams;\nimport dev.relayapi.models.connect.whatsapp.WhatsappGetSdkConfigResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WhatsappGetSdkConfigResponse response = client.connect().whatsapp().getSdkConfig();\n    }\n}',
      },
      python: {
        method: 'connect.whatsapp.get_sdk_config',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.whatsapp.get_sdk_config()\nprint(response.app_id)',
      },
      typescript: {
        method: 'client.connect.whatsapp.getSDKConfig',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.whatsapp.getSDKConfig();\n\nconsole.log(response.app_id);",
      },
    },
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
      "## complete_embedded_signup\n\n`client.connect.whatsapp.completeEmbeddedSignup(code: string): { account: object; }`\n\n**post** `/v1/connect/whatsapp/embedded-signup`\n\nComplete WhatsApp Embedded Signup\n\n### Parameters\n\n- `code: string`\n  Code from WhatsApp embedded signup flow\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.whatsapp.completeEmbeddedSignup({ code: 'code' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Whatsapp.CompleteEmbeddedSignup',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Whatsapp.CompleteEmbeddedSignup(context.TODO(), relaygo.ConnectWhatsappCompleteEmbeddedSignupParams{\n\t\tCode: relaygo.F("code"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/whatsapp/embedded-signup \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "code": "code"\n        }\'',
      },
      java: {
        method: 'connect().whatsapp().completeEmbeddedSignup',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.whatsapp.WhatsappCompleteEmbeddedSignupParams;\nimport dev.relayapi.models.connect.whatsapp.WhatsappCompleteEmbeddedSignupResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WhatsappCompleteEmbeddedSignupParams params = WhatsappCompleteEmbeddedSignupParams.builder()\n            .code("code")\n            .build();\n        WhatsappCompleteEmbeddedSignupResponse response = client.connect().whatsapp().completeEmbeddedSignup(params);\n    }\n}',
      },
      python: {
        method: 'connect.whatsapp.complete_embedded_signup',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.whatsapp.complete_embedded_signup(\n    code="code",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.whatsapp.completeEmbeddedSignup',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.whatsapp.completeEmbeddedSignup({ code: 'code' });\n\nconsole.log(response.account);",
      },
    },
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
      "## connect_via_credentials\n\n`client.connect.whatsapp.connectViaCredentials(access_token: string, phone_number_id: string, waba_id: string): { account: object; }`\n\n**post** `/v1/connect/whatsapp/credentials`\n\nConnect WhatsApp via System User credentials\n\n### Parameters\n\n- `access_token: string`\n  WhatsApp Business API access token\n\n- `phone_number_id: string`\n  WhatsApp phone number ID\n\n- `waba_id: string`\n  WhatsApp Business Account ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.whatsapp.connectViaCredentials({\n  access_token: 'access_token',\n  phone_number_id: 'phone_number_id',\n  waba_id: 'waba_id',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Whatsapp.ConnectViaCredentials',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Whatsapp.ConnectViaCredentials(context.TODO(), relaygo.ConnectWhatsappConnectViaCredentialsParams{\n\t\tAccessToken:   relaygo.F("access_token"),\n\t\tPhoneNumberID: relaygo.F("phone_number_id"),\n\t\tWabaID:        relaygo.F("waba_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/whatsapp/credentials \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "access_token": "access_token",\n          "phone_number_id": "phone_number_id",\n          "waba_id": "waba_id"\n        }\'',
      },
      java: {
        method: 'connect().whatsapp().connectViaCredentials',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.whatsapp.WhatsappConnectViaCredentialsParams;\nimport dev.relayapi.models.connect.whatsapp.WhatsappConnectViaCredentialsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WhatsappConnectViaCredentialsParams params = WhatsappConnectViaCredentialsParams.builder()\n            .accessToken("access_token")\n            .phoneNumberId("phone_number_id")\n            .wabaId("waba_id")\n            .build();\n        WhatsappConnectViaCredentialsResponse response = client.connect().whatsapp().connectViaCredentials(params);\n    }\n}',
      },
      python: {
        method: 'connect.whatsapp.connect_via_credentials',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.whatsapp.connect_via_credentials(\n    access_token="access_token",\n    phone_number_id="phone_number_id",\n    waba_id="waba_id",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.whatsapp.connectViaCredentials',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.whatsapp.connectViaCredentials({\n  access_token: 'access_token',\n  phone_number_id: 'phone_number_id',\n  waba_id: 'waba_id',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## list\n\n`client.connect.facebook.pages.list(): { pages: object[]; }`\n\n**get** `/v1/connect/facebook/pages`\n\nList Facebook Pages after OAuth\n\n### Returns\n\n- `{ pages: { id: string; name: string; category?: string; picture_url?: string; }[]; }`\n\n  - `pages: { id: string; name: string; category?: string; picture_url?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst pages = await client.connect.facebook.pages.list();\n\nconsole.log(pages);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Facebook.Pages.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpages, err := client.Connect.Facebook.Pages.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pages.Pages)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/facebook/pages \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().facebook().pages().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.facebook.pages.PageListParams;\nimport dev.relayapi.models.connect.facebook.pages.PageListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PageListResponse pages = client.connect().facebook().pages().list();\n    }\n}',
      },
      python: {
        method: 'connect.facebook.pages.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\npages = client.connect.facebook.pages.list()\nprint(pages.pages)',
      },
      typescript: {
        method: 'client.connect.facebook.pages.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst pages = await client.connect.facebook.pages.list();\n\nconsole.log(pages.pages);",
      },
    },
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
      "## select\n\n`client.connect.facebook.pages.select(connect_token: string, page_id: string): { account: object; }`\n\n**post** `/v1/connect/facebook/pages`\n\nSelect Facebook Page to connect\n\n### Parameters\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `page_id: string`\n  Selected Facebook page ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.facebook.pages.select({ connect_token: 'connect_token', page_id: 'page_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Facebook.Pages.Select',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Facebook.Pages.Select(context.TODO(), relaygo.ConnectFacebookPageSelectParams{\n\t\tConnectToken: relaygo.F("connect_token"),\n\t\tPageID:       relaygo.F("page_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/facebook/pages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "connect_token": "connect_token",\n          "page_id": "page_id"\n        }\'',
      },
      java: {
        method: 'connect().facebook().pages().select',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.facebook.pages.PageSelectParams;\nimport dev.relayapi.models.connect.facebook.pages.PageSelectResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        PageSelectParams params = PageSelectParams.builder()\n            .connectToken("connect_token")\n            .pageId("page_id")\n            .build();\n        PageSelectResponse response = client.connect().facebook().pages().select(params);\n    }\n}',
      },
      python: {
        method: 'connect.facebook.pages.select',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.facebook.pages.select(\n    connect_token="connect_token",\n    page_id="page_id",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.facebook.pages.select',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.facebook.pages.select({\n  connect_token: 'connect_token',\n  page_id: 'page_id',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## list\n\n`client.connect.linkedin.organizations.list(): { organizations: object[]; personal_profile?: object; }`\n\n**get** `/v1/connect/linkedin/organizations`\n\nList LinkedIn organizations after OAuth\n\n### Returns\n\n- `{ organizations: { name: string; urn: string; logo_url?: string; vanity_name?: string; }[]; personal_profile?: { name: string; urn: string; }; }`\n\n  - `organizations: { name: string; urn: string; logo_url?: string; vanity_name?: string; }[]`\n  - `personal_profile?: { name: string; urn: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst organizations = await client.connect.linkedin.organizations.list();\n\nconsole.log(organizations);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Linkedin.Organizations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganizations, err := client.Connect.Linkedin.Organizations.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organizations.Organizations)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/linkedin/organizations \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().linkedin().organizations().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.linkedin.organizations.OrganizationListParams;\nimport dev.relayapi.models.connect.linkedin.organizations.OrganizationListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        OrganizationListResponse organizations = client.connect().linkedin().organizations().list();\n    }\n}',
      },
      python: {
        method: 'connect.linkedin.organizations.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\norganizations = client.connect.linkedin.organizations.list()\nprint(organizations.organizations)',
      },
      typescript: {
        method: 'client.connect.linkedin.organizations.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst organizations = await client.connect.linkedin.organizations.list();\n\nconsole.log(organizations.organizations);",
      },
    },
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
      "## select\n\n`client.connect.linkedin.organizations.select(account_type: 'personal' | 'organization', connect_token: string, organization_urn?: string): { account: object; }`\n\n**post** `/v1/connect/linkedin/organizations`\n\nSelect LinkedIn organization\n\n### Parameters\n\n- `account_type: 'personal' | 'organization'`\n  Whether to connect as a personal profile or organization\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `organization_urn?: string`\n  LinkedIn organization URN (required if account_type is organization)\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.linkedin.organizations.select({ account_type: 'personal', connect_token: 'connect_token' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Linkedin.Organizations.Select',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Linkedin.Organizations.Select(context.TODO(), relaygo.ConnectLinkedinOrganizationSelectParams{\n\t\tAccountType:  relaygo.F(relaygo.ConnectLinkedinOrganizationSelectParamsAccountTypePersonal),\n\t\tConnectToken: relaygo.F("connect_token"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/linkedin/organizations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_type": "personal",\n          "connect_token": "connect_token"\n        }\'',
      },
      java: {
        method: 'connect().linkedin().organizations().select',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.linkedin.organizations.OrganizationSelectParams;\nimport dev.relayapi.models.connect.linkedin.organizations.OrganizationSelectResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        OrganizationSelectParams params = OrganizationSelectParams.builder()\n            .accountType(OrganizationSelectParams.AccountType.PERSONAL)\n            .connectToken("connect_token")\n            .build();\n        OrganizationSelectResponse response = client.connect().linkedin().organizations().select(params);\n    }\n}',
      },
      python: {
        method: 'connect.linkedin.organizations.select',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.linkedin.organizations.select(\n    account_type="personal",\n    connect_token="connect_token",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.linkedin.organizations.select',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.linkedin.organizations.select({\n  account_type: 'personal',\n  connect_token: 'connect_token',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## list\n\n`client.connect.pinterest.boards.list(): { boards: object[]; }`\n\n**get** `/v1/connect/pinterest/boards`\n\nList Pinterest boards after OAuth\n\n### Returns\n\n- `{ boards: { id: string; name: string; description?: string; pin_count?: number; }[]; }`\n\n  - `boards: { id: string; name: string; description?: string; pin_count?: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst boards = await client.connect.pinterest.boards.list();\n\nconsole.log(boards);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Pinterest.Boards.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tboards, err := client.Connect.Pinterest.Boards.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", boards.Boards)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/pinterest/boards \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().pinterest().boards().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.pinterest.boards.BoardListParams;\nimport dev.relayapi.models.connect.pinterest.boards.BoardListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BoardListResponse boards = client.connect().pinterest().boards().list();\n    }\n}',
      },
      python: {
        method: 'connect.pinterest.boards.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nboards = client.connect.pinterest.boards.list()\nprint(boards.boards)',
      },
      typescript: {
        method: 'client.connect.pinterest.boards.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst boards = await client.connect.pinterest.boards.list();\n\nconsole.log(boards.boards);",
      },
    },
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
      "## select\n\n`client.connect.pinterest.boards.select(board_id: string, connect_token: string): { account: object; }`\n\n**post** `/v1/connect/pinterest/boards`\n\nSelect Pinterest board\n\n### Parameters\n\n- `board_id: string`\n  Selected Pinterest board ID\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.pinterest.boards.select({ board_id: 'board_id', connect_token: 'connect_token' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Pinterest.Boards.Select',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Pinterest.Boards.Select(context.TODO(), relaygo.ConnectPinterestBoardSelectParams{\n\t\tBoardID:      relaygo.F("board_id"),\n\t\tConnectToken: relaygo.F("connect_token"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/pinterest/boards \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "board_id": "board_id",\n          "connect_token": "connect_token"\n        }\'',
      },
      java: {
        method: 'connect().pinterest().boards().select',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.pinterest.boards.BoardSelectParams;\nimport dev.relayapi.models.connect.pinterest.boards.BoardSelectResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BoardSelectParams params = BoardSelectParams.builder()\n            .boardId("board_id")\n            .connectToken("connect_token")\n            .build();\n        BoardSelectResponse response = client.connect().pinterest().boards().select(params);\n    }\n}',
      },
      python: {
        method: 'connect.pinterest.boards.select',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.pinterest.boards.select(\n    board_id="board_id",\n    connect_token="connect_token",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.pinterest.boards.select',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.pinterest.boards.select({\n  board_id: 'board_id',\n  connect_token: 'connect_token',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## list\n\n`client.connect.googlebusiness.locations.list(): { locations: object[]; }`\n\n**get** `/v1/connect/googlebusiness/locations`\n\nList Google Business locations after OAuth\n\n### Returns\n\n- `{ locations: { id: string; name: string; address?: string; phone?: string; }[]; }`\n\n  - `locations: { id: string; name: string; address?: string; phone?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst locations = await client.connect.googlebusiness.locations.list();\n\nconsole.log(locations);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Googlebusiness.Locations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlocations, err := client.Connect.Googlebusiness.Locations.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", locations.Locations)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/googlebusiness/locations \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().googlebusiness().locations().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.googlebusiness.locations.LocationListParams;\nimport dev.relayapi.models.connect.googlebusiness.locations.LocationListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LocationListResponse locations = client.connect().googlebusiness().locations().list();\n    }\n}',
      },
      python: {
        method: 'connect.googlebusiness.locations.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nlocations = client.connect.googlebusiness.locations.list()\nprint(locations.locations)',
      },
      typescript: {
        method: 'client.connect.googlebusiness.locations.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst locations = await client.connect.googlebusiness.locations.list();\n\nconsole.log(locations.locations);",
      },
    },
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
      "## select\n\n`client.connect.googlebusiness.locations.select(connect_token: string, location_id: string): { account: object; }`\n\n**post** `/v1/connect/googlebusiness/locations`\n\nSelect Google Business location\n\n### Parameters\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `location_id: string`\n  Selected Google Business location ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.googlebusiness.locations.select({ connect_token: 'connect_token', location_id: 'location_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Googlebusiness.Locations.Select',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Googlebusiness.Locations.Select(context.TODO(), relaygo.ConnectGooglebusinessLocationSelectParams{\n\t\tConnectToken: relaygo.F("connect_token"),\n\t\tLocationID:   relaygo.F("location_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/googlebusiness/locations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "connect_token": "connect_token",\n          "location_id": "location_id"\n        }\'',
      },
      java: {
        method: 'connect().googlebusiness().locations().select',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.googlebusiness.locations.LocationSelectParams;\nimport dev.relayapi.models.connect.googlebusiness.locations.LocationSelectResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LocationSelectParams params = LocationSelectParams.builder()\n            .connectToken("connect_token")\n            .locationId("location_id")\n            .build();\n        LocationSelectResponse response = client.connect().googlebusiness().locations().select(params);\n    }\n}',
      },
      python: {
        method: 'connect.googlebusiness.locations.select',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.googlebusiness.locations.select(\n    connect_token="connect_token",\n    location_id="location_id",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.googlebusiness.locations.select',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.googlebusiness.locations.select({\n  connect_token: 'connect_token',\n  location_id: 'location_id',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## list\n\n`client.connect.snapchat.profiles.list(): { profiles: object[]; }`\n\n**get** `/v1/connect/snapchat/profiles`\n\nList Snapchat Public Profiles after OAuth\n\n### Returns\n\n- `{ profiles: { id: string; display_name: string; username: string; profile_image_url?: string; subscriber_count?: number; }[]; }`\n\n  - `profiles: { id: string; display_name: string; username: string; profile_image_url?: string; subscriber_count?: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst profiles = await client.connect.snapchat.profiles.list();\n\nconsole.log(profiles);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Snapchat.Profiles.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofiles, err := client.Connect.Snapchat.Profiles.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profiles.Profiles)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/snapchat/profiles \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connect().snapchat().profiles().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.snapchat.profiles.ProfileListParams;\nimport dev.relayapi.models.connect.snapchat.profiles.ProfileListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ProfileListResponse profiles = client.connect().snapchat().profiles().list();\n    }\n}',
      },
      python: {
        method: 'connect.snapchat.profiles.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nprofiles = client.connect.snapchat.profiles.list()\nprint(profiles.profiles)',
      },
      typescript: {
        method: 'client.connect.snapchat.profiles.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst profiles = await client.connect.snapchat.profiles.list();\n\nconsole.log(profiles.profiles);",
      },
    },
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
      "## select\n\n`client.connect.snapchat.profiles.select(connect_token: string, profile_id: string): { account: object; }`\n\n**post** `/v1/connect/snapchat/profiles`\n\nSelect Snapchat Public Profile\n\n### Parameters\n\n- `connect_token: string`\n  Token from pending data or OAuth flow\n\n- `profile_id: string`\n  Selected Snapchat profile ID\n\n### Returns\n\n- `{ account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }; }`\n\n  - `account: { id: string; avatar_url: string; connected_at: string; display_name: string; group: { id: string; name: string; }; metadata: object; platform: string; platform_account_id: string; updated_at: string; username: string; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connect.snapchat.profiles.select({ connect_token: 'connect_token', profile_id: 'profile_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connect.Snapchat.Profiles.Select',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connect.Snapchat.Profiles.Select(context.TODO(), relaygo.ConnectSnapchatProfileSelectParams{\n\t\tConnectToken: relaygo.F("connect_token"),\n\t\tProfileID:    relaygo.F("profile_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Account)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connect/snapchat/profiles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "connect_token": "connect_token",\n          "profile_id": "profile_id"\n        }\'',
      },
      java: {
        method: 'connect().snapchat().profiles().select',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connect.snapchat.profiles.ProfileSelectParams;\nimport dev.relayapi.models.connect.snapchat.profiles.ProfileSelectResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ProfileSelectParams params = ProfileSelectParams.builder()\n            .connectToken("connect_token")\n            .profileId("profile_id")\n            .build();\n        ProfileSelectResponse response = client.connect().snapchat().profiles().select(params);\n    }\n}',
      },
      python: {
        method: 'connect.snapchat.profiles.select',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connect.snapchat.profiles.select(\n    connect_token="connect_token",\n    profile_id="profile_id",\n)\nprint(response.account)',
      },
      typescript: {
        method: 'client.connect.snapchat.profiles.select',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connect.snapchat.profiles.select({\n  connect_token: 'connect_token',\n  profile_id: 'profile_id',\n});\n\nconsole.log(response.account);",
      },
    },
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
      "## list_logs\n\n`client.connections.listLogs(cursor?: string, from?: string, limit?: number, to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/connections/logs`\n\nReturns connection event history for the organization.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; account_id: string; created_at: string; event: 'connected' | 'disconnected' | 'token_refreshed' | 'error'; message: string; platform: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; account_id: string; created_at: string; event: 'connected' | 'disconnected' | 'token_refreshed' | 'error'; message: string; platform: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.connections.listLogs();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Connections.ListLogs',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connections.ListLogs(context.TODO(), relaygo.ConnectionListLogsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/connections/logs \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'connections().listLogs',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.connections.ConnectionListLogsParams;\nimport dev.relayapi.models.connections.ConnectionListLogsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ConnectionListLogsResponse response = client.connections().listLogs();\n    }\n}',
      },
      python: {
        method: 'connections.list_logs',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connections.list_logs()\nprint(response.data)',
      },
      typescript: {
        method: 'client.connections.listLogs',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connections.listLogs();\n\nconsole.log(response.data);",
      },
    },
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
      "## retrieve\n\n`client.analytics.retrieve(account_id?: string, from_date?: string, limit?: number, offset?: number, platform?: string, post_id?: string, to_date?: string): { data: object[]; overview?: object; }`\n\n**get** `/v1/analytics`\n\nGet post analytics\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601 date string)\n\n- `limit?: number`\n  Number of items\n\n- `offset?: number`\n  Offset\n\n- `platform?: string`\n  Filter by platform\n\n- `post_id?: string`\n  Filter by post ID\n\n- `to_date?: string`\n  End date (ISO 8601 date string)\n\n### Returns\n\n- `{ data: { platform: string; post_id: string; published_at: string; clicks?: number; comments?: number; impressions?: number; likes?: number; reach?: number; saves?: number; shares?: number; views?: number; }[]; overview?: { total_clicks: number; total_comments: number; total_impressions: number; total_likes: number; total_posts: number; total_shares: number; total_views: number; }; }`\n\n  - `data: { platform: string; post_id: string; published_at: string; clicks?: number; comments?: number; impressions?: number; likes?: number; reach?: number; saves?: number; shares?: number; views?: number; }[]`\n  - `overview?: { total_clicks: number; total_comments: number; total_impressions: number; total_likes: number; total_posts: number; total_shares: number; total_views: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst analytics = await client.analytics.retrieve();\n\nconsole.log(analytics);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tanalytics, err := client.Analytics.Get(context.TODO(), relaygo.AnalyticsGetParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", analytics.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.AnalyticsRetrieveParams;\nimport dev.relayapi.models.analytics.AnalyticsRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AnalyticsRetrieveResponse analytics = client.analytics().retrieve();\n    }\n}',
      },
      python: {
        method: 'analytics.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nanalytics = client.analytics.retrieve()\nprint(analytics.data)',
      },
      typescript: {
        method: 'client.analytics.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst analytics = await client.analytics.retrieve();\n\nconsole.log(analytics.data);",
      },
    },
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
      "## list_daily_metrics\n\n`client.analytics.listDailyMetrics(account_id?: string, from_date?: string, platform?: string, to_date?: string): { data: object[]; }`\n\n**get** `/v1/analytics/daily-metrics`\n\nGet daily aggregated metrics\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `platform?: string`\n  Filter by platform\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { clicks: number; comments: number; date: string; impressions: number; likes: number; platforms: object; post_count: number; shares: number; views: number; }[]; }`\n\n  - `data: { clicks: number; comments: number; date: string; impressions: number; likes: number; platforms: object; post_count: number; shares: number; views: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.analytics.listDailyMetrics();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.ListDailyMetrics',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Analytics.ListDailyMetrics(context.TODO(), relaygo.AnalyticsListDailyMetricsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics/daily-metrics \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().listDailyMetrics',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.AnalyticsListDailyMetricsParams;\nimport dev.relayapi.models.analytics.AnalyticsListDailyMetricsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AnalyticsListDailyMetricsResponse response = client.analytics().listDailyMetrics();\n    }\n}',
      },
      python: {
        method: 'analytics.list_daily_metrics',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.analytics.list_daily_metrics()\nprint(response.data)',
      },
      typescript: {
        method: 'client.analytics.listDailyMetrics',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.analytics.listDailyMetrics();\n\nconsole.log(response.data);",
      },
    },
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
      "## get_best_time\n\n`client.analytics.getBestTime(account_id?: string, from_date?: string, platform?: string, to_date?: string): { data: object[]; }`\n\n**get** `/v1/analytics/best-time`\n\nGet best posting times based on engagement\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `platform?: string`\n  Filter by platform\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { avg_engagement: number; day_of_week: number; hour_utc: number; post_count: number; }[]; }`\n\n  - `data: { avg_engagement: number; day_of_week: number; hour_utc: number; post_count: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getBestTime();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.GetBestTime',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Analytics.GetBestTime(context.TODO(), relaygo.AnalyticsGetBestTimeParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics/best-time \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().getBestTime',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.AnalyticsGetBestTimeParams;\nimport dev.relayapi.models.analytics.AnalyticsGetBestTimeResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AnalyticsGetBestTimeResponse response = client.analytics().getBestTime();\n    }\n}',
      },
      python: {
        method: 'analytics.get_best_time',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.analytics.get_best_time()\nprint(response.data)',
      },
      typescript: {
        method: 'client.analytics.getBestTime',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.analytics.getBestTime();\n\nconsole.log(response.data);",
      },
    },
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
      "## get_content_decay\n\n`client.analytics.getContentDecay(post_id: string, days?: number): { data: object[]; half_life_days: number; platform: string; post_id: string; }`\n\n**get** `/v1/analytics/content-decay`\n\nGet engagement decay curve for a post\n\n### Parameters\n\n- `post_id: string`\n  Post ID to analyze decay for\n\n- `days?: number`\n  Number of days to analyze\n\n### Returns\n\n- `{ data: { cumulative_engagement: number; cumulative_impressions: number; day: number; engagement: number; impressions: number; }[]; half_life_days: number; platform: string; post_id: string; }`\n\n  - `data: { cumulative_engagement: number; cumulative_impressions: number; day: number; engagement: number; impressions: number; }[]`\n  - `half_life_days: number`\n  - `platform: string`\n  - `post_id: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getContentDecay({ post_id: 'post_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.GetContentDecay',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Analytics.GetContentDecay(context.TODO(), relaygo.AnalyticsGetContentDecayParams{\n\t\tPostID: relaygo.F("post_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.PostID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics/content-decay \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().getContentDecay',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.AnalyticsGetContentDecayParams;\nimport dev.relayapi.models.analytics.AnalyticsGetContentDecayResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AnalyticsGetContentDecayParams params = AnalyticsGetContentDecayParams.builder()\n            .postId("post_id")\n            .build();\n        AnalyticsGetContentDecayResponse response = client.analytics().getContentDecay(params);\n    }\n}',
      },
      python: {
        method: 'analytics.get_content_decay',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.analytics.get_content_decay(\n    post_id="post_id",\n)\nprint(response.post_id)',
      },
      typescript: {
        method: 'client.analytics.getContentDecay',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.analytics.getContentDecay({ post_id: 'post_id' });\n\nconsole.log(response.post_id);",
      },
    },
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
      "## get_post_timeline\n\n`client.analytics.getPostTimeline(post_id: string, from_date?: string, to_date?: string): { data: object[]; post_id: string; }`\n\n**get** `/v1/analytics/post-timeline`\n\nGet per-post daily timeline of metrics\n\n### Parameters\n\n- `post_id: string`\n  Post ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { clicks: number; comments: number; date: string; impressions: number; likes: number; shares: number; views: number; }[]; post_id: string; }`\n\n  - `data: { clicks: number; comments: number; date: string; impressions: number; likes: number; shares: number; views: number; }[]`\n  - `post_id: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getPostTimeline({ post_id: 'post_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.GetPostTimeline',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Analytics.GetPostTimeline(context.TODO(), relaygo.AnalyticsGetPostTimelineParams{\n\t\tPostID: relaygo.F("post_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.PostID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics/post-timeline \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().getPostTimeline',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.AnalyticsGetPostTimelineParams;\nimport dev.relayapi.models.analytics.AnalyticsGetPostTimelineResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AnalyticsGetPostTimelineParams params = AnalyticsGetPostTimelineParams.builder()\n            .postId("post_id")\n            .build();\n        AnalyticsGetPostTimelineResponse response = client.analytics().getPostTimeline(params);\n    }\n}',
      },
      python: {
        method: 'analytics.get_post_timeline',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.analytics.get_post_timeline(\n    post_id="post_id",\n)\nprint(response.post_id)',
      },
      typescript: {
        method: 'client.analytics.getPostTimeline',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.analytics.getPostTimeline({ post_id: 'post_id' });\n\nconsole.log(response.post_id);",
      },
    },
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
      "## get_posting_frequency\n\n`client.analytics.getPostingFrequency(account_id?: string, from_date?: string, platform?: string, to_date?: string): { data: object[]; optimal_frequency: number; }`\n\n**get** `/v1/analytics/posting-frequency`\n\nGet posting frequency vs engagement analysis\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `platform?: string`\n  Filter by platform\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { avg_engagement: number; avg_impressions: number; posts_per_week: number; sample_weeks: number; }[]; optimal_frequency: number; }`\n\n  - `data: { avg_engagement: number; avg_impressions: number; posts_per_week: number; sample_weeks: number; }[]`\n  - `optimal_frequency: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.analytics.getPostingFrequency();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.GetPostingFrequency',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Analytics.GetPostingFrequency(context.TODO(), relaygo.AnalyticsGetPostingFrequencyParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics/posting-frequency \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().getPostingFrequency',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.AnalyticsGetPostingFrequencyParams;\nimport dev.relayapi.models.analytics.AnalyticsGetPostingFrequencyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        AnalyticsGetPostingFrequencyResponse response = client.analytics().getPostingFrequency();\n    }\n}',
      },
      python: {
        method: 'analytics.get_posting_frequency',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.analytics.get_posting_frequency()\nprint(response.data)',
      },
      typescript: {
        method: 'client.analytics.getPostingFrequency',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.analytics.getPostingFrequency();\n\nconsole.log(response.data);",
      },
    },
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
      "## get_daily_views\n\n`client.analytics.youtube.getDailyViews(account_id: string, from_date?: string, to_date?: string): { data: object[]; }`\n\n**get** `/v1/analytics/youtube/daily-views`\n\nGet YouTube daily views and watch time\n\n### Parameters\n\n- `account_id: string`\n  YouTube account ID\n\n- `from_date?: string`\n  Start date (ISO 8601)\n\n- `to_date?: string`\n  End date (ISO 8601)\n\n### Returns\n\n- `{ data: { date: string; subscribers_gained: number; views: number; watch_time_minutes: number; }[]; }`\n\n  - `data: { date: string; subscribers_gained: number; views: number; watch_time_minutes: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.analytics.youtube.getDailyViews({ account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Analytics.Youtube.GetDailyViews',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Analytics.Youtube.GetDailyViews(context.TODO(), relaygo.AnalyticsYoutubeGetDailyViewsParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/analytics/youtube/daily-views \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'analytics().youtube().getDailyViews',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.analytics.youtube.YoutubeGetDailyViewsParams;\nimport dev.relayapi.models.analytics.youtube.YoutubeGetDailyViewsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        YoutubeGetDailyViewsParams params = YoutubeGetDailyViewsParams.builder()\n            .accountId("account_id")\n            .build();\n        YoutubeGetDailyViewsResponse response = client.analytics().youtube().getDailyViews(params);\n    }\n}',
      },
      python: {
        method: 'analytics.youtube.get_daily_views',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.analytics.youtube.get_daily_views(\n    account_id="account_id",\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.analytics.youtube.getDailyViews',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.analytics.youtube.getDailyViews({ account_id: 'account_id' });\n\nconsole.log(response.data);",
      },
    },
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
      "recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; };",
      'target_options?: object;',
      'timezone?: string;',
      'workspace_id?: string;',
    ],
    response:
      '{ errors: { code: string; message: string; target: string; }[]; valid: boolean; warnings: { code: string; message: string; target: string; }[]; }',
    markdown:
      "## validate_post\n\n`client.tools.validate.validatePost(scheduled_at: string, targets: string[], content?: string, media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[], recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }, target_options?: object, timezone?: string, workspace_id?: string): { errors: object[]; valid: boolean; warnings: object[]; }`\n\n**post** `/v1/tools/validate/post`\n\nValidate a post (dry-run without publishing)\n\n### Parameters\n\n- `scheduled_at: string`\n  Publish intent. Use \"now\" to publish immediately, \"draft\" to save as draft, or an ISO 8601 timestamp to schedule.\n\n- `targets: string[]`\n  Account IDs, platform names, or workspace IDs to publish to\n\n- `content?: string`\n  Post text. Optional if target_options provide per-target content.\n\n- `media?: { url: string; type?: 'image' | 'video' | 'gif' | 'document'; }[]`\n  Media attachments\n\n- `recycling?: { gap: number; gap_freq: 'day' | 'week' | 'month'; start_date: string; content_variations?: string[]; enabled?: boolean; expire_count?: number; expire_date?: string; }`\n  Recycling configuration for evergreen content (Pro plan only)\n  - `gap: number`\n    Interval value\n  - `gap_freq: 'day' | 'week' | 'month'`\n    Interval unit\n  - `start_date: string`\n    When to start recycling\n  - `content_variations?: string[]`\n    Alternate content texts (round-robin)\n  - `enabled?: boolean`\n    Whether recycling is active\n  - `expire_count?: number`\n    Stop after this many recycles\n  - `expire_date?: string`\n    Stop after this date\n\n- `target_options?: object`\n  Per-target customizations keyed by target value (account ID or platform name). Supports platform-specific features such as Twitter polls (poll.options, poll.duration_minutes), threads, reply_to, and reply_settings.\n\n- `timezone?: string`\n  IANA timezone for scheduling\n\n- `workspace_id?: string`\n  Workspace ID to scope this post to\n\n### Returns\n\n- `{ errors: { code: string; message: string; target: string; }[]; valid: boolean; warnings: { code: string; message: string; target: string; }[]; }`\n\n  - `errors: { code: string; message: string; target: string; }[]`\n  - `valid: boolean`\n  - `warnings: { code: string; message: string; target: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.validatePost({ scheduled_at: 'now', targets: ['string'] });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Tools.Validate.ValidatePost',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tools.Validate.ValidatePost(context.TODO(), relaygo.ToolValidateValidatePostParams{\n\t\tScheduledAt: relaygo.F("now"),\n\t\tTargets:     relaygo.F([]string{"string"}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Valid)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/tools/validate/post \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "scheduled_at": "now",\n          "targets": [\n            "string"\n          ]\n        }\'',
      },
      java: {
        method: 'tools().validate().validatePost',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.tools.validate.ValidateValidatePostParams;\nimport dev.relayapi.models.tools.validate.ValidateValidatePostResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ValidateValidatePostParams params = ValidateValidatePostParams.builder()\n            .scheduledAt("now")\n            .addTarget("string")\n            .build();\n        ValidateValidatePostResponse response = client.tools().validate().validatePost(params);\n    }\n}',
      },
      python: {
        method: 'tools.validate.validate_post',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tools.validate.validate_post(\n    scheduled_at="now",\n    targets=["string"],\n)\nprint(response.valid)',
      },
      typescript: {
        method: 'client.tools.validate.validatePost',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tools.validate.validatePost({\n  scheduled_at: 'now',\n  targets: ['string'],\n});\n\nconsole.log(response.valid);",
      },
    },
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
      '{ accessible: boolean; platform_limits: { bluesky?: object; discord?: object; facebook?: object; googlebusiness?: object; instagram?: object; linkedin?: object; mastodon?: object; pinterest?: object; reddit?: object; sms?: object; snapchat?: object; telegram?: object; threads?: object; tiktok?: object; twitter?: object; whatsapp?: object; youtube?: object; }; content_type?: string; size?: number; }',
    markdown:
      "## validate_media\n\n`client.tools.validate.validateMedia(url: string): { accessible: boolean; platform_limits: object; content_type?: string; size?: number; }`\n\n**post** `/v1/tools/validate/media`\n\nValidate a media URL for platform compatibility\n\n### Parameters\n\n- `url: string`\n  Media URL to validate\n\n### Returns\n\n- `{ accessible: boolean; platform_limits: { bluesky?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; discord?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; facebook?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; googlebusiness?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; instagram?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; linkedin?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; mastodon?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; pinterest?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; reddit?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; sms?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; snapchat?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; telegram?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; threads?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; tiktok?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; twitter?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; whatsapp?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; youtube?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; }; content_type?: string; size?: number; }`\n\n  - `accessible: boolean`\n  - `platform_limits: { bluesky?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; discord?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; facebook?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; googlebusiness?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; instagram?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; linkedin?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; mastodon?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; pinterest?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; reddit?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; sms?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; snapchat?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; telegram?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; threads?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; tiktok?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; twitter?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; whatsapp?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; youtube?: { max_size: number; within_limit: boolean; mime_type_supported?: boolean; }; }`\n  - `content_type?: string`\n  - `size?: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.validateMedia({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Tools.Validate.ValidateMedia',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tools.Validate.ValidateMedia(context.TODO(), relaygo.ToolValidateValidateMediaParams{\n\t\tURL: relaygo.F("https://example.com"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Accessible)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/tools/validate/media \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "url": "https://example.com"\n        }\'',
      },
      java: {
        method: 'tools().validate().validateMedia',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.tools.validate.ValidateValidateMediaParams;\nimport dev.relayapi.models.tools.validate.ValidateValidateMediaResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ValidateValidateMediaParams params = ValidateValidateMediaParams.builder()\n            .url("https://example.com")\n            .build();\n        ValidateValidateMediaResponse response = client.tools().validate().validateMedia(params);\n    }\n}',
      },
      python: {
        method: 'tools.validate.validate_media',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tools.validate.validate_media(\n    url="https://example.com",\n)\nprint(response.accessible)',
      },
      typescript: {
        method: 'client.tools.validate.validateMedia',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tools.validate.validateMedia({ url: 'https://example.com' });\n\nconsole.log(response.accessible);",
      },
    },
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
      "## check_post_length\n\n`client.tools.validate.checkPostLength(content: string): { platforms: object; }`\n\n**post** `/v1/tools/validate/post-length`\n\nCheck character counts against platform limits\n\n### Parameters\n\n- `content: string`\n  Post content to check\n\n### Returns\n\n- `{ platforms: { bluesky?: { count: number; limit: number; within_limit: boolean; }; discord?: { count: number; limit: number; within_limit: boolean; }; facebook?: { count: number; limit: number; within_limit: boolean; }; googlebusiness?: { count: number; limit: number; within_limit: boolean; }; instagram?: { count: number; limit: number; within_limit: boolean; }; linkedin?: { count: number; limit: number; within_limit: boolean; }; mastodon?: { count: number; limit: number; within_limit: boolean; }; pinterest?: { count: number; limit: number; within_limit: boolean; }; reddit?: { count: number; limit: number; within_limit: boolean; }; sms?: { count: number; limit: number; within_limit: boolean; }; snapchat?: { count: number; limit: number; within_limit: boolean; }; telegram?: { count: number; limit: number; within_limit: boolean; }; threads?: { count: number; limit: number; within_limit: boolean; }; tiktok?: { count: number; limit: number; within_limit: boolean; }; twitter?: { count: number; limit: number; within_limit: boolean; }; whatsapp?: { count: number; limit: number; within_limit: boolean; }; youtube?: { count: number; limit: number; within_limit: boolean; }; }; }`\n\n  - `platforms: { bluesky?: { count: number; limit: number; within_limit: boolean; }; discord?: { count: number; limit: number; within_limit: boolean; }; facebook?: { count: number; limit: number; within_limit: boolean; }; googlebusiness?: { count: number; limit: number; within_limit: boolean; }; instagram?: { count: number; limit: number; within_limit: boolean; }; linkedin?: { count: number; limit: number; within_limit: boolean; }; mastodon?: { count: number; limit: number; within_limit: boolean; }; pinterest?: { count: number; limit: number; within_limit: boolean; }; reddit?: { count: number; limit: number; within_limit: boolean; }; sms?: { count: number; limit: number; within_limit: boolean; }; snapchat?: { count: number; limit: number; within_limit: boolean; }; telegram?: { count: number; limit: number; within_limit: boolean; }; threads?: { count: number; limit: number; within_limit: boolean; }; tiktok?: { count: number; limit: number; within_limit: boolean; }; twitter?: { count: number; limit: number; within_limit: boolean; }; whatsapp?: { count: number; limit: number; within_limit: boolean; }; youtube?: { count: number; limit: number; within_limit: boolean; }; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.checkPostLength({ content: 'content' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Tools.Validate.CheckPostLength',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tools.Validate.CheckPostLength(context.TODO(), relaygo.ToolValidateCheckPostLengthParams{\n\t\tContent: relaygo.F("content"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Platforms)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/tools/validate/post-length \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "content": "content"\n        }\'',
      },
      java: {
        method: 'tools().validate().checkPostLength',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.tools.validate.ValidateCheckPostLengthParams;\nimport dev.relayapi.models.tools.validate.ValidateCheckPostLengthResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ValidateCheckPostLengthParams params = ValidateCheckPostLengthParams.builder()\n            .content("content")\n            .build();\n        ValidateCheckPostLengthResponse response = client.tools().validate().checkPostLength(params);\n    }\n}',
      },
      python: {
        method: 'tools.validate.check_post_length',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tools.validate.check_post_length(\n    content="content",\n)\nprint(response.platforms)',
      },
      typescript: {
        method: 'client.tools.validate.checkPostLength',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tools.validate.checkPostLength({ content: 'content' });\n\nconsole.log(response.platforms);",
      },
    },
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
      '{ exists: boolean; name?: string; nsfw?: boolean; post_types?: { image: boolean; link: boolean; self: boolean; video?: boolean; }; subscribers?: number; title?: string; }',
    markdown:
      "## retrieve_subreddit\n\n`client.tools.validate.retrieveSubreddit(name: string): { exists: boolean; name?: string; nsfw?: boolean; post_types?: object; subscribers?: number; title?: string; }`\n\n**get** `/v1/tools/validate/subreddit`\n\nCheck if a subreddit exists and get its details\n\n### Parameters\n\n- `name: string`\n  Subreddit name (without r/ prefix)\n\n### Returns\n\n- `{ exists: boolean; name?: string; nsfw?: boolean; post_types?: { image: boolean; link: boolean; self: boolean; video?: boolean; }; subscribers?: number; title?: string; }`\n\n  - `exists: boolean`\n  - `name?: string`\n  - `nsfw?: boolean`\n  - `post_types?: { image: boolean; link: boolean; self: boolean; video?: boolean; }`\n  - `subscribers?: number`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.tools.validate.retrieveSubreddit({ name: 'name' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Tools.Validate.GetSubreddit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tools.Validate.GetSubreddit(context.TODO(), relaygo.ToolValidateGetSubredditParams{\n\t\tName: relaygo.F("name"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Exists)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/tools/validate/subreddit \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'tools().validate().retrieveSubreddit',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.tools.validate.ValidateRetrieveSubredditParams;\nimport dev.relayapi.models.tools.validate.ValidateRetrieveSubredditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ValidateRetrieveSubredditParams params = ValidateRetrieveSubredditParams.builder()\n            .name("name")\n            .build();\n        ValidateRetrieveSubredditResponse response = client.tools().validate().retrieveSubreddit(params);\n    }\n}',
      },
      python: {
        method: 'tools.validate.retrieve_subreddit',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tools.validate.retrieve_subreddit(\n    name="name",\n)\nprint(response.exists)',
      },
      typescript: {
        method: 'client.tools.validate.retrieveSubreddit',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tools.validate.retrieveSubreddit({ name: 'name' });\n\nconsole.log(response.exists);",
      },
    },
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
      "## check_hashtag_safety\n\n`client.tools.instagram.checkHashtagSafety(hashtags: string[]): { results: object[]; }`\n\n**post** `/v1/tools/instagram/hashtag-checker`\n\nCheck Instagram hashtag safety status\n\n### Parameters\n\n- `hashtags: string[]`\n  Hashtags to check (without # prefix)\n\n### Returns\n\n- `{ results: { hashtag: string; status: 'safe' | 'restricted' | 'banned'; }[]; }`\n\n  - `results: { hashtag: string; status: 'safe' | 'restricted' | 'banned'; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.tools.instagram.checkHashtagSafety({ hashtags: ['string'] });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Tools.Instagram.CheckHashtagSafety',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tools.Instagram.CheckHashtagSafety(context.TODO(), relaygo.ToolInstagramCheckHashtagSafetyParams{\n\t\tHashtags: relaygo.F([]string{"string"}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Results)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/tools/instagram/hashtag-checker \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "hashtags": [\n            "string"\n          ]\n        }\'',
      },
      java: {
        method: 'tools().instagram().checkHashtagSafety',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.tools.instagram.InstagramCheckHashtagSafetyParams;\nimport dev.relayapi.models.tools.instagram.InstagramCheckHashtagSafetyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        InstagramCheckHashtagSafetyParams params = InstagramCheckHashtagSafetyParams.builder()\n            .addHashtag("string")\n            .build();\n        InstagramCheckHashtagSafetyResponse response = client.tools().instagram().checkHashtagSafety(params);\n    }\n}',
      },
      python: {
        method: 'tools.instagram.check_hashtag_safety',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tools.instagram.check_hashtag_safety(\n    hashtags=["string"],\n)\nprint(response.results)',
      },
      typescript: {
        method: 'client.tools.instagram.checkHashtagSafety',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tools.instagram.checkHashtagSafety({ hashtags: ['string'] });\n\nconsole.log(response.results);",
      },
    },
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
      "## get_next_slot\n\n`client.queue.getNextSlot(): { next_slot_at: string; queue_id: string; }`\n\n**get** `/v1/queue/next-slot`\n\nGet next available queue slot\n\n### Returns\n\n- `{ next_slot_at: string; queue_id: string; }`\n\n  - `next_slot_at: string`\n  - `queue_id: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.queue.getNextSlot();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Queue.GetNextSlot',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Queue.GetNextSlot(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.QueueID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/queue/next-slot \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'queue().getNextSlot',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.queue.QueueGetNextSlotParams;\nimport dev.relayapi.models.queue.QueueGetNextSlotResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        QueueGetNextSlotResponse response = client.queue().getNextSlot();\n    }\n}',
      },
      python: {
        method: 'queue.get_next_slot',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.queue.get_next_slot()\nprint(response.queue_id)',
      },
      typescript: {
        method: 'client.queue.getNextSlot',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.queue.getNextSlot();\n\nconsole.log(response.queue_id);",
      },
    },
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
      "## preview\n\n`client.queue.preview(count?: number): { slots: string[]; }`\n\n**get** `/v1/queue/preview`\n\nPreview upcoming queue slots\n\n### Parameters\n\n- `count?: number`\n  Number of upcoming slots to preview\n\n### Returns\n\n- `{ slots: string[]; }`\n\n  - `slots: string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.queue.preview();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Queue.Preview',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Queue.Preview(context.TODO(), relaygo.QueuePreviewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Slots)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/queue/preview \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'queue().preview',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.queue.QueuePreviewParams;\nimport dev.relayapi.models.queue.QueuePreviewResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        QueuePreviewResponse response = client.queue().preview();\n    }\n}',
      },
      python: {
        method: 'queue.preview',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.queue.preview()\nprint(response.slots)',
      },
      typescript: {
        method: 'client.queue.preview',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.queue.preview();\n\nconsole.log(response.slots);",
      },
    },
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
      "## list\n\n`client.queue.slots.list(): { data: object[]; }`\n\n**get** `/v1/queue/slots`\n\nList queue schedules\n\n### Returns\n\n- `{ data: { id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }[]; }`\n\n  - `data: { id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst slots = await client.queue.slots.list();\n\nconsole.log(slots);\n```",
    perLanguage: {
      go: {
        method: 'client.Queue.Slots.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tslots, err := client.Queue.Slots.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", slots.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/queue/slots \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'queue().slots().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.queue.slots.SlotListParams;\nimport dev.relayapi.models.queue.slots.SlotListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        SlotListResponse slots = client.queue().slots().list();\n    }\n}',
      },
      python: {
        method: 'queue.slots.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nslots = client.queue.slots.list()\nprint(slots.data)',
      },
      typescript: {
        method: 'client.queue.slots.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst slots = await client.queue.slots.list();\n\nconsole.log(slots.data);",
      },
    },
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
      "## create\n\n`client.queue.slots.create(slots: { day_of_week: number; time: string; timezone: string; }[], timezone: string, name?: string): { id: string; created_at: string; is_default: boolean; slots: object[]; updated_at: string; name?: string; }`\n\n**post** `/v1/queue/slots`\n\nCreate a queue schedule\n\n### Parameters\n\n- `slots: { day_of_week: number; time: string; timezone: string; }[]`\n  Time slots\n\n- `timezone: string`\n  Default timezone for slots\n\n- `name?: string`\n  Schedule name\n\n### Returns\n\n- `{ id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `slots: { day_of_week: number; time: string; timezone: string; }[]`\n  - `updated_at: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst slot = await client.queue.slots.create({ slots: [{\n  day_of_week: 0,\n  time: '73:16',\n  timezone: 'timezone',\n}], timezone: 'timezone' });\n\nconsole.log(slot);\n```",
    perLanguage: {
      go: {
        method: 'client.Queue.Slots.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tslot, err := client.Queue.Slots.New(context.TODO(), relaygo.QueueSlotNewParams{\n\t\tSlots: relaygo.F([]relaygo.QueueSlotNewParamsSlot{{\n\t\t\tDayOfWeek: relaygo.F(int64(0)),\n\t\t\tTime:      relaygo.F("73:16"),\n\t\t\tTimezone:  relaygo.F("timezone"),\n\t\t}}),\n\t\tTimezone: relaygo.F("timezone"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", slot.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/queue/slots \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "slots": [\n            {\n              "day_of_week": 0,\n              "time": "73:16",\n              "timezone": "timezone"\n            }\n          ],\n          "timezone": "timezone"\n        }\'',
      },
      java: {
        method: 'queue().slots().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.queue.slots.SlotCreateParams;\nimport dev.relayapi.models.queue.slots.SlotCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        SlotCreateParams params = SlotCreateParams.builder()\n            .addSlot(SlotCreateParams.Slot.builder()\n                .dayOfWeek(0L)\n                .time("73:16")\n                .timezone("timezone")\n                .build())\n            .timezone("timezone")\n            .build();\n        SlotCreateResponse slot = client.queue().slots().create(params);\n    }\n}',
      },
      python: {
        method: 'queue.slots.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nslot = client.queue.slots.create(\n    slots=[{\n        "day_of_week": 0,\n        "time": "73:16",\n        "timezone": "timezone",\n    }],\n    timezone="timezone",\n)\nprint(slot.id)',
      },
      typescript: {
        method: 'client.queue.slots.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst slot = await client.queue.slots.create({\n  slots: [\n    {\n      day_of_week: 0,\n      time: '73:16',\n      timezone: 'timezone',\n    },\n  ],\n  timezone: 'timezone',\n});\n\nconsole.log(slot.id);",
      },
    },
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
      "## update\n\n`client.queue.slots.update(name?: string, set_as_default?: boolean, slots?: { day_of_week: number; time: string; timezone: string; }[]): { id: string; created_at: string; is_default: boolean; slots: object[]; updated_at: string; name?: string; }`\n\n**put** `/v1/queue/slots`\n\nUpdate queue schedule\n\n### Parameters\n\n- `name?: string`\n  Schedule name\n\n- `set_as_default?: boolean`\n  Set this schedule as the default\n\n- `slots?: { day_of_week: number; time: string; timezone: string; }[]`\n  Updated time slots\n\n### Returns\n\n- `{ id: string; created_at: string; is_default: boolean; slots: { day_of_week: number; time: string; timezone: string; }[]; updated_at: string; name?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `slots: { day_of_week: number; time: string; timezone: string; }[]`\n  - `updated_at: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst slot = await client.queue.slots.update();\n\nconsole.log(slot);\n```",
    perLanguage: {
      go: {
        method: 'client.Queue.Slots.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tslot, err := client.Queue.Slots.Update(context.TODO(), relaygo.QueueSlotUpdateParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", slot.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/queue/slots \\\n    -X PUT \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'queue().slots().update',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.queue.slots.SlotUpdateParams;\nimport dev.relayapi.models.queue.slots.SlotUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        SlotUpdateResponse slot = client.queue().slots().update();\n    }\n}',
      },
      python: {
        method: 'queue.slots.update',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nslot = client.queue.slots.update()\nprint(slot.id)',
      },
      typescript: {
        method: 'client.queue.slots.update',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst slot = await client.queue.slots.update();\n\nconsole.log(slot.id);",
      },
    },
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
      "## delete\n\n`client.queue.slots.delete(): void`\n\n**delete** `/v1/queue/slots`\n\nDelete queue schedule\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.queue.slots.delete()\n```",
    perLanguage: {
      go: {
        method: 'client.Queue.Slots.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Queue.Slots.Delete(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/queue/slots \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'queue().slots().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.queue.slots.SlotDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.queue().slots().delete();\n    }\n}',
      },
      python: {
        method: 'queue.slots.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.queue.slots.delete()',
      },
      typescript: {
        method: 'client.queue.slots.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.queue.slots.delete();",
      },
    },
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
    response:
      '{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }',
    markdown:
      "## create\n\n`client.twitter.retweet.create(account_id: string, tweet_id: string): { success: boolean; data?: object; error?: object; }`\n\n**post** `/v1/twitter/retweet`\n\nRetweet a tweet\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to retweet\n\n### Returns\n\n- `{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }`\n\n  - `success: boolean`\n  - `data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }`\n  - `error?: { code: string; message: string; twitter_error_code?: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst retweet = await client.twitter.retweet.create({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(retweet);\n```",
    perLanguage: {
      go: {
        method: 'client.Twitter.Retweet.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tretweet, err := client.Twitter.Retweet.New(context.TODO(), relaygo.TwitterRetweetNewParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tTweetID:   relaygo.F("tweet_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", retweet.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/twitter/retweet \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "tweet_id": "tweet_id"\n        }\'',
      },
      java: {
        method: 'twitter().retweet().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.twitter.retweet.RetweetCreateParams;\nimport dev.relayapi.models.twitter.retweet.RetweetCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RetweetCreateParams params = RetweetCreateParams.builder()\n            .accountId("account_id")\n            .tweetId("tweet_id")\n            .build();\n        RetweetCreateResponse retweet = client.twitter().retweet().create(params);\n    }\n}',
      },
      python: {
        method: 'twitter.retweet.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nretweet = client.twitter.retweet.create(\n    account_id="account_id",\n    tweet_id="tweet_id",\n)\nprint(retweet.success)',
      },
      typescript: {
        method: 'client.twitter.retweet.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst retweet = await client.twitter.retweet.create({\n  account_id: 'account_id',\n  tweet_id: 'tweet_id',\n});\n\nconsole.log(retweet.success);",
      },
    },
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
    response:
      '{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }',
    markdown:
      "## undo\n\n`client.twitter.retweet.undo(account_id: string, tweet_id: string): { success: boolean; data?: object; error?: object; }`\n\n**delete** `/v1/twitter/retweet`\n\nUndo a retweet\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to retweet\n\n### Returns\n\n- `{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }`\n\n  - `success: boolean`\n  - `data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }`\n  - `error?: { code: string; message: string; twitter_error_code?: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.twitter.retweet.undo({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Twitter.Retweet.Undo',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Twitter.Retweet.Undo(context.TODO(), relaygo.TwitterRetweetUndoParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tTweetID:   relaygo.F("tweet_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/twitter/retweet \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'twitter().retweet().undo',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.twitter.retweet.RetweetUndoParams;\nimport dev.relayapi.models.twitter.retweet.RetweetUndoResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RetweetUndoParams params = RetweetUndoParams.builder()\n            .accountId("account_id")\n            .tweetId("tweet_id")\n            .build();\n        RetweetUndoResponse response = client.twitter().retweet().undo(params);\n    }\n}',
      },
      python: {
        method: 'twitter.retweet.undo',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.twitter.retweet.undo(\n    account_id="account_id",\n    tweet_id="tweet_id",\n)\nprint(response.success)',
      },
      typescript: {
        method: 'client.twitter.retweet.undo',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.twitter.retweet.undo({\n  account_id: 'account_id',\n  tweet_id: 'tweet_id',\n});\n\nconsole.log(response.success);",
      },
    },
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
    response:
      '{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }',
    markdown:
      "## create\n\n`client.twitter.bookmark.create(account_id: string, tweet_id: string): { success: boolean; data?: object; error?: object; }`\n\n**post** `/v1/twitter/bookmark`\n\nBookmark a tweet\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to bookmark\n\n### Returns\n\n- `{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }`\n\n  - `success: boolean`\n  - `data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }`\n  - `error?: { code: string; message: string; twitter_error_code?: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst bookmark = await client.twitter.bookmark.create({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(bookmark);\n```",
    perLanguage: {
      go: {
        method: 'client.Twitter.Bookmark.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbookmark, err := client.Twitter.Bookmark.New(context.TODO(), relaygo.TwitterBookmarkNewParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tTweetID:   relaygo.F("tweet_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", bookmark.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/twitter/bookmark \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "tweet_id": "tweet_id"\n        }\'',
      },
      java: {
        method: 'twitter().bookmark().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.twitter.bookmark.BookmarkCreateParams;\nimport dev.relayapi.models.twitter.bookmark.BookmarkCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BookmarkCreateParams params = BookmarkCreateParams.builder()\n            .accountId("account_id")\n            .tweetId("tweet_id")\n            .build();\n        BookmarkCreateResponse bookmark = client.twitter().bookmark().create(params);\n    }\n}',
      },
      python: {
        method: 'twitter.bookmark.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbookmark = client.twitter.bookmark.create(\n    account_id="account_id",\n    tweet_id="tweet_id",\n)\nprint(bookmark.success)',
      },
      typescript: {
        method: 'client.twitter.bookmark.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst bookmark = await client.twitter.bookmark.create({\n  account_id: 'account_id',\n  tweet_id: 'tweet_id',\n});\n\nconsole.log(bookmark.success);",
      },
    },
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
    response:
      '{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }',
    markdown:
      "## remove\n\n`client.twitter.bookmark.remove(account_id: string, tweet_id: string): { success: boolean; data?: object; error?: object; }`\n\n**delete** `/v1/twitter/bookmark`\n\nRemove a bookmark\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `tweet_id: string`\n  Tweet ID to bookmark\n\n### Returns\n\n- `{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }`\n\n  - `success: boolean`\n  - `data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }`\n  - `error?: { code: string; message: string; twitter_error_code?: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst bookmark = await client.twitter.bookmark.remove({ account_id: 'account_id', tweet_id: 'tweet_id' });\n\nconsole.log(bookmark);\n```",
    perLanguage: {
      go: {
        method: 'client.Twitter.Bookmark.Remove',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbookmark, err := client.Twitter.Bookmark.Remove(context.TODO(), relaygo.TwitterBookmarkRemoveParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tTweetID:   relaygo.F("tweet_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", bookmark.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/twitter/bookmark \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'twitter().bookmark().remove',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.twitter.bookmark.BookmarkRemoveParams;\nimport dev.relayapi.models.twitter.bookmark.BookmarkRemoveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BookmarkRemoveParams params = BookmarkRemoveParams.builder()\n            .accountId("account_id")\n            .tweetId("tweet_id")\n            .build();\n        BookmarkRemoveResponse bookmark = client.twitter().bookmark().remove(params);\n    }\n}',
      },
      python: {
        method: 'twitter.bookmark.remove',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbookmark = client.twitter.bookmark.remove(\n    account_id="account_id",\n    tweet_id="tweet_id",\n)\nprint(bookmark.success)',
      },
      typescript: {
        method: 'client.twitter.bookmark.remove',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst bookmark = await client.twitter.bookmark.remove({\n  account_id: 'account_id',\n  tweet_id: 'tweet_id',\n});\n\nconsole.log(bookmark.success);",
      },
    },
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
    response:
      '{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }',
    markdown:
      "## create\n\n`client.twitter.follow.create(account_id: string, target_user_id: string): { success: boolean; data?: object; error?: object; }`\n\n**post** `/v1/twitter/follow`\n\nFollow a user\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `target_user_id: string`\n  User ID to follow\n\n### Returns\n\n- `{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }`\n\n  - `success: boolean`\n  - `data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }`\n  - `error?: { code: string; message: string; twitter_error_code?: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst follow = await client.twitter.follow.create({ account_id: 'account_id', target_user_id: 'target_user_id' });\n\nconsole.log(follow);\n```",
    perLanguage: {
      go: {
        method: 'client.Twitter.Follow.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfollow, err := client.Twitter.Follow.New(context.TODO(), relaygo.TwitterFollowNewParams{\n\t\tAccountID:    relaygo.F("account_id"),\n\t\tTargetUserID: relaygo.F("target_user_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", follow.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/twitter/follow \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "target_user_id": "target_user_id"\n        }\'',
      },
      java: {
        method: 'twitter().follow().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.twitter.follow.FollowCreateParams;\nimport dev.relayapi.models.twitter.follow.FollowCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        FollowCreateParams params = FollowCreateParams.builder()\n            .accountId("account_id")\n            .targetUserId("target_user_id")\n            .build();\n        FollowCreateResponse follow = client.twitter().follow().create(params);\n    }\n}',
      },
      python: {
        method: 'twitter.follow.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nfollow = client.twitter.follow.create(\n    account_id="account_id",\n    target_user_id="target_user_id",\n)\nprint(follow.success)',
      },
      typescript: {
        method: 'client.twitter.follow.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst follow = await client.twitter.follow.create({\n  account_id: 'account_id',\n  target_user_id: 'target_user_id',\n});\n\nconsole.log(follow.success);",
      },
    },
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
    response:
      '{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }',
    markdown:
      "## unfollow\n\n`client.twitter.follow.unfollow(account_id: string, target_user_id: string): { success: boolean; data?: object; error?: object; }`\n\n**delete** `/v1/twitter/follow`\n\nUnfollow a user\n\n### Parameters\n\n- `account_id: string`\n  Twitter account ID\n\n- `target_user_id: string`\n  User ID to follow\n\n### Returns\n\n- `{ success: boolean; data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }; error?: { code: string; message: string; twitter_error_code?: number; }; }`\n\n  - `success: boolean`\n  - `data?: { bookmarked?: boolean; following?: boolean; pending_follow?: boolean; retweeted?: boolean; }`\n  - `error?: { code: string; message: string; twitter_error_code?: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.twitter.follow.unfollow({ account_id: 'account_id', target_user_id: 'target_user_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Twitter.Follow.Unfollow',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Twitter.Follow.Unfollow(context.TODO(), relaygo.TwitterFollowUnfollowParams{\n\t\tAccountID:    relaygo.F("account_id"),\n\t\tTargetUserID: relaygo.F("target_user_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/twitter/follow \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'twitter().follow().unfollow',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.twitter.follow.FollowUnfollowParams;\nimport dev.relayapi.models.twitter.follow.FollowUnfollowResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        FollowUnfollowParams params = FollowUnfollowParams.builder()\n            .accountId("account_id")\n            .targetUserId("target_user_id")\n            .build();\n        FollowUnfollowResponse response = client.twitter().follow().unfollow(params);\n    }\n}',
      },
      python: {
        method: 'twitter.follow.unfollow',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.twitter.follow.unfollow(\n    account_id="account_id",\n    target_user_id="target_user_id",\n)\nprint(response.success)',
      },
      typescript: {
        method: 'client.twitter.follow.unfollow',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.twitter.follow.unfollow({\n  account_id: 'account_id',\n  target_user_id: 'target_user_id',\n});\n\nconsole.log(response.success);",
      },
    },
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
      '{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; parent_id?: string; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }',
    markdown:
      "## list\n\n`client.inbox.comments.list(account_id?: string, cursor?: string, limit?: number, platform?: string): { data: object[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n**get** `/v1/inbox/comments`\n\nList comments across platforms\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; parent_id?: string; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n  - `data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; parent_id?: string; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]`\n  - `has_more?: boolean`\n  - `next_cursor?: string`\n  - `platform?: string`\n  - `post_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst comments = await client.inbox.comments.list();\n\nconsole.log(comments);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcomments, err := client.Inbox.Comments.List(context.TODO(), relaygo.InboxCommentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", comments.PostID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.CommentListParams;\nimport dev.relayapi.models.inbox.comments.CommentListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        CommentListResponse comments = client.inbox().comments().list();\n    }\n}',
      },
      python: {
        method: 'inbox.comments.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ncomments = client.inbox.comments.list()\nprint(comments.post_id)',
      },
      typescript: {
        method: 'client.inbox.comments.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst comments = await client.inbox.comments.list();\n\nconsole.log(comments.post_id);",
      },
    },
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
      '{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; parent_id?: string; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }',
    markdown:
      "## retrieve\n\n`client.inbox.comments.retrieve(post_id: string, account_id?: string, cursor?: string, limit?: number, platform?: string): { data: object[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n**get** `/v1/inbox/comments/{post_id}`\n\nGet comments for a specific post\n\n### Parameters\n\n- `post_id: string`\n  Post ID\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; parent_id?: string; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]; has_more?: boolean; next_cursor?: string; platform?: string; post_id?: string; }`\n\n  - `data: { id: string; author_name: string; created_at: string; platform: string; text: string; account_id?: string; author_avatar?: string; hidden?: boolean; likes?: number; parent_id?: string; post_id?: string; post_platform_url?: string; post_text?: string; post_thumbnail_url?: string; replies_count?: number; }[]`\n  - `has_more?: boolean`\n  - `next_cursor?: string`\n  - `platform?: string`\n  - `post_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst comment = await client.inbox.comments.retrieve('post_id');\n\nconsole.log(comment);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcomment, err := client.Inbox.Comments.Get(\n\t\tcontext.TODO(),\n\t\t"post_id",\n\t\trelaygo.InboxCommentGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", comment.PostID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$POST_ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.CommentRetrieveParams;\nimport dev.relayapi.models.inbox.comments.CommentRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        CommentRetrieveResponse comment = client.inbox().comments().retrieve("post_id");\n    }\n}',
      },
      python: {
        method: 'inbox.comments.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ncomment = client.inbox.comments.retrieve(\n    post_id="post_id",\n)\nprint(comment.post_id)',
      },
      typescript: {
        method: 'client.inbox.comments.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst comment = await client.inbox.comments.retrieve('post_id');\n\nconsole.log(comment.post_id);",
      },
    },
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
      "## reply\n\n`client.inbox.comments.reply(post_id: string, account_id: string, text: string, comment_id?: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{post_id}/reply`\n\nReply to a comment\n\n### Parameters\n\n- `post_id: string`\n  Post ID\n\n- `account_id: string`\n  Account ID to reply from\n\n- `text: string`\n  Reply text\n\n- `comment_id?: string`\n  Parent comment ID for threaded replies\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.inbox.comments.reply('post_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Reply',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.Comments.Reply(\n\t\tcontext.TODO(),\n\t\t"post_id",\n\t\trelaygo.InboxCommentReplyParams{\n\t\t\tAccountID: relaygo.F("account_id"),\n\t\t\tText:      relaygo.F("x"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$POST_ID/reply \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "text": "x"\n        }\'',
      },
      java: {
        method: 'inbox().comments().reply',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.CommentReplyParams;\nimport dev.relayapi.models.inbox.comments.CommentReplyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        CommentReplyParams params = CommentReplyParams.builder()\n            .postId("post_id")\n            .accountId("account_id")\n            .text("x")\n            .build();\n        CommentReplyResponse response = client.inbox().comments().reply(params);\n    }\n}',
      },
      python: {
        method: 'inbox.comments.reply',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.comments.reply(\n    post_id="post_id",\n    account_id="account_id",\n    text="x",\n)\nprint(response.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.reply',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.comments.reply('post_id', {\n  account_id: 'account_id',\n  text: 'x',\n});\n\nconsole.log(response.comment_id);",
      },
    },
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
      "## delete\n\n`client.inbox.comments.delete(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**delete** `/v1/inbox/comments/{comment_id}`\n\nDelete a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst comment = await client.inbox.comments.delete('comment_id');\n\nconsole.log(comment);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcomment, err := client.Inbox.Comments.Delete(context.TODO(), "comment_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", comment.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$COMMENT_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.CommentDeleteParams;\nimport dev.relayapi.models.inbox.comments.CommentDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        CommentDeleteResponse comment = client.inbox().comments().delete("comment_id");\n    }\n}',
      },
      python: {
        method: 'inbox.comments.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ncomment = client.inbox.comments.delete(\n    "comment_id",\n)\nprint(comment.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst comment = await client.inbox.comments.delete('comment_id');\n\nconsole.log(comment.comment_id);",
      },
    },
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
      "## private_reply\n\n`client.inbox.comments.privateReply(comment_id: string, account_id: string, text: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{comment_id}/private-reply`\n\nSend a private reply to a commenter\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n- `account_id: string`\n  Account ID to reply from\n\n- `text: string`\n  Private reply text\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.inbox.comments.privateReply('comment_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.PrivateReply',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.Comments.PrivateReply(\n\t\tcontext.TODO(),\n\t\t"comment_id",\n\t\trelaygo.InboxCommentPrivateReplyParams{\n\t\t\tAccountID: relaygo.F("account_id"),\n\t\t\tText:      relaygo.F("x"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$COMMENT_ID/private-reply \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "text": "x"\n        }\'',
      },
      java: {
        method: 'inbox().comments().privateReply',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.CommentPrivateReplyParams;\nimport dev.relayapi.models.inbox.comments.CommentPrivateReplyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        CommentPrivateReplyParams params = CommentPrivateReplyParams.builder()\n            .commentId("comment_id")\n            .accountId("account_id")\n            .text("x")\n            .build();\n        CommentPrivateReplyResponse response = client.inbox().comments().privateReply(params);\n    }\n}',
      },
      python: {
        method: 'inbox.comments.private_reply',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.comments.private_reply(\n    comment_id="comment_id",\n    account_id="account_id",\n    text="x",\n)\nprint(response.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.privateReply',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.comments.privateReply('comment_id', {\n  account_id: 'account_id',\n  text: 'x',\n});\n\nconsole.log(response.comment_id);",
      },
    },
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
      "## create\n\n`client.inbox.comments.hide.create(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{comment_id}/hide`\n\nHide a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst hide = await client.inbox.comments.hide.create('comment_id');\n\nconsole.log(hide);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Hide.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thide, err := client.Inbox.Comments.Hide.New(context.TODO(), "comment_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", hide.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$COMMENT_ID/hide \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().hide().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.hide.HideCreateParams;\nimport dev.relayapi.models.inbox.comments.hide.HideCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        HideCreateResponse hide = client.inbox().comments().hide().create("comment_id");\n    }\n}',
      },
      python: {
        method: 'inbox.comments.hide.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nhide = client.inbox.comments.hide.create(\n    "comment_id",\n)\nprint(hide.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.hide.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst hide = await client.inbox.comments.hide.create('comment_id');\n\nconsole.log(hide.comment_id);",
      },
    },
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
      "## delete\n\n`client.inbox.comments.hide.delete(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**delete** `/v1/inbox/comments/{comment_id}/hide`\n\nUnhide a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst hide = await client.inbox.comments.hide.delete('comment_id');\n\nconsole.log(hide);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Hide.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thide, err := client.Inbox.Comments.Hide.Delete(context.TODO(), "comment_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", hide.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$COMMENT_ID/hide \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().hide().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.hide.HideDeleteParams;\nimport dev.relayapi.models.inbox.comments.hide.HideDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        HideDeleteResponse hide = client.inbox().comments().hide().delete("comment_id");\n    }\n}',
      },
      python: {
        method: 'inbox.comments.hide.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nhide = client.inbox.comments.hide.delete(\n    "comment_id",\n)\nprint(hide.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.hide.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst hide = await client.inbox.comments.hide.delete('comment_id');\n\nconsole.log(hide.comment_id);",
      },
    },
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
      "## create\n\n`client.inbox.comments.like.create(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**post** `/v1/inbox/comments/{comment_id}/like`\n\nLike a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst like = await client.inbox.comments.like.create('comment_id');\n\nconsole.log(like);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Like.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlike, err := client.Inbox.Comments.Like.New(context.TODO(), "comment_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", like.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$COMMENT_ID/like \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().like().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.like.LikeCreateParams;\nimport dev.relayapi.models.inbox.comments.like.LikeCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LikeCreateResponse like = client.inbox().comments().like().create("comment_id");\n    }\n}',
      },
      python: {
        method: 'inbox.comments.like.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nlike = client.inbox.comments.like.create(\n    "comment_id",\n)\nprint(like.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.like.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst like = await client.inbox.comments.like.create('comment_id');\n\nconsole.log(like.comment_id);",
      },
    },
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
      "## delete\n\n`client.inbox.comments.like.delete(comment_id: string): { success: boolean; comment_id?: string; }`\n\n**delete** `/v1/inbox/comments/{comment_id}/like`\n\nUnlike a comment\n\n### Parameters\n\n- `comment_id: string`\n  Comment ID\n\n### Returns\n\n- `{ success: boolean; comment_id?: string; }`\n\n  - `success: boolean`\n  - `comment_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst like = await client.inbox.comments.like.delete('comment_id');\n\nconsole.log(like);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Comments.Like.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlike, err := client.Inbox.Comments.Like.Delete(context.TODO(), "comment_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", like.CommentID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/comments/$COMMENT_ID/like \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().comments().like().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.comments.like.LikeDeleteParams;\nimport dev.relayapi.models.inbox.comments.like.LikeDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        LikeDeleteResponse like = client.inbox().comments().like().delete("comment_id");\n    }\n}',
      },
      python: {
        method: 'inbox.comments.like.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nlike = client.inbox.comments.like.delete(\n    "comment_id",\n)\nprint(like.comment_id)',
      },
      typescript: {
        method: 'client.inbox.comments.like.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst like = await client.inbox.comments.like.delete('comment_id');\n\nconsole.log(like.comment_id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/inbox/messages',
    httpMethod: 'get',
    summary: 'List message conversations',
    description: 'List message conversations',
    stainlessPath: '(resource) inbox.messages > (method) list',
    qualified: 'client.inbox.messages.list',
    params: [
      'account_id?: string;',
      'cursor?: string;',
      'limit?: number;',
      'platform?: string;',
      'workspace_id?: string;',
    ],
    response:
      '{ data: { id: string; account_id: string; participant_name: string; platform: string; updated_at: string; last_message?: string; participant_avatar?: string; unread_count?: number; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.inbox.messages.list(account_id?: string, cursor?: string, limit?: number, platform?: string, workspace_id?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/inbox/messages`\n\nList message conversations\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `platform?: string`\n  Filter by platform\n\n- `workspace_id?: string`\n  Filter by workspace ID\n\n### Returns\n\n- `{ data: { id: string; account_id: string; participant_name: string; platform: string; updated_at: string; last_message?: string; participant_avatar?: string; unread_count?: number; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; account_id: string; participant_name: string; platform: string; updated_at: string; last_message?: string; participant_avatar?: string; unread_count?: number; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst messages = await client.inbox.messages.list();\n\nconsole.log(messages);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Messages.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmessages, err := client.Inbox.Messages.List(context.TODO(), relaygo.InboxMessageListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", messages.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/messages \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().messages().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.messages.MessageListParams;\nimport dev.relayapi.models.inbox.messages.MessageListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MessageListResponse messages = client.inbox().messages().list();\n    }\n}',
      },
      python: {
        method: 'inbox.messages.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nmessages = client.inbox.messages.list()\nprint(messages.data)',
      },
      typescript: {
        method: 'client.inbox.messages.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst messages = await client.inbox.messages.list();\n\nconsole.log(messages.data);",
      },
    },
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
      "## retrieve\n\n`client.inbox.messages.retrieve(conversation_id: string): { data: object[]; has_more?: boolean; next_cursor?: string; }`\n\n**get** `/v1/inbox/messages/{conversation_id}`\n\nGet messages in a conversation\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n### Returns\n\n- `{ data: { id: string; created_at: string; sender: 'user' | 'participant'; text: string; attachments?: { type: string; url: string; }[]; }[]; has_more?: boolean; next_cursor?: string; }`\n\n  - `data: { id: string; created_at: string; sender: 'user' | 'participant'; text: string; attachments?: { type: string; url: string; }[]; }[]`\n  - `has_more?: boolean`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst message = await client.inbox.messages.retrieve('conversation_id');\n\nconsole.log(message);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Messages.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmessage, err := client.Inbox.Messages.Get(context.TODO(), "conversation_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", message.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/messages/$CONVERSATION_ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().messages().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.messages.MessageRetrieveParams;\nimport dev.relayapi.models.inbox.messages.MessageRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MessageRetrieveResponse message = client.inbox().messages().retrieve("conversation_id");\n    }\n}',
      },
      python: {
        method: 'inbox.messages.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nmessage = client.inbox.messages.retrieve(\n    "conversation_id",\n)\nprint(message.data)',
      },
      typescript: {
        method: 'client.inbox.messages.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst message = await client.inbox.messages.retrieve('conversation_id');\n\nconsole.log(message.data);",
      },
    },
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
      'attachments?: { type: string; url: string; }[];',
      "message_tag?: 'HUMAN_AGENT' | 'CUSTOMER_FEEDBACK';",
      "quick_replies?: { content_type?: 'text' | 'user_phone_number' | 'user_email'; image_url?: string; payload?: string; title?: string; }[];",
      'reply_to?: string;',
      "template?: { elements: { title: string; buttons?: { title: string; type: 'web_url' | 'postback'; payload?: string; url?: string; }[]; image_url?: string; subtitle?: string; }[]; type: 'generic' | 'button'; };",
      'text?: string;',
    ],
    response: '{ success: boolean; error?: string; message_id?: string; }',
    markdown:
      "## send\n\n`client.inbox.messages.send(conversation_id: string, account_id: string, attachments?: { type: string; url: string; }[], message_tag?: 'HUMAN_AGENT' | 'CUSTOMER_FEEDBACK', quick_replies?: { content_type?: 'text' | 'user_phone_number' | 'user_email'; image_url?: string; payload?: string; title?: string; }[], reply_to?: string, template?: { elements: { title: string; buttons?: object[]; image_url?: string; subtitle?: string; }[]; type: 'generic' | 'button'; }, text?: string): { success: boolean; error?: string; message_id?: string; }`\n\n**post** `/v1/inbox/messages/{conversation_id}`\n\nSend a message in a conversation\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n- `account_id: string`\n  Account ID to send from\n\n- `attachments?: { type: string; url: string; }[]`\n  Attachments\n\n- `message_tag?: 'HUMAN_AGENT' | 'CUSTOMER_FEEDBACK'`\n  Message tag for sending outside the 24h window (Facebook only)\n\n- `quick_replies?: { content_type?: 'text' | 'user_phone_number' | 'user_email'; image_url?: string; payload?: string; title?: string; }[]`\n  Quick reply buttons (Facebook/Instagram, max 13)\n\n- `reply_to?: string`\n  Message ID to reply to\n\n- `template?: { elements: { title: string; buttons?: { title: string; type: 'web_url' | 'postback'; payload?: string; url?: string; }[]; image_url?: string; subtitle?: string; }[]; type: 'generic' | 'button'; }`\n  Structured template message (Facebook/Instagram)\n  - `elements: { title: string; buttons?: { title: string; type: 'web_url' | 'postback'; payload?: string; url?: string; }[]; image_url?: string; subtitle?: string; }[]`\n    Template elements (max 10 for carousel)\n  - `type: 'generic' | 'button'`\n    Template type\n\n- `text?: string`\n  Message text\n\n### Returns\n\n- `{ success: boolean; error?: string; message_id?: string; }`\n\n  - `success: boolean`\n  - `error?: string`\n  - `message_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.inbox.messages.send('conversation_id', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Messages.Send',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.Messages.Send(\n\t\tcontext.TODO(),\n\t\t"conversation_id",\n\t\trelaygo.InboxMessageSendParams{\n\t\t\tAccountID: relaygo.F("account_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.MessageID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/messages/$CONVERSATION_ID \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id"\n        }\'',
      },
      java: {
        method: 'inbox().messages().send',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.messages.MessageSendParams;\nimport dev.relayapi.models.inbox.messages.MessageSendResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MessageSendParams params = MessageSendParams.builder()\n            .conversationId("conversation_id")\n            .accountId("account_id")\n            .build();\n        MessageSendResponse response = client.inbox().messages().send(params);\n    }\n}',
      },
      python: {
        method: 'inbox.messages.send',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.messages.send(\n    conversation_id="conversation_id",\n    account_id="account_id",\n)\nprint(response.message_id)',
      },
      typescript: {
        method: 'client.inbox.messages.send',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.messages.send('conversation_id', { account_id: 'account_id' });\n\nconsole.log(response.message_id);",
      },
    },
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
    response: '{ success: boolean; error?: string; message_id?: string; }',
    markdown:
      "## archive\n\n`client.inbox.messages.archive(conversation_id: string): { success: boolean; error?: string; message_id?: string; }`\n\n**put** `/v1/inbox/messages/{conversation_id}/archive`\n\nArchive a conversation\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n### Returns\n\n- `{ success: boolean; error?: string; message_id?: string; }`\n\n  - `success: boolean`\n  - `error?: string`\n  - `message_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.inbox.messages.archive('conversation_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Messages.Archive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.Messages.Archive(context.TODO(), "conversation_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.MessageID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/messages/$CONVERSATION_ID/archive \\\n    -X PUT \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().messages().archive',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.messages.MessageArchiveParams;\nimport dev.relayapi.models.inbox.messages.MessageArchiveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MessageArchiveResponse response = client.inbox().messages().archive("conversation_id");\n    }\n}',
      },
      python: {
        method: 'inbox.messages.archive',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.messages.archive(\n    "conversation_id",\n)\nprint(response.message_id)',
      },
      typescript: {
        method: 'client.inbox.messages.archive',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.messages.archive('conversation_id');\n\nconsole.log(response.message_id);",
      },
    },
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
    response: '{ success: boolean; error?: string; message_id?: string; }',
    markdown:
      "## edit\n\n`client.inbox.messages.edit(conversation_id: string, message_id: string, text: string): { success: boolean; error?: string; message_id?: string; }`\n\n**patch** `/v1/inbox/messages/{conversation_id}/{message_id}`\n\nEdit a sent message\n\n### Parameters\n\n- `conversation_id: string`\n  Conversation ID\n\n- `message_id: string`\n  Message ID\n\n- `text: string`\n  Updated message text\n\n### Returns\n\n- `{ success: boolean; error?: string; message_id?: string; }`\n\n  - `success: boolean`\n  - `error?: string`\n  - `message_id?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.inbox.messages.edit('message_id', { conversation_id: 'conversation_id', text: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Messages.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.Messages.Edit(\n\t\tcontext.TODO(),\n\t\t"conversation_id",\n\t\t"message_id",\n\t\trelaygo.InboxMessageEditParams{\n\t\t\tText: relaygo.F("x"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.MessageID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/messages/$CONVERSATION_ID/$MESSAGE_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "text": "x"\n        }\'',
      },
      java: {
        method: 'inbox().messages().edit',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.messages.MessageEditParams;\nimport dev.relayapi.models.inbox.messages.MessageEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        MessageEditParams params = MessageEditParams.builder()\n            .conversationId("conversation_id")\n            .messageId("message_id")\n            .text("x")\n            .build();\n        MessageEditResponse response = client.inbox().messages().edit(params);\n    }\n}',
      },
      python: {
        method: 'inbox.messages.edit',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.messages.edit(\n    message_id="message_id",\n    conversation_id="conversation_id",\n    text="x",\n)\nprint(response.message_id)',
      },
      typescript: {
        method: 'client.inbox.messages.edit',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.messages.edit('message_id', {\n  conversation_id: 'conversation_id',\n  text: 'x',\n});\n\nconsole.log(response.message_id);",
      },
    },
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
      "## list\n\n`client.inbox.reviews.list(account_id?: string, cursor?: string, limit?: number, max_rating?: number, min_rating?: number, platform?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/inbox/reviews`\n\nList reviews across platforms\n\n### Parameters\n\n- `account_id?: string`\n  Filter by account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `max_rating?: number`\n\n- `min_rating?: number`\n\n- `platform?: string`\n  Filter by platform\n\n### Returns\n\n- `{ data: { id: string; author_name: string; created_at: string; platform: string; rating: number; reply?: string; text?: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; author_name: string; created_at: string; platform: string; rating: number; reply?: string; text?: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst reviews = await client.inbox.reviews.list();\n\nconsole.log(reviews);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Reviews.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\treviews, err := client.Inbox.Reviews.List(context.TODO(), relaygo.InboxReviewListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", reviews.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/reviews \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().reviews().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.reviews.ReviewListParams;\nimport dev.relayapi.models.inbox.reviews.ReviewListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ReviewListResponse reviews = client.inbox().reviews().list();\n    }\n}',
      },
      python: {
        method: 'inbox.reviews.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nreviews = client.inbox.reviews.list()\nprint(reviews.data)',
      },
      typescript: {
        method: 'client.inbox.reviews.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst reviews = await client.inbox.reviews.list();\n\nconsole.log(reviews.data);",
      },
    },
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
      "## create\n\n`client.inbox.reviews.reply.create(review_id: string, account_id: string, text: string): { success: boolean; }`\n\n**post** `/v1/inbox/reviews/{review_id}/reply`\n\nReply to a review\n\n### Parameters\n\n- `review_id: string`\n  Review ID\n\n- `account_id: string`\n  Account ID\n\n- `text: string`\n  Reply text\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst reply = await client.inbox.reviews.reply.create('review_id', { account_id: 'account_id', text: 'x' });\n\nconsole.log(reply);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Reviews.Reply.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\treply, err := client.Inbox.Reviews.Reply.New(\n\t\tcontext.TODO(),\n\t\t"review_id",\n\t\trelaygo.InboxReviewReplyNewParams{\n\t\t\tAccountID: relaygo.F("account_id"),\n\t\t\tText:      relaygo.F("x"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", reply.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/reviews/$REVIEW_ID/reply \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "text": "x"\n        }\'',
      },
      java: {
        method: 'inbox().reviews().reply().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.reviews.reply.ReplyCreateParams;\nimport dev.relayapi.models.inbox.reviews.reply.ReplyCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ReplyCreateParams params = ReplyCreateParams.builder()\n            .reviewId("review_id")\n            .accountId("account_id")\n            .text("x")\n            .build();\n        ReplyCreateResponse reply = client.inbox().reviews().reply().create(params);\n    }\n}',
      },
      python: {
        method: 'inbox.reviews.reply.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nreply = client.inbox.reviews.reply.create(\n    review_id="review_id",\n    account_id="account_id",\n    text="x",\n)\nprint(reply.success)',
      },
      typescript: {
        method: 'client.inbox.reviews.reply.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst reply = await client.inbox.reviews.reply.create('review_id', {\n  account_id: 'account_id',\n  text: 'x',\n});\n\nconsole.log(reply.success);",
      },
    },
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
      "## delete\n\n`client.inbox.reviews.reply.delete(review_id: string): { success: boolean; }`\n\n**delete** `/v1/inbox/reviews/{review_id}/reply`\n\nDelete a review reply\n\n### Parameters\n\n- `review_id: string`\n  Review ID\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst reply = await client.inbox.reviews.reply.delete('review_id');\n\nconsole.log(reply);\n```",
    perLanguage: {
      go: {
        method: 'client.Inbox.Reviews.Reply.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\treply, err := client.Inbox.Reviews.Reply.Delete(context.TODO(), "review_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", reply.Success)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/inbox/reviews/$REVIEW_ID/reply \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'inbox().reviews().reply().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.inbox.reviews.reply.ReplyDeleteParams;\nimport dev.relayapi.models.inbox.reviews.reply.ReplyDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ReplyDeleteResponse reply = client.inbox().reviews().reply().delete("review_id");\n    }\n}',
      },
      python: {
        method: 'inbox.reviews.reply.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nreply = client.inbox.reviews.reply.delete(\n    "review_id",\n)\nprint(reply.success)',
      },
      typescript: {
        method: 'client.inbox.reviews.reply.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst reply = await client.inbox.reviews.reply.delete('review_id');\n\nconsole.log(reply.success);",
      },
    },
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
      "## search\n\n`client.reddit.search(account_id: string, query: string, cursor?: string, from?: string, limit?: number, sort?: 'relevance' | 'hot' | 'top' | 'new' | 'comments', subreddit?: string, time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all', to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/reddit/search`\n\nSearch Reddit posts\n\n### Parameters\n\n- `account_id: string`\n  Reddit account ID\n\n- `query: string`\n  Search query\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `sort?: 'relevance' | 'hot' | 'top' | 'new' | 'comments'`\n  Sort order\n\n- `subreddit?: string`\n  Limit to subreddit\n\n- `time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'`\n  Time filter\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.reddit.search({ account_id: 'account_id', query: 'query' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Reddit.Search',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Reddit.Search(context.TODO(), relaygo.RedditSearchParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tQuery:     relaygo.F("query"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/reddit/search \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'reddit().search',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.reddit.RedditSearchParams;\nimport dev.relayapi.models.reddit.RedditSearchResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RedditSearchParams params = RedditSearchParams.builder()\n            .accountId("account_id")\n            .query("query")\n            .build();\n        RedditSearchResponse response = client.reddit().search(params);\n    }\n}',
      },
      python: {
        method: 'reddit.search',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reddit.search(\n    account_id="account_id",\n    query="query",\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.reddit.search',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reddit.search({ account_id: 'account_id', query: 'query' });\n\nconsole.log(response.data);",
      },
    },
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
      "## get_feed\n\n`client.reddit.getFeed(account_id: string, subreddit: string, cursor?: string, from?: string, limit?: number, sort?: 'hot' | 'new' | 'top' | 'rising', time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all', to?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/reddit/feed`\n\nGet subreddit feed\n\n### Parameters\n\n- `account_id: string`\n  Reddit account ID\n\n- `subreddit: string`\n  Subreddit name\n\n- `cursor?: string`\n  Pagination cursor\n\n- `from?: string`\n  Filter: start date (ISO 8601)\n\n- `limit?: number`\n  Number of items per page\n\n- `sort?: 'hot' | 'new' | 'top' | 'rising'`\n  Sort order\n\n- `time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'`\n  Time filter (for top sort)\n\n- `to?: string`\n  Filter: end date (ISO 8601)\n\n### Returns\n\n- `{ data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; author: string; created_utc: number; is_self: boolean; nsfw: boolean; num_comments: number; score: number; subreddit: string; title: string; url: string; selftext?: string; thumbnail?: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.reddit.getFeed({ account_id: 'account_id', subreddit: 'subreddit' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Reddit.GetFeed',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Reddit.GetFeed(context.TODO(), relaygo.RedditGetFeedParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tSubreddit: relaygo.F("subreddit"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/reddit/feed \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'reddit().getFeed',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.reddit.RedditGetFeedParams;\nimport dev.relayapi.models.reddit.RedditGetFeedResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        RedditGetFeedParams params = RedditGetFeedParams.builder()\n            .accountId("account_id")\n            .subreddit("subreddit")\n            .build();\n        RedditGetFeedResponse response = client.reddit().getFeed(params);\n    }\n}',
      },
      python: {
        method: 'reddit.get_feed',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reddit.get_feed(\n    account_id="account_id",\n    subreddit="subreddit",\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.reddit.getFeed',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reddit.getFeed({ account_id: 'account_id', subreddit: 'subreddit' });\n\nconsole.log(response.data);",
      },
    },
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
      "## bulk_send\n\n`client.whatsapp.bulkSend(account_id: string, recipients: { phone: string; variables?: object; }[], template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }): { results: object[]; summary: object; }`\n\n**post** `/v1/whatsapp/bulk-send`\n\nSend bulk WhatsApp messages via template\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `recipients: { phone: string; variables?: object; }[]`\n  Recipients\n\n- `template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }`\n  - `language: string`\n    Template language code\n  - `name: string`\n    Template name\n  - `components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]`\n    Template components\n\n### Returns\n\n- `{ results: { phone: string; status: 'sent' | 'failed'; error?: string; }[]; summary: { failed: number; sent: number; }; }`\n\n  - `results: { phone: string; status: 'sent' | 'failed'; error?: string; }[]`\n  - `summary: { failed: number; sent: number; }`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.bulkSend({\n  account_id: 'account_id',\n  recipients: [{ phone: 'phone' }],\n  template: { language: 'language', name: 'name' },\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.BulkSend',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Whatsapp.BulkSend(context.TODO(), relaygo.WhatsappBulkSendParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tRecipients: relaygo.F([]relaygo.WhatsappBulkSendParamsRecipient{{\n\t\t\tPhone: relaygo.F("phone"),\n\t\t}}),\n\t\tTemplate: relaygo.F(relaygo.WhatsappBulkSendParamsTemplate{\n\t\t\tLanguage: relaygo.F("language"),\n\t\t\tName:     relaygo.F("name"),\n\t\t}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Results)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/bulk-send \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "recipients": [\n            {\n              "phone": "phone"\n            }\n          ],\n          "template": {\n            "language": "language",\n            "name": "name"\n          }\n        }\'',
      },
      java: {
        method: 'whatsapp().bulkSend',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.WhatsappBulkSendParams;\nimport dev.relayapi.models.whatsapp.WhatsappBulkSendResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WhatsappBulkSendParams params = WhatsappBulkSendParams.builder()\n            .accountId("account_id")\n            .addRecipient(WhatsappBulkSendParams.Recipient.builder()\n                .phone("phone")\n                .build())\n            .template(WhatsappBulkSendParams.Template.builder()\n                .language("language")\n                .name("name")\n                .build())\n            .build();\n        WhatsappBulkSendResponse response = client.whatsapp().bulkSend(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.bulk_send',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.whatsapp.bulk_send(\n    account_id="account_id",\n    recipients=[{\n        "phone": "phone"\n    }],\n    template={\n        "language": "language",\n        "name": "name",\n    },\n)\nprint(response.results)',
      },
      typescript: {
        method: 'client.whatsapp.bulkSend',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.whatsapp.bulkSend({\n  account_id: 'account_id',\n  recipients: [{ phone: 'phone' }],\n  template: { language: 'language', name: 'name' },\n});\n\nconsole.log(response.results);",
      },
    },
  },
  {
    name: 'list_phone_numbers',
    endpoint: '/v1/whatsapp/phone-numbers',
    httpMethod: 'get',
    summary: 'List purchased phone numbers',
    description: 'List purchased phone numbers',
    stainlessPath: '(resource) whatsapp > (method) list_phone_numbers',
    qualified: 'client.whatsapp.listPhoneNumbers',
    params: [
      "status?: 'purchasing' | 'pending_verification' | 'verified' | 'active' | 'releasing' | 'released';",
    ],
    response:
      "{ data: { id: string; country: string; created_at: string; monthly_cost_cents: number; phone_number: string; provider: string; status: 'purchasing' | 'pending_verification' | 'verified' | 'active' | 'releasing' | 'released'; social_account_id?: string; wa_phone_number_id?: string; }[]; }",
    markdown:
      "## list_phone_numbers\n\n`client.whatsapp.listPhoneNumbers(status?: 'purchasing' | 'pending_verification' | 'verified' | 'active' | 'releasing' | 'released'): { data: object[]; }`\n\n**get** `/v1/whatsapp/phone-numbers`\n\nList purchased phone numbers\n\n### Parameters\n\n- `status?: 'purchasing' | 'pending_verification' | 'verified' | 'active' | 'releasing' | 'released'`\n  Filter by provisioning status\n\n### Returns\n\n- `{ data: { id: string; country: string; created_at: string; monthly_cost_cents: number; phone_number: string; provider: string; status: 'purchasing' | 'pending_verification' | 'verified' | 'active' | 'releasing' | 'released'; social_account_id?: string; wa_phone_number_id?: string; }[]; }`\n\n  - `data: { id: string; country: string; created_at: string; monthly_cost_cents: number; phone_number: string; provider: string; status: 'purchasing' | 'pending_verification' | 'verified' | 'active' | 'releasing' | 'released'; social_account_id?: string; wa_phone_number_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.listPhoneNumbers();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.ListPhoneNumbers',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Whatsapp.ListPhoneNumbers(context.TODO(), relaygo.WhatsappListPhoneNumbersParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/phone-numbers \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().listPhoneNumbers',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.WhatsappListPhoneNumbersParams;\nimport dev.relayapi.models.whatsapp.WhatsappListPhoneNumbersResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        WhatsappListPhoneNumbersResponse response = client.whatsapp().listPhoneNumbers();\n    }\n}',
      },
      python: {
        method: 'whatsapp.list_phone_numbers',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.whatsapp.list_phone_numbers()\nprint(response.data)',
      },
      typescript: {
        method: 'client.whatsapp.listPhoneNumbers',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.whatsapp.listPhoneNumbers();\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/whatsapp/broadcasts',
    httpMethod: 'get',
    summary: 'List broadcasts',
    description: 'Deprecated. Use GET /v1/broadcasts instead.',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) list',
    qualified: 'client.whatsapp.broadcasts.list',
    params: ['account_id: string;'],
    response:
      "{ data: { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }[]; }",
    markdown:
      "## list\n\n`client.whatsapp.broadcasts.list(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/broadcasts`\n\nDeprecated. Use GET /v1/broadcasts instead.\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }[]; }`\n\n  - `data: { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst broadcasts = await client.whatsapp.broadcasts.list({ account_id: 'account_id' });\n\nconsole.log(broadcasts);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Broadcasts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbroadcasts, err := client.Whatsapp.Broadcasts.List(context.TODO(), relaygo.WhatsappBroadcastListParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", broadcasts.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/broadcasts \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().broadcasts().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastListParams;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BroadcastListParams params = BroadcastListParams.builder()\n            .accountId("account_id")\n            .build();\n        BroadcastListResponse broadcasts = client.whatsapp().broadcasts().list(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.broadcasts.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbroadcasts = client.whatsapp.broadcasts.list(\n    account_id="account_id",\n)\nprint(broadcasts.data)',
      },
      typescript: {
        method: 'client.whatsapp.broadcasts.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst broadcasts = await client.whatsapp.broadcasts.list({ account_id: 'account_id' });\n\nconsole.log(broadcasts.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/whatsapp/broadcasts',
    httpMethod: 'post',
    summary: 'Create a broadcast',
    description: 'Deprecated. Use POST /v1/broadcasts instead.',
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
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## create\n\n`client.whatsapp.broadcasts.create(account_id: string, name: string, recipients: { phone: string; variables?: object; }[], template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }, scheduled_at?: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**post** `/v1/whatsapp/broadcasts`\n\nDeprecated. Use POST /v1/broadcasts instead.\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `name: string`\n  Broadcast name\n\n- `recipients: { phone: string; variables?: object; }[]`\n  Recipient list\n\n- `template: { language: string; name: string; components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]; }`\n  - `language: string`\n    Template language code\n  - `name: string`\n    Template name\n  - `components?: { type: 'header' | 'body' | 'button'; parameters?: object[]; }[]`\n\n- `scheduled_at?: string`\n  ISO 8601 timestamp to schedule send\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst broadcast = await client.whatsapp.broadcasts.create({\n  account_id: 'account_id',\n  name: 'name',\n  recipients: [{ phone: 'phone' }],\n  template: { language: 'language', name: 'name' },\n});\n\nconsole.log(broadcast);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Broadcasts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbroadcast, err := client.Whatsapp.Broadcasts.New(context.TODO(), relaygo.WhatsappBroadcastNewParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tName:      relaygo.F("name"),\n\t\tRecipients: relaygo.F([]relaygo.WhatsappBroadcastNewParamsRecipient{{\n\t\t\tPhone: relaygo.F("phone"),\n\t\t}}),\n\t\tTemplate: relaygo.F(relaygo.WhatsappBroadcastNewParamsTemplate{\n\t\t\tLanguage: relaygo.F("language"),\n\t\t\tName:     relaygo.F("name"),\n\t\t}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", broadcast.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/broadcasts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "name": "name",\n          "recipients": [\n            {\n              "phone": "phone"\n            }\n          ],\n          "template": {\n            "language": "language",\n            "name": "name"\n          }\n        }\'',
      },
      java: {
        method: 'whatsapp().broadcasts().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastCreateParams;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BroadcastCreateParams params = BroadcastCreateParams.builder()\n            .accountId("account_id")\n            .name("name")\n            .addRecipient(BroadcastCreateParams.Recipient.builder()\n                .phone("phone")\n                .build())\n            .template(BroadcastCreateParams.Template.builder()\n                .language("language")\n                .name("name")\n                .build())\n            .build();\n        BroadcastCreateResponse broadcast = client.whatsapp().broadcasts().create(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.broadcasts.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbroadcast = client.whatsapp.broadcasts.create(\n    account_id="account_id",\n    name="name",\n    recipients=[{\n        "phone": "phone"\n    }],\n    template={\n        "language": "language",\n        "name": "name",\n    },\n)\nprint(broadcast.id)',
      },
      typescript: {
        method: 'client.whatsapp.broadcasts.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst broadcast = await client.whatsapp.broadcasts.create({\n  account_id: 'account_id',\n  name: 'name',\n  recipients: [{ phone: 'phone' }],\n  template: { language: 'language', name: 'name' },\n});\n\nconsole.log(broadcast.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}',
    httpMethod: 'get',
    summary: 'Get broadcast details',
    description: 'Deprecated. Use GET /v1/broadcasts/{id} instead.',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) retrieve',
    qualified: 'client.whatsapp.broadcasts.retrieve',
    params: ['broadcast_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## retrieve\n\n`client.whatsapp.broadcasts.retrieve(broadcast_id: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**get** `/v1/whatsapp/broadcasts/{broadcast_id}`\n\nDeprecated. Use GET /v1/broadcasts/{id} instead.\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst broadcast = await client.whatsapp.broadcasts.retrieve('broadcast_id');\n\nconsole.log(broadcast);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Broadcasts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbroadcast, err := client.Whatsapp.Broadcasts.Get(context.TODO(), "broadcast_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", broadcast.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/broadcasts/$BROADCAST_ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().broadcasts().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastRetrieveParams;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BroadcastRetrieveResponse broadcast = client.whatsapp().broadcasts().retrieve("broadcast_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.broadcasts.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbroadcast = client.whatsapp.broadcasts.retrieve(\n    "broadcast_id",\n)\nprint(broadcast.id)',
      },
      typescript: {
        method: 'client.whatsapp.broadcasts.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst broadcast = await client.whatsapp.broadcasts.retrieve('broadcast_id');\n\nconsole.log(broadcast.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}',
    httpMethod: 'delete',
    summary: 'Delete a broadcast',
    description: 'Deprecated. Use DELETE /v1/broadcasts/{id} instead.',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) delete',
    qualified: 'client.whatsapp.broadcasts.delete',
    params: ['broadcast_id: string;'],
    markdown:
      "## delete\n\n`client.whatsapp.broadcasts.delete(broadcast_id: string): void`\n\n**delete** `/v1/whatsapp/broadcasts/{broadcast_id}`\n\nDeprecated. Use DELETE /v1/broadcasts/{id} instead.\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.whatsapp.broadcasts.delete('broadcast_id')\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Broadcasts.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Whatsapp.Broadcasts.Delete(context.TODO(), "broadcast_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/broadcasts/$BROADCAST_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().broadcasts().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.whatsapp().broadcasts().delete("broadcast_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.broadcasts.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.whatsapp.broadcasts.delete(\n    "broadcast_id",\n)',
      },
      typescript: {
        method: 'client.whatsapp.broadcasts.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.whatsapp.broadcasts.delete('broadcast_id');",
      },
    },
  },
  {
    name: 'send',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}/send',
    httpMethod: 'post',
    summary: 'Send a broadcast immediately',
    description: 'Deprecated. Use POST /v1/broadcasts/{id}/send instead.',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) send',
    qualified: 'client.whatsapp.broadcasts.send',
    params: ['broadcast_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## send\n\n`client.whatsapp.broadcasts.send(broadcast_id: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**post** `/v1/whatsapp/broadcasts/{broadcast_id}/send`\n\nDeprecated. Use POST /v1/broadcasts/{id}/send instead.\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.broadcasts.send('broadcast_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Broadcasts.Send',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Whatsapp.Broadcasts.Send(context.TODO(), "broadcast_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/broadcasts/$BROADCAST_ID/send \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().broadcasts().send',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastSendParams;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastSendResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BroadcastSendResponse response = client.whatsapp().broadcasts().send("broadcast_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.broadcasts.send',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.whatsapp.broadcasts.send(\n    "broadcast_id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.whatsapp.broadcasts.send',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.whatsapp.broadcasts.send('broadcast_id');\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'schedule',
    endpoint: '/v1/whatsapp/broadcasts/{broadcast_id}/schedule',
    httpMethod: 'post',
    summary: 'Schedule a broadcast',
    description: 'Deprecated. Use POST /v1/broadcasts/{id}/schedule instead.',
    stainlessPath: '(resource) whatsapp.broadcasts > (method) schedule',
    qualified: 'client.whatsapp.broadcasts.schedule',
    params: ['broadcast_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }",
    markdown:
      "## schedule\n\n`client.whatsapp.broadcasts.schedule(broadcast_id: string): { id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n**post** `/v1/whatsapp/broadcasts/{broadcast_id}/schedule`\n\nDeprecated. Use POST /v1/broadcasts/{id}/schedule instead.\n\n### Parameters\n\n- `broadcast_id: string`\n  Broadcast ID\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; recipient_count: number; status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'; template: string; failed?: number; scheduled_at?: string; sent?: number; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `recipient_count: number`\n  - `status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed'`\n  - `template: string`\n  - `failed?: number`\n  - `scheduled_at?: string`\n  - `sent?: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.broadcasts.schedule('broadcast_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Broadcasts.Schedule',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Whatsapp.Broadcasts.Schedule(context.TODO(), "broadcast_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/broadcasts/$BROADCAST_ID/schedule \\\n    -X POST \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().broadcasts().schedule',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastScheduleParams;\nimport dev.relayapi.models.whatsapp.broadcasts.BroadcastScheduleResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BroadcastScheduleResponse response = client.whatsapp().broadcasts().schedule("broadcast_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.broadcasts.schedule',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.whatsapp.broadcasts.schedule(\n    "broadcast_id",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.whatsapp.broadcasts.schedule',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.whatsapp.broadcasts.schedule('broadcast_id');\n\nconsole.log(response.id);",
      },
    },
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
      "## list\n\n`client.whatsapp.templates.list(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/templates`\n\nList message templates\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: object[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }[]; }`\n\n  - `data: { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst templates = await client.whatsapp.templates.list({ account_id: 'account_id' });\n\nconsole.log(templates);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Templates.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttemplates, err := client.Whatsapp.Templates.List(context.TODO(), relaygo.WhatsappTemplateListParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", templates.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/templates \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().templates().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.templates.TemplateListParams;\nimport dev.relayapi.models.whatsapp.templates.TemplateListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TemplateListParams params = TemplateListParams.builder()\n            .accountId("account_id")\n            .build();\n        TemplateListResponse templates = client.whatsapp().templates().list(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.templates.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ntemplates = client.whatsapp.templates.list(\n    account_id="account_id",\n)\nprint(templates.data)',
      },
      typescript: {
        method: 'client.whatsapp.templates.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst templates = await client.whatsapp.templates.list({ account_id: 'account_id' });\n\nconsole.log(templates.data);",
      },
    },
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
      "## create\n\n`client.whatsapp.templates.create(account_id: string, category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION', components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[], language: string, name: string): { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: object[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n**post** `/v1/whatsapp/templates`\n\nCreate a message template\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'`\n  Template category\n\n- `components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]`\n  Template components\n\n- `language: string`\n  Template language code\n\n- `name: string`\n  Template name\n\n### Returns\n\n- `{ category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n  - `category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'`\n  - `components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]`\n  - `language: string`\n  - `name: string`\n  - `status: 'APPROVED' | 'PENDING' | 'REJECTED'`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst template = await client.whatsapp.templates.create({\n  account_id: 'account_id',\n  category: 'MARKETING',\n  components: [{ type: 'HEADER' }],\n  language: 'language',\n  name: 'name',\n});\n\nconsole.log(template);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Templates.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttemplate, err := client.Whatsapp.Templates.New(context.TODO(), relaygo.WhatsappTemplateNewParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tCategory:  relaygo.F(relaygo.WhatsappTemplateNewParamsCategoryMarketing),\n\t\tComponents: relaygo.F([]relaygo.WhatsappTemplateNewParamsComponent{{\n\t\t\tType: relaygo.F(relaygo.WhatsappTemplateNewParamsComponentsTypeHeader),\n\t\t}}),\n\t\tLanguage: relaygo.F("language"),\n\t\tName:     relaygo.F("name"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", template.Category)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/templates \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "category": "MARKETING",\n          "components": [\n            {\n              "type": "HEADER"\n            }\n          ],\n          "language": "language",\n          "name": "name"\n        }\'',
      },
      java: {
        method: 'whatsapp().templates().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.templates.TemplateCreateParams;\nimport dev.relayapi.models.whatsapp.templates.TemplateCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TemplateCreateParams params = TemplateCreateParams.builder()\n            .accountId("account_id")\n            .category(TemplateCreateParams.Category.MARKETING)\n            .addComponent(TemplateCreateParams.Component.builder()\n                .type(TemplateCreateParams.Component.Type.HEADER)\n                .build())\n            .language("language")\n            .name("name")\n            .build();\n        TemplateCreateResponse template = client.whatsapp().templates().create(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.templates.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ntemplate = client.whatsapp.templates.create(\n    account_id="account_id",\n    category="MARKETING",\n    components=[{\n        "type": "HEADER"\n    }],\n    language="language",\n    name="name",\n)\nprint(template.category)',
      },
      typescript: {
        method: 'client.whatsapp.templates.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst template = await client.whatsapp.templates.create({\n  account_id: 'account_id',\n  category: 'MARKETING',\n  components: [{ type: 'HEADER' }],\n  language: 'language',\n  name: 'name',\n});\n\nconsole.log(template.category);",
      },
    },
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
      "## retrieve\n\n`client.whatsapp.templates.retrieve(template_name: string, account_id: string): { category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: object[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n**get** `/v1/whatsapp/templates/{template_name}`\n\nGet template details\n\n### Parameters\n\n- `template_name: string`\n  Template name\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'; components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]; language: string; name: string; status: 'APPROVED' | 'PENDING' | 'REJECTED'; }`\n\n  - `category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION'`\n  - `components: { type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; buttons?: { text: string; type: string; phone_number?: string; url?: string; }[]; format?: string; text?: string; }[]`\n  - `language: string`\n  - `name: string`\n  - `status: 'APPROVED' | 'PENDING' | 'REJECTED'`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst template = await client.whatsapp.templates.retrieve('template_name', { account_id: 'account_id' });\n\nconsole.log(template);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Templates.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttemplate, err := client.Whatsapp.Templates.Get(\n\t\tcontext.TODO(),\n\t\t"template_name",\n\t\trelaygo.WhatsappTemplateGetParams{\n\t\t\tAccountID: relaygo.F("account_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", template.Category)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/templates/$TEMPLATE_NAME \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().templates().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.templates.TemplateRetrieveParams;\nimport dev.relayapi.models.whatsapp.templates.TemplateRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TemplateRetrieveParams params = TemplateRetrieveParams.builder()\n            .templateName("template_name")\n            .accountId("account_id")\n            .build();\n        TemplateRetrieveResponse template = client.whatsapp().templates().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.templates.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ntemplate = client.whatsapp.templates.retrieve(\n    template_name="template_name",\n    account_id="account_id",\n)\nprint(template.category)',
      },
      typescript: {
        method: 'client.whatsapp.templates.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst template = await client.whatsapp.templates.retrieve('template_name', {\n  account_id: 'account_id',\n});\n\nconsole.log(template.category);",
      },
    },
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
      "## delete\n\n`client.whatsapp.templates.delete(template_name: string, account_id: string): void`\n\n**delete** `/v1/whatsapp/templates/{template_name}`\n\nDelete a message template\n\n### Parameters\n\n- `template_name: string`\n  Template name\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.whatsapp.templates.delete('template_name', { account_id: 'account_id' })\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Templates.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Whatsapp.Templates.Delete(\n\t\tcontext.TODO(),\n\t\t"template_name",\n\t\trelaygo.WhatsappTemplateDeleteParams{\n\t\t\tAccountID: relaygo.F("account_id"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/templates/$TEMPLATE_NAME \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().templates().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.templates.TemplateDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        TemplateDeleteParams params = TemplateDeleteParams.builder()\n            .templateName("template_name")\n            .accountId("account_id")\n            .build();\n        client.whatsapp().templates().delete(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.templates.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.whatsapp.templates.delete(\n    template_name="template_name",\n    account_id="account_id",\n)',
      },
      typescript: {
        method: 'client.whatsapp.templates.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.whatsapp.templates.delete('template_name', { account_id: 'account_id' });",
      },
    },
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
      'workspace_id?: string;',
    ],
    response:
      '{ data: { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }[]; has_more: boolean; next_cursor: string; }',
    markdown:
      "## list\n\n`client.whatsapp.contacts.list(account_id: string, cursor?: string, limit?: number, search?: string, tag?: string, workspace_id?: string): { data: object[]; has_more: boolean; next_cursor: string; }`\n\n**get** `/v1/whatsapp/contacts`\n\nList contacts\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `cursor?: string`\n  Pagination cursor\n\n- `limit?: number`\n  Number of items\n\n- `search?: string`\n  Search by name or phone\n\n- `tag?: string`\n  Filter by tag\n\n- `workspace_id?: string`\n  Filter by workspace ID\n\n### Returns\n\n- `{ data: { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }[]; has_more: boolean; next_cursor: string; }`\n\n  - `data: { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }[]`\n  - `has_more: boolean`\n  - `next_cursor: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst contacts = await client.whatsapp.contacts.list({ account_id: 'account_id' });\n\nconsole.log(contacts);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Contacts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcontacts, err := client.Whatsapp.Contacts.List(context.TODO(), relaygo.WhatsappContactListParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", contacts.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/contacts \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().contacts().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.contacts.ContactListParams;\nimport dev.relayapi.models.whatsapp.contacts.ContactListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ContactListParams params = ContactListParams.builder()\n            .accountId("account_id")\n            .build();\n        ContactListResponse contacts = client.whatsapp().contacts().list(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.contacts.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ncontacts = client.whatsapp.contacts.list(\n    account_id="account_id",\n)\nprint(contacts.data)',
      },
      typescript: {
        method: 'client.whatsapp.contacts.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst contacts = await client.whatsapp.contacts.list({ account_id: 'account_id' });\n\nconsole.log(contacts.data);",
      },
    },
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
      'workspace_id?: string;',
    ],
    response:
      '{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }',
    markdown:
      "## create\n\n`client.whatsapp.contacts.create(account_id: string, phone: string, email?: string, name?: string, tags?: string[], workspace_id?: string): { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n**post** `/v1/whatsapp/contacts`\n\nCreate a contact\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `phone: string`\n  Phone number in E.164 format\n\n- `email?: string`\n  Email address\n\n- `name?: string`\n  Contact name\n\n- `tags?: string[]`\n  Tags\n\n- `workspace_id?: string`\n  Workspace ID to scope this contact to\n\n### Returns\n\n- `{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `opted_in: boolean`\n  - `phone: string`\n  - `email?: string`\n  - `groups?: string[]`\n  - `name?: string`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst contact = await client.whatsapp.contacts.create({ account_id: 'account_id', phone: 'phone' });\n\nconsole.log(contact);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Contacts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcontact, err := client.Whatsapp.Contacts.New(context.TODO(), relaygo.WhatsappContactNewParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tPhone:     relaygo.F("phone"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", contact.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/contacts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "phone": "phone"\n        }\'',
      },
      java: {
        method: 'whatsapp().contacts().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.contacts.ContactCreateParams;\nimport dev.relayapi.models.whatsapp.contacts.ContactCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ContactCreateParams params = ContactCreateParams.builder()\n            .accountId("account_id")\n            .phone("phone")\n            .build();\n        ContactCreateResponse contact = client.whatsapp().contacts().create(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.contacts.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ncontact = client.whatsapp.contacts.create(\n    account_id="account_id",\n    phone="phone",\n)\nprint(contact.id)',
      },
      typescript: {
        method: 'client.whatsapp.contacts.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst contact = await client.whatsapp.contacts.create({ account_id: 'account_id', phone: 'phone' });\n\nconsole.log(contact.id);",
      },
    },
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
      "## retrieve\n\n`client.whatsapp.contacts.retrieve(contact_id: string): { id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n**get** `/v1/whatsapp/contacts/{contact_id}`\n\nGet contact details\n\n### Parameters\n\n- `contact_id: string`\n  Contact ID\n\n### Returns\n\n- `{ id: string; created_at: string; opted_in: boolean; phone: string; email?: string; groups?: string[]; name?: string; tags?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `opted_in: boolean`\n  - `phone: string`\n  - `email?: string`\n  - `groups?: string[]`\n  - `name?: string`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst contact = await client.whatsapp.contacts.retrieve('contact_id');\n\nconsole.log(contact);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Contacts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcontact, err := client.Whatsapp.Contacts.Get(context.TODO(), "contact_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", contact.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/contacts/$CONTACT_ID \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().contacts().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.contacts.ContactRetrieveParams;\nimport dev.relayapi.models.whatsapp.contacts.ContactRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ContactRetrieveResponse contact = client.whatsapp().contacts().retrieve("contact_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.contacts.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ncontact = client.whatsapp.contacts.retrieve(\n    "contact_id",\n)\nprint(contact.id)',
      },
      typescript: {
        method: 'client.whatsapp.contacts.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst contact = await client.whatsapp.contacts.retrieve('contact_id');\n\nconsole.log(contact.id);",
      },
    },
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
      "## delete\n\n`client.whatsapp.contacts.delete(contact_id: string): void`\n\n**delete** `/v1/whatsapp/contacts/{contact_id}`\n\nDelete a contact\n\n### Parameters\n\n- `contact_id: string`\n  Contact ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.whatsapp.contacts.delete('contact_id')\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Contacts.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Whatsapp.Contacts.Delete(context.TODO(), "contact_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/contacts/$CONTACT_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().contacts().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.contacts.ContactDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.whatsapp().contacts().delete("contact_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.contacts.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.whatsapp.contacts.delete(\n    "contact_id",\n)',
      },
      typescript: {
        method: 'client.whatsapp.contacts.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.whatsapp.contacts.delete('contact_id');",
      },
    },
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
      "## import\n\n`client.whatsapp.contacts.import(account_id: string, contacts: { phone: string; email?: string; name?: string; tags?: string[]; }[]): { failed: number; imported: number; skipped: number; }`\n\n**post** `/v1/whatsapp/contacts/import`\n\nBulk import contacts\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `contacts: { phone: string; email?: string; name?: string; tags?: string[]; }[]`\n  Contacts to import\n\n### Returns\n\n- `{ failed: number; imported: number; skipped: number; }`\n\n  - `failed: number`\n  - `imported: number`\n  - `skipped: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.contacts.import({ account_id: 'account_id', contacts: [{ phone: 'phone' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Contacts.Import',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Whatsapp.Contacts.Import(context.TODO(), relaygo.WhatsappContactImportParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tContacts: relaygo.F([]relaygo.WhatsappContactImportParamsContact{{\n\t\t\tPhone: relaygo.F("phone"),\n\t\t}}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Failed)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/contacts/import \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "contacts": [\n            {\n              "phone": "phone"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'whatsapp().contacts().import_',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.contacts.ContactImportParams;\nimport dev.relayapi.models.whatsapp.contacts.ContactImportResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ContactImportParams params = ContactImportParams.builder()\n            .accountId("account_id")\n            .addContact(ContactImportParams.Contact.builder()\n                .phone("phone")\n                .build())\n            .build();\n        ContactImportResponse response = client.whatsapp().contacts().import_(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.contacts.import_',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.whatsapp.contacts.import_(\n    account_id="account_id",\n    contacts=[{\n        "phone": "phone"\n    }],\n)\nprint(response.failed)',
      },
      typescript: {
        method: 'client.whatsapp.contacts.import',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.whatsapp.contacts.import({\n  account_id: 'account_id',\n  contacts: [{ phone: 'phone' }],\n});\n\nconsole.log(response.failed);",
      },
    },
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
      "## bulk_operations\n\n`client.whatsapp.contacts.bulkOperations(account_id: string, action: 'add_tags' | 'remove_tags' | 'delete', contact_ids: string[], tags?: string[]): { affected: number; }`\n\n**post** `/v1/whatsapp/contacts/bulk`\n\nBulk contact operations (add/remove tags, delete)\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `action: 'add_tags' | 'remove_tags' | 'delete'`\n  Action\n\n- `contact_ids: string[]`\n  Contact IDs\n\n- `tags?: string[]`\n  Tags (for tag actions)\n\n### Returns\n\n- `{ affected: number; }`\n\n  - `affected: number`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst response = await client.whatsapp.contacts.bulkOperations({\n  account_id: 'account_id',\n  action: 'add_tags',\n  contact_ids: ['string'],\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Contacts.BulkOperations',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Whatsapp.Contacts.BulkOperations(context.TODO(), relaygo.WhatsappContactBulkOperationsParams{\n\t\tAccountID:  relaygo.F("account_id"),\n\t\tAction:     relaygo.F(relaygo.WhatsappContactBulkOperationsParamsActionAddTags),\n\t\tContactIDs: relaygo.F([]string{"string"}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Affected)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/contacts/bulk \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "action": "add_tags",\n          "contact_ids": [\n            "string"\n          ]\n        }\'',
      },
      java: {
        method: 'whatsapp().contacts().bulkOperations',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.contacts.ContactBulkOperationsParams;\nimport dev.relayapi.models.whatsapp.contacts.ContactBulkOperationsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        ContactBulkOperationsParams params = ContactBulkOperationsParams.builder()\n            .accountId("account_id")\n            .action(ContactBulkOperationsParams.Action.ADD_TAGS)\n            .addContactId("string")\n            .build();\n        ContactBulkOperationsResponse response = client.whatsapp().contacts().bulkOperations(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.contacts.bulk_operations',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.whatsapp.contacts.bulk_operations(\n    account_id="account_id",\n    action="add_tags",\n    contact_ids=["string"],\n)\nprint(response.affected)',
      },
      typescript: {
        method: 'client.whatsapp.contacts.bulkOperations',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.whatsapp.contacts.bulkOperations({\n  account_id: 'account_id',\n  action: 'add_tags',\n  contact_ids: ['string'],\n});\n\nconsole.log(response.affected);",
      },
    },
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
      "## list\n\n`client.whatsapp.groups.list(account_id: string): { data: object[]; }`\n\n**get** `/v1/whatsapp/groups`\n\nList contact groups\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ data: { id: string; contact_count: number; created_at: string; name: string; description?: string; }[]; }`\n\n  - `data: { id: string; contact_count: number; created_at: string; name: string; description?: string; }[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst groups = await client.whatsapp.groups.list({ account_id: 'account_id' });\n\nconsole.log(groups);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Groups.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tgroups, err := client.Whatsapp.Groups.List(context.TODO(), relaygo.WhatsappGroupListParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", groups.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/groups \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().groups().list',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.groups.GroupListParams;\nimport dev.relayapi.models.whatsapp.groups.GroupListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        GroupListParams params = GroupListParams.builder()\n            .accountId("account_id")\n            .build();\n        GroupListResponse groups = client.whatsapp().groups().list(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.groups.list',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ngroups = client.whatsapp.groups.list(\n    account_id="account_id",\n)\nprint(groups.data)',
      },
      typescript: {
        method: 'client.whatsapp.groups.list',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst groups = await client.whatsapp.groups.list({ account_id: 'account_id' });\n\nconsole.log(groups.data);",
      },
    },
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
      "## create\n\n`client.whatsapp.groups.create(account_id: string, name: string, contact_ids?: string[], description?: string): { id: string; contact_count: number; created_at: string; name: string; description?: string; }`\n\n**post** `/v1/whatsapp/groups`\n\nCreate a contact group\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `name: string`\n  Group name\n\n- `contact_ids?: string[]`\n  Initial contact IDs\n\n- `description?: string`\n  Group description\n\n### Returns\n\n- `{ id: string; contact_count: number; created_at: string; name: string; description?: string; }`\n\n  - `id: string`\n  - `contact_count: number`\n  - `created_at: string`\n  - `name: string`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst group = await client.whatsapp.groups.create({ account_id: 'account_id', name: 'name' });\n\nconsole.log(group);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Groups.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tgroup, err := client.Whatsapp.Groups.New(context.TODO(), relaygo.WhatsappGroupNewParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t\tName:      relaygo.F("name"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", group.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/groups \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "name": "name"\n        }\'',
      },
      java: {
        method: 'whatsapp().groups().create',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.groups.GroupCreateParams;\nimport dev.relayapi.models.whatsapp.groups.GroupCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        GroupCreateParams params = GroupCreateParams.builder()\n            .accountId("account_id")\n            .name("name")\n            .build();\n        GroupCreateResponse group = client.whatsapp().groups().create(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.groups.create',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\ngroup = client.whatsapp.groups.create(\n    account_id="account_id",\n    name="name",\n)\nprint(group.id)',
      },
      typescript: {
        method: 'client.whatsapp.groups.create',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst group = await client.whatsapp.groups.create({ account_id: 'account_id', name: 'name' });\n\nconsole.log(group.id);",
      },
    },
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
      "## delete\n\n`client.whatsapp.groups.delete(group_id: string): void`\n\n**delete** `/v1/whatsapp/groups/{group_id}`\n\nDelete a contact group\n\n### Parameters\n\n- `group_id: string`\n  Group ID\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nawait client.whatsapp.groups.delete('group_id')\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.Groups.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Whatsapp.Groups.Delete(context.TODO(), "group_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/groups/$GROUP_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().groups().delete',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.groups.GroupDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        client.whatsapp().groups().delete("group_id");\n    }\n}',
      },
      python: {
        method: 'whatsapp.groups.delete',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nclient.whatsapp.groups.delete(\n    "group_id",\n)',
      },
      typescript: {
        method: 'client.whatsapp.groups.delete',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.whatsapp.groups.delete('group_id');",
      },
    },
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
      "## retrieve\n\n`client.whatsapp.businessProfile.retrieve(account_id: string): { about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n**get** `/v1/whatsapp/business-profile`\n\nGet WhatsApp Business profile\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n### Returns\n\n- `{ about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n  - `about?: string`\n  - `address?: string`\n  - `description?: string`\n  - `email?: string`\n  - `profile_picture_url?: string`\n  - `websites?: string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst businessProfile = await client.whatsapp.businessProfile.retrieve({ account_id: 'account_id' });\n\nconsole.log(businessProfile);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.BusinessProfile.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbusinessProfile, err := client.Whatsapp.BusinessProfile.Get(context.TODO(), relaygo.WhatsappBusinessProfileGetParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", businessProfile.About)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/business-profile \\\n    -H "Authorization: Bearer $RELAY_API_KEY"',
      },
      java: {
        method: 'whatsapp().businessProfile().retrieve',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.businessprofile.BusinessProfileRetrieveParams;\nimport dev.relayapi.models.whatsapp.businessprofile.BusinessProfileRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BusinessProfileRetrieveParams params = BusinessProfileRetrieveParams.builder()\n            .accountId("account_id")\n            .build();\n        BusinessProfileRetrieveResponse businessProfile = client.whatsapp().businessProfile().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.business_profile.retrieve',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbusiness_profile = client.whatsapp.business_profile.retrieve(\n    account_id="account_id",\n)\nprint(business_profile.about)',
      },
      typescript: {
        method: 'client.whatsapp.businessProfile.retrieve',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst businessProfile = await client.whatsapp.businessProfile.retrieve({\n  account_id: 'account_id',\n});\n\nconsole.log(businessProfile.about);",
      },
    },
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
      "## update\n\n`client.whatsapp.businessProfile.update(account_id: string, about?: string, address?: string, description?: string, email?: string, websites?: string[]): { about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n**put** `/v1/whatsapp/business-profile`\n\nUpdate WhatsApp Business profile\n\n### Parameters\n\n- `account_id: string`\n  WhatsApp account ID\n\n- `about?: string`\n\n- `address?: string`\n\n- `description?: string`\n\n- `email?: string`\n\n- `websites?: string[]`\n\n### Returns\n\n- `{ about?: string; address?: string; description?: string; email?: string; profile_picture_url?: string; websites?: string[]; }`\n\n  - `about?: string`\n  - `address?: string`\n  - `description?: string`\n  - `email?: string`\n  - `profile_picture_url?: string`\n  - `websites?: string[]`\n\n### Example\n\n```typescript\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay();\n\nconst businessProfile = await client.whatsapp.businessProfile.update({ account_id: 'account_id' });\n\nconsole.log(businessProfile);\n```",
    perLanguage: {
      go: {
        method: 'client.Whatsapp.BusinessProfile.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbusinessProfile, err := client.Whatsapp.BusinessProfile.Update(context.TODO(), relaygo.WhatsappBusinessProfileUpdateParams{\n\t\tAccountID: relaygo.F("account_id"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", businessProfile.About)\n}\n',
      },
      http: {
        example:
          'curl https://api.relayapi.dev/v1/whatsapp/business-profile \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $RELAY_API_KEY" \\\n    -d \'{\n          "account_id": "account_id"\n        }\'',
      },
      java: {
        method: 'whatsapp().businessProfile().update',
        example:
          'package dev.relayapi.example;\n\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.whatsapp.businessprofile.BusinessProfileUpdateParams;\nimport dev.relayapi.models.whatsapp.businessprofile.BusinessProfileUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        RelayClient client = RelayOkHttpClient.fromEnv();\n\n        BusinessProfileUpdateParams params = BusinessProfileUpdateParams.builder()\n            .accountId("account_id")\n            .build();\n        BusinessProfileUpdateResponse businessProfile = client.whatsapp().businessProfile().update(params);\n    }\n}',
      },
      python: {
        method: 'whatsapp.business_profile.update',
        example:
          'import os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\nbusiness_profile = client.whatsapp.business_profile.update(\n    account_id="account_id",\n)\nprint(business_profile.about)',
      },
      typescript: {
        method: 'client.whatsapp.businessProfile.update',
        example:
          "import Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst businessProfile = await client.whatsapp.businessProfile.update({ account_id: 'account_id' });\n\nconsole.log(businessProfile.about);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Relay Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/@relayapi/sdk.svg?label=pypi%20(stable))](https://pypi.org/project/@relayapi/sdk/)\n\nThe Relay Python library provides convenient access to the Relay REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Relay MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=relay-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInJlbGF5LW1jcCJdLCJlbnYiOnsiUkVMQVlfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22relay-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22relay-mcp%22%5D%2C%22env%22%3A%7B%22RELAY_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.relayapi.dev](https://docs.relayapi.dev). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install @relayapi/sdk\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom relay import Relay\n\nclient = Relay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\n\nposts = client.posts.list()\nprint(posts.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `RELAY_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncRelay` instead of `Relay` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom relay import AsyncRelay\n\nclient = AsyncRelay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  posts = await client.posts.list()\n  print(posts.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install @relayapi/sdk[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom relay import DefaultAioHttpClient\nfrom relay import AsyncRelay\n\nasync def main() -> None:\n  async with AsyncRelay(\n    api_key=os.environ.get("RELAY_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    posts = await client.posts.list()\n    print(posts.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\nfrom datetime import datetime\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom relay import Relay\n\nclient = Relay()\n\npost = client.posts.create(\n    scheduled_at="now",\n    targets=["string"],\n    recycling={\n        "gap": 1,\n        "gap_freq": "day",\n        "start_date": datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    },\n)\nprint(post.recycling)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `relay.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `relay.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `relay.APIError`.\n\n```python\nimport relay\nfrom relay import Relay\n\nclient = Relay()\n\ntry:\n    client.posts.list()\nexcept relay.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept relay.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept relay.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom relay import Relay\n\n# Configure the default for all requests:\nclient = Relay(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).posts.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom relay import Relay\n\n# Configure the default for all requests:\nclient = Relay(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Relay(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).posts.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `RELAY_LOG` to `info`.\n\n```shell\n$ export RELAY_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom relay import Relay\n\nclient = Relay()\nresponse = client.posts.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\npost = response.parse()  # get the object that `posts.list()` would have returned\nprint(post.data)\n```\n\nThese methods return an [`APIResponse`](https://github.com/relayapi-dev/relay-python/tree/main/src/relay/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/relayapi-dev/relay-python/tree/main/src/relay/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.posts.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom relay import Relay, DefaultHttpxClient\n\nclient = Relay(\n    # Or use the `RELAY_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom relay import Relay\n\nwith Relay() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/relayapi-dev/relay-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport relay\nprint(relay.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Relay Go API Library\n\n<a href="https://pkg.go.dev/github.com/relayapi-dev/relay-go"><img src="https://pkg.go.dev/badge/github.com/relayapi-dev/relay-go.svg" alt="Go Reference"></a>\n\nThe Relay Go library provides convenient access to the [Relay REST API](https://docs.relayapi.dev)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Relay MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=relay-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInJlbGF5LW1jcCJdLCJlbnYiOnsiUkVMQVlfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22relay-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22relay-mcp%22%5D%2C%22env%22%3A%7B%22RELAY_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/relayapi-dev/relay-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/relayapi-dev/relay-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/relayapi-dev/relay-go"\n\t"github.com/relayapi-dev/relay-go/option"\n)\n\nfunc main() {\n\tclient := relaygo.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("RELAY_API_KEY")\n\t)\n\tposts, err := client.Posts.List(context.TODO(), relaygo.PostListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", posts.Data)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Posts.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/relayapi-dev/relay-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Posts.List(context.TODO(), relaygo.PostListParams{})\nif err != nil {\n\tvar apierr *relaygo.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/posts": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Posts.List(\n\tctx,\n\trelaygo.PostListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := relaygo.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Posts.List(\n\tcontext.TODO(),\n\trelaygo.PostListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nposts, err := client.Posts.List(\n\tcontext.TODO(),\n\trelaygo.PostListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", posts)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/relayapi-dev/relay-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Relay TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@relayapi/mcp.svg?label=npm%20(stable))](https://npmjs.org/package/@relayapi/mcp) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@relayapi/mcp)\n\nThis library provides convenient access to the Relay REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.relayapi.dev](https://docs.relayapi.dev). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Relay MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=relay-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInJlbGF5LW1jcCJdLCJlbnYiOnsiUkVMQVlfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22relay-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22relay-mcp%22%5D%2C%22env%22%3A%7B%22RELAY_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @relayapi/mcp\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst posts = await client.posts.list();\n\nconsole.log(posts.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  apiKey: process.env['RELAY_API_KEY'], // This is the default and can be omitted\n});\n\nconst posts: Relay.PostListResponse = await client.posts.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst posts = await client.posts.list().catch(async (err) => {\n  if (err instanceof Relay.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Relay({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.posts.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Relay({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.posts.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Relay();\n\nconst response = await client.posts.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: posts, response: raw } = await client.posts.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(posts.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `RELAY_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Relay from '@relayapi/mcp';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Relay({\n  logger: logger.child({ name: 'Relay' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.posts.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Relay from '@relayapi/mcp';\nimport fetch from 'my-fetch';\n\nconst client = new Relay({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Relay from '@relayapi/mcp';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Relay({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Relay from '@relayapi/mcp';\n\nconst client = new Relay({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Relay from 'npm:@relayapi/mcp';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Relay({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/relayapi-dev/relay-mcp/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'java',
    content:
      '# Relay Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/dev.relayapi/relay-java)](https://central.sonatype.com/artifact/dev.relayapi/relay-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/dev.relayapi/relay-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/dev.relayapi/relay-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Relay Java SDK provides convenient access to the [Relay REST API](https://docs.relayapi.dev)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Relay MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=relay-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInJlbGF5LW1jcCJdLCJlbnYiOnsiUkVMQVlfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22relay-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22relay-mcp%22%5D%2C%22env%22%3A%7B%22RELAY_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [docs.relayapi.dev](https://docs.relayapi.dev). Javadocs are available on [javadoc.io](https://javadoc.io/doc/dev.relayapi/relay-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("dev.relayapi:relay-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>dev.relayapi</groupId>\n  <artifactId>relay-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostListParams;\nimport dev.relayapi.models.posts.PostListResponse;\n\n// Configures using the `relay.apiKey` and `relay.baseUrl` system properties\n// Or configures using the `RELAY_API_KEY` and `RELAY_BASE_URL` environment variables\nRelayClient client = RelayOkHttpClient.fromEnv();\n\nPostListResponse posts = client.posts().list();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\n\n// Configures using the `relay.apiKey` and `relay.baseUrl` system properties\n// Or configures using the `RELAY_API_KEY` and `RELAY_BASE_URL` environment variables\nRelayClient client = RelayOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\n\nRelayClient client = RelayOkHttpClient.builder()\n    // Configures using the `relay.apiKey` and `relay.baseUrl` system properties\n    // Or configures using the `RELAY_API_KEY` and `RELAY_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property | Environment variable | Required | Default value                |\n| --------- | --------------- | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `relay.apiKey`  | `RELAY_API_KEY`      | true     | -                            |\n| `baseUrl` | `relay.baseUrl` | `RELAY_BASE_URL`     | true     | `"https://api.relayapi.dev"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport dev.relayapi.client.RelayClient;\n\nRelayClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Relay API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.posts().list(...)` should be called with an instance of `PostListParams`, and it     will return an instance of `PostListResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport dev.relayapi.models.posts.PostListParams;\nimport dev.relayapi.models.posts.PostListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `relay.apiKey` and `relay.baseUrl` system properties\n// Or configures using the `RELAY_API_KEY` and `RELAY_BASE_URL` environment variables\nRelayClient client = RelayOkHttpClient.fromEnv();\n\nCompletableFuture<PostListResponse> posts = client.async().posts().list();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport dev.relayapi.client.RelayClientAsync;\nimport dev.relayapi.client.okhttp.RelayOkHttpClientAsync;\nimport dev.relayapi.models.posts.PostListParams;\nimport dev.relayapi.models.posts.PostListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `relay.apiKey` and `relay.baseUrl` system properties\n// Or configures using the `RELAY_API_KEY` and `RELAY_BASE_URL` environment variables\nRelayClientAsync client = RelayOkHttpClientAsync.fromEnv();\n\nCompletableFuture<PostListResponse> posts = client.posts().list();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport dev.relayapi.core.http.Headers;\nimport dev.relayapi.core.http.HttpResponseFor;\nimport dev.relayapi.models.posts.PostListParams;\nimport dev.relayapi.models.posts.PostListResponse;\n\nHttpResponseFor<PostListResponse> posts = client.posts().withRawResponse().list();\n\nint statusCode = posts.statusCode();\nHeaders headers = posts.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport dev.relayapi.models.posts.PostListResponse;\n\nPostListResponse parsedPosts = posts.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`RelayServiceException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RelayServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/UnexpectedStatusCodeException.kt) |\n\n- [`RelayIoException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RelayIoException.kt): I/O networking errors.\n\n- [`RelayRetryableException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RelayRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`RelayInvalidDataException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RelayInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`RelayException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RelayException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `RELAY_LOG` environment variable to   `info`:\n\n```sh\nexport RELAY_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport RELAY_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `relay-java-core` is published with a     [configuration file](relay-java-core/src/main/resources/META-INF/proguard/relay-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`RelayOkHttpClient`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClient.kt) or     [`RelayOkHttpClientAsync`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport dev.relayapi.models.posts.PostListResponse;\n\nPostListResponse posts = client.posts().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport java.time.Duration;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\nimport java.time.Duration;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `relay-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`RelayClient`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClient.kt), [`RelayClientAsync`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientAsync.kt),             [`RelayClientImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientImpl.kt), and [`RelayClientAsyncImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `relay-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`RelayOkHttpClient`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClient.kt) and [`RelayOkHttpClientAsync`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClientAsync.kt), which             provide a way to construct [`RelayClientImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientImpl.kt) and             [`RelayClientAsyncImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientAsyncImpl.kt), respectively, using OkHttp\n- `relay-java`\n  - Depends on and exposes the APIs of both `relay-java-core` and `relay-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`relay-java` dependency](#installation) with `relay-java-core`\n2. Copy `relay-java-client-okhttp`\'s [`OkHttpClient`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`RelayClientImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientImpl.kt) or [`RelayClientAsyncImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientAsyncImpl.kt), similarly to        [`RelayOkHttpClient`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClient.kt) or [`RelayOkHttpClientAsync`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`relay-java` dependency](#installation) with `relay-java-core`\n2. Write a class that implements the [`HttpClient`](relay-java-core/src/main/kotlin/dev/relayapi/core/http/HttpClient.kt) interface\n3. Construct [`RelayClientImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientImpl.kt) or [`RelayClientAsyncImpl`](relay-java-core/src/main/kotlin/dev/relayapi/client/RelayClientAsyncImpl.kt), similarly to        [`RelayOkHttpClient`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClient.kt) or [`RelayOkHttpClientAsync`](relay-java-client-okhttp/src/main/kotlin/dev/relayapi/client/okhttp/RelayOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport dev.relayapi.core.JsonValue;\nimport dev.relayapi.models.posts.PostListParams;\n\nPostListParams params = PostListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport dev.relayapi.core.JsonValue;\nimport dev.relayapi.models.posts.PostCreateParams;\n\nPostCreateParams params = PostCreateParams.builder()\n    .recycling(PostCreateParams.Recycling.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](relay-java-core/src/main/kotlin/dev/relayapi/core/Values.kt) object to its setter:\n\n```java\nimport dev.relayapi.models.posts.PostListParams;\n\nPostListParams params = PostListParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](relay-java-core/src/main/kotlin/dev/relayapi/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport dev.relayapi.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](relay-java-core/src/main/kotlin/dev/relayapi/core/Values.kt):\n\n```java\nimport dev.relayapi.core.JsonMissing;\nimport dev.relayapi.models.posts.PostCreateParams;\nimport dev.relayapi.models.posts.PostListParams;\n\nPostListParams params = PostCreateParams.builder()\n    .addTarget("string")\n    .scheduledAt(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport dev.relayapi.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.posts().list(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport dev.relayapi.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.posts().list(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`RelayInvalidDataException`](relay-java-core/src/main/kotlin/dev/relayapi/errors/RelayInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport dev.relayapi.models.posts.PostListResponse;\n\nPostListResponse posts = client.posts().list(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport dev.relayapi.models.posts.PostListResponse;\n\nPostListResponse posts = client.posts().list(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport dev.relayapi.client.RelayClient;\nimport dev.relayapi.client.okhttp.RelayOkHttpClient;\n\nRelayClient client = RelayOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/relayapi-dev/relay-java/issues) with questions, bugs, or suggestions.\n',
  },
];

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
