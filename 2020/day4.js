const utils = require("./utils.js");

const fields = ["byr:", "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"];

utils.groupsToArr("./day4.txt").then((res) => {
  console.log(res[0]);
  let numValid = 0;
  console.time("part1");
  for (let pp of res) if (checkValidPP(pp)) numValid++;
  console.log(`Part 1 Valid ${numValid}`);
  console.timeEnd("part1");
  numValid = 0;
  console.time("part2");
  for (let pp of res) if (checkValidPart2(pp)) numValid++;
  let test = false;
  test = checkValidPart2("cid:91 hcl:#623a2fbyr:1996 eyr:2028 pid:181384347 hgt:175cmiyr:2020");
  console.log(`Part 2 Valid ${numValid}`);
  console.timeEnd("part2");
});

const checkValidPP = (str) => {
  for (let field of fields) {
    if (!str.includes(field)) return false;
  }
  return true;
};

const checkValidPart2 = (str) => {
  return (
    checkValidYear("byr", str, 1920, 2002) &&
    checkValidYear("iyr", str, 2010, 2020) &&
    checkValidYear("eyr", str, 2020, 2030) &&
    checkHgt(str) &&
    checkHair(str) &&
    checkEye(str) &&
    checkPid(str)
  );
};

const checkValidYear = (field, str, start, end) => {
  let regex = new RegExp(`(?<=${field}:)\\d{4}`);
  let byr = parseInt(str.match(regex));
  if (byr && byr >= start && byr <= end) return true;
  return false;
};

const checkHgt = (str) => {
  let regex = new RegExp(`(\\d{2,3})(?=cm|in)(?<=\\d{2,3})(cm|in)`);
  let match = str.match(regex);
  let height = parseInt(match?.[1]);
  if (match?.[2] === "cm" && height >= 150 && height <= 193) return true;
  if (match?.[2] === "in" && height >= 59 && height <= 76) return true;
  return false;
};

const checkHair = (str) => {
  let regex = /hcl:#([0-9a-f]){6}/gi;
  let match = str.match(regex);
  if (str.match(regex)) return true;
  return false;
};

const checkEye = (str) => {
  const colours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  let count = 0;
  for (let colour of colours) {
    if (str.includes(`ecl:${colour}`)) count ++;
  }
  if (count === 1) return true;
  return false;
};

const checkPid = (str) => {
  const regex = new RegExp(`pid:\\d{9}\D?`);
  if (str.match(regex)) return true;
  return false;
}
