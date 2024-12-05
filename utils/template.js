const { fileToArr } = require("../utils/utils");

async function main() {
  const arr = await fileToArr("./2023/day3.txt");
  console.log(arr);
}

main();
