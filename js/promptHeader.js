let header;
// Funciones

// Funcion de salida

const salida = (menu, menuAnterior) => {
    menu = menu.toLowerCase()
    if (menu == 'v') {
        menuAnterior()
    }
    if (menu == 'x')
        alert('Gracias por probar')
}

// genera un array de cada palabra en una cadena de texto previamente Lowercaseada.
function stringArray(words) {
    (words ? words : words = 'userx')
    let wordsArray = words.toLowerCase().split(' ');
    return wordsArray
}


// funcion para poner mayuscula en cada palabra del string ingresado.
function capitalizeNames(words) {
    let wordsLowerArray = stringArray(words)
    console.log('Array generado en lowercase', wordsLowerArray);
    let wordsUpperCasedArray = wordsLowerArray.map(palabraInd => {
        let arrayUpercased = palabraInd[0].toUpperCase() + palabraInd.slice(1);
        return arrayUpercased;
    })
    console.log('Array con primera letra uppercased', wordsUpperCasedArray);
    words = wordsUpperCasedArray.join(' ');
    console.log('String del nombre transfomado:', words);
    return words;
}
// funcion para avisar que el dato ingresado es erroneo
const wrongData = () => {
    alert('El dato ingresado no es correcto')
    console.log('El dato ingresado no es correcto')
}

// Funcion que verifica que el dato ingresado se encuentar dentro d elos parametros.
const doWileMenu = (opciones) => {
    
    // declaracion de variables.
    let selectedOption;

    //creando un string con las opciones para poder mostrar en el prompt.
    let stringOpciones='Ingresa la opcion deseada.\n';
    console.log(opciones);
    for (const item of opciones) {
        stringOpciones=stringOpciones + `${item}\n`
    }
    stringOpciones=stringOpciones + 'x- Para salir. \nv- Para volver al menu anterior.'
    
    //iniciando el do while para validar las opciones
    do {
        // Imprime opciones en el prompt
        selectedOption = prompt(stringOpciones)

        //condicional para avisar por alert que el dato ingresado es erroneo.
        if ((isNaN(selectedOption) ? true : selectedOption) < 1 || (isNaN(selectedOption) ? true : selectedOption > opciones.length) && selectedOption != 'x' && selectedOption != 'v') {
            wrongData();
        }
        //condicion para salir del do while que es la misma que para el alert
    } while ((isNaN(selectedOption) ? true : selectedOption) < 1 || (isNaN(selectedOption) ? true : selectedOption > opciones.length) && selectedOption != 'x' && selectedOption != 'v');
    return selectedOption
}
// Asigna a una variable el nombre de usuario con cappital leter en la primera letra con la fincion capitalized.

let userName = capitalizeNames(prompt('Ingresa tu nombre:'))
console.log('valor de la variable', userName);

// funcion para elegir opcion inicial en el navegador con las opciones declaradas en el prompt.
function selectOptions() {


    header = parseInt(prompt(userName + ', puedes ingresar el numero de modulo que te interese: \n 1- Variables \n 2- Condicionales \n 3- Iteraciones.\n 4- Piedra, papel o tijera. \n 5- Objetos.\n 6- Arrays. \n 7- Funciones de orden superior. \n 8-Salir.'))

    switch (header) {
        case 1:
            variables(userName);
            break;
        case 2:
            conditionals(userName);
            break;
        case 3:
            iteraciones(userName);
            break;
        case 4:
            desafioPPT(userName);
            break;
        case 5:
            objetosT(userName);
            break;
        case 6:
            arrays(userName);
            break;
        case 7:
            functions(userName);
            break;    
        case 8:
            alert('Gracias por participar');
            break;
        default:
            alert('Dato no valido, intenta nuevamente');
            selectOptions()
            break;
    }
}

selectOptions();