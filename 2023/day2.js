const { fileToArr } = require("../utils/utils");

const MAX_COLORS = {
  blue: 14,
  red: 12,
  green: 13,
};

async function main() {
  const arr = await fileToArr("./2023/day2.txt");
  let total = 0;
  for (const game of arr) {
    const gameNumber = parseInt(game.split(":")[0].replace(/[^0-9]/g, ""));
    const blues = game.match(/\d+ blue/g).map((blue) => blue.replace(/[^0-9]/g, ""));
    const maxBlue = Math.max(...blues);
    // if (maxBlue > MAX_COLORS.blue) {
    //   continue;
    // }
    const reds = game.match(/\d+ red/g).map((red) => red.replace(/[^0-9]/g, ""));
    const maxRed = Math.max(...reds);
    // if (maxRed > MAX_COLORS.red) {
    //   continue;
    // }
    const greens = game.match(/\d+ green/g).map((green) => green.replace(/[^0-9]/g, ""));
    const maxGreen = Math.max(...greens);
    // if (maxGreen > MAX_COLORS.green) {
    //   continue;
    // }
    total += maxBlue * maxRed * maxGreen;
  }
  console.log(total);
}

main();
