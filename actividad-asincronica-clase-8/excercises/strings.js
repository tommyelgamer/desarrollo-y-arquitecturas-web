// Ejercicio 4
const allUpper = "This is an uppercase frase".toUpperCase();

// Ejercicio 5
const exc5 = "String del ejercicio numero 5";
const subExc5 = exc5.substring(0, 5);

// Ejercicio 6
const exc6 = "String del ejercicio numero 6";
const exc6Length = exc6.length;
const subExc6 = exc6.substring(exc6Length - 3, exc6Length);

// Ejercicio 7
const exc7 = "eSto ES un stRIng diferentE";
const finalExc7 = exc6.substring(0, 1).toUpperCase() + exc6.substring(1, exc6.length).toLowerCase();

// Ejercicio 8
const exc8 = "Exploring the universe.";
const indexExc8 = exc8.indexOf(' ');

// Ejercicio 9 (Seria preferible utilizar split para separar por cada espacio y hacer uppercase a la primera letra )
const exc9 = "Extraterrestrial phenomenon";
const firstSubstring = exc9.substring(0, exc9.indexOf(' '));
const secondSubstring = exc9.substring(exc9.indexOf(' ') + 1, exc9.length);
const finalExc9 = firstSubstring.substring(0, 1).toUpperCase() + firstSubstring.substring(1, firstSubstring.length + 1) + ' ' + secondSubstring.substring(0, 1).toUpperCase() + secondSubstring.substring(1, firstSubstring.length + 1);