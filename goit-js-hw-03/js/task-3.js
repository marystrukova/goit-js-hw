"use strict";

function findBestEmployee(employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);

  let bestProductivity = 0;
  let bestProductivityIndex = 0;

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > bestProductivity) {
      bestProductivity = values[i];
      bestProductivityIndex = i;
    }
  }

  return keys[bestProductivityIndex];
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);