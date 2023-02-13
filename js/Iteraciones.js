function iteraciones(userName) {
    let arrayOpcionesItera=[
        '1- Bucle for.',
        '2- Bucle while.',
        '3- Bucle do-while',
        '4- Swift'
    ]
    let optionIteration = doWileMenu(arrayOpcionesItera)

    if (optionIteration == 1) {
        for (let i = 1; i < 10; i++) {

            console.log('Ya llegamos a la india?  ' + i);
            let respuesta = prompt(userName+' ya llegamos a la india? si/no según corresponda')
            if (respuesta == '') {
                respuesta = 'no'
            }

            if (respuesta == 'no' && i == 5) {
                respuesta = 'Basta, no aun'
            }
            if (i == 6) {
                continue
            }
            if (i == 9 || respuesta == 'si') {
                respuesta = 'Espera, sisi, hemos llegado.'
                console.log(respuesta);
                alert(respuesta)
                break
            }
            console.log(respuesta);
            alert(respuesta)
        }
        selectOptions()
    }
    if (optionIteration == 2) {
        let liveGps = 'no';
        let cantPreguntas = 0
        while (liveGps != 'si') {
            cantPreguntas++
            console.log('Ya llegamos a la india? ' + cantPreguntas);
            liveGps = prompt(userName+' ya llegamos a la india? Ingresa si/no según el caso')
            if (liveGps == '') {
                liveGps = 'no';
            }
            if (liveGps == 'si') {
                console.log(liveGps);
                alert('Espera '+userName+', si si, hemos llegado')
            } else {
                console.log(liveGps);
                alert(liveGps)
            }
        }
        selectOptions()
    }

    if (optionIteration == 3) {
        let confirmationDoWile = 'si';
        let userNameDoWhile;
        let userAgeDoWhile = 13;
        do {
            if (confirmationDoWile != 'si' || userNameDoWhile == '' || userAgeDoWhile != parseInt(userAgeDoWhile)) {
                alert('Intentalo nuevamente '+userName+'.');
            }
            if (userAgeDoWhile < 13) {
                alert('Eres menor de edad')
                break;
            }
            confirmationDoWile = prompt(userName+' desea generar un usuario? si/no.');
            if (confirmationDoWile == 'no') {
                alert('Gracias, vuelva prontos.');
                break;
            }
            userNameDoWhile = prompt('Elige tu nombre de usuario.');
            console.log('userName: ', userNameDoWhile);
            userAgeDoWhile = parseInt(prompt('Ingresa tu edad.'));
            console.log(userAgeDoWhile);
            if (userAgeDoWhile < 13) {
                alert('Eres menor de edad')
                break;
            }

        } while ((confirmationDoWile != 'si') || (userNameDoWhile == '') || userAgeDoWhile != parseInt(userAgeDoWhile));

        if (userAgeDoWhile >= 13) {
            userNameDoWhile = userNameDoWhile[0].toUpperCase() + userNameDoWhile.slice(1).toLowerCase()
            console.log('userName: ', userNameDoWhile);
            alert(userName+' estas a un paso de lograrlo')
        }
        selectOptions()
    }

    if (optionIteration == 4) {
        let pais =capitalizeNames (prompt(userName+' escribe el nombre de un pais que haya sido campeon Mundial.'))
        console.log(pais);
        switch (pais) {
            case 'Argentina':
                alert('Ganamos 3 copas')
                break;
            case 'Brasil':
                alert('Ganaron 5 copas')
                break;
            case 'Italia':
                alert('Ganaron 4 copas')
                break; 
            case 'Alemania':
                alert('Ganaron 4 copas')
                break;
            case 'Uruguay':
                alert('Ganaron 2 copas')
                break;
            case 'Francia':
                alert('Ganaron 2 copas')
                break;
            case 'Inglaterra':
                alert('Ganaron 1 copa')
                break;
            case 'España':
                alert('Ganaron 1 copa')
                break;
            default:
                alert('No han ganado nunca')
        }
        selectOptions()
    }

salida(optionIteration, selectOptions)
}