// question 1: print how many times the character occurs string
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'compressedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING message as parameter.
 */

function compressedString(message) {
  // Write your code here
  char = message.split("");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const message = readLine();

  const result = compressedString(message);

  ws.write(result + "\n");

  ws.end();
}
