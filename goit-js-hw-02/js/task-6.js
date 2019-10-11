
"use strict";

let input;
const numbers = [];
let total = 0;
let message;

while (input !== null) {
  input = prompt("Введите число");
  let inp = Number(input);
  if (Number.isNaN(inp)) {
    alert("Было введено не число, попробуйте еще раз");
  } else if (inp !== 0) {
    numbers.push(inp);
  }
}

if (numbers.length === 0) {
  message = "Вы не ввели ни одного числа";
} else {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  message = `Общая сумма чисел равна ${total}`;
}

alert(message);