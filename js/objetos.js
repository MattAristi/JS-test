function objetosT() {

    let optionObject = doWileCheckNumber(objetosT, 2, '1- Sintaxis y declaracion de objetos', '2- funciones constructoras')

    if (optionObject == 1) {

        //sintaxis y declaracion de objetos

        const persona1 = {
            Nombre: 'Matias',
            Apellido: 'Aristimuño',
            Edad: 40,
            altura: 1.7
        }
        const persona2 = {
            Nombre: 'Jorgelina',
            Apellido: 'do Rosario',
            Edad: 35,
            altura: 1.6
        }
        //como llamar objetos y propiedades o atributos.
        // llamar al objeto es directo
        console.log(persona1);
        //para llamar a una propiedad o atributo hay dos maneras
        console.log(persona1.Nombre);
        console.log(persona2['Nombre']);
        selectOptions()
    }

    if (optionObject == 2){
        //funciion constructota
        function Mueble ([tipo, modelo, material, formato, color, indcar]) {
            (tipo ? this.tipo = tipo : null);
            (modelo ? this.modelo = modelo.toUpperCase():null);
            (material ? this.material = material:null);
            (formato ? this.formato = formato:null);
            (color ? this.color = color: null);
            (indcar ? this.indcar=true : null)
            this.coment = function(){console.log('El modelo '+this.modelo+' es un mueble aprobado por la INDCAR');}
        }
        let objectMueble; 
        let arrayMueble;
        do {
            objectMueble= prompt('Ingresa los datos:\n "tipo, modelo, material, formato, color, Certificado INDCAR en caso de tenerlo"\n En ese orden y separados solo por un espacio entree si.\n Ingresar minimo 5 datos, maximo 6.\n Para salir escribí una x')
            arrayMueble = stringArray(objectMueble)
            console.log(arrayMueble);
            console.log(arrayMueble.length);
            ( arrayMueble.length != 5 && arrayMueble.length != 6 && arrayMueble[0]!='x' ? alert('Los datos ingresados no son correctos.'): null)
            
        } while (arrayMueble.length != 5 && arrayMueble.length != 6 && arrayMueble[0]!='x');
        
        if (arrayMueble.length == 5 || arrayMueble.length == 6) {
            const mueble1 = new Mueble(arrayMueble)

        console.log(mueble1);
        if (mueble1.indcar==true){
        console.log('console log: ',mueble1.coment())
        }
        }
    selectOptions()
    }
    salida(optionObject)
    
}