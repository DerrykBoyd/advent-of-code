const { fileToArr } = require("../utils");

async function part1() {
  const inputArray = await fileToArr("./day1.txt");
  const total = inputArray.reduce((acc, curr, ind, arr) => {
    if (ind === 0) {
      return acc;
    } else if (curr > arr[ind - 1]) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  console.log(total);
}

part1();