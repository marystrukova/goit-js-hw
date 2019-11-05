"use strict";

import users from "./users.js";

const getSortedUniqueSkills = users => 
  users
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .sort((a, b) => a.localeCompare(b), "en")
    .filter((e, i, arr) => arr.indexOf(e) === i);
  
console.log(getSortedUniqueSkills(users));  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]