// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get messages in a conversation
   */
  retrieve(conversationID: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/v1/inbox/messages/${conversationID}`, options);
  }

  /**
   * List message conversations
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/v1/inbox/messages', { query, ...options });
  }

  /**
   * Archive a conversation
   */
  archive(conversationID: string, options?: RequestOptions): APIPromise<MessageArchiveResponse> {
    return this._client.put(path`/v1/inbox/messages/${conversationID}/archive`, options);
  }

  /**
   * Edit a sent message
   */
  edit(
    messageID: string,
    params: MessageEditParams,
    options?: RequestOptions,
  ): APIPromise<MessageEditResponse> {
    const { conversation_id, ...body } = params;
    return this._client.patch(path`/v1/inbox/messages/${conversation_id}/${messageID}`, { body, ...options });
  }

  /**
   * Send a message in a conversation
   */
  send(
    conversationID: string,
    body: MessageSendParams,
    options?: RequestOptions,
  ): APIPromise<MessageSendResponse> {
    return this._client.post(path`/v1/inbox/messages/${conversationID}`, { body, ...options });
  }
}

export interface MessageRetrieveResponse {
  data: Array<MessageRetrieveResponse.Data>;

  has_more?: boolean;

  next_cursor?: string | null;
}

export namespace MessageRetrieveResponse {
  export interface Data {
    /**
     * Message ID
     */
    id: string;

    /**
     * Message timestamp
     */
    created_at: string;

    /**
     * Message sender
     */
    sender: 'user' | 'participant';

    /**
     * Message text
     */
    text: string;

    /**
     * Message attachments
     */
    attachments?: Array<Data.Attachment>;
  }

  export namespace Data {
    export interface Attachment {
      /**
       * Attachment MIME type
       */
      type: string;

      /**
       * Attachment URL
       */
      url: string;
    }
  }
}

export interface MessageListResponse {
  data: Array<MessageListResponse.Data>;

  /**
   * Whether more items exist
   */
  has_more: boolean;

  /**
   * Cursor for next page
   */
  next_cursor: string | null;
}

export namespace MessageListResponse {
  export interface Data {
    /**
     * Conversation ID
     */
    id: string;

    /**
     * Account ID
     */
    account_id: string;

    /**
     * Participant display name
     */
    participant_name: string;

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
      | 'sms';

    /**
     * Last updated timestamp
     */
    updated_at: string;

    /**
     * Last message text
     */
    last_message?: string | null;

    /**
     * Participant avatar URL
     */
    participant_avatar?: string | null;

    /**
     * Unread message count
     */
    unread_count?: number;
  }
}

export interface MessageArchiveResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Message ID
   */
  message_id?: string;
}

export interface MessageEditResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Message ID
   */
  message_id?: string;
}

export interface MessageSendResponse {
  /**
   * Whether the action succeeded
   */
  success: boolean;

  /**
   * Message ID
   */
  message_id?: string;
}

export interface MessageListParams {
  /**
   * Filter by account ID
   */
  account_id?: string;

  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items
   */
  limit?: number;

  /**
   * Filter by platform
   */
  platform?:
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
    | 'sms';
}

export interface MessageEditParams {
  /**
   * Path param: Conversation ID
   */
  conversation_id: string;

  /**
   * Body param: Updated message text
   */
  text: string;
}

export interface MessageSendParams {
  /**
   * Account ID to send from
   */
  account_id: string;

  /**
   * Message text
   */
  text: string;

  /**
   * Attachments
   */
  attachments?: Array<MessageSendParams.Attachment>;

  /**
   * Message tag (e.g. for Facebook outside 24h window)
   */
  message_tag?: string;

  /**
   * Message ID to reply to
   */
  reply_to?: string;
}

export namespace MessageSendParams {
  export interface Attachment {
    /**
     * Attachment MIME type
     */
    type: string;

    /**
     * Attachment URL
     */
    url: string;
  }
}

export declare namespace Messages {
  export {
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageArchiveResponse as MessageArchiveResponse,
    type MessageEditResponse as MessageEditResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageEditParams as MessageEditParams,
    type MessageSendParams as MessageSendParams,
  };
}
