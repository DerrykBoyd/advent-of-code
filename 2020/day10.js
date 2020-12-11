const utils = require("./utils");

utils.fileToArr("./day10.txt").then((res) => {
  res = res.map((el) => parseInt(el));
  res.sort((a, b) => a - b);
  let part1Result = part1(res);
  console.log({ part1Result });
  // let part2Result = part2(res);
  // console.log({part2Result});
});

function part1(arr) {
  let ones = 0;
  let threes = 0;
  console.log(arr);
  arr.forEach((cur, ind) => {
    if (ind === 0) {
      cur === 1 ? ones++ : threes++;
    }
    if (ind > 0) {
      if (cur - arr[ind - 1] === 1) {
        ones++;
      }
      if (cur - arr[ind - 1] === 3) {
        threes++;
      }
    }
  });
  console.log({ ones, threes });
  return ones * (threes + 1);
}

function part2(arr) {
  
}
