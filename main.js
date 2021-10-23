#!/usr/bin/env node
//"stat" translated into "node main.js"
//console.log(process.argv); //argument vector
const lib = require("./lib");
if (process.argv.length <= 3){
  console.log("Insufficient parameter!"); 
  process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv.slice(3, process.argv.length).map((n) => parseFloat(n));

if(numbers.some((n) => isNaN(n))){
  console.log("Some arguments are not numbers!");
  process.exit(1);
}

let result;
switch(command){
  case "sum":
    result = lib.sum(numbers);
    break;
  case "avg":
    result = lib.avg(numbers);
    break;
  case "max":
    result = lib.max(numbers);
    break;
  case "mean2": //error handling: must exist at least 1 for each, else exit
    if(numbers.length % 2 !== 0){
      console.log("Number of the input must be even to use this function!");
      process.exit(1);
    }
    result = lib.mean2(numbers);
    break;
  case "med2":
    if(numbers.length % 2 !== 0){
      console.log("Number of the input must be even to use this function!");
      process.exit(1);
    }
    result = lib.med2(numbers);
    break;
  case "pareto":
    if(numbers.length % 2 !== 0){
      console.log("Number of the input must be even to use this function!");
      process.exit(1);
    }
    result = lib.pareto(numbers);
    break;
  default:
    console.log("Wrong command!");
    process.exit(1);
}
console.log(result);