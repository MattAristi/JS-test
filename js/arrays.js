const arrays = () => {

    let optionArrays = doWileCheckNumber(arrays, 2, '1- sintaxis y lectura.', '2- Simulacion carrito de compra.')


    if (optionArrays == 1) {



        //func constructora de objetos

        class Articulos {
            constructor(categoria, nombre, precioU, cantidad) {
                this.categoria = categoria;
                this.nombre = nombre;
                this.precioU = precioU;
                this.cantidad = cantidad;
            }

        }

        // declaracion de array con algunos elementos.

        const arrayB = new Array([0], [1], [2], [3], 'bla') // esta manera no se usa mucho
        console.log('llamar array basico: ', arrayB);

        const carrito = ['Carrefour', [1.21, 0.21, 0.1], {
            categoria: 'verduras',
            nombre: 'cebolla',
            precio: '120',
            cantidad: 1,
        }];

        // llamar a un array entero
        console.log('Array: Sintaxis y lectura.');
        console.log('Array carrito: ', carrito);

        //llamar a un elemento del array por su coordenada
        console.log('Array carrito[0]: ', carrito[0]);
        console.log('Array carrito[1]: ', carrito[1]);
        console.log('Array carrito[2]: ', carrito[2]);
        console.log('Array carrito[1][2]: ', carrito[1][2]);

        alert('En consola se muestra el array y cada uno de sus elementos')

        // Recorre a un objeto dentro de el array

        const recorrerObjetosEnArray = (objeto) => {
            let i = 0
            for (const property in objeto) {

                console.log(`${(i==0 ? 'Poropiedades del objeto buscado: \n':'')} ${property}: ${objeto[property]}`);
                i++
            }
        }

        const articulo2 = new Articulos('fruta', 'manzana', 130, 1.5)
        const articulo3 = new Articulos('fruta', 'banana', 270, 4)
        const articulo4 = new Articulos('electronica', 'macbook air', 350000, 1)
        const articulo5 = new Articulos('bebidas', 'fernet', 1300, 4)

        // Pushea un objeto en la ultima posicion dentro de un array.


        const pushearObjeto = (objeto) => {
            carrito.push(objeto)
        }
        pushearObjeto(articulo2)
        pushearObjeto(articulo4)
        pushearObjeto(articulo5)


        recorrerObjetosEnArray(carrito[2]);
        alert('En consola se muestra el objeto dentro del carrito')


        console.log('Array con el objeto pusheado: ', carrito);
        alert('En consola se muestra el array con el objeto pusheado dentro del carrito')

        // Shiftea un objeto en la primera posicion dentro de un array.

        const unShiftearObjeto = (objeto) => {
            carrito.unshift(objeto)
        }
        unShiftearObjeto(articulo3)
        console.log('Array con el objeto agregado al principio: ', carrito);
        alert('En consola se muestra el array con el objeto agregado al principio')

        // Borra el ultimo elemento dentro del array.


        const popearObjeto = (objeto) => {
            carrito.pop(objeto)
        }
        popearObjeto()
        console.log('Array sin el ultimo objeto: ', carrito);
        alert('En consola se muestra el array sin el ultimo objeto del carrito')

        // Borra el primer elemento dentro del array.


        const shiftearObjeto = (objeto) => {
            carrito.shift(objeto)
        }
        shiftearObjeto()
        console.log('Array sin el primer objeto: ', carrito);
        alert('En consola se muestra el array sin el primer objeto anterior dentro del carrito')

        // Borra los dos objetos que quedan dentro del array con metodo splice con 2 parametros,
        // Parametros: ubicacion del primer elementos y a parir de ahi cuantos queres sacar.


        const splicearObjetos = (objeto) => {
            carrito.splice(objeto)
        }
        splicearObjetos(2, 2)
        console.log('Array sin objetos: ', carrito);
        alert('En consola se muestra el array sin objetos dentro del carrito')




        selectOptions()

    }
    if (optionArrays == 2) {

        //app simulacion carrito de compras Jumbo

        // Carga de Array de productos simulando carga de datos backend
        const jumbo = [{
                id: 1,
                categoria: 'verduleria',
                nombre: 'manzanas',
                tipo: 'verdes',
                precioU: 230,
                unidad: 'Kg',
                stock: 20,

            },
            {
                id: 2,
                categoria: 'verduleria',
                nombre: 'peras',
                tipo: 'mendocinas',
                precioU: 270,
                unidad: 'Kg',
                stock: 20,

            },
            {
                id: 3,
                categoria: 'carniceria',
                nombre: 'pechito de cerdo',
                tipo: 'premium',
                precioU: 1500,
                unidad: 'Kg',
                stock: 10,

            },
            {
                id: 4,
                categoria: 'carniceria',
                nombre: 'entraña',
                tipo: 'standard',
                precioU: 1800,
                unidad: 'Kg',
                stock: 10,

            },
            {
                id: 5,
                categoria: 'bebidas',
                nombre: 'coca-cola',
                tipo: '500cc',
                precioU: 140,
                unidad: 'unidad',
                stock: 20,

            },
            {
                id: 6,
                categoria: 'bebidas',
                nombre: 'manaos',
                tipo: '500cc',
                precioU: 30,
                unidad: 'unidad',
                stock: 20,

            }
        ]

        const carritoJumbo=[];

        //funciones de la app

        const agregarProductosJumbo=()=>{

            let listaJumboMenu = 'Seleccionar un producto: \n'
            for (const item of jumbo) {
                listaJumboMenu= listaJumboMenu + (`${item.id}- ${item.nombre} ${item.tipo} $${item.precioU} \n`)
            }
            let itemAgregado = parseInt(prompt(listaJumboMenu))
            let cantidadAgregada = parseInt(prompt('Ingrese la cantidad deseada: '))
            return [itemAgregado, cantidadAgregada]
        }

        const mostrarCarritoJumbo = (carrito)=>{
            let listCarrito='Productos agregados al carrito de compras: \n'
            
            for (const item of carrito) {
                
                listCarrito = listCarrito + (`Art ${item.id}- ${item.nombre} ${item.tipo}\n Precio por unidad: $${item.precioU}\n Cantidad: ${item.cant} ${item.unidad}${((item.cant>1 && item.unidad=='unidad')? 'es': '')} .\n Precio total $${item.total}. \n\n`)
            }
            alert(listCarrito);
        }
        const borrarItemJumbo= ()=>{
            let listaJumboBorrar = 'Seleccionar el producto que desea eliminar. \n'
            for (const item of carritoJumbo) {
                listaJumboBorrar= listaJumboBorrar + (`${item.id}- ${item.nombre} ${item.tipo} Cantidad: ${item.cant} Total: $${item.total} \n`)
            }
            let itemEliminar = parseInt(prompt(listaJumboBorrar))
            return [itemEliminar]
        }

        //app
        const JumboStore = () => {

        //menu de compra

        let selectionJumboStore= doWileCheckNumber(JumboStore, 4, '1- Agregar productos', '2- mostrar carrito', '3- Eliminar productos');

        //agregar producto

        if (selectionJumboStore==1){

            itemAddCarrito=agregarProductosJumbo()
            for (const item of jumbo ) {
                if (item.id == itemAddCarrito[0]){
                    newItemCarrito = item;
                    newItemCarrito.cant=itemAddCarrito[1];
                    newItemCarrito.total=newItemCarrito.cant * newItemCarrito.precioU
                    carritoJumbo.push(newItemCarrito)
                }
            }
            
            console.log('Agregó: ',carritoJumbo);
            JumboStore()
        }
        if (selectionJumboStore==2){
            mostrarCarritoJumbo(carritoJumbo)
            console.log('Mostrar: ',carritoJumbo);
            JumboStore()
        }

        if (selectionJumboStore==3){
            eliminarItem = borrarItemJumbo()
            let i=0;
            for (const item of carritoJumbo ) {
                if (item.id == eliminarItem){
                    carritoJumbo.splice(i,1);
                }
                i++
            }
            console.log('Despues de borrar: ',carritoJumbo);
            JumboStore()

        }

        if (selectionJumboStore=='x'){
            salida(selectionJumboStore)
        }
        if (selectionJumboStore=='v'){
            arrays()
        }


        }
        JumboStore()


    }
    salida(optionArrays)
}