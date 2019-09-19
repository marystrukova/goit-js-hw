'use strict';

const CHINA = 'КИТАЙ';
const CHILI = 'ЧИЛИ';
const AUSTRALIA = 'АВСТРАЛИЯ';
const INDIA = 'ИНДИЯ';
const JAMAIKA = 'ЯМАЙКА';

let userChoise = prompt('Enter your country');
userChoise = userChoise.toUpperCase();
let message;

switch(userChoise) {
   
    case CHINA:
        message = `Доставка в ${userChoise} будет стоить 100 кредитов`;
        break;

    case CHILI:
        message = `Доставка в ${userChoise} будет стоить 250 кредитов`;
        break;

    case AUSTRALIA:
        message = `Доставка в ${userChoise} будет стоить 170 кредитов`;
        break;

    case INDIA:
        message = `Доставка в ${userChoise} будет стоить 80 кредитов`;
        break;

    case JAMAIKA:
        message = `Доставка в ${userChoise} будет стоить 120 кредитов`;
        break;

    default:
        alert('В вашей стране доставка не доступна');
} 

alert(message);