import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://gorest.co.in/public/',
    extraHTTPHeaders: {
      Authorization: 'Bearer 55cae6a026ab9edd17773454178e0b68806ff17c080de6572f0d0e91f1f304b3',
    },
  },
});
