const utils  = require("./utils.js");

utils.fileToArr("./day1.txt").then((res) => {
  console.time('part1');
  console.log('part1 = ' + part1(res));
  console.timeEnd('part1');
  console.time('part2');
  console.log('part2 = ' + part2(res));
  console.timeEnd('part2');

});

function checkTotal(total) {
  if ((total === 2020)) return true;
  return false;
}

function part1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;
      let total = parseInt(arr[i]) + parseInt(arr[j]);
      let check = checkTotal(total)
      if (check) return arr[i]*arr[j];
    }
  }
}

function part2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let y = 0; y < arr.length; y++) {
        if (i === j || i === y || j === y) continue;
        let total = parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[y]);
        let check = checkTotal(total);
        if (check) return arr[i] * arr[j] * arr[y];
      }
    }
  }
}

