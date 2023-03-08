PASOS A SEGUIR PARA INICIAR UN PROYECTO:

1) Crear el archivo app.js.
2) Inicializarlo en consola:
    npm init -y
3) En el package.json, añadir a scripts:
    "start": "node app.js",
    "dev": "nodemon app.js"
4) Crear archivos:
    4.1) .env (variables de entorno)
    4.2) .gitignore
        4.2.1) Incluimos: node_modules y .env
5) EXPRESS
    5.1) Instalar Express: npm i express
    5.2) Importar la librería:
        const express = require('express');
    5.3) "Instanciamos" Express:
        const app = express();
    5.4) Configuramos el puerto:
        const port = process.env.PORT || 3000;
    5.5) Respondemos a la solicitud del cliente: primer parámetro, la ruta; segundo parámetro, la función callback con dos parámetros:
        app.get('/', (req, res) => {
            res.send('Respuesta desde Express');
        });
Nota: siempre debemos indicar el primer parámetro (req) aunque solo vayamos a utilizar el segundo (res).
    5.6) Ponemos el servidor a la escucha:
    app.listen(port, () => {
        console.log(`Servidor por el puerto ${port}`);
    });
    5.7) Inicializamos el servidor: npm run dev.
6) Archivos estáticos.
    6.1) Crear la carpeta public.
    6.2) Configuramos la carpeta estática (función middleware):
        app.use(express.static(`${__dirname}/public`));
7) Template engines (motores de plantillas).
    7.1) Crear la carpeta views.
    7.2) Instalar ejs:
        npm i ejs
    7.3) Establecer ejs como template engine:
        app.set('view engine', 'ejs');
    7.4) Establecer la carpeta views:
        app.set('views', `${__dirname}/views`);
    7.5) Renderizar view:
        app.get('/', (req, res) => {
            res.render('index', {
                title: 'Ejemplo de título'
            });
        });
Nota: aquí ya tendría que crear los archivos .ejs en la carpeta views. Por ejemplo: index.ejs (este es el parámetro que le paso al res.render).

-X-

8) Routing: crear manejadores de rutas montables y modulares para tener las rutas ordenadas.
    8.1) Crear la carpeta routers.
        8.1.1) Crear el archivo donde configuraremos las rutas: routerFront.js.
        8.1.2) Importar la librería express:
            const express = require('express');
Nota: se puede hacer destructuring:
            const {Router()} = require('express');
        8.1.3) Llamar a la clase Router() de express:
            const router = Router();
        8.1.4) Crear la ruta (o cortar y pegar las rutas de la app.js cambiando el "app.get…" por "router.get…" –paso 5.5–).
        8.1.5) Exportar el módulo al final del archivo:
            module.exports = router;
        8.1.6) Crear la función middleware de la ruta en app.js:
            app.use('/', require('./routers/routerFront'));
    8.2) Crear la carpeta controllers.
        8.2.1) Crear el archivo donde "anidaremos" las rutas: frontControllers.js.
        8.2.2) Crear la ruta como una función (o cortar y pegar las rutas de routerFront.js cambiando el "router.get…" por "const getIndex = (req, res) => {}; –paso 8.1.4–).
        8.2.3) Exportar el módulo al final del archivo destructurando las funciones:
            module.exports = {getIndex};
        8.2.4) "Instanciar" en routerFront.js las rutas (ahora funciones) del archivo frontControllers:
            const {getIndex} = require('../controllers/frontControllers');
9) Crear la función middleware para el 404:
    app.use((req, res, next) => {
        res.status(404).render('404', {
            error: '404',
            msg: 'Página no encontrada'
        });
    });