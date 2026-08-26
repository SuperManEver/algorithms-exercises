/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order


  [1, 5, 4, 2, 3]

  Are 1 and 5 out of order? No.
  Are 5 and 4 out of order? Yes. Swap.

  [1, 4, 5, 2, 3]

  Are 5 and 2 out of order? Yes. Swap.



  i -> 1
  j -> 6

  temp -> 3

  nums[i] -> 10
  nums[j] -> 5

 [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
 [5, 10, 3, 8, 2, 6, 4, 7, 9, 1]
 [3, 10, 5, 8, 2, 6, 4, 7, 9, 1]
 [2, 10, 5, 8, 3, 6, 4, 7, 9, 1]
 [1, 2, 10, 8, 5, 6, 4, 7, 9, 3]
*/

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] >= nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }

    console.log('step: ', nums);
  }

  return nums;
}

// unit tests
// do not modify the below code
test.skip('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  console.log('initial: ', nums);

  const sortedNums = bubbleSort(nums);

  console.log('result: ', sortedNums);

  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
