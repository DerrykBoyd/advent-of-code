const utils = require("./utils.js");

utils.fileToArr("./day5.txt").then((res) => {
  console.time("part1");
  console.timeEnd("part1");
  console.time("part2");
  console.log("part2 = " + part2(res));
  console.timeEnd("part2");
});

function getID(pass) {
  let binaryPass = pass.replace(/F|L/g, '0').replace(/B|R/g, '1');
  let row = binaryPass.slice(0, 7);
  let seat = binaryPass.slice(7);
  return parseInt(row, 2) * 8 + parseInt(seat, 2);
}

const part1 = (arr) => {
  let hightest = 0;
  for (let pass of arr) {
    let ID = getID(pass);
    if (ID > hightest) hightest = ID;
  }
  console.log({hightest})
};

const part2 = arr => {
  let IDs = [];
  let myPass = 0;
  for (let pass of arr) {
    IDs.push(getID(pass));
  }
  IDs.sort((a, b) => a - b);
  for (let [i, ID] of IDs.entries()) {
    if (IDs[i+1] && IDs[i+1] - ID !== 1)myPass = ID+1;
  }
  return myPass;
}
