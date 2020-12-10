const fs = require("fs");
const readLine = require("readline");

exports.fileToArr = async function (file) {
  const fileStream = fs.createReadStream(file);
  let arr = [];
  const rl = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) arr.push(line);
  return arr;
};

exports.groupsToArr = async function (file) {
  const fileStream = fs.createReadStream(file);
  let arr = [];
  const rl = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  let str = "";
  for await (const line of rl) {
    if (line !== "") {
      str += line;
      continue;
    }
    arr.push(str);
    str = "";
  }
  if (str) arr.push(str);
  return arr;
};

exports.groupsToArrComma = async function (file) {
  const fileStream = fs.createReadStream(file);
  let arr = [];
  const rl = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  let str = "";
  for await (const line of rl) {
    if (line !== "") {
      str += line.trim() + ",";
      continue;
    }
    str = str.trim().replace(/,$/gm, "");
    arr.push(str);
    str = "";
  }
  if (str) arr.push(str);
  return arr;
};
