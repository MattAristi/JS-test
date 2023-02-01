function iteraciones() {

    let iterations = parseInt(prompt('Ingrese la opcion deseada:\n 1- For.\n 2- While.\n 3- Do While.\n 4- Switch.'))
    switch (iterations) {
        case 1 :
            for (let i = 1; i < 10; i++) {

                console.log('Ya llegamos a la india?  ' + i);
                let respuesta = prompt('Ya llegamos a la india? si/no según corresponda')
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
            break;
        case 2 : 
            let liveGps = 'no';
            let cantPreguntas = 0
            while (liveGps != 'si') {
                cantPreguntas++
                console.log('Ya llegamos a la india? ' + cantPreguntas);
                liveGps = prompt('Ya llegamos a la india? Ingresa si/no según el caso')
                if (liveGps==''){
                    liveGps='no';
                }
                if (liveGps == 'si') {
                    console.log(liveGps);
                    alert('Espera, si si, hemos llegado')
                } else {
                    console.log(liveGps);
                    alert(liveGps)
                }
            }
            break;
        case 3:
            let confirmationDoWile='si';
            let userNameDoWhile;
            let userAgeDoWhile=13;
            do {
                if (confirmationDoWile!='si' || userNameDoWhile == '' || userAgeDoWhile!=parseInt(userAgeDoWhile) ){
                    alert('Intentalo nuevamente');
                }
                if (userAgeDoWhile < 13){
                    alert('Eres menor de edad')
                    break;
                }
                confirmationDoWile= prompt('Deseas generar un usuario? si/no.');
                if (confirmationDoWile=='no'){
                    alert('Gracias, vuelva prontos.');
                    break;
                }
                userNameDoWhile =prompt('Elige tu nombre de usuario.');
                console.log('userName: ',userNameDoWhile);
                userAgeDoWhile = parseInt(prompt('Ingresa tu edad.'));
                console.log(userAgeDoWhile);
                if (userAgeDoWhile < 13){
                    alert('Eres menor de edad')
                    break;
                }
                
            } while ((confirmationDoWile != 'si') || (userNameDoWhile == '') || userAgeDoWhile!=parseInt(userAgeDoWhile));

            if (userAgeDoWhile >= 13){
                userNameDoWhile = userNameDoWhile[0].toUpperCase()+userNameDoWhile.slice(1).toLowerCase()
                console.log('userName: ',userNameDoWhile);
                alert('Estas a un paso de lograrlo')
            }
            break;
        
        case 4:
            let pais = prompt('Escribe el nombre de un pais que haya sido campeon Mundial.')
            console.log(pais.toLowerCase());
            switch (pais.toLowerCase()) {
                case 'argentina':
                    alert('Ganamos 3 copas')
                    break;
                case 'brasil':
                    alert('Ganaron 5 copas')
                default:
                    alert('todo puto')
            } 
            break;
        default:
            alert('El dato no es correcto')
            break;
    }
}