class Ficha {
    constructor(nombre){
        this.nombre = nombre,
        this.km = [],
        this.sesiones = 0
    };

    anotar(){

        do{
            this.sesiones = parseInt(prompt("¿Cuántas sesiones de ejercicios realizaste?"));
            if(isNaN(this.sesiones)){
                alert('¡Error! Indica un número válido.');
            };
        }while(isNaN(this.sesiones));

        for(let i = 1; i <= this.sesiones; i++){
            let pregunta = prompt(`¿Cuántos kilómetros recorriste en la sesión ${i}?`);
            this.km.push(pregunta);
        }

    };

    media(){

        let total = 0;
        
        let calcularMedia = this.km.forEach((item) => (total += item) / this.sesiones);

        return calcularMedia;
        
    };

};

const fichaJorge = new Ficha('Jorge');
fichaJorge.anotar();