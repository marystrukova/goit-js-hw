const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let message;

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (!isLoginUnique(allLogins, login)) {
    message = "Такой логин уже используется!";
  } else {
    allLogins.push(login);
    message = "Логин успешно добавлен!";
  }
  alert(message);
};

addLogin(logins, "Ajax");
addLogin(logins, "robotGoogles");
addLogin(logins, "Zod");
addLogin(logins, "jqueryisextremelyfast");