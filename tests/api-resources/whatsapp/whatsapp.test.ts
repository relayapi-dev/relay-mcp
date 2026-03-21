// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/sdk';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource whatsapp', () => {
  // Mock server tests are disabled
  test.skip('bulkSend: only required params', async () => {
    const responsePromise = client.whatsapp.bulkSend({
      account_id: 'account_id',
      recipients: [{ phone: 'phone' }],
      template: { language: 'language', name: 'name' },
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
  test.skip('bulkSend: required and optional params', async () => {
    const response = await client.whatsapp.bulkSend({
      account_id: 'account_id',
      recipients: [
        {
          phone: 'phone',
          variables: { foo: 'string' },
        },
      ],
      template: {
        language: 'language',
        name: 'name',
        components: [{ type: 'header', parameters: [{ foo: 'bar' }] }],
      },
    });
  });

  // Mock server tests are disabled
  test.skip('listPhoneNumbers: only required params', async () => {
    const responsePromise = client.whatsapp.listPhoneNumbers({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPhoneNumbers: required and optional params', async () => {
    const response = await client.whatsapp.listPhoneNumbers({ account_id: 'account_id' });
  });
});
