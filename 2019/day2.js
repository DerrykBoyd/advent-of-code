let input =
  "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,19,6,23,2,13,23,27,1,9,27,31,2,31,9,35,1,6,35,39,2,10,39,43,1,5,43,47,1,5,47,51,2,51,6,55,2,10,55,59,1,59,9,63,2,13,63,67,1,10,67,71,1,71,5,75,1,75,6,79,1,10,79,83,1,5,83,87,1,5,87,91,2,91,6,95,2,6,95,99,2,10,99,103,1,103,5,107,1,2,107,111,1,6,111,0,99,2,14,0,0";
let inputArr = input.split(",");
let inputNums = inputArr.reduce((acc, cur) => {
  acc.push(parseInt(cur));
  return acc;
}, []);
console.log(inputNums[0]);
const part2Nums = [...inputNums];

inputNums[1] = 12;
inputNums[2] = 2;

function calc(arr) {
  for (let i = 0; i < arr.length; i += 4) {
    if (arr[i] === 1) {
      arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
    } else if (arr[i] === 2) {
      arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
    } else if (arr[i] === 99) {
      break;
    } else {
      console.log(`Unknown Opcode: ${arr[i]}`)
    }
  }
}

calc(inputNums);

console.log(`Part 1 = ${inputNums[0]}`);

let part2Temp = [...part2Nums];
let noun = 0;
let verb = 0;
let answer = 19690720;

while (noun < 100) {
  verb = 0;
  while (verb < 100) {
    part2Temp[1] = noun;
    part2Temp[2] = verb;
    calc(part2Temp);
    if ((part2Temp[0] === answer)) {
      console.log(`Part 2 = ${100 * noun + verb}`);
      break;
    }
    verb++;
    part2Temp = [...part2Nums];
  }
  if (part2Temp[0] === answer) {
    break;
  }
  noun++;
}
