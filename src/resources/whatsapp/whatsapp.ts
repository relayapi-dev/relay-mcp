// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BroadcastsAPI from './broadcasts';
import {
  BroadcastCreateParams,
  BroadcastCreateResponse,
  BroadcastListParams,
  BroadcastListResponse,
  BroadcastRetrieveResponse,
  BroadcastScheduleResponse,
  BroadcastSendResponse,
  Broadcasts,
} from './broadcasts';
import * as BusinessProfileAPI from './business-profile';
import {
  BusinessProfile,
  BusinessProfileRetrieveParams,
  BusinessProfileRetrieveResponse,
  BusinessProfileUpdateParams,
  BusinessProfileUpdateResponse,
} from './business-profile';
import * as ContactsAPI from './contacts';
import { Contacts } from './contacts';
import * as GroupsAPI from './groups';
import { Groups } from './groups';
import * as TemplatesAPI from './templates';
import {
  TemplateCreateParams,
  TemplateCreateResponse,
  TemplateDeleteParams,
  TemplateListParams,
  TemplateListResponse,
  TemplateRetrieveParams,
  TemplateRetrieveResponse,
  Templates,
} from './templates';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Whatsapp extends APIResource {
  broadcasts: BroadcastsAPI.Broadcasts = new BroadcastsAPI.Broadcasts(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  businessProfile: BusinessProfileAPI.BusinessProfile = new BusinessProfileAPI.BusinessProfile(this._client);

  /**
   * Send bulk WhatsApp messages via template
   */
  bulkSend(body: WhatsappBulkSendParams, options?: RequestOptions): APIPromise<WhatsappBulkSendResponse> {
    return this._client.post('/v1/whatsapp/bulk-send', { body, ...options });
  }

  /**
   * List registered phone numbers
   */
  listPhoneNumbers(
    query: WhatsappListPhoneNumbersParams,
    options?: RequestOptions,
  ): APIPromise<WhatsappListPhoneNumbersResponse> {
    return this._client.get('/v1/whatsapp/phone-numbers', { query, ...options });
  }
}

export interface WhatsappBulkSendResponse {
  id: string;

  account_id: string;

  completed_at: string | null;

  created_at: string;

  description: string | null;

  failed_count: number;

  message_text: string | null;

  name: string | null;

  platform: string;

  recipient_count: number;

  scheduled_at: string | null;

  sent_count: number;

  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'partially_failed' | 'failed' | 'cancelled';

  template_language: string | null;

  template_name: string | null;
}

export interface WhatsappListPhoneNumbersResponse {
  data: Array<WhatsappListPhoneNumbersResponse.Data>;
}

export namespace WhatsappListPhoneNumbersResponse {
  export interface Data {
    /**
     * Phone number ID
     */
    id: string;

    /**
     * Phone number
     */
    phone_number: string;

    /**
     * Registration status
     */
    status: 'active' | 'inactive' | 'pending';

    /**
     * Display name
     */
    display_name?: string | null;
  }
}

export interface WhatsappBulkSendParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;

  /**
   * Recipients
   */
  recipients: Array<WhatsappBulkSendParams.Recipient>;

  template: WhatsappBulkSendParams.Template;
}

export namespace WhatsappBulkSendParams {
  export interface Recipient {
    /**
     * Phone number in E.164 format
     */
    phone: string;

    /**
     * Template variable substitutions
     */
    variables?: { [key: string]: string };
  }

  export interface Template {
    /**
     * Template language code
     */
    language: string;

    /**
     * Template name
     */
    name: string;

    /**
     * Template components
     */
    components?: Array<Template.Component>;
  }

  export namespace Template {
    export interface Component {
      /**
       * Component type
       */
      type: 'header' | 'body' | 'button';

      /**
       * Component parameters
       */
      parameters?: Array<{ [key: string]: unknown }>;
    }
  }
}

export interface WhatsappListPhoneNumbersParams {
  /**
   * WhatsApp account ID
   */
  account_id: string;
}

Whatsapp.Broadcasts = Broadcasts;
Whatsapp.Templates = Templates;
Whatsapp.Contacts = Contacts;
Whatsapp.Groups = Groups;
Whatsapp.BusinessProfile = BusinessProfile;

export declare namespace Whatsapp {
  export {
    type WhatsappBulkSendResponse as WhatsappBulkSendResponse,
    type WhatsappListPhoneNumbersResponse as WhatsappListPhoneNumbersResponse,
    type WhatsappBulkSendParams as WhatsappBulkSendParams,
    type WhatsappListPhoneNumbersParams as WhatsappListPhoneNumbersParams,
  };

  export {
    Broadcasts as Broadcasts,
    type BroadcastCreateResponse as BroadcastCreateResponse,
    type BroadcastRetrieveResponse as BroadcastRetrieveResponse,
    type BroadcastListResponse as BroadcastListResponse,
    type BroadcastScheduleResponse as BroadcastScheduleResponse,
    type BroadcastSendResponse as BroadcastSendResponse,
    type BroadcastCreateParams as BroadcastCreateParams,
    type BroadcastListParams as BroadcastListParams,
  };

  export {
    Templates as Templates,
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
    type TemplateDeleteParams as TemplateDeleteParams,
  };

  export { Contacts as Contacts };

  export { Groups as Groups };

  export {
    BusinessProfile as BusinessProfile,
    type BusinessProfileRetrieveResponse as BusinessProfileRetrieveResponse,
    type BusinessProfileUpdateResponse as BusinessProfileUpdateResponse,
    type BusinessProfileRetrieveParams as BusinessProfileRetrieveParams,
    type BusinessProfileUpdateParams as BusinessProfileUpdateParams,
  };
}
