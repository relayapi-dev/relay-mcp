// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/mcp';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource validate', () => {
  // Mock server tests are disabled
  test.skip('checkPostLength: only required params', async () => {
    const responsePromise = client.tools.validate.checkPostLength({ content: 'content' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('checkPostLength: required and optional params', async () => {
    const response = await client.tools.validate.checkPostLength({ content: 'content' });
  });

  // Mock server tests are disabled
  test.skip('retrieveSubreddit: only required params', async () => {
    const responsePromise = client.tools.validate.retrieveSubreddit({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveSubreddit: required and optional params', async () => {
    const response = await client.tools.validate.retrieveSubreddit({ name: 'name' });
  });

  // Mock server tests are disabled
  test.skip('validateMedia: only required params', async () => {
    const responsePromise = client.tools.validate.validateMedia({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('validateMedia: required and optional params', async () => {
    const response = await client.tools.validate.validateMedia({ url: 'https://example.com' });
  });

  // Mock server tests are disabled
  test.skip('validatePost: only required params', async () => {
    const responsePromise = client.tools.validate.validatePost({ scheduled_at: 'now', targets: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('validatePost: required and optional params', async () => {
    const response = await client.tools.validate.validatePost({
      scheduled_at: 'now',
      targets: ['string'],
      content: 'content',
      cross_post_actions: [
        {
          action_type: 'repost',
          target_account_id: 'target_account_id',
          content: 'content',
          delay_minutes: 0,
        },
      ],
      idea_id: 'idea_id',
      media: [
        {
          url: 'https://example.com',
          thumbnail: 'thumbnail',
          type: 'image',
        },
      ],
      recycling: {
        gap: 1,
        gap_freq: 'day',
        start_date: '2019-12-27T18:11:19.117Z',
        content_variations: ['string'],
        enabled: true,
        expire_count: 1,
        expire_date: '2019-12-27T18:11:19.117Z',
      },
      shorten_urls: true,
      skip_signature: true,
      target_options: { foo: { foo: 'bar' } },
      template_id: 'template_id',
      template_variables: { foo: 'string' },
      timezone: 'timezone',
      workspace_id: 'workspace_id',
    });
  });
});
