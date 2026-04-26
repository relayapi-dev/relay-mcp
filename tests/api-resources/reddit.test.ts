// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/mcp';

const client = new Relay({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource reddit', () => {
  // Mock server tests are disabled
  test.skip('getFeed: only required params', async () => {
    const responsePromise = client.reddit.getFeed({ account_id: 'account_id', subreddit: 'subreddit' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getFeed: required and optional params', async () => {
    const response = await client.reddit.getFeed({
    account_id: 'account_id',
    subreddit: 'subreddit',
    cursor: 'cursor',
    from: '2019-12-27T18:11:19.117Z',
    limit: 1,
    sort: 'hot',
    time: 'hour',
    to: '2019-12-27T18:11:19.117Z',
  });
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.reddit.search({ account_id: 'account_id', query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.reddit.search({
    account_id: 'account_id',
    query: 'query',
    cursor: 'cursor',
    from: '2019-12-27T18:11:19.117Z',
    limit: 1,
    sort: 'relevance',
    subreddit: 'subreddit',
    time: 'hour',
    to: '2019-12-27T18:11:19.117Z',
  });
  });
});
