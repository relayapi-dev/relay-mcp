// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BusinessProfile extends APIResource {
  /**
   * Get WhatsApp Business profile
   */
  retrieve(
    query: BusinessProfileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BusinessProfileRetrieveResponse> {
    return this._client.get('/v1/whatsapp/business-profile', { query, ...options });
  }

  /**
   * Update WhatsApp Business profile
   */
  update(
    body: BusinessProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BusinessProfileUpdateResponse> {
    return this._client.put('/v1/whatsapp/business-profile', { body, ...options });
  }
}

export interface BusinessProfileRetrieveResponse {
  /**
   * About text
   */
  about?: string | null;

  /**
   * Business address
   */
  address?: string | null;

  /**
   * Description
   */
  description?: string | null;

  /**
   * Business email
   */
  email?: string | null;

  /**
   * Profile picture URL
   */
  profile_picture_url?: string | null;

  /**
   * Website URLs
   */
  websites?: Array<string>;
}

export interface BusinessProfileUpdateResponse {
  /**
   * About text
   */
  about?: string | null;

  /**
   * Business address
   */
  address?: string | null;

  /**
   * Description
   */
  description?: string | null;

  /**
   * Business email
   */
  email?: string | null;

  /**
   * Profile picture URL
   */
  profile_picture_url?: string | null;

  /**
   * Website URLs
   */
  websites?: Array<string>;
}

export interface BusinessProfileRetrieveParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;
}

export interface BusinessProfileUpdateParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;

  about?: string;

  address?: string;

  description?: string;

  email?: string;

  websites?: Array<string>;
}

export declare namespace BusinessProfile {
  export {
    type BusinessProfileRetrieveResponse as BusinessProfileRetrieveResponse,
    type BusinessProfileUpdateResponse as BusinessProfileUpdateResponse,
    type BusinessProfileRetrieveParams as BusinessProfileRetrieveParams,
    type BusinessProfileUpdateParams as BusinessProfileUpdateParams,
  };
}
