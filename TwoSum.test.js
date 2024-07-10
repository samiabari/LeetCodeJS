const twoSum  = require('./twoSum');

test('TwoSum([2, 7, 11, 15], 9) should return [0, 1]', () => {
  expect(twoSum ([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('TwoSum([3, 2, 4], 6) should return [1, 2]', () => {
  expect(twoSum ([3, 2, 4], 6)).toEqual([1, 2]);
});

test('TwoSum([3, 3], 6) should return [0, 1]', () => {
  expect(twoSum ([3, 3], 6)).toEqual([0, 1]);
});

test('TwoSum([2, 5, 5, 11], 10) should return [1, 2]', () => {
  expect(twoSum ([2, 5, 5, 11], 10)).toEqual([1, 2]);
});