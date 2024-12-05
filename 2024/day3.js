import { readFileSync } from "fs";

const input = readFileSync("./day3.txt", "utf8");
const valid = new RegExp(/mul\((\d{1,3}),(\d{1,3})\)/g);

function part1() {
  const matches = input.matchAll(valid);
  let total = 0;

  for (const match of matches) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const res = a * b;
    total += res;
  }

  console.log(total);
}

// part1();

function part2() {
  const parts = input.split("don't()");
  const [first, ...rest] = parts;
  let total = 0;
  const firstMatches = first.matchAll(valid);
  for (const match of firstMatches) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const res = a * b;
    total += res;
  }

  for (const part of rest) {
    if (!part.includes("do()")) {
      continue;
    }
    const doIndex = part.indexOf("do()");
    const afterDo = part.slice(doIndex);
    const matches = afterDo.matchAll(valid);
    for (const match of matches) {
      const a = Number(match[1]);
      const b = Number(match[2]);
      const res = a * b;
      total += res;
    }
  }
  console.log(total);
}

part2();
