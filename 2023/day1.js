const { get } = require("http");
const utils = require("../utils/utils");

console.log("hello 2023");

async function main() {
  const arr = await utils.fileToArr("./2023/day1.txt");
  let total = 0;
  for (const string of arr) {
    const allDigits = string.replaceAll(/\D/g, "");
    const firstDigit = allDigits[0];
    const lastDigit = allDigits[allDigits.length - 1];
    console.log(firstDigit + "" + lastDigit);
    total += parseInt(firstDigit + "" + lastDigit);
  }
  console.log(total);
}

// convert to arr
const numberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const test2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
  "eighthree",
  "sevenine",
];

async function main2() {
  const arr = await utils.fileToArr("./2023/day1.txt");
  // const arr = test2;
  let total = 0;
  for (const string of arr) {
    const firstNumber = string.match(/(one|two|three|four|five|six|seven|eight|nine|[1-9])/)[0];
    const lastNumber = getLastMatch(string);
    console.log(string, numberMap[firstNumber] + "" + numberMap[lastNumber]);
    total += parseInt(numberMap[firstNumber] + "" + numberMap[lastNumber]);
  }
  console.log(total);
}

function getLastMatch(string) {
  for (let i = string.length; i >= 0; i--) {
    const match = string.slice(i).match(/(one|two|three|four|five|six|seven|eight|nine|[1-9])/)?.[0];
    if (match) {
      return match;
    }
  }
}

// main();
main2();
