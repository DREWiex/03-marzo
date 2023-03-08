//TODO: Ejercicio algoritmia
//* Muestra un reloj en pantalla con fecha y hora y que se actualice cada segundo. Usar la función setTimeout().


//*** VARIABLES ***//

let fecha = new Date();



//*** FUNCIONES ***//

const fechaReloj = () => {

    let fechaActual = fecha.toLocaleDateString();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    let mensaje = `${fechaActual} ${hora}:${minutos}:${segundos}`;

    return mensaje;

};

const mostrar = () => {

    const ahora = fechaReloj();

    setTimeout( () => {console.log(ahora)}, '1000');

};

mostrar();