// Ejercicio 19
const arrayExc19 = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
for (const i of arrayExc19) {
  alert(i);
}

// Ejercicio 20
const arrayExc20 = ['itEm1', 'item2', 'item3', 'item4', 'item5'];
for (const i of arrayExc20) {
  alert(i.substring(0, 1).toUpperCase() + i.substring(1, i.length).toLowerCase());
}

// Ejercicio 21
const arrayExc21 = ['itEm1', 'item2', 'item3', 'item4', 'item5'];
let sentence = '';
for (const i of arrayExc21) {
  sentence += (i.substring(0, 1).toUpperCase() + i.substring(1, i.length).toLowerCase());
}

// Ejercicio 22
const arrayExc22 = [];
for (let i = 0; i < 10; i++) {
  arrayExc22.push(i);
}
console.log(arrayExc22);