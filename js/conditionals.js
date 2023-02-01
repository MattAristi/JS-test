// <= menor o igual
// >= mayor o igual
// = asignacion de valor
// == comparacion de valor
// === comparacion de valor y tipo de dato
// != diferente
// && and
// || or
// ! not



function conditionals() {

    let conditionals = parseInt(prompt('Ingrese la opcion deseada:\n 1- <2\n 2- &&\n 3- ||'))
    switch (conditionals) {
        case 1:

            let nombreU = prompt('Ingresa el nombre del perro');

            let edad;
            edad = parseInt(prompt('ingresa la edad del perro: ' + nombreU));

            if (edad) {
                if (edad < 2) {
                    alert(nombreU + ' es un cachorro');
                    console.log(nombreU + ' es un cachorro');
                } else {
                    alert(nombreU + ' es un perro adulto');
                    console.log(nombreU + ' es perro adulto');
                }
            } else {
                alert('No ha ingresado un texto')
                console.log('Texto no ingresado');
            }
            break;

        case 2:
            let userName = prompt('Ingresa tu nombre: ');
            let userLastName = prompt('Ingresa tu apellido: ');
            if (userName != '' && userLastName != '') {
                alert('Este es su nombre completo. ' + userName + ' ' + userLastName)
            } else {
                if (userName == '') {
                    alert('No pusiste tu nombre.')
                }
                if (userLastName == '') {
                    alert('No pusiste tu apellido.')
                }
            }
            break;

        case 3:
            let sport = prompt('Elige entre futbol y basquetbol, no hay dato sobre otro deporte')
            console.log(sport);
            console.log(sport.toLowerCase());
            if (sport.toLowerCase() == 'basquetbol' || sport.toLowerCase() == 'basketball' || sport.toLowerCase() == 'futbol' || sport.toLowerCase() == 'football') {

                if (sport.toLowerCase() == 'futbol' || sport.toLowerCase() == 'football') {
                    alert('El mejor es Messi')
                }
                if (sport.toLowerCase() == 'basquetbol' || sport.toLowerCase() == 'basketball') {
                    alert('El mejor fue Michael Jordan')
                }
            } else {
                alert('No hay dato de ese deporte')
            }
            break;


        default:
            alert('Tu no has ingresado nada')
            break;
    }
}