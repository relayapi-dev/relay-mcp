// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/mcp';

const client = new Relay({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource telegram', () => {
  // Mock server tests are disabled
  test.skip('connectDirectly: only required params', async () => {
    const responsePromise = client.connect.telegram.connectDirectly({ chat_id: 'chat_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('connectDirectly: required and optional params', async () => {
    const response = await client.connect.telegram.connectDirectly({ chat_id: 'chat_id' });
  });

  // Mock server tests are disabled
  test.skip('initiateConnection', async () => {
    const responsePromise = client.connect.telegram.initiateConnection();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pollConnectionStatus: only required params', async () => {
    const responsePromise = client.connect.telegram.pollConnectionStatus({ code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pollConnectionStatus: required and optional params', async () => {
    const response = await client.connect.telegram.pollConnectionStatus({ code: 'code' });
  });
});
