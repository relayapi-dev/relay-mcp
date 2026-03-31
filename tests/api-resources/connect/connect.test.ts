// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from 'relay';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connect', () => {
  // Mock server tests are disabled
  test.skip('completeOAuthCallback: only required params', async () => {
    const responsePromise = client.connect.completeOAuthCallback('twitter', { code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('completeOAuthCallback: required and optional params', async () => {
    const response = await client.connect.completeOAuthCallback('twitter', {
      code: 'code',
      redirect_url: 'https://example.com',
    });
  });

  // Mock server tests are disabled
  test.skip('createBlueskyConnection: only required params', async () => {
    const responsePromise = client.connect.createBlueskyConnection({
      app_password: 'app_password',
      handle: 'handle',
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
  test.skip('createBlueskyConnection: required and optional params', async () => {
    const response = await client.connect.createBlueskyConnection({
      app_password: 'app_password',
      handle: 'handle',
    });
  });

  // Mock server tests are disabled
  test.skip('fetchPendingData: only required params', async () => {
    const responsePromise = client.connect.fetchPendingData({ token: 'token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('fetchPendingData: required and optional params', async () => {
    const response = await client.connect.fetchPendingData({ token: 'token' });
  });

  // Mock server tests are disabled
  test.skip('startOAuthFlow', async () => {
    const responsePromise = client.connect.startOAuthFlow('twitter');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('startOAuthFlow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connect.startOAuthFlow(
        'twitter',
        {
          headless: 'headless',
          method: 'method',
          redirect_url: 'https://example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });
});
