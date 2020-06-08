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

// ========================= QUESTION 3 =========================
function fiveMostCitiesStates() {
  let fiveMost = [];
  states_cities.forEach((UF) => {
    const sigla = UF.split('.')[0];
    fiveMost.push({ uf: sigla, length: countCityInState(sigla) });
  });
  fiveMost.sort((a, b) => b.length - a.length);
  return fiveMost.slice(0, 5);
}
console.log(fiveMostCitiesStates());

// ========================= QUESTION 4 =========================
// ========================= QUESTION 5 =========================
// ========================= QUESTION 6 =========================
// ========================= QUESTION 7 =========================
// ========================= QUESTION 8 =========================
