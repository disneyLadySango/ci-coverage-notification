import { join } from '@/utils/str';

test('join str', () => {
  expect(join('1', '2', '3')).toBe('123');
});
