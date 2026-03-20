// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Usage extends APIResource {
  /**
   * Returns current subscription details and usage statistics for the organization.
   */
  retrieve(options?: RequestOptions): APIPromise<UsageRetrieveResponse> {
    return this._client.get('/v1/usage', options);
  }
}

export interface UsageRetrieveResponse {
  api_calls: UsageRetrieveResponse.APICalls;

  plan: UsageRetrieveResponse.Plan;

  usage: UsageRetrieveResponse.Usage;
}

export namespace UsageRetrieveResponse {
  export interface APICalls {
    /**
     * API calls in the current minute
     */
    current_minute: number;

    /**
     * Max API calls per minute
     */
    limit_per_minute: number;
  }

  export interface Plan {
    /**
     * API calls allowed per minute
     */
    api_calls_per_min: number;

    /**
     * Plan name
     */
    name: string;

    /**
     * Max posts per billing cycle
     */
    posts_limit: number;
  }

  export interface Usage {
    /**
     * Current billing cycle end
     */
    cycle_end: string;

    /**
     * When the cycle resets
     */
    cycle_resets_at: string;

    /**
     * Current billing cycle start
     */
    cycle_start: string;

    /**
     * Max posts per billing cycle
     */
    posts_limit: number;

    /**
     * Posts used this cycle
     */
    posts_used: number;
  }
}

export declare namespace Usage {
  export { type UsageRetrieveResponse as UsageRetrieveResponse };
}
