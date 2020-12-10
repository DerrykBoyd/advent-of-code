const utils = require("./utils.js");

utils.groupsToArr("./day6.txt").then((res) => {
  part1(res);
});

utils.groupsToArrComma("./day6.txt").then((res) => {
  part2(res);
});

function part1(groups) {
  let total = 0;
  for (let group of groups) {
    total += String.prototype.concat(...new Set(group)).length;
  }
  console.log({ total });
}

function part2(groups) {
  let total = 0;
  for (let group of groups) {
    let groupArr = group.split(',').filter(el => el !== "");
    let subTotal = 0;
    for (let letter of groupArr[0]) {
      if (groupArr.every(person => person.includes(letter))) {
        subTotal++
      }
    }
    total += subTotal;
  }
  console.log(`Part 2: ${total}`)
}
