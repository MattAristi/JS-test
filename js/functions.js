const functions = () => {

    //funciones de ordenn superior
    // son funciones que retornan una funcion o la recibe como parametro.
    
    //opciones de la pagina functions.
    const arrayOpcionesFunctions = [
        '1- Ejemplos que retornan funciones',
        '2- Ejemplos que se les pasan funciones por parametro'
    ]
    const optionsFunctions = doWileMenu(arrayOpcionesFunctions)
    
    // funciones de orden mayor, ejemplos simples las funciones retornan funciones.
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
        // guardamos la funcion que retorna una funcion en una variable
        let mayor = setConditional('mayor')
        let menor = setConditional('menor')
        let igual = setConditional('igual')


        console.log(mayor(10, 8)); //true
        console.log(menor(10, 8)); // false
        console.log(igual(10, 8)); //false
    }

    
    // ejemplos de funciones pasadas por parametro
    if (optionsFunctions == 2) {

        // ejemplos de funciones pasadas por parametro

        const numBetween = (base, top, func) => {
            let arrayNumbers=[];
            let arrayNaturals=[];
            for (let index = base; index < top; index++) {
                arrayNumbers.push(index)
            }
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

        const findLipYear = (num)=>{
            let year;
            for (let index = 1582; index < 4000; index=index+4) {
                if (index==num){
                year=num
                }
            }
            return year
        }
        // prueba de la funcion findNaturals que devuelve el numero solo si es natural.
        let siete = findNaturals(7)
        let diez = findNaturals(10)
        console.log('siete: ', siete); //7
        console.log('diez: ', diez); //undefined

        // llamando a la funcion de OS para encontrar los numeros naturales que existen entre dos numeros pasados por parametros.

        let numerosNaturales = numBetween(10, 150, findNaturals);

        // llamando a la funcion de OS para encontrar los anios biciestos entre dos años pasados por parametro.

        let aniosBiciestos = numBetween(1776,1870,findLipYear)
        console.log('array de numeros naturales entre 10 y 30', numerosNaturales);
        console.log('array de años biciestos entre 1776 y 1870', aniosBiciestos);

        
    }

    salida(optionsFunctions, selectOptions)
}