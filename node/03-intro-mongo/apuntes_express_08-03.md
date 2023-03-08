08/03/2023

Continuación Express.

* Función middleware: función que se ejecuta antes de la solicitud (app.get('/)…).

* Los "atributos" de los template engines: "views" (valor: (la ruta = "`${__dirname}/views")) y "view engine" (valor: "ejs").

# express.Router:

Por cada ruta del front, tendré cuatro en el back (get, post, put, delete).

En la función middleware de rou… En la parte del back llamaré /admin (si fuera una api = /api).

- Creamos la carpeta controllers. En un archivo frontControllers.js

frontRouter = se encarga de distribuir las rutas
frontControllers = se encarga de la tarea que realizará cada ruta

Accedienco a la propiedad "export" del objeto "module": export.module = { getIndex(), getServicios() };

La ruta del 404 siempre va al final de las rutas. Utilizamos una función middleware: no requiere una ruta, solo una función callback.

Las rutas con variables (/servicios/:id) irán al final, de forma que solo salte si no se cumple todo lo anterior. Ejemplo:
router.get('/servicios', (getServicios));
router.get('/servicios/cosa', (getServicios));
router.get('/servicios/:id', (getServicios)); --> variable
Porque si llamo a cosa y la ruta con id está antes, entrará por ahí, en cambio, como está ahora, entrará primero a cosa. Esto será útil cuando tengamos categorías dentro de servicios, por ejemplo.