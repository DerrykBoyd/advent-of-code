const utils = require("./utils");

utils.fileToArr("./day7.txt").then((res) => {
  console.log(res[0]);
  console.log(res.length);
  part1(res);
  part2(res);
});

function findBags(bag, arr) {
  const regex = new RegExp(`(?<!^)${bag}`);
  let result = [];
  arr.forEach((entry) => {
    if (entry.match(regex)) {
      result.push(entry.match(/^.+?(?=bag)/)[0]);
    }
  });
  return result;
}

function part1(arr) {
  let finalBags = [];
  arr.forEach((bag) => {
    if (bag.match(/(?<!^)shiny gold bag/)) {
      finalBags.push(bag.match(/^.+?(?=bag)/)[0]);
    }
  });
  for (let i = 0; i < finalBags.length; i++) {
    finalBags.push(...findBags(finalBags[i], arr));
  }
  let unique = [...new Set(finalBags)];
  console.log({ count: unique.length });
}

function getNumOfBags(mult, bag, arr) {
  let add = 0;
  let regex = new RegExp(`^${bag}`);
  let newBags = [];
  arr.forEach((entry) => {
    if (entry.match(regex)) {
      let bags = entry.match(/\d.+?(?=bag)/g);
      if (!bags) return { newbags: [], add: 0 };
      newBags.push(...bags);
      bags.forEach((match) => (add += mult * parseInt(match[0])));
    }
  });
  return { newBags, add };
}

function part2(arr) {
  const rules = {};
  arr.forEach((line) => {
    const re1 = /(\w+ \w+) bags contain/;
    const re2 = /(\d+) (\w+ \w+) bags?/g;
    let match = re1.exec(line);
    const current = match[1];
    rules[current] = [];

    const children = line.substr(match[0].length);
    while ((match = re2.exec(children))) {
      rules[current].push([match[2], +match[1]]);
    }
  });

  function getFor(type) {
    let count = 0;
    if (rules[type] && rules[type].length > 0) {
      rules[type].forEach(([t, num]) => {
        count += num + getFor(t) * num;
      });
    }
    return count;
  }

  console.log(getFor("shiny gold"));
}
