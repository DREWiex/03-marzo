const objVestido = {
    precio: 400,
    descuento: 10,
};


const neto = (precio, descuento) => {

    let resultado = (400 - (descuento * precio / 100));
    return `El precio neto es ${resultado} euros.`;

};

console.log(neto(objVestido.precio, objVestido.descuento));