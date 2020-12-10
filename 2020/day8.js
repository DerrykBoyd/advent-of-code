const utils = require("./utils");

utils.fileToArr("./day8.txt").then((res) => {
  let part1Result = part1(res);
  console.log({part1Result});
  let part2Result = part2(res);
  console.log({part2Result});
});

function part1(arr) {
  let executed = [];
  let twice = false;
  let acc = 0;
  let cur = 0;
  while (!twice) {
    let [op, num] = arr[cur].split(' ');
    num = parseInt(num);
    if (executed.includes(cur)) {
      twice = true;
      continue;
    }
    executed.push(cur);
    if (op === 'nop') {
      cur++;
      continue;
    }
    if (op === 'jmp') {
      cur += num;
      continue;
    }
    if (op === 'acc') {
      acc += num;
      cur ++;
      continue;
    }
  }
  return acc;
}

function checkOps(newArr) {
  let executed = [];
  let twice = false;
  let acc = 0;
  let cur = 0;
  while (!twice && cur < newArr.length) {
    let [op, num] = newArr[cur].split(' ');
    num = parseInt(num);
    if (executed.includes(cur)) {
      twice = true;
      continue;
    }
    executed.push(cur);
    if (op === 'nop') {
      cur++;
      continue;
    }
    if (op === 'jmp') {
      cur += num;
      continue;
    }
    if (op === 'acc') {
      acc += num;
      cur ++;
      continue;
    }
  }
  if (twice) return false;
  return {acc, cur, length: newArr.length};
}

function part2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let [op, num] = arr[i].split(' ');
    let newArr = [...arr];
    if (op === 'nop') {
      newArr[i] = `jmp ${num}`;
      let check = checkOps(newArr);
      if (check) return check;
    }
    if (op === 'jmp') {
      newArr[i] = `nop ${num}`;
      let check = checkOps(newArr);
      if (check) return check;
    }
  }
}
