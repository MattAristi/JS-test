function variables(){
// linea de comentario
/*esto es comentario multilinea
1
2
3*/

// declaracion de variable
var nombre = "Matias";

// variables reservadas
alert('Para visualizar cambios tienes que abrir la consola.')

var name1Var ="July"; //deprecada
console.log('Valor de la variable hardcodeada inicialmente: ', name1Var);
let  name2Var ="Marto";
name1Var=prompt('Cambia el valor de la variable name1Var, ingresá tu nombre completo.')
console.log('Valor de la variable modificada por prompt: ', name1Var);
name1Var= capitalizeNames(name1Var)
console.log('Nombre modificado a mayuscula en la primera palabra. ',name1Var );
// Creando arrays
const array1 = [name1Var, name2Var]; //el contenido no puede variar
let array2 = [name2Var, name1Var]; // puede variar el contenido

console.log('Array 1 no modificable ',array1);
console.log('Array 2 modificables',array2);
// MOdifica uno de los valore del array
name2Var=capitalizeNames(prompt('Elige otro nombre para cambiar en el array2:'))
array2 = [name1Var, name2Var];
console.log('Array 2 modificado: ',array2);

// manejo de numeros

let numeroA;
let numeroB;
let operacion;

alert('Continuamos con numeros.')

// para setear el tipo de operacion a realizar.
numeroA=prompt('Ingresa el primer numero.');

do {
    operacion= prompt('Ingresa la operacion a realizar. ( +, -, *, /)')
    if (operacion!='+' && operacion!='-' && operacion!='*' && operacion!='/'){
        alert('Caracter no permitido')
    }
} while (operacion!='+' && operacion!='-' && operacion!='*' && operacion!='/');



numeroB=prompt('Ingresa el segundo numero.');


//func flecha para la realizar la operacion.
const resultado = (numA,op,numB)=>{
    let res;
    switch (op) {
        case '+':
            res = numA + numB
        break;
        case '-':
            res= numA - numB
        break;
        case '*':
            res= numA * numB
        break;
        case '/':
            res= numA / numB
        break;
    }
    return res
};
let resSinParsear=resultado(numeroA,operacion,numeroB)
let resParseado=resultado(parseInt(numeroA),operacion,parseInt(numeroB))


console.log(`Los resultados sin parsear deberian fallar solo en la suma.\n\n Resultado 1 sin parsear de: \n Numero A (${numeroA}) ${operacion} numero B (${numeroB}) = `,numeroA+operacion+numeroB);
console.log(`Resultado 1 parseado de: \n Numero A (${numeroA}) ${operacion} numero B (${numeroB}) = `,resParseado);

let numeroC= parseInt(prompt('ingresa un tercer numero:'));
let res2=resultado(parseInt(numeroA),operacion,numeroC)

console.log(`Resultado 2 de numero A (${numeroA}) ${operacion} numero C (${numeroC})= `,res2)






let parImpar;

if(res2 % 2 == 0) {
    parImpar='par';
}else {
    parImpar='impar'
}

alert(`Los resultados sin parsear deberian fallar solo en la suma.\n\n Resultado 1 sin parsear = ${resSinParsear} \n Resultado 1 parseado = ${resParseado}\n Resultado 2 = ${res2}\n El ultimo resultado es ${parImpar}  `)

console.log('El ultimo resultado es: ', parImpar);
selectOptions()
}


