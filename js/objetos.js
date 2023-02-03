const objetos = () => {

    let optionObject = doWileCheckNumber(1, '1- Sintaxis y declaracion de objetos')

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
        console.log(persona1.nombre);
        console.log(persona1[nombre]);

    }
    selectOptions()
}