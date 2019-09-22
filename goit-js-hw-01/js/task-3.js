  
'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userAnswer = prompt ('Введите свой пароль');

switch (userAnswer) {
    case null:
    message = 'Отменено пользователем!';
    break;

    case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
    break;

    default:
    message = 'Доступ запрещен, неверный пароль!';
}

alert (message);