//* Pedirle al usuario una frase y decirle si es palíndromo o no.  Un palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
//* Ejemplos de palíndromos para probar: "La ruta nos aporto otro paso natural", “reconocer”, "Atar a la rata", “Dábale arroz a la zorra el abad”, “Somos o no somos”, “A ti no, bonita”, “Allí ves a Sevilla”, “Amad a la dama”, “Amar da drama”, “Arriba la birra”.


    let frase;


    const getFrase = () => {

        frase = prompt('Indica una frase: ');
        return frase;

    };


    // const validarFrase = () => {

    //     const regExp = /[a-z]/gi

    // };


    const invertirFrase = () => {

        let separar = frase.split('');
        console.log(separar);

        let voltear = separar.reverse();
        console.log(voltear);

        let unir = voltear.join('');
        console.log(unir);

        if(frase == unir){
            alert('Sí es palíndromo');
        }else{
            alert('No es palíndromo');
        }

    };


    getFrase();
    invertirFrase();