1) Mostrar todas las bases de datos:
    show dbs
Nota: este comando solo muestra las bases de datos donde hay al menos una colección.

2) Entrar en una base de datos concreta:
    use <nombreBaseDatos>

3) Crear una base de datos:
    use <nombreBaseDatos>

4) Ver las colecciones de una base de datos:
    use <nombreBaseDatos>
    show collections

5) Acceder a los datos de una colección:
    db.<nombreColeccion>.find()

CRUD (create, read, uptade y delete):

1. Create:

- Añadir un documento a la colección:
    db.<nombreColeccion>.insertOne({"propiedad":"valor"})

- Añadir varios documentos a una colección:
    db.<nombreColeccion>.insertMany([{"propiedad":"valor"}, {"propiedad":"valor"}])

2. Read:

- Leer todos los documentos:
    db.<nombreColeccion>.find()

- Leer "x" cantidad de elementos:
    dv.<nombreColeccion>.find().limit(2)

- Leer accediendo por filtro:
    db.<nombreColeccion>.find({"propiedad":"valor"})
    db.<nombreColeccion>.find({"propiedad":"valor", "propiedad":"valor"})

* Comparadores:
    - gt = greater than (>)
        db.<nombreColeccion>.find({"edad":{$gt: 20}})
    - gte = greater than equal (>=)
        db.<nombreColeccion>.find({"edad":{$gte: 20}})
    - lt = lower than (<)
        db.<nombreColeccion>.find({"edad":{$lt: 20}})
    - lte = lower than equal (<=)
        db.<nombreColeccion>.find({"edad":{$lte: 20}})