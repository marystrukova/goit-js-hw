  
'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userAnswer = prompt ('Введите свой пароль');


if (userAnswer === null) {
    message = 'Отменено пользователем!';
} else if (userAnswer === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert (message);