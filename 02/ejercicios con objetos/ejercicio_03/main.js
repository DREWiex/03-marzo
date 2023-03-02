class Piedra {
    constructor (masa, volumen) {
        this.masa = masa,
        this.volumen = volumen
    };

    densidad(){
        let calcular = this.masa / this.volumen;
        return `La densidad es igual a ${calcular}.`
    };

};

const oro = new Piedra(194, 10);
console.log(oro.densidad().replace('.', ','));