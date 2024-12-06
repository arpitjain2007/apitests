import { test, expect} from '@playwright/test';
import { createUser } from '../fixtures/testData';

let userId: number; 

test.describe('Gorest API CRUD Operations', () => {

  test('Create a new user', async ({request}) => {
    const response = await request.post('v2/users', {
      data: createUser,
    });
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    userId = responseBody.id;
    expect(responseBody.name).toBe(createUser.name);
  });

  test('Read the created user', async ({request}) => {
    const response = await request.get(`v2/users/${userId}`);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.id).toBe(userId);
  });

  test('Update the user', async ({request}) => {
    const response = await request.put(`v2/users/${userId}`, {
      data: { 
        "status": "inactive" 
       },
    });
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.status).toBe('inactive');
  });

  test('Delete the user', async ({request}) => {
    const response = await request.delete(`v2/users/${userId}`);
    console.log(response.text());
    console.log(response.status());
    expect(response.ok()).toBeTruthy();

    const verifyResponse = await request.get(`v2/users/${userId}`);
    expect(verifyResponse.status()).toBe(404);
  });
});
