interface Persona{
    nombre:string,
    apellido:string,
    edad:number,
    direccion?:Direccion
}

interface Direccion{
    "calle":string,
    "numero":number
}

const waco:Persona={
    nombre:"Wacoldo",
    apellido:"Soto",
    edad:40,
    direccion:{
        calle:"Por ahi",
        numero:123
    }
}

const dio={...waco}
dio.nombre="Diogenes"
dio.apellido="Carrasco"
dio.edad=21
dio.direccion={
    calle:"Por allá",
    numero:666
}

const tertu:Persona={
    nombre:"Tertuliano",
    apellido:"Cruzat",
    edad:86,
    
}

console.log({waco});
console.log(dio);
console.log(tertu);
