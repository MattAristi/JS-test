const arrays=() => {

    let optionArrays = doWileCheckNumber(arrays, 1, '1- sintaxis y lectura.', '2- Aplicaciones.')


    if (optionArrays==1) {
        // declaracion de array con algunos elementos.

        const carrito=['Carrefour', {nombre: 'cebolla', precio: '120', cantidad: '0',}, 1.21];


        // llamar a un elemento del array
        console.log('Array: Sintaxis y lectura.');
        console.log('Array carrito', carrito);
        console.log('Array carrito[0]', carrito[0]);
        console.log('Array carrito[1]', carrito[1]);
        console.log('Array carrito[2]', carrito[2]);

        alert('En consola se muestra el array y cada uno de sus elementos')

        // recorrer a un objeto dentro de el array

        const recorrerObjetoEnArray =(objeto)=>{
            
            for (const property in objeto) {
                console.log(`${property}: ${objeto[property]}`);
            }
        }

        recorrerObjetoEnArray(carrito[1]);
        alert('En consola se muestra el objeto dentro del carrito')
        selectOptions()
    }
    salida(optionArrays)
}