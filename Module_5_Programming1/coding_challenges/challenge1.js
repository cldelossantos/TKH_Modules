// https://codepen.io/cldelossantos/pen/xxVGpXG?editors=1111
let fullNames = [
  "Westly Snipes",
  "Nicholas Cage",
  "Nasir Jones",
  "Sean Carter",
  "Sean Combs",
  "Michael Jordan",
  "Patrick Ewing",
];

let firstNames = [];
let lastNames = [];

for (let i = 0; i < fullNames.length; i++) {
  let fullNamesSplit = fullNames[i].split(" ");

  firstNames.push(fullNamesSplit[0]);
  lastNames.push(fullNamesSplit[1]);
}
