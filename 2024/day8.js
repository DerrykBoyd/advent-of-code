import { readFileSync } from "fs";

const input = readFileSync("./day8.txt", "utf8");

const lines = input.split("\n");

console.log(lines);

const antiNodes = new Set();
const allAntiNodes = new Set();

function findPairs(y, x) {
  let char = lines[y][x];
  if (char === ".") {
    return;
  }
  let matches = new Set();
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === char) {
        if (i === y && j === x) {
          continue;
        }
        matches.add([i, j]);
        // part 1
        let antiNode = getAntiNode([y, x], [i, j]);
        if (antiNode) {
          antiNodes.add(antiNode);
        }
        // part 2
        let allNodes = getAntiNodes([y, x], [i, j]);
        allNodes.forEach((node) => allAntiNodes.add(node));
      }
    }
  }
}

function getAntiNode([y, x], [y2, x2]) {
  // 1,8 and 2,5 should be 3,2
  // 4,4 and 3,7 should be 2,10
  // 3,2 and 2,10 should be 1,18
  let dy = y2 - y;
  let dx = x2 - x;
  let antiY = y2 + dy;
  let antiX = x2 + dx;
  // only return if it's a valid node
  if (antiY < 0 || antiX < 0 || antiY >= lines.length || antiX >= lines[0].length) {
    return null;
  }
  return `${antiY},${antiX}`;
}

function getAntiNodes([y, x], [y2, x2]) {
  let dy = y2 - y;
  let dx = x2 - x;
  let antiY = y2 + dy;
  let antiX = x2 + dx;
  // return all points in the grid that are on the line
  let allAntiNodes = [`${y2},${x2}`, `${y},${x}`];
  while (antiY >= 0 && antiX >= 0 && antiY < lines.length && antiX < lines[0].length) {
    allAntiNodes.push(`${antiY},${antiX}`);
    antiY += dy;
    antiX += dx;
  }
  return allAntiNodes;
}

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    findPairs(i, j);
  }
}

console.log(antiNodes.size);
console.log(allAntiNodes.size);
