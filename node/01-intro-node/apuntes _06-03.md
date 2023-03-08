06/03/2023

Backend con Node.js - Introducción

Node nos permite trabajar JS desde el servidor.

* Node no sirve con cualquier servidor.

SEMVER:
1) Al comenzar un proyecto, Node nos pide especificar la versión del mismo: 0.0.1 (así empezamos) --> cuando ya desplegamos: 1.0.0.

En Node, al igual que en JS, podemos trabajar con módulos.

export default

Dependencias: todo lo que me traigo de afuera (lo que no desarrollo yo: por ej., lo que me traigo de librerías).

Dependencias de producción: componentes que afectan activamente a la app. Ej.: validación de formulario.

Otras dependencias solo actúan en el momento del desarrollo que ayudan al desarrollador: poner colores al console.log(), por ej.

--> "start": "node (archivo js)" es obligatorio para que el servidor ejecute el js.
y lo llamamos en la consola: npm start (así ejecuta el js)

--> npm run test: para ejecutar el test correspondiente.

Es importantísima la destructuración en los módulos.

INSTALAR COMPONENTES EXTERNOS: npm i (nombre del componente).

Creamos el archivo .gitignore (archivo oculto) para indicarle a git los archivos a los que no quiero hacerle seguimiento. Dentro le diremos, por el nombre del archivo, a los que no queremos que siga

Módulo http ya está instalado en node, pero sí tenemos que instanciarlo/requerirlo en el js

--> Las variables de entorno son las que se encuentran en el servidor

Configuramos el puerto dentro del js de la siguiente manera:
const port = process.env.PORT || 3000; (si el servidor no devuelve un puerto, le asigna el 3000 automáticamente)
Para acceder a las variables de entorno: 
process (objeto)
env (variable)
PORT ()

Comprobar en el navegador si está funcionando: http://localhost:3000/

matar al servidor: ctrl + c (también para Mac) --> esto no haría falta una vez instalado el nodemon

NODEMON
Añadir script en el package.json

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app"
}

Dependencias de desarrollo (utilizarlo solo durante el desarrollo) / dependencias de producción (utilizarlos en la app)

npm uninstall (nombre del componente, ej.: nodemon o colors)