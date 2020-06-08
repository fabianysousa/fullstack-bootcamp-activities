const express = require('express');
const app = express();
const fs = require('fs');
app.listen(3000);

const states = require('./models/states.json');
const cities = require('./models/cities.json');
const states_cities = fs.readdirSync('src/models/states_cities');
var countCities = 0;

// ========================= QUESTION 1 =========================

// function insertCitiesFilesStates(states, cities) {
//   const states_cities = states.map((state) => {
//     state.Cidades = [];
//     cities.map((city) => {
//       if (city.Estado === state.ID) {
//         state.Cidades.push(city);
//       }
//     });
//     return state;
//   });
//   states_cities.forEach((state) => {
//     fs.writeFile(
//       `./models/states_cities/${state.Sigla}.json`,
//       JSON.stringify(state),
//       function (err) {
//         if (err) {
//           return console.log(err);
//         }
//       }
//     );
//   });
// }
// insertCitiesFilesStates(states, cities);

// ========================= QUESTION 2 =========================
function countCityInState(uf) {
  const state = JSON.parse(
    fs.readFileSync(`src/models/states_cities/${uf}.json`, 'utf8')
  );
  return state.Cidades.length;
}
// console.log(countCityInState('AC'));

// ====================== QUESTION 3 / 4 ========================
let fiveCities = [];

function countFiveCitiesStates() {
  states_cities.forEach((UF) => {
    const sigla = UF.split('.')[0];
    fiveCities.push({ uf: sigla, length: countCityInState(sigla) });
  });
  return fiveCities;
}
// console.log(countFiveCitiesStates());

// ========================= QUESTION 3 =========================
function fiveMostCitiesStates() {
  fiveCities.sort((a, b) => b.length - a.length);
  return fiveCities.slice(0, 5);
}
// console.log(fiveMostCitiesStates());

// ========================= QUESTION 4 =========================
function fiveSmallerCitiesStates() {
  fiveCities.sort((a, b) => b.length - a.length);
  return fiveCities.slice(fiveCities.length - 5, fiveCities.length);
}
// console.log(fiveSmallerCitiesStates());

// ======================= QUESTION 5 / 6 =======================
function lengthNameCitiesState(UF) {
  let lengthNamesCities = [];
  const sigla = UF.split('.')[0];
  const state = JSON.parse(
    fs.readFileSync(`src/models/states_cities/${UF}`, 'utf8')
  );
  state.Cidades.forEach((city) => {
    lengthNamesCities.push({
      uf: sigla,
      name: city.Nome,
      length: city.Nome.length,
    });
  });
  return lengthNamesCities;
}

function mostCityNameAllStates() {
  let mostNameCityStates = [];
  states_cities.forEach((UF) => {
    const lengthNames = lengthNameCitiesState(UF);
    lengthNames.sort((a, b) => b.length - a.length);
    mostNameCityStates.push(lengthNames[0]);
  });
  return mostNameCityStates.sort((a, b) => b.length - a.length);
}
// console.log(mostCityNameAllStates());
// ========================= QUESTION 6 =========================
function smallestCityNameAllStates() {
  let smallestNameCityStates = [];
  states_cities.forEach((UF) => {
    const lengthNames = lengthNameCitiesState(UF);
    lengthNames.sort((a, b) => a.length - b.length);
    smallestNameCityStates.push(lengthNames[0]);
  });
  return smallestNameCityStates.sort((a, b) => a.length - b.length);
}
// console.log(smallestCityNameAllStates());

// ========================= QUESTION 7 =========================
function biggestNameCity() {
  let biggestNameCity = mostCityNameAllStates();
  return biggestNameCity[0];
}
console.log(biggestNameCity());

// ========================= QUESTION 8 =========================
function smallestNameCity() {
  let smallestNameCity = smallestCityNameAllStates();
  return smallestNameCity[0];
}
console.log(smallestNameCity());
