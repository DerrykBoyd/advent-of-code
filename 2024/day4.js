import { readFileSync } from "fs";

const input = readFileSync("./day4.txt", "utf8");

function part1() {
  const valid1 = new RegExp(/XMAS/g);
  const valid2 = new RegExp(/SAMX/g);
  let lines = input.split("\n");
  const horizontal = lines.join(" - ");
  let vertical = "";
  let leftColumns = Array.from({ length: lines[0].length }).fill([]);
  let rightColumns = Array.from({ length: lines[0].length }).fill([]);

  for (let i = 0; i < lines[0].length; i++) {
    leftColumns[i] += "".padStart(i, " ");
    rightColumns[i] += "".padStart(lines[0].length - i, " ");
    vertical += " - ";
    for (let j = 0; j < lines.length; j++) {
      vertical += lines[j][i];
      leftColumns[i] += lines[j][i];
      rightColumns[i] += lines[j][i];
    }
    leftColumns[i] += "".padEnd(lines[0].length - i, " ");
    rightColumns[i] += "".padEnd(i, " ");
  }

  let diagonalRight = "";
  let diagonalLeft = "";

  for (let i = 0; i < rightColumns[0].length; i++) {
    for (let j = 0; j < rightColumns.length; j++) {
      diagonalRight += rightColumns[j][i];
      diagonalLeft += leftColumns[j][i];
    }
  }

  let final = `${horizontal} - ${vertical} - ${diagonalRight} - ${diagonalLeft}`;
  const matches1 = final.matchAll(valid1);
  const matches2 = final.matchAll(valid2);
  console.log([...matches1, ...matches2].length);
}

// part1();

function part2() {
  // get all 3x3 squares
  let lines = input.split("\n");
  let squares = [];
  for (let i = 0; i < lines.length - 2; i++) {
    for (let j = 0; j < lines[i].length - 2; j++) {
      let square = "";
      for (let k = 0; k < 3; k++) {
        square += lines[i + k].slice(j, j + 3);
      }
      if (isValidSquare(square)) squares.push(square);
    }
  }
  console.log(squares.length);
}

function isValidSquare(square) {
  let valid = new RegExp(/MAS|SAM/g);
  return `${square[0]}${square[4]}${square[8]}`.match(valid) && `${square[2]}${square[4]}${square[6]}`.match(valid);
}

part2();
