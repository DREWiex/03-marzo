//TODO: Clases

//! No se puede utilizar la palabra reservada function en las clases

class Persona { //* el nombre de la clase siempre empieza en mayúscula
    let nombre;
    let edad;
    constructor(name, age){ //* método constructor
        nombre = name; //*
        edad = age;
    };

    get nombrePersona(){
        return nombre;
    }

    set nombrePersona(nombre){
        this.nombre = nombre
    }

};

const persona1 = new Persona('Ana', 30)
console.log(persona1);


get //* súper operador
set //* súper operador