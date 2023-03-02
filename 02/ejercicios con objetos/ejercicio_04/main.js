class Cuenta {
    constructor(nombre, saldo){
        this.nombre = nombre,
        this.saldo = saldo
    };

    ingresar(dinero){
        let total = this.saldo + dinero;
        return `Tienes un total de ${total} euros en tu cuenta.`;
    };

    retirar(dinero){
        if(this.saldo >= dinero){
            let total = this.saldo - dinero;
            return `Has retirado ${dinero} euros de tu cuenta y te quedan disponibles ${total} euros.`;
        }else{
            return 'No tienes saldo suficiente en tu cuenta.';
        }
    };

};

const cuentaCorriente = new Cuenta('Antonio', 100);
console.log(cuentaCorriente.retirar(100));