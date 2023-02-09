const arrays=() => {

    let optionArrays = doWileCheckNumber(arrays, 1, '1- sintaxis y lectura.', '2- Aplicaciones.')


    if (optionArrays==1) {

        //func constructora de objetos

        class Articulos {
            constructor (categoria, nombre, precioU, cantidad){
                this.categoria=categoria;
                this.nombre=nombre;
                this.precioU=precioU;
                this.cantidad=cantidad;
            }

        }



        // declaracion de array con algunos elementos.

        const carrito=['Carrefour', 1.21, {categoria: 'verduras', nombre: 'cebolla', precio: '120', cantidad: 1,}];


        // llamar a un elemento del array
        console.log('Array: Sintaxis y lectura.');
        console.log('Array carrito', carrito);
        console.log('Array carrito[0]', carrito[0]);
        console.log('Array carrito[1]', carrito[1]);
        console.log('Array carrito[2]', carrito[2]);

        alert('En consola se muestra el array y cada uno de sus elementos')

        // Recorre a un objeto dentro de el array

        const recorrerObjetosEnArray =(objeto)=>{
            let i = 0
            for (const property in objeto) {
                
                console.log(`${(i==0 ? 'Poropiedades del objeto buscado: \n':'')} ${property}: ${objeto[property]}`);
                i++
            }
        }

        const articulo2 = new Articulos ('fruta', 'manzana', 130, 1.5)
        const articulo3 = new Articulos ('fruta', 'banana', 270, 4)
        const articulo4 = new Articulos ('electronica', 'macbook air', 350000, 1)
        const articulo5 = new Articulos ('bebidas', 'fernet', 1300, 4)
        
        // Pushear un objeto en la ultima posicion dentro de un array.
        

        const pushearObjeto = (objeto)=>{
            carrito.push(objeto)
        }
        pushearObjeto(articulo2)
        pushearObjeto(articulo4)
        pushearObjeto(articulo5)
        

        recorrerObjetosEnArray(carrito[2]);
        alert('En consola se muestra el objeto dentro del carrito')
        

        console.log('Array con el objeto pusheado: ',carrito);
        alert('En consola se muestra el array con el objeto pusheado dentro del carrito')

        // shiftear un objeto en la primera posicion dentro de un array.
        
        const unShiftearObjeto = (objeto)=>{
            carrito.unshift(objeto)
        }
        unShiftearObjeto(articulo3)
        console.log('Array con el objeto agregado al principio: ',carrito);
        alert('En consola se muestra el array con el objeto agregado al principio')

        // borrar el ultimo elemento dentro del array.


        const popearObjeto = (objeto)=>{
            carrito.pop(objeto)
        }
        popearObjeto()
        console.log('Array sin el ultimo objeto: ',carrito);
        alert('En consola se muestra el array sin el ultimo objeto del carrito')

        // borrar el primer elemento dentro del array.


        const shiftearObjeto = (objeto)=>{
            carrito.shift(objeto)
        }
        shiftearObjeto()
        console.log('Array sin el primer objeto: ',carrito);
        alert('En consola se muestra el array sin el primer objeto anterior dentro del carrito')

        // borrar los dos objetos que quedan dentro del array con metodo splice con 2 parametros,
        // ubicacion del primer elementos y a parir de ahi cuantos sacar.


        const splicearObjetos = (objeto)=>{
            carrito.splice(objeto)
        }
        splicearObjetos(2,2)
        console.log('Array sin objetos: ',carrito);
        alert('En consola se muestra el array sin objetos dentro del carrito')




        selectOptions()

    }
    salida(optionArrays)
}