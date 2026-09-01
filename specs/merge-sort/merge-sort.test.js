/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const pivot = Math.floor(nums.length / 2);

  const left = nums.slice(0, pivot);
  const right = nums.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
};

// unit tests
// do not modify the below code
test.skip('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);

  console.log('RESULT: ', ans);

  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

/*
  [1, 3, 5]
  [2, 4, 6]

*/
function mergeLists(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArrayk(arr2)) {
    throw new Error('both arguments should be arrays of numbers');
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let result = [];

  while (arr1.length || arr2.length) {
    if (arr1.length === 0) {
      result = result.concat(arr2);

      break;
    } else if (arr2.length === 0) {
      result = result.concat(arr1);

      break;
    }

    if (arr1[0] <= arr2[0]) {
      result.push(arr1[0]);

      // I can do 'shift' for that
      arr1 = arr1.slice(1);
    } else {
      result.push(arr2[0]);

      arr2 = arr2.slice(1);
    }
  }

  return result;
}

function mergeRec(arr1, arr2) {
  if (arr1.length <= 0 && arr2.length <= 0) {
    return [];
  }

  if (arr1.length <= 0) {
    return arr2;
  }

  if (arr2.length <= 0) {
    return arr1;
  }

  const [n1, ...rest1] = arr1;
  const [n2, ...rest2] = arr2;

  if (n1 <= n2) {
    return [n1].concat(mergeRec(rest1, arr2));
  } else {
    return [n2].concat(mergeRec(arr1, rest2));
  }
}

test.skip('test merge arrays helper funciton', function () {
  const xs1 = [1, 3, 5];
  const xs2 = [2, 4, 6];

  // const result = [1, 2, 3, 4, 5, 6];
  const ans = mergeLists(xs1, xs2);

  expect(ans).toEqual([1, 2, 3, 4, 5, 6]);
});

test.skip('test merge arrays helper function', function () {
  const xs1 = [6, 7];
  const xs2 = [1, 2, 3];

  // const result = [1, 2, 3, 4, 5, 6];
  const ans = mergeLists(xs1, xs2);

  console.log('RESULT: ', ans);

  expect(ans).toEqual([1, 2, 3, 6, 7]);
});
