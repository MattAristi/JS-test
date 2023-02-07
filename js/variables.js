function variables(userName) {
    // linea de comentario
    /*esto es comentario multilinea
    1
    2
    3*/
    let optionVariables = doWileCheckNumber(variables,2, '1- Declaracion de variables y arrays en string', '2- Manejo de variables con numeros y operaciones aritmeticas. ')
    if (optionVariables == 1) {


        // declaracion de variable

        // var nombre = "Matias";

        // variables reservadas
        alert(userName+' tienes que abrir la consola.')

        var name1Var = "July"; // "var" deprecada
        console.log('Valor de la variable hardcodeada inicialmente: ', name1Var);
        let name2Var = "Marto";

        name1Var = prompt(userName+' cambia el valor de la variable name1Var, ingresá un nombre completo.')
        console.log('Valor de la variable modificada por prompt: ', name1Var);
        //valor de la variable con funcion capitalizeNames que pone mayuscula en la primera letra de cada palabra
        name1Var = capitalizeNames(name1Var)
        console.log('Nombre modificado a mayuscula en la primera palabra. ', name1Var);

        // Creando arrays
        const array1 = [name1Var, name2Var]; //el contenido no puede variar
        let array2 = [name2Var, name1Var]; // puede variar el contenido

        console.log('Array 1 no modificable ', array1);
        console.log('Array 2 modificables', array2);

        // MOdifica uno de los valore del array y ya lo dejamos con mayusculas utilizando el capitalizeName
        name2Var = capitalizeNames(prompt('Elige otro nombre para cambiar en el array2:'))
        //refresca el dato del array
        array2 = [name1Var, name2Var];
        console.log('Array 2 modificado: ', array2);

        selectOptions()
    }

    
    if (optionVariables == 2) {
        // manejo de numeros
        //declaracion de variables
        let numeroA;
        let numeroB;
        let operacion;

        alert('Continuamos con numeros '+userName+'.')

        // seteao del tipo de operacion a realizar.
        numeroA = prompt(userName+' ingresa el primer numero.');

        do {
            operacion = prompt('Ingresa la operacion a realizar. ( +, -, *, /)')
            //bucle para verificar que el dato ingresado sea correcto.

            if (operacion != '+' && operacion != '-' && operacion != '*' && operacion != '/') {
                wrongData();
            }
        } while (operacion != '+' && operacion != '-' && operacion != '*' && operacion != '/');



        numeroB = prompt('Ingresa el segundo numero.');


        //func flecha para la realizar las diferentes operaciones.
        const resultado = (numA, op, numB) => {
            let res;
            //swich para utilizar la operacion seleccionada
            switch (op) {
                case '+':
                    res = numA + numB
                    break;
                case '-':
                    res = numA - numB
                    break;
                case '*':
                    res = numA * numB
                    break;
                case '/':
                    res = numA / numB
                    break;
            }
            return res
        };
        //ingreso de datos
        let resSinParsear = resultado(numeroA, operacion, numeroB)
        let resParseado = resultado(parseInt(numeroA), operacion, parseInt(numeroB))

        //muestra los resultados en consola
        console.log(`Los resultados sin parsear deberian fallar solo en la suma.\n\n Resultado 1 sin parsear de: \n Numero A (${numeroA}) ${operacion} numero B (${numeroB}) = `, numeroA + operacion + numeroB);
        console.log(`Resultado 1 parseado de: \n Numero A (${numeroA}) ${operacion} numero B (${numeroB}) = `, resParseado);
        //ingreso de nuevo dato
        let numeroC = parseInt(prompt('ingresa un tercer numero:'));
        //generando el segundo resultado
        let res2 = resultado(parseInt(numeroA), operacion, numeroC)

        console.log(`Resultado 2 de numero A (${numeroA}) ${operacion} numero C (${numeroC})= `, res2)

        //declaracion de variable
        let parImpar;
        // verficacion si el segundo resultado es par o impar
        if (res2 % 2 == 0) {
            parImpar = 'par';
        } else {
            parImpar = 'impar'
        }
        // muestra los resultados en un alert
        alert(`Los resultados sin parsear deberian fallar solo en la suma.\n\n Resultado 1 sin parsear = ${resSinParsear} \n Resultado 1 parseado = ${resParseado}\n Resultado 2 = ${res2}\n El ultimo resultado es ${parImpar}  `)

        console.log('El ultimo resultado es: ', parImpar);
        selectOptions()
    }
    //llama a funcion para volver al menu inicial o salir
    salida(optionVariables)
}