// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/sdk';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource whatsapp', () => {
  // Mock server tests are disabled
  test.skip('completeEmbeddedSignup: only required params', async () => {
    const responsePromise = client.connect.whatsapp.completeEmbeddedSignup({ code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('completeEmbeddedSignup: required and optional params', async () => {
    const response = await client.connect.whatsapp.completeEmbeddedSignup({ code: 'code' });
  });

  // Mock server tests are disabled
  test.skip('connectViaCredentials: only required params', async () => {
    const responsePromise = client.connect.whatsapp.connectViaCredentials({
      access_token: 'access_token',
      phone_number_id: 'phone_number_id',
      waba_id: 'waba_id',
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
  test.skip('connectViaCredentials: required and optional params', async () => {
    const response = await client.connect.whatsapp.connectViaCredentials({
      access_token: 'access_token',
      phone_number_id: 'phone_number_id',
      waba_id: 'waba_id',
    });
  });

  // Mock server tests are disabled
  test.skip('getSDKConfig', async () => {
    const responsePromise = client.connect.whatsapp.getSDKConfig();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
