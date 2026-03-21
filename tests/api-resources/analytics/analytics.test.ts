// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/sdk';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.analytics.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.retrieve(
        {
          account_id: 'account_id',
          from_date: 'from_date',
          limit: 1,
          offset: 0,
          platform: 'twitter',
          post_id: 'post_id',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getBestTime', async () => {
    const responsePromise = client.analytics.getBestTime();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getBestTime: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.getBestTime(
        {
          account_id: 'account_id',
          from_date: 'from_date',
          platform: 'twitter',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getContentDecay: only required params', async () => {
    const responsePromise = client.analytics.getContentDecay({ post_id: 'post_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getContentDecay: required and optional params', async () => {
    const response = await client.analytics.getContentDecay({ post_id: 'post_id', days: 1 });
  });

  // Mock server tests are disabled
  test.skip('getPostTimeline: only required params', async () => {
    const responsePromise = client.analytics.getPostTimeline({ post_id: 'post_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPostTimeline: required and optional params', async () => {
    const response = await client.analytics.getPostTimeline({
      post_id: 'post_id',
      from_date: 'from_date',
      to_date: 'to_date',
    });
  });

  // Mock server tests are disabled
  test.skip('getPostingFrequency', async () => {
    const responsePromise = client.analytics.getPostingFrequency();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPostingFrequency: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.getPostingFrequency(
        {
          account_id: 'account_id',
          from_date: 'from_date',
          platform: 'twitter',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listDailyMetrics', async () => {
    const responsePromise = client.analytics.listDailyMetrics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listDailyMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.analytics.listDailyMetrics(
        {
          account_id: 'account_id',
          from_date: 'from_date',
          platform: 'twitter',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });
});
