// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Create a contact
   */
  create(body: ContactCreateParams, options?: RequestOptions): APIPromise<ContactCreateResponse> {
    return this._client.post('/v1/whatsapp/contacts', { body, ...options });
  }

  /**
   * Get contact details
   */
  retrieve(contactID: string, options?: RequestOptions): APIPromise<ContactRetrieveResponse> {
    return this._client.get(path`/v1/whatsapp/contacts/${contactID}`, options);
  }

  /**
   * List contacts
   */
  list(query: ContactListParams, options?: RequestOptions): APIPromise<ContactListResponse> {
    return this._client.get('/v1/whatsapp/contacts', { query, ...options });
  }

  /**
   * Delete a contact
   */
  delete(contactID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/whatsapp/contacts/${contactID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Bulk contact operations (add/remove tags, delete)
   */
  bulkOperations(
    body: ContactBulkOperationsParams,
    options?: RequestOptions,
  ): APIPromise<ContactBulkOperationsResponse> {
    return this._client.post('/v1/whatsapp/contacts/bulk', { body, ...options });
  }

  /**
   * Bulk import contacts
   */
  import(body: ContactImportParams, options?: RequestOptions): APIPromise<ContactImportResponse> {
    return this._client.post('/v1/whatsapp/contacts/import', { body, ...options });
  }
}

export interface ContactCreateResponse {
  /**
   * Contact ID
   */
  id: string;

  /**
   * Created timestamp
   */
  created_at: string;

  /**
   * Whether contact has opted in
   */
  opted_in: boolean;

  /**
   * Phone number
   */
  phone: string;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * Group IDs
   */
  groups?: Array<string>;

  /**
   * Contact name
   */
  name?: string | null;

  /**
   * Tags
   */
  tags?: Array<string>;
}

export interface ContactRetrieveResponse {
  /**
   * Contact ID
   */
  id: string;

  /**
   * Created timestamp
   */
  created_at: string;

  /**
   * Whether contact has opted in
   */
  opted_in: boolean;

  /**
   * Phone number
   */
  phone: string;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * Group IDs
   */
  groups?: Array<string>;

  /**
   * Contact name
   */
  name?: string | null;

  /**
   * Tags
   */
  tags?: Array<string>;
}

export interface ContactListResponse {
  data: Array<ContactListResponse.Data>;

  /**
   * Whether more items exist
   */
  has_more: boolean;

  /**
   * Cursor for next page
   */
  next_cursor: string | null;
}

export namespace ContactListResponse {
  export interface Data {
    /**
     * Contact ID
     */
    id: string;

    /**
     * Created timestamp
     */
    created_at: string;

    /**
     * Whether contact has opted in
     */
    opted_in: boolean;

    /**
     * Phone number
     */
    phone: string;

    /**
     * Email address
     */
    email?: string | null;

    /**
     * Group IDs
     */
    groups?: Array<string>;

    /**
     * Contact name
     */
    name?: string | null;

    /**
     * Tags
     */
    tags?: Array<string>;
  }
}

export interface ContactBulkOperationsResponse {
  /**
   * Number of contacts affected
   */
  affected: number;
}

export interface ContactImportResponse {
  /**
   * Failed count
   */
  failed: number;

  /**
   * Successfully imported count
   */
  imported: number;

  /**
   * Skipped (duplicate) count
   */
  skipped: number;
}

export interface ContactCreateParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;

  /**
   * Phone number in E.164 format
   */
  phone: string;

  /**
   * Email address
   */
  email?: string;

  /**
   * Contact name
   */
  name?: string;

  /**
   * Tags
   */
  tags?: Array<string>;
}

export interface ContactListParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;

  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items
   */
  limit?: number;

  /**
   * Search by name or phone
   */
  search?: string;

  /**
   * Filter by tag
   */
  tag?: string;
}

export interface ContactBulkOperationsParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;

  /**
   * Action
   */
  action: 'add_tags' | 'remove_tags' | 'delete';

  /**
   * Contact IDs
   */
  contact_ids: Array<string>;

  /**
   * Tags (for tag actions)
   */
  tags?: Array<string>;
}

export interface ContactImportParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;

  /**
   * Contacts to import
   */
  contacts: Array<ContactImportParams.Contact>;
}

export namespace ContactImportParams {
  export interface Contact {
    /**
     * Phone number
     */
    phone: string;

    email?: string;

    name?: string;

    tags?: Array<string>;
  }
}

export declare namespace Contacts {
  export {
    type ContactCreateResponse as ContactCreateResponse,
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactListResponse as ContactListResponse,
    type ContactBulkOperationsResponse as ContactBulkOperationsResponse,
    type ContactImportResponse as ContactImportResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
    type ContactBulkOperationsParams as ContactBulkOperationsParams,
    type ContactImportParams as ContactImportParams,
  };
}
