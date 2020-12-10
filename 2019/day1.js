const utils = require("../2020/utils.js");

utils.fileToArr("./day1.txt").then((res) => {
  part1(res);
  part2(res)
});

function part1(arr) {
  let total = 0;
  arr.forEach((i) => {
    total += calcFuel(i);
  });
  console.log(`Part 1 = ${total}`)
}

function part2(arr) {
  let total = 0;
  arr.forEach(i => {
    let res = calcFuel(i);
    total += res;
    while (res > 0) {
      res = calcFuel(res);
      if (res > 0) total += res;
    }
  })
  console.log(`Part 2 = ${total}`)
}

function calcFuel(num) {
  return Math.floor(num / 3) - 2;
}