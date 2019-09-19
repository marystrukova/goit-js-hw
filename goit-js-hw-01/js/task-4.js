  
'use strict'

let credits = 23580;
let creditsLeft;
let pricePerDroid = 3000;
let quantity = prompt ('Введите количество ремонтных дроидов, которые Вы хотите купить');
let totalPrice = pricePerDroid * quantity;
let message;


if (quantity === null) {
    message = 'Отменено пользователем!';
} else {
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        creditsLeft = credits - totalPrice;
        message = `Вы купили ${quantity} дроидов, на счету осталось ${creditsLeft } кредитов.`;
    }
}

alert (message);