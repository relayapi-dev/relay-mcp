// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SlotsAPI from './slots';
import { SlotCreateParams, SlotCreateResponse, SlotListResponse, SlotUpdateParams, SlotUpdateResponse, Slots } from './slots';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Queue extends APIResource {
  slots: SlotsAPI.Slots = new SlotsAPI.Slots(this._client);

  /**
   * Get next available queue slot
   */
  getNextSlot(options?: RequestOptions): APIPromise<QueueGetNextSlotResponse> {
    return this._client.get('/v1/queue/next-slot', options);
  }

  /**
   * Preview upcoming queue slots
   */
  preview(query: QueuePreviewParams | null | undefined = {}, options?: RequestOptions): APIPromise<QueuePreviewResponse> {
    return this._client.get('/v1/queue/preview', { query, ...options });
  }
}

export interface QueueGetNextSlotResponse {
  /**
   * Next available slot (ISO 8601)
   */
  next_slot_at: string;

  /**
   * Queue schedule ID
   */
  queue_id: string;
}

export interface QueuePreviewResponse {
  /**
   * Upcoming slot timestamps (ISO 8601)
   */
  slots: Array<string>;
}

export interface QueuePreviewParams {
  /**
   * Number of upcoming slots to preview
   */
  count?: number;
}

Queue.Slots = Slots;

export declare namespace Queue {
  export {
    type QueueGetNextSlotResponse as QueueGetNextSlotResponse,
    type QueuePreviewResponse as QueuePreviewResponse,
    type QueuePreviewParams as QueuePreviewParams
  };

  export {
    Slots as Slots,
    type SlotCreateResponse as SlotCreateResponse,
    type SlotUpdateResponse as SlotUpdateResponse,
    type SlotListResponse as SlotListResponse,
    type SlotCreateParams as SlotCreateParams,
    type SlotUpdateParams as SlotUpdateParams
  };
}
