const a = 3;
const b = 10;
const c = 10;
const d = 3;

let mayor = a;
let menor = a;

if (b > mayor) mayor = b;
if (c > mayor) mayor = c;
if (d > mayor) mayor = d;


if (b < menor) menor = b;
if (c < menor) menor = c;
if (d < menor) menor = d;

alert("El número mayor es: " + mayor);
alert("El número menor es: " + menor);


if (a === b && b === c && c === d) {
  alert("Todos son iguales.");
} else {
  if (a === b) alert("a y b son iguales: " + a);
  if (a === c) alert("a y c son iguales: " + a);
  if (a === d) alert("a y d son iguales: " + a);
  if (b === c) alert("b y c son iguales: " + b);
  if (b === d) alert("b y d son iguales: " + b);
  if (c === d) alert("c y d son iguales: " + c);
}
