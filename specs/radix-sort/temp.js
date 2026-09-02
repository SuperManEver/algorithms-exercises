//  [0, 1]

function digitCount(number) {
  let count = 0;
  let result = number;

  if (number === 0) {
    return 1;
  }

  while (result > 0) {
    console.log('TEMP: ', result, count);

    result = Math.floor(result / 10);
    count++;
  }

  return count;
}

console.log('RESULT: ', digitCount(0));
