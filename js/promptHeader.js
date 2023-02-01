let userName = prompt('Ingresa tu nombre:').toLowerCase();
console.log(userName);

userName = userName[0].toUpperCase() + userName.slice(1);
console.log(userName);
let header;

function selectOptions() {


    header = parseInt(prompt('Ingresa el numero de modulo que te interesa: \n 1- Variables \n 2- Condicionales \n 3- Iteraciones.\n 4- Piedra, papel o tijera '))

    switch (header) {
        case 4:
            desafioPPT(userName);
            break;

        default:
        ;
    }
}

selectOptions()