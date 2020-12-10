const utils = require("./utils");

utils.fileToArr("./day9.txt").then((res) => {
  res = res.map(el => parseInt(el));
  let part1Result = part1(res);
  console.log({part1Result});
  let part2Result = part2(res);
  console.log({part2Result});
});

function check(nums, sum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let num1 = nums[i];
      let num2 = nums[j];
      if (i === j) continue;
      if (nums[i] + nums[j] === sum) return false;
    }
  }
  return true;
}

function part1(arr) {
  let found = false;
  let index = 25;
  while (!found) {
    let nums = arr.slice(index - 25, index);
    found = check(nums, arr[index]);
    if (!found) index++;
  }
  return arr[index];
}

function findNums(arr) {
  let target = part1(arr);
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = arr[i];
    for (let j = i+1; j < arr.length; j++) {
      total += arr[j];
      if (total === target) {
        return {start: i, end: j}
      }
    }
  }
  return 'Not Found'
}

function part2(arr) {
  let {start, end} = findNums(arr);
  let newArr = arr.slice(start, end+1).sort((a,b) => a - b);
  return newArr[0] + newArr[newArr.length-1];
}