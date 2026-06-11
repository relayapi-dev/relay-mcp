// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Media extends APIResource {
  /**
   * Get media details
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MediaRetrieveResponse> {
    return this._client.get(path`/v1/media/${id}`, options);
  }

  /**
   * Delete media
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/media/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate a pre-signed URL for direct upload to R2. The client can PUT the file
   * to the returned URL.
   */
  getPresignURL(
    body: MediaGetPresignURLParams,
    options?: RequestOptions,
  ): APIPromise<MediaGetPresignURLResponse> {
    return this._client.post('/v1/media/presign', { body, ...options });
  }

  /**
   * Upload a raw file body. Pass the filename as a query parameter and set the
   * Content-Type header to the file's actual MIME type (e.g. image/png, video/mp4).
   * The Content-Type is validated against an allowlist; application/octet-stream is
   * rejected.
   */
  upload(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: MediaUploadParams,
    options?: RequestOptions,
  ): APIPromise<MediaUploadResponse> {
    const { filename } = params;
    return this._client.post('/v1/media/upload', {
      body: body,
      query: { filename },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export interface MediaRetrieveResponse {
  /**
   * Media ID
   */
  id: string;

  /**
   * Upload timestamp
   */
  created_at: string;

  /**
   * Original filename
   */
  filename: string;

  /**
   * MIME type
   */
  mime_type: string;

  /**
   * File size in bytes
   */
  size: number;

  /**
   * Public URL
   */
  url: string | null;

  /**
   * Duration in seconds (video/audio)
   */
  duration?: number | null;

  /**
   * Height in pixels
   */
  height?: number | null;

  /**
   * Width in pixels
   */
  width?: number | null;
}

export interface MediaGetPresignURLResponse {
  /**
   * Seconds until the upload URL expires
   */
  expires_in: number;

  /**
   * Pre-signed PUT URL for uploading
   */
  upload_url: string;

  /**
   * Public URL after upload completes
   */
  url: string;
}

export interface MediaUploadResponse {
  /**
   * Original filename
   */
  filename: string;

  /**
   * File size in bytes
   */
  size: number;

  /**
   * MIME type of the uploaded file
   */
  type: string;

  /**
   * Public URL of the uploaded file
   */
  url: string;
}

export interface MediaGetPresignURLParams {
  /**
   * MIME type of the file to upload
   */
  content_type: string;

  /**
   * Desired filename
   */
  filename: string;
}

export interface MediaUploadParams {
  /**
   * Query param: Original filename
   */
  filename: string;
}

export declare namespace Media {
  export {
    type MediaRetrieveResponse as MediaRetrieveResponse,
    type MediaGetPresignURLResponse as MediaGetPresignURLResponse,
    type MediaUploadResponse as MediaUploadResponse,
    type MediaGetPresignURLParams as MediaGetPresignURLParams,
    type MediaUploadParams as MediaUploadParams,
  };
}
