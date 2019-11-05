"use strict";

import users from "./users.js";

const getUsersWithGender = (users, gend) =>
  users.filter(({ gender }) => gender === gend).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]