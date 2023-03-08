class Ficha {
    constructor(nombre){
        this.nombre = nombre,
        this.km = [],
        this.sesiones;
        this.anotar = function(...km){
            
            this.km.push(...km);
            this.sesiones = this.km.length;

        };
        this.media = function(km, sesiones){
            
            let total = 0;
        
            let calcularMedia = km.forEach((item) => (total += item) / sesiones);
    
            return calcularMedia;

        };
    };
};

const fichaJorge = new Ficha('Jorge');
console.log(fichaJorge.anotar(8, 10, 4));
