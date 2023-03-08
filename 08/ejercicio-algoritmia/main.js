//TODO: Hacer una función que muestre la tabla de multiplicar. Preguntar al usuario de qué número quiere la tabla y si no dice ninguno, que se muestre por defecto la del 2. Por defecto se van a mostrar 10 términos de la tabla salvo que se indique lo contrario.

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const div = document.querySelector('#tabla-multiplicar');


const getNumber = () => {

    let pregunta = confirm('¿Quieres multiplicar?');

    if(pregunta){

        let number = prompt('Indica el número que quieres multiplicar:');

        return pintarTabla(number);

    }else{

        alert('Me da igual. Esta es la tabla de multiplicar del 2:');

        return pintarTabla(2);

    };

};


const tablaMultiplicar = (number) => {

    let multiplicar = arrayNumbers.map((item) => item * number);

    return multiplicar;

};


const pintarTabla = (number) => {

    const elementP = document.createElement('P');
    elementP.innerHTML = `Esta es la tabla de multiplicar del <strong>${number}</strong>: <strong>${tablaMultiplicar(number)}</strong>`;

    div.append(elementP);

};


getNumber();