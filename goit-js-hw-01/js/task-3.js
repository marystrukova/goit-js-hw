'use strict';

const CANCELED_BY_USER = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

const ADMIN_PASSWORD = 'jqueryismyjam';

let userSaid = prompt('Введите свой пароль');
let message;

if(userSaid === null) {
    message = CANCELED_BY_USER;
    console.assert(userSaid === null && message === CANCELED_BY_USER, 'Error: при обработке null');
}

if(userSaid === ADMIN_PASSWORD) {
    message = WELCOME;
    console.assert(userSaid === ADMIN_PASSWORD && message === WELCOME, 'Error: при обработке правильного пароля');
}

if((userSaid !== ADMIN_PASSWORD) && (userSaid !== null)){
    message = ACCESS_DENIED;
    console.assert((userSaid !== ADMIN_PASSWORD) && (userSaid !== null) && message === ACCESS_DENIED, 'Error: при обработке неправильного пароля');
}

alert(message);