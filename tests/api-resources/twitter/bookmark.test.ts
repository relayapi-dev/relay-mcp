// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/api';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bookmark', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.twitter.bookmark.create({
      account_id: 'account_id',
      tweet_id: 'tweet_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.twitter.bookmark.create({ account_id: 'account_id', tweet_id: 'tweet_id' });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.twitter.bookmark.remove({
      account_id: 'account_id',
      tweet_id: 'tweet_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('remove: required and optional params', async () => {
    const response = await client.twitter.bookmark.remove({ account_id: 'account_id', tweet_id: 'tweet_id' });
  });
});
