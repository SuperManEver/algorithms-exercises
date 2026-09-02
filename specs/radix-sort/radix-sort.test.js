/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

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

function getDigit(number, position) {
  if (number <= 0) {
    return 0;
  }

  return Math.floor(number / 10 ** position) % 10;
}

function radixSort(array) {
  let buckets = null;

  const maxDigits = mostDigitCount(array); // how much times we need to repeat algorithm
  let position = 0;

  while (position < maxDigits) {
    buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const digit = getDigit(item, position);

      buckets[digit].push(item);
    }

    array = buckets.flat();

    position++;
  }

  return array;
}

// unit tests
// do not modify the below code
describe('radix sort', function () {
  it('should sort correctly', () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });

  it('should sort 99 random numbers correctly', () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
