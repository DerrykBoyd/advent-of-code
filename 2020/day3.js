const utils = require("./utils.js");

utils.fileToArr("./day3.txt").then((res) => {
  console.time("part1");
  console.log(sledding(res, 3, 1));
  console.timeEnd("part1");
  console.time("part2");
  console.log(getPart2(res));
  console.timeEnd("part2");
});

function sledding(arr, right, down) {
  let trees = 0;
  let pos = 0;
  let width = arr[0].length;
  for (let i = 0; i < arr.length; i += down) {
    let line = arr[i];
    if (line[pos] === "#") trees++;
    pos += right;
    if (pos >= width) pos = pos % width;
  }
  return trees;
}

function getPart2(arr) {
  return (
    sledding(arr, 1, 1) *
    sledding(arr, 3, 1) *
    sledding(arr, 5, 1) *
    sledding(arr, 7, 1) *
    sledding(arr, 1, 2)
  );
}
