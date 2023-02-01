let userName = prompt('Ingresa tu nombre:').toLowerCase()
userName = userName[0].toUpperCase() + userName.slice(1);
console.log(userName);
let header;

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