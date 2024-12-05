const { readFileSync } = require("fs");

const input = readFileSync("./day2.txt", "utf8");
const arr = input.split("\n");

let safe = 0;

safeCheck: for (let i = 0; i < arr.length; i++) {
  let entry = arr[i];
  entry = entry.split(" ").map((el) => Number(el));
  let isSafe = determineIsSafe(entry);
  if (!isSafe) {
    if (subCheck(entry)) safe++;

    continue safeCheck;
  }

  safe++;
}

function determineIsSafe(entry) {
  let asc = entry[0] > entry[1] ? false : true;
  let isSafe = true;
  for (let j = 0; j < entry.length - 1; j++) {
    if (entry[j] === entry[j + 1]) isSafe = false;
    if (Math.abs(entry[j] - entry[j + 1]) > 3) isSafe = false;
    if (asc && entry[j] > entry[j + 1]) {
      isSafe = false;
    } else if (!asc && entry[j] < entry[j + 1]) {
      isSafe = false;
    }
  }
  return isSafe;
}

/**
 *
 * @param {number[]} entry
 * @returns
 */
function subCheck(entry) {
  // get all variations of the entry with one number removed
  for (let i = 0; i < entry.length; i++) {
    let sub = entry.slice(0, i).concat(entry.slice(i + 1));
    if (determineIsSafe(sub)) {
      return true;
    }
  }
  return false;
}

console.log("safe", safe);
