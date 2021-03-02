/*en este aggregate se busca relacionar las dos colecciones, filtrar los alumnos que su sexo sea femenino,
y mediante un $project gestionar la salida de datos de ese match*/
db.alumnos.aggregate(
    
    {
        $lookup: {
            from: "grupos",
            localField: "idg",
            foreignField: "_id",
            as: "grupos"
        }
    },
    {$match:{sexo:"f"}},
    {$project:
        {
            _id:0,
            matricula:1,
            nombre:1}},

).pretty()
/*Con este aggregate se busca relacionar las dos colecciones,
 que solo aparezcan los hombres que tengan una nota media por encima del 7, 
 ya que la han seleccionado para una actividad especial*/ 
db.alumnos.aggregate(
    [
    {
        $lookup: {
            from: "clases",
            localField: "idg",
            foreignField: "_id",
            as: "grupos"
        }
    },
    {$match:{sexo:"m"}},
    {$project:
    {
        _id:0,
        matricula:1,
        nombre:1,
        aprllido:1,
        sexo:1,
        idg:1,
        notamedia:{$avg:"$notas"}

    }},
    {$match:{notamedia:{$gt:7}}}

    

 ] ).pretty()
/*el director del instituto ha pedido recoger los alumnos que sean mayores de 23 años y opten a una beca especial, 
para esto tienen que tener mediante una suma su nota de beca tiene que ser mayor de 40 para ser recibida*/ 
db.alumnos.aggregate(
[
{
        $lookup: {
            from: "clases",
            localField: "idg",
            foreignField: "_id",
            as: "grupos"
        }
    },
    {$match:{edad:{$gt:23}}},
    {$project:{
        matricula:1,
        nombre:1,
        sexo:1,
        notabeca:{$sum:"$notas"}
    }},
    {$match:{notabeca:{$gt:40}}},
]).pretty()