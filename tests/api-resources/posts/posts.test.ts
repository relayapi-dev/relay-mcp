// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/mcp';

const client = new Relay({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource posts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.posts.create({ scheduled_at: 'now', targets: ['string'] });
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
    const response = await client.posts.create({
    scheduled_at: 'now',
    targets: ['string'],
    content: 'content',
    cross_post_actions: [{
    action_type: 'repost',
    target_account_id: 'target_account_id',
    content: 'content',
    delay_minutes: 0,
  }],
    idea_id: 'idea_id',
    media: [{ url: 'https://example.com', type: 'image' }],
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

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.posts.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.posts.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.posts.update('id', {
    content: 'content',
    media: [{ url: 'https://example.com', type: 'image' }],
    notes: 'notes',
    recycling: {
    gap: 1,
    gap_freq: 'day',
    start_date: '2019-12-27T18:11:19.117Z',
    content_variations: ['string'],
    enabled: true,
    expire_count: 1,
    expire_date: '2019-12-27T18:11:19.117Z',
  },
    scheduled_at: 'now',
    target_options: { foo: { foo: 'bar' } },
    targets: ['string'],
    timezone: 'timezone',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.posts.list();
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
    await expect(client.posts.list({
    account_id: 'account_id',
    cursor: 'cursor',
    from: '2019-12-27T18:11:19.117Z',
    include: 'include',
    include_external: 'true',
    limit: 1,
    status: 'draft',
    to: '2019-12-27T18:11:19.117Z',
    workspace_id: 'workspace_id',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Relay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.posts.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bulkCreate: only required params', async () => {
    const responsePromise = client.posts.bulkCreate({ posts: [{ scheduled_at: 'now', targets: ['string'] }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bulkCreate: required and optional params', async () => {
    const response = await client.posts.bulkCreate({ posts: [{
    scheduled_at: 'now',
    targets: ['string'],
    content: 'content',
    cross_post_actions: [{
    action_type: 'repost',
    target_account_id: 'target_account_id',
    content: 'content',
    delay_minutes: 0,
  }],
    idea_id: 'idea_id',
    media: [{ url: 'https://example.com', type: 'image' }],
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
  }] });
  });

  // Mock server tests are disabled
  test.skip('retry', async () => {
    const responsePromise = client.posts.retry('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unpublish', async () => {
    const responsePromise = client.posts.unpublish('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unpublish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.posts.unpublish('id', { platforms: ['string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Relay.NotFoundError);
  });
});
