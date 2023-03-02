//TODO: POO: función constructora

//* Una función constructora NO puede retornar ningún valor
//* new --> palabra reservada para crear una instancia de un objeto

function alumno (nombre, edad, email) { //* función constructora

    this.nombre = nombre; //* propiedad pública (this. -> método)
    this.edad = edad; //* propiedad pública
    let correo = email; //* propiedad privada, por eso no sale en el console.log() de alumno1

    this.getDatos = function () {
        return `El e-mail de ${this.nombre} es ${email}`
    }

};

//* la función constructora se ejecuta en el mismo momento en que se hace una instancia del objeto (const alumno1 = new alumno())

const alumno1 = new alumno('Ana', 20, 'ana@correo.com'); //* instancia del objeto (función constructora)

console.log(alumno1);

console.log(alumno1.getDatos());
//* puedo acceder a este dato aunque sea privado porque la estoy declarando dentro de la misma función constructora