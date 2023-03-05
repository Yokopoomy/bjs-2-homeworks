"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  if (d < 0) {
  } else if (d === 0) {
    arr[0] = -b/(2*a);
  } else {
    arr[0] = (-b + Math.sqrt(d) )/(2*a)
    arr[1] = (-b - Math.sqrt(d) )/(2*a)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  }
  percent = percent/100/12;
  let body = amount - contribution;
  let monthlyPayment = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let allPayment = monthlyPayment * countMonths;
  return parseFloat(allPayment.toFixed(2));
}