const functions = () => {

    //funciones de ordenn superior
    // son funciones que retornan una funcion o la recibe como parametro.
    const arrayOpcionesFunctions = [
        '1- Ejemplos que retornan funciones',
        '2- Ejemplos que se les pasan funciones por parametro'
    ]

    const optionsFunctions = doWileMenu(arrayOpcionesFunctions)
    console.log(optionsFunctions);

    if (optionsFunctions == 1) {
        function mayorQue(num) {
            return (m) => m < num
        }
        // guardamos en una variable la funcion que nos devuelve la funcion de orden superior y le pasamos por parametro el numero que queremos unsar como escala
        let mayorQueDiez = mayorQue(10)

        // pasamos por parametro el valor que queremos verificar en la variable que contiene la funcon dentro
        console.log(mayorQueDiez(12)); //true
        console.log(mayorQueDiez(8)); //false

        function setConditional(cond) {
            if (cond == 'menor') {
                return (a, b) => {
                    a < b
                }
            } else if (cond == 'mayor') {
                return (a, b) => {
                    a > b
                }
            } else if (cond == 'igual') {
                return (a, b) => {
                    a < b
                }
            }
        }
        let mayor = setConditional('mayor')
        let menor = setConditional('menor')
        let igual = setConditional('igual')


        console.log(mayor(10, 8)); //true
        console.log(menor(10, 8)); // false
        console.log(igual(10, 8)); //false
    }

    if (optionsFunctions == 2) {

        // ejemplos de funciones pasadas por parametro

        const numNaturalesBetween = (base, top, func) => {
            let arrayNumbers=[];
            let arrayNaturals=[];
            for (let index = base; index < top; index++) {
                arrayNumbers.push(index)
            }
            console.log(arrayNumbers);
            for (const item of arrayNumbers) {
                let natural =  func(item)
                if (natural!=undefined)  {            
                    arrayNaturals.push(natural)
                }
                
            }
            return arrayNaturals
        }
        const findNaturals = (num) => {
            let nNat
            for (let index = 2; index <= num; index++) {
                if (Number.isInteger(num / index)) {
                    if (index < num) {
                        break
                    } else {
                        nNat = num
                    }
                }
            };
            return nNat
        }
        // ejemplos de la funcion findNaturals
        let siete = findNaturals(7)
        let diez = findNaturals(10)
        console.log('siete: ', siete); //7
        console.log('diez: ', diez); //''

        // llamando a la funcion para encontrar los numeros naturales que existen entre dos numeros pasados por parametros.

        let numerosNaturales = numNaturalesBetween(10, 150, findNaturals);
        console.log('array de numeros naturales entre 10 y 30', numerosNaturales);
    }

    salida(optionsFunctions, selectOptions)
}