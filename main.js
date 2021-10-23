#!/usr/bin/env node
//"stat" translated into "node main.js"
//console.log(process.argv); //argument vector
const lib = require("./lib");
if (process.argv.length <= 3){
  console.log("Insufficient parameter!"); //ex) node main.js sum�� �ڿ� ���ڵ��� �Է����� �ʾƼ� 3���� ����
  process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv.slice(3, process.argv.length).map((n) => parseFloat(n));

if(numbers.some((n) => isNaN(n))){ //n == any: any �߿��� �ϳ��� NaN�̸�
  console.log("Some arguments are nott numbers!");
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
  case "mean2":
    result = lib.mean2(numbers);
    break;
  case "med2":
    result = lib.med2(numbers);
    break;
  case "pareto":
    result = lib.pareto(numbers);
    break;
  default:
    console.log("Wrong command!");
    process.exit(1);
}
console.log(result);