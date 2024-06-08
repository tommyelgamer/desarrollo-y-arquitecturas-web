// Ejercicio 17
const randNum = Math.random();
randNum >= 0.5 ? console.log('Greater than 0.5') : console.log('Lower than 0.5');

// Ejercicio 18
const personAge = 20;

if (personAge < 2) {
  console.log('Bebe');
} else if (personAge >= 2 && personAge <= 12) {
  console.log('Niño');
} else if (personAge >= 13 && personAge <= 19) {
  console.log('Adolescente');
} else if (personAge >= 20 && personAge <= 30) {
  console.log('Joven');
} else if (personAge >= 31 && personAge <= 60) {
  console.log('Adulto');
} else if (personAge >= 61 && personAge <= 75) {
  console.log('Adulto mayor');
} else {
  console.log('Anciano');
}