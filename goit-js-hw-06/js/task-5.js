"use strict";

import users from "./users.js";

const getUserWithEmail = (users, em) => users.find(({email}) => email === em);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}