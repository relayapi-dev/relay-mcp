// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/mcp';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comments', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.inbox.comments.retrieve('post_id');
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
      client.inbox.comments.retrieve(
        'post_id',
        {
          account_id: 'account_id',
          cursor: 'cursor',
          limit: 1,
          platform: 'twitter',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.inbox.comments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inbox.comments.list(
        {
          account_id: 'account_id',
          cursor: 'cursor',
          limit: 1,
          platform: 'twitter',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.inbox.comments.delete('comment_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inbox.comments.delete(
        'comment_id',
        { account_id: 'account_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('privateReply: only required params', async () => {
    const responsePromise = client.inbox.comments.privateReply('comment_id', {
      account_id: 'account_id',
      text: 'x',
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
  test.skip('privateReply: required and optional params', async () => {
    const response = await client.inbox.comments.privateReply('comment_id', {
      account_id: 'account_id',
      text: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('reply: only required params', async () => {
    const responsePromise = client.inbox.comments.reply('post_id', { account_id: 'account_id', text: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reply: required and optional params', async () => {
    const response = await client.inbox.comments.reply('post_id', {
      account_id: 'account_id',
      text: 'x',
      comment_id: 'comment_id',
    });
  });
});
