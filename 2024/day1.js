const { readFileSync } = require("fs");

const input = readFileSync("./day1.txt", "utf8");
const arr = input.split("\n");
const [left, right] = arr.reduce(
  (acc, cur) => {
    const [l, r] = cur.split("   ");
    acc[0].push(Number(l));
    acc[1].push(Number(r));
    return acc;
  },
  [[], []]
);

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let total = 0;
let part2 = 0;

for (let i = 0; i < left.length; i++) {
  total += Math.abs(left[i] - right[i]);
  const app = right.filter((num) => num === left[i]);
  part2 += app.length * left[i];
}

console.log(total);
console.log(part2);
