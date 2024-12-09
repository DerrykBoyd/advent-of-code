const { readFileSync } = require("fs");

const input = readFileSync("./day5.txt", "utf8");

const [rules, pages] = input.split("\n\n");
const rulesArr = rules
  .split("\n")
  .map((r) => r.split("|"))
  .map((r) => r.map((n) => Number(n)));
const pagesArr = pages
  .split("\n")
  .map((p) => p.split(","))
  .map((p) => p.map((n) => Number(n)));

function part1() {
  let total = 0;
  for (const page of pagesArr) {
    if (isValid(page)) {
      total += page[Math.floor(page.length / 2)];
    }
  }
  console.log(total);
  return total;
}

// part1();

function part2() {
  let total = 0;
  for (const page of pagesArr) {
    if (!isValid(page)) {
      const valid = makeValid(page);
      total += valid[Math.floor(valid.length / 2)];
    }
  }
  console.log(total);
}

part2();

function makeValid(page) {
  const sorted = page.toSorted((a, b) => {
    for (const rule of rulesArr) {
      if (rule.includes(a) && rule.includes(b)) {
        return rule.indexOf(a) - rule.indexOf(b);
      }
    }
  });

  return sorted;
}

function isValid(page) {
  for (const rule of rulesArr) {
    const pages = page.filter((p) => rule.includes(p));
    if (pages.length !== 2) continue;
    if (pages[0] !== rule[0] || pages[1] !== rule[1]) {
      return false;
    }
  }

  return true;
}
