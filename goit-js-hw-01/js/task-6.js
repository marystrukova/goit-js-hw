'use strict'

let total = 0;
let message;
let input = 0;

while (input !== null) {
input = prompt ('Введите число');
total += Number(input);
}

message = `Общая сумма чисел равна ${total}`;

alert (message);