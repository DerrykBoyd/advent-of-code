const { fileToArr } = require("../utils/utils");

/**
 * @param {string} input
 * @returns {number[]}
 */
async function solve(input) {
  const arr = await fileToArr("./2023/day3.txt");
  const data = arr.map((row) => row.split(""));

  const neighbors = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  const isSymbol = (char) => !!char && char !== "." && !/\d/.test(char);
  const isGear = (char) => char === "*";
  const parts = {};

  rows: for (let r = 0; r < data.length; r++) {
    let cur = "";
    cols: for (let c = 0; c < data[r].length; c++) {
      if (/\d/.test(data[r][c])) {
        cur += data[r][c];
        if (!/\d/.test(data[r][c + 1])) {
          cyphers: for (let k = 0; k < cur.length; k++) {
            neighbors: for (const [dr, dc] of neighbors) {
              const symbol = data[r + dr]?.[c + dc - k];
              if (isSymbol(symbol)) {
                const key = `${symbol},${r + dr},${c + dc - k}`;
                if (!parts[key]) parts[key] = [];
                parts[key].push(+cur);
                break cyphers;
              }
            }
          }
          cur = "";
        }
      }
    }
  }

  const sum = [0, 0];
  for (const key in parts) {
    sum[0] += parts[key].reduce((acc, cur) => acc + cur, 0);
    if (isGear(key[0]) && parts[key].length === 2) sum[1] += parts[key].reduce((acc, cur) => acc * cur, 1);
  }

  console.log(sum);
  return sum;
}

solve();

// 509048 too low
// 509122 too high
