if (header == 4) {

    let userNamePPT = '';
    let userChoosePPT = '';
    let cpuRandomChoose = '';
    let userScorePPT = 0;
    let cpuScorePPT = 0;
    let empatesPPT = 0;
    let resultadoFinalPPT;
    const piedra = 'piedra;';
    const papel = 'papel';
    const tijera = 'tijera';

    userNamePPT = prompt('Ingresa tu nombre:').toLowerCase();
    console.log(userNamePPT);

    userNamePPT = userNamePPT[0].toUpperCase() + userNamePPT.slice(1);
    console.log(userNamePPT);

    do {
        userChoosePPT = parseInt(prompt('Elije una opción ingresando el número correspondiente:\n 1- Piedra.\n 2- Papel.\n 3-Tijera.\n 4- Salir del juego'));
        cpuRandomChoose = Math.round((Math.random() * 2) + 1);

        switch (cpuRandomChoose) {
            case 1:
                cpuRandomChoose = piedra;
                break;
            case 2:
                cpuRandomChoose = papel;
                break;
            case 3:
                cpuRandomChoose = tijera;
                break;
            default:
                alert('Cpu error Math.random-')
                break;
        }
        switch (userChoosePPT) {
            case 1:
                userChoosePPT = piedra;
                break;
            case 2:
                userChoosePPT = papel;
                break;
            case 3:
                userChoosePPT = tijera;
                break;
            case 4:
                userChoosePPT = 'esc';
                resultadoFinalPPT = userScorePPT - cpuScorePPT;
                if (resultadoFinalPPT > 0) {
                    resultadoFinalPPT = 'ganaste'
                }
                if (resultadoFinalPPT == 0) {
                    resultadoFinalPPT = 'empataste'
                }
                if (resultadoFinalPPT < 0) {
                    resultadoFinalPPT = 'perdiste'
                }

                if (userChoosePPT == 'esc') {
                    alert('Gracias por jugar '+userNamePPT+'.\n \n Datos de la partida:\n Has ganado ' + userScorePPT + ' veces. \n Has perdido ' + cpuScorePPT + ' veces. \n Hubo ' + empatesPPT + ' empates. \n \n Por lo tanto ' + resultadoFinalPPT + ' en esta partida.')
                }
                break;
            default:
                alert('Ingresaste un valor invalido')
                userChoosePPT = 'error';
                break;
        }
        console.log(userChoosePPT);
        if (userChoosePPT == 'esc' || userChoosePPT == 'error') {
            continue;
        }
        if (userChoosePPT == cpuRandomChoose) {
            alert('Hubo empate.');
            empatesPPT++;
            continue;
        }
        if ((userChoosePPT == piedra && cpuRandomChoose == papel) || (userChoosePPT == papel && cpuRandomChoose == tijera) || (userChoosePPT == tijera && cpuRandomChoose == piedra)) {
            alert('Perdiste.');
            cpuScorePPT++;
        } else {
            alert('Ganaste')
            userScorePPT++;
        }



    } while (userChoosePPT != 'esc');
}