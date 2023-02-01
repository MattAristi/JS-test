function variables(){
// linea de comentario
/*esto es comentario multilinea
1
2
3*/

// declaracion de variable
var nombre = "Matias";

// variables reservadas

var name1 ="July"; //deprecada
let  name2 ="Marto";
name1="Mono"

const array1 = [name1, name2]; //el contenido no puede variar
let array2 = {name1, name2};
console.log(array1);
console.log(array2);
name2='Pablo'
array2 = {name1, name2};
console.log(array2);

// manejo de numeros

let numeroA;
let numeroB;

numeroA=345;
numeroB=45;
let operacion;
let resultado =numeroA-numeroB;

operacion= []

console.log('numeroA-numeroB=',resultado);

let numeroC= prompt('ingresa un numero:');
let resultado2= numeroA+numeroC;
console.log('numeroA+numeroC sin parsear=',resultado2);
let numeroD = parseInt(numeroC);
let numeroE=parseInt(prompt('ingresa un numero y lo parseo:'))
let resultado3= numeroA+numeroE;

resultado2= numeroA+numeroD;
console.log('numeroA+numeroC parseado en 2 pasos=',resultado2);
console.log('numeroA+numeroC parseado directamente=',resultado3);

let parImpar;

if(resultado3 % 2 == 0) {
    parImpar='par';
}else {
    parImpar='impar'
}

alert(['Resultado variable fija: '+resultado, ' Resultado prompt1: '+resultado2, 'Resultado prompt2: '+resultado3])
alert('El ultimo resultado es: '+ parImpar)
console.log('El ultimo resultado es: ', parImpar);
}


