const utils  = require("./utils.js");

utils.fileToArr("./day2.txt").then((res) => {
  console.time("part1");
  console.log("part1 = " + part1(res));
  console.timeEnd("part1");
  console.time("part2");
  console.log("part2 = " + part2(res));
  console.timeEnd("part2");
});

function checkValidPw(pw, letter, min, max) {
  count = Array.from(pw).filter((char) => char === letter).length;
  if (count < min || count > max) return false;
  return true;
}

function check2(pw, letter, pos1, pos2) {
  return (pw[pos1] === letter || pw[pos2] === letter) && pw[pos1] !== pw[pos2];
}

function part1(arr) {
  const validWords = arr.filter((entry) => {
    let minMax = entry.match(new RegExp(/[0-9]+/g));
    let letter = entry.match(new RegExp(/[a-z](?=:)/g))[0];
    let pw = entry.match(new RegExp(/[a-z]+(?!:)/g))[0];
    return checkValidPw(pw, letter, minMax[0], minMax[1]);
  });
  return validWords.length;
}

function part2(arr) {
  const validWords = arr.filter((entry) => {
    let positions = entry.match(new RegExp(/[0-9]+/g));
    let letter = entry.match(new RegExp(/[a-z](?=:)/g))[0];
    let pw = entry.match(new RegExp(/[a-z]+(?!:)/g))[0];
    return check2(pw, letter, positions[0] - 1, positions[1] - 1);
  });
  return validWords.length;
}
