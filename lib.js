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

function med2(numbers){
  let arr1 = [], arr2 = [], str1, str2, j = 0;
  for(let i = 0; i < numbers.length; i += 2){
    arr1[j] = numbers[i]; //xÃà ¿Å±è
    arr2[j] = numbers[i + 1]; //yÃà ¿Å±è
    j++;
  }
  let ARR1 = arr1.filter((ele, idx) => {
    return arr1.indexOf(ele) === idx;
  }); //Áßº¹Ã³¸®
  let ARR2 = arr2.filter((ele, idx) => {
    return arr2.indexOf(ele) === idx;
  })
  cen1 = (ARR1.length / 2).toFixed(); cen2 = (ARR2.length / 2).toFixed();
  
  ARR1.sort(function(a, b) {return (a - b)});
  ARR2.sort(function(a, b) {return (a - b)});

  if(ARR1.length === 1)
  str1 = ARR1[0].toString();
  else
  str1 = ARR1[cen1 - 1].toString();

  if(ARR2.length === 1)
  str2 = ARR2[0].toString();
  else
  str2 = ARR2[cen2 - 1].toString();

  return str1 + ' ' + str2;
}

function pareto(numbers){
  let STR = '';
  for(let i = 0; i < numbers.length - 2; i += 2){
    if(numbers[i] < numbers[i + 2] && numbers[i + 1] < numbers[i + 3]){
      continue;
    }
    STR += numbers[i].toString() + ' ' + numbers[i + 1].toString() + '\n'
  }
  STR += numbers[numbers.length - 2].toString() + ' ' + numbers[numbers.length - 1].toString();
  return STR;
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
  med2,
  pareto,
};