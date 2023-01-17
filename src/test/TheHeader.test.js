import TheHeader from '../components/TheHeader.vue';
import { expect } from 'vitest';

test('Mount the header', async () => {
  expect(TheHeader).toBeTruthy();
});
