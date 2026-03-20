// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relay from '@relayapi/api';

const client = new Relay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contacts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.whatsapp.contacts.create({ account_id: 'account_id', phone: 'phone' });
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
    const response = await client.whatsapp.contacts.create({
      account_id: 'account_id',
      phone: 'phone',
      email: 'email',
      name: 'name',
      tags: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.whatsapp.contacts.retrieve('contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.whatsapp.contacts.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.whatsapp.contacts.list({
      account_id: 'account_id',
      cursor: 'cursor',
      limit: 1,
      search: 'search',
      tag: 'tag',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.whatsapp.contacts.delete('contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bulkOperations: only required params', async () => {
    const responsePromise = client.whatsapp.contacts.bulkOperations({
      account_id: 'account_id',
      action: 'add_tags',
      contact_ids: ['string'],
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
  test.skip('bulkOperations: required and optional params', async () => {
    const response = await client.whatsapp.contacts.bulkOperations({
      account_id: 'account_id',
      action: 'add_tags',
      contact_ids: ['string'],
      tags: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('import: only required params', async () => {
    const responsePromise = client.whatsapp.contacts.import({
      account_id: 'account_id',
      contacts: [{ phone: 'phone' }],
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
  test.skip('import: required and optional params', async () => {
    const response = await client.whatsapp.contacts.import({
      account_id: 'account_id',
      contacts: [
        {
          phone: 'phone',
          email: 'email',
          name: 'name',
          tags: ['string'],
        },
      ],
    });
  });
});
