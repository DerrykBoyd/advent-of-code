import { readFileSync } from "fs";

const input = readFileSync("./day7.txt", "utf8");

function getPermutations(operators) {
  if (operators.length === 0) return [[]];
  const first = operators[0];
  const rest = getPermutations(operators.slice(1));
  const result = [];
  for (const perm of rest) {
    result.push([first, ...perm]);
    result.push(["*", ...perm]);
    result.push(["||", ...perm]);
  }
  return result;
}

function canSolve(result, numbers) {
  const operators = Array.from({ length: numbers.length - 1 }).fill("+");
  const permutations = getPermutations(operators);
  for (const permutation of permutations) {
    if (evaluate(numbers, permutation) === result) {
      return true;
    }
  }
  return false;
}

function evaluate(numbers, operators) {
  let result;
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      if (result === undefined) {
        result = numbers[i] + numbers[i + 1];
      } else {
        result += numbers[i + 1];
      }
    } else if (operators[i] === "*") {
      if (result === undefined) {
        result = numbers[i] * numbers[i + 1];
      } else {
        result *= numbers[i + 1];
      }
    } else if (operators[i] === "||") {
      if (result === undefined) {
        result = Number(`${numbers[i]}${numbers[i + 1]}`);
      } else {
        result = Number(`${result}${numbers[i + 1]}`);
      }
    }
  }
  return result;
}

// part1
const lines = input.split("\n");
let count = 0;
for (const line of lines) {
  let [target, numbers] = line.split(": ");
  target = Number(target);
  if (canSolve(target, numbers.split(" ").map(Number))) {
    count += target;
  }
}
console.log(count);
