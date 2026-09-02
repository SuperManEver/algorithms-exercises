function getDigit(number, position) {
  if (number <= 0) {
    return 0;
  }

  return Math.floor(number / 10 ** position) % 10;
}

describe.skip('getDigit', () => {
  test.each([
    [5831, 0, 1],
    [5831, 1, 3],
    [5831, 2, 8],
    [5831, 3, 5],

    [94726, 0, 6],
    [94726, 1, 2],
    [94726, 2, 7],
    [94726, 3, 4],
    [94726, 4, 9],
  ])('getDigit(%i, %i) should return %i', (number, position, expected) => {
    expect(getDigit(number, position)).toBe(expected);
  });

  test('returns 0 when the requested position does not exist', () => {
    expect(getDigit(42, 2)).toBe(0);
    expect(getDigit(42, 5)).toBe(0);
  });

  test('handles zero', () => {
    expect(getDigit(0, 0)).toBe(0);
    expect(getDigit(0, 3)).toBe(0);
  });

  test('handles single-digit numbers', () => {
    expect(getDigit(7, 0)).toBe(7);
    expect(getDigit(7, 1)).toBe(0);
  });
});

function digitCount(number) {
  let count = 0;
  let result = number;

  if (number === 0) {
    return 1;
  }

  while (result > 0) {
    result = Math.floor(result / 10);
    count++;
  }

  return count;
}

describe.skip('digitCount', () => {
  test.each([
    [0, 1],
    [7, 1],
    [42, 2],
    [5831, 4],
    [94726, 5],
    // [100000, 6],
  ])('digitCount(%i) should return %i', (number, expected) => {
    expect(digitCount(number)).toBe(expected);
  });

  test('handles powers of 10 correctly', () => {
    expect(digitCount(10)).toBe(2);
    expect(digitCount(100)).toBe(3);
    expect(digitCount(1000)).toBe(4);
  });

  test('handles numbers just below powers of 10', () => {
    expect(digitCount(9)).toBe(1);
    expect(digitCount(99)).toBe(2);
    expect(digitCount(999)).toBe(3);
  });
});

function mostDigitCount(xs) {
  let largest = 0;

  for (let i = 0; i < xs.length; i++) {
    const pos = digitCount(xs[i]);

    if (pos >= largest) {
      largest = pos;
    }
  }

  return largest;
}

describe('mostDigitCount', () => {
  test.each([
    [[23, 4567, 1, 890, 42], 4],
    [[1, 2, 3, 4, 5], 1],
    [[10, 99, 100, 999], 3],
    [[7], 1],
    [[0], 1],
    [[0, 12, 345, 6789], 4],
  ])('mostDigitCount(%j) should return %i', (numbers, expected) => {
    expect(mostDigitCount(numbers)).toBe(expected);
  });

  test('returns 0 for an empty array', () => {
    expect(mostDigitCount([])).toBe(0);
  });

  test('handles multiple numbers with the same maximum digit count', () => {
    expect(mostDigitCount([1234, 9999, 42, 7])).toBe(4);
  });
});
