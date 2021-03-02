db.alumnos.drop()
db.alumnos.insertMany([
    {
        _id:1,
        matricula:2233225566,
        nombre:"paula",
        apellido:"lopez",
        sexo:"f",
        idg:1,
        edad:20,
        notas:[5,7,8,3,6,9,7],
        carrera:true,
        fechamatricula:new Date("2020,2,3")
       
    },
    {
        _id:2,
        matricula:2233225345,
        nombre:"joel",
        apellido:"mendez",
        sexo:"m",
        idg:1,
        edad:25,
        notas:[8,6,9,6,8,7],
        carrera:true,
        fechamatricula:new Date("2020,1,2")
    },
    {
        _id:3,
        matricula:2233285868,
        nombre:"fernando",
        apellido:"ramirez",
        sexo:"m",
        idg:2,
        edad:22,
        notas:[3,2,5,7,5,6],
        carrera:true,
        fechamatricula:new Date("2020,1,14")
    },
    {
        _id:4,
        matricula:2233756765,
        nombre:"laura",
        apellido:"herrera",
        sexo:"f",
        idg:2,
        edad:25,
        notas:[9,9,7,8,6,8],
        carrera:false,
        fechamatricula:new Date("2020,1,24")
    },
    {
        _id:5,
        matricula:2234568596,
        nombre:"mario",
        apellido:"torres",
        sexo:"m",
        idg:3,
        edad:30,
        notas:[6,6,5,4,7,8],
        carrera:true,
        fechamatricula:new Date("2020,4,2")
    },
    {
        _id:6,
        matricula:2296856777,
        nombre:"carla",
        apellido:"lopez",
        sexo:"f",
        idg:3,
        edad:23,
        notas:[8,7,5,6,7,9],
        carrera:false,
        fechamatricula:new Date("2020,3,12")
    },
    {
        _id:7,
        matricula:22987645312,
        nombre:"fernanda",
        apellido:"pizarro",
        sexo:"f",
        idg:4,
        edad:27,
        notas:[7,7,9,8,9,8],
        carrera:false,
        fechamatricula:new Date("2020,5,29")
    },
    {
        _id:8,
        matricula:223457698104,
        nombre:"antonio",
        apellido:"fernandez",
        sexo:"m",
        idg:5,
        edad:23,
        notas:[1,3,1,5,4,6],
        carrera:false,
        fechamatricula:new Date("2020,8,7")
    },
    {
        _id:9,
        matricula:22345816970,
        nombre:"pedro",
        apellido:"medina",
        sexo:"m",
        idg:6,
        edad:25,
        notas:[5,4,4,5,3,6],
        carrera:false,
        fechamatricula:new Date("2020,9,11")
    },
    {
        _id:10,
        matricula:22387610469,
        nombre:"Maria",
        apellido:"delgado",
        sexo:"f",
        idg:6,
        edad:33,
        notas:[9,9,9,6,9,9],
        carrera:true,
        fechamatricula:new Date("2020,4,6")
    },
    {
        _id:11,
        matricula:220579134692,
        nombre:"paco",
        apellido:"de castro",
        sexo:"m",
        idg:4,
        edad:22,
        notas:[5,6,9,8,6,7],
        carrera:true,
        fechamatricula:new Date("2020,12,31")
    },
    {
        _id:12,
        matricula:22069741308,
        nombre:"yulia",
        apellido:"castaño",
        sexo:"f",
        idg:5,
        edad:20,
        notas:[9,3,6,8,7,6],
        carrera:false,
        fechamatricula:new Date("2020,1,2")
    },
  ])
    