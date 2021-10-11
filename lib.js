/*function sum(numbers){
  let s = 0;
  for(let i = 0; i < numbers.length; i++) s += numbers[i];
  return s;
}
*/
function sum(numbers){
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers){
  return sum(numbers) / numbers.length;
}


function max(numbers){
  let m = numbers[0];
  for(let i = 1; i < numbers.length; i++) if(m < numbers[i]) m = numbers[i];
  return m;
}
/*
function max(numbers){
  return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}*/

function mean2(numbers){
  let sum1 = 0, sum2 = 0, m1, m2;
  for(let i = 0; i < numbers.length; i += 2){
    sum1 += numbers[i];
    sum2 += numbers[i + 1];
  }
  m1 = (sum1 / (numbers.length / 2)).toFixed(2);
  m2 = (sum2 / (numbers.length / 2)).toFixed(2);
  return (m1.toString() + ' ' + m2.toString());
}

/*
exports.sum = sum;
exports.avg = avg;
exports.max = max;
*/
module.exports = {
  sum,
  avg,
  max,
  mean2,
};