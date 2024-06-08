// Ejercicio 23
const funcExc23 = (num1, num2) => {
  return num1 + num2;
}
const sumExc23 = funcExc23(1, 5);
console.log(sumExc23);

// Ejercicio 24
const funcExc24 = (num1, num2) => {
  if (Number.isNaN(Number.parseFloat(num1))) return NaN;
  if (Number.isNaN(Number.parseFloat(num2))) return NaN;
  return num1 + num2;
}
const sumExc24 = funcExc24('hello', 5);
console.log(sumExc24);

// Ejercicio 25
const funcExc25 = (num) => Number.isInteger(num);
console.log(funcExc25('hello'));
console.log(funcExc25(25));
console.log(funcExc25(25.545));

// Ejercicio 26
const funcExc26 = (num) => {
  if (Number.isNaN(Number.parseFloat(num))) return NaN;
  if (!Number.isInteger(num)) {
    alert(`El numero ${num} no es entero`)
  }
  return Number.parseInt(num);
};
console.log(funcExc26('hello'));
console.log(funcExc26(25));
console.log(funcExc26(25.545));

// Ejercicio 27
const isInteger = (num) => {
  if (!Number.isInteger(num)) {
    alert(`El numero ${num} no es entero`)
  }
}

const funcExc27 = (num) => {
  if (Number.isNaN(Number.parseFloat(num))) return NaN;
  isInteger(num);
  return Number.parseInt(num);
};
console.log(funcExc27('hello'));
console.log(funcExc27(25));
console.log(funcExc27(25.545));