
let header;

function capitalizeNames (words) {
    let wordsLowerArray=words.toLowerCase().split(' ');
    console.log(wordsLowerArray);
    let wordsUpperCasedArray = wordsLowerArray.map(palabraInd =>{
        let arrayUpercased = palabraInd[0].toUpperCase() + palabraInd.slice(1);
        return arrayUpercased;
    })
    console.log('Array con primera letra uppercased',wordsUpperCasedArray);
    words=wordsUpperCasedArray.join(' ');
    console.log('Array a string:',words);
    return words;
}
let userName = capitalizeNames(prompt('Ingresa tu nombre:'))
console.log(userName);


function selectOptions() {


    header = parseInt(prompt('Ingresa el numero de modulo que te interesa: \n 1- Variables \n 2- Condicionales \n 3- Iteraciones.\n 4- Piedra, papel o tijera \n 5- salir '))

    switch (header) {
        case 1:
            variables();
            break;
        case 2:
            conditionals();
            break; 
        case 3:
            iteraciones();
            break;          
        case 4:
            desafioPPT(userName);
            break;
        case 5:
            alert('Gracias por participar');
            break;
        default:
            alert('Dato no valido, intenta nuevamente');
            selectOptions()
            break
        ;
    }
}

selectOptions()