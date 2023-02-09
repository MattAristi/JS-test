function objetosT() {

    let optionObject = doWileCheckNumber(objetosT, 3, '1- Sintaxis y declaracion de objetos', '2- funciones constructoras', '3- Clases, constructores y metodos')

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

    if (optionObject == 2) {
        //funciion constructota para generar objetos tipo mueble con sus atributos
        function Mueble([tipo, modelo, material, formato, color, indcar]) {
            (tipo ? this.tipo = tipo : null);
            (modelo ? this.modelo = modelo.toUpperCase() : null);
            (material ? this.material = material : null);
            (formato ? this.formato = formato : null);
            (color ? this.color = color : null);
            (indcar ? this.indcar = true : null)
            this.coment = function () {
                console.log('El modelo ' + this.modelo + ' es un mueble aprobado por la INDCAR');
            }
        }
        // declaracion de variables donde se guardara el array ingresado por prompt
        let objectMueble;
        let arrayMueble;

        // do while para validar el dato ingresado
        do {
            objectMueble = prompt(userName+' ingresa los datos:\n "tipo, modelo, material, formato, color, Certificado INDCAR en caso de tenerlo"\n En ese orden y separados solo por un espacio entree si.\n Ingresar minimo 5 datos, maximo 6.\n Para salir escribí una x')
            arrayMueble = stringArray(objectMueble)
            console.log(arrayMueble);
            console.log(arrayMueble.length);
            (arrayMueble.length != 5 && arrayMueble.length != 6 && arrayMueble[0] != 'x' ? alert('Los datos ingresados no son correctos.') : null)

        } while (arrayMueble.length != 5 && arrayMueble.length != 6 && arrayMueble[0] != 'x');


        // condicional para validar que el dato a ingresar es correcto
        if (arrayMueble.length == 5 || arrayMueble.length == 6) {
            // bloque para asignar valores en los metodos llamando al constructor
            const mueble1 = new Mueble(arrayMueble)
            

            console.log(mueble1);

            //solo en el caso de que exista comprobante lo verifique y muestre por consola
            if (mueble1.indcar == true) {
                console.log('console log: ', mueble1.coment())
            }
        }
        selectOptions()
    }
    if (optionObject == 3) {

        //unidades
        const uDist= 'km'
        const uMasa= 'kg'
        const uVol= 'm³'
        const uAcel= 'm/s\xB2'
        const uDensidad='kg/m\xB2'
        // clases

        //la clase permite tener un constructor y los metodos separados adentro

        //sintaxis

        class Planeta {
            constructor(nombre, masa, volumen, diametro, gravedad, orbita, color, estrella, satelites) {
                this.nombre = nombre;
                this.masa = [masa, uMasa];
                this.volumen = [volumen, uVol];
                this.diametro = [diametro, uDist];
                this.gravedad = [gravedad, uAcel];
                this.orbita = [orbita, uDist];
                this.color = color;
                this.estrella = estrella;
                this.satelites = satelites;
            }
            // meto,dos para el constructor
            density() {
                this.densidad = [this.masa[0] / this.volumen[0], uDensidad]
            }
            
        }
        
        const planeta1 = new Planeta('Tierra', 5.97 * Math.pow(10, 24), 1.08 * Math.pow(10, 12), 12704, 9.8, 147597870, 'azul', 'Sol', true)
        const planeta2 = new Planeta('Marte', 6.41 * Math.pow(10, 23), 1.61 * Math.pow(10, 11), 6780, 3.72, 227936640, 'rojo', 'Sol', true)

        // muestra por consola antes de aplicarle el metodo
        console.log('antes  ',planeta1);
        alert('hola')
        planeta1.density()
        // muestra por consola el dato ingresado por utilizando el metodo del constructor
        console.log('Densidad: ', planeta1.densidad);
        // muesttra por consola como quedan los dos planetas ingresados
        console.log(planeta1);
        console.log(`${planeta1.masa[0]} ${planeta1.masa[1]}`);
        console.log(planeta2)

        selectOptions()
    }

    salida(optionObject)

}