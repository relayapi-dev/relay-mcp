// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from 'relay';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource follow', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.twitter.follow.create({
      account_id: 'account_id',
      target_user_id: 'target_user_id',
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
    const response = await client.twitter.follow.create({
      account_id: 'account_id',
      target_user_id: 'target_user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('unfollow: only required params', async () => {
    const responsePromise = client.twitter.follow.unfollow({
      account_id: 'account_id',
      target_user_id: 'target_user_id',
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
  test.skip('unfollow: required and optional params', async () => {
    const response = await client.twitter.follow.unfollow({
      account_id: 'account_id',
      target_user_id: 'target_user_id',
    });
  });
});
