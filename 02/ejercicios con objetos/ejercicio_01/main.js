class Alumno {
    constructor(nombre, ingles, programacion, html){
        this.nombre = nombre;
        this.ingles = ingles;
        this.programacion = programacion;
        this.html = html;
    }

    calcularMedia(){
        let media= parseInt((this.ingles + this.programacion + this.html) / 3);
        return `La nota media de ${this.nombre} es ${media}.`;
    }

    pintarMedia(){
        const div = document.querySelector('#pintar');

        const header = document.createElement('H3');
        header.textContent = this.calcularMedia();

        div.append(header);
    }

};

const alumnoUno = new Alumno ('Ubaldo', 8, 5, 9);
alumnoUno.pintarMedia();