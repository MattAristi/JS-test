const functions = () => {

    //funciones de ordenn superior
    // son funciones que retornan una funcion o la recibe como parametro.


    function mayorQue (num) {
        return (m) => m < num
    }
    // guardamos en una variable la funcion que nos devuelve la funcion de orden superior y le pasamos por parametro el numero que queremos unsar como escala
    let mayorQueDiez = mayorQue(10)
    
    // pasamos por parametro el valor que queremos verificar en la variable que contiene la funcon dentro
    console.log(mayorQueDiez(12)); //true
    console.log(mayorQueDiez(8));  //false

    function setConditional (cond){
        if (cond=='menor') {
            return (a,b) => {a<b}
        }
        else if (cond=='mayor') {
            return (a,b) => {a>b}
        }
        else if (cond=='igual') {
            return (a,b) => {a<b}
        }

        let mayor=setConditional('mayor')
        let menor=setConditional('menor')
        let igual=setConditional('igual')


        console.log(mayor(10,8)); //true
        console.log(menor(10, 8));// false
        console.log(igual(10, 8)); //false
    }
}