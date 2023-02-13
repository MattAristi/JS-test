// <= menor o igual
// >= mayor o igual
// = asignacion de valor
// == comparacion de valor
// === comparacion de valor y tipo de dato
// != diferente
// && and
// || or
// ! not



function conditionals(userName) {

    //asigna el valor de option conditional mediante la funcion dowhilechecknumber para elegir la opcion deseada 
    let arrayOpcionesCond=[
        '1- <2',
        '2- &&',
        '3- ||'
    ]
    let optionConditionals = doWileMenu(arrayOpcionesCond)

    // condicional > < = usando de comparativa la edad de un perro para determinar su adultez
    if (optionConditionals == 1) {

        // asigna valor de una variable Nombre del perro

        let nombreU = capitalizeNames(prompt(userName + ' ingresa el nombre de tu perro'));

        //asigna el valor de una variable con un valor numerico edad del perro
        let edad;
        edad = parseInt(prompt('ingresa la edad del perro: ' + nombreU));

        // por medio de condicionales comparamos el balor numerico para determinar si el perro es adulto o no
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
        selectOptions()
    }
    if (optionConditionals == 2) {
        // solo muestra los valores ingresados concatenados

        // asignacion de variables por prompt

        let userNameCond = capitalizeNames(prompt(userName + ' ingresa un nombre: '));
        let userLastName = capitalizeNames(prompt(userName + ' ingresa el apellido: '));

        // validacion para no asignar un texto vacio
        if (userNameCond != '' && userLastName != '') {
            alert('Este es su nombre completo. ' + userNameCond + ' ' + userLastName)
            console.log('Este es su nombre completo. ' + userNameCond + ' ' + userLastName);

        } else {
            if (userNameCond == '') {
                alert('No pusiste tu nombre.')
            }
            if (userLastName == '') {
                alert('No pusiste tu apellido.')
            }
        }
        selectOptions()
    }
    if (optionConditionals == 3) {

        //uso de diferentes condicionales y se muestra un resultado u otro dependiendo el caso

        let sport = prompt(userName + ' elige entre futbol y basquetbol, no hay dato sobre otro deporte')
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
            alert(userName + ' no hay dato de ese deporte')
        }
        selectOptions()
    }

    salida(optionConditionals, selectOptions)
}