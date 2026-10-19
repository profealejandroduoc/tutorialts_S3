export interface Persona{
    id:number,
    nombre:string,
    edad: number,
    profesion:Profesion
}

export enum Profesion{
    Ingeniero='Ingeniero',
    Astronauta='Astronauta', //1
    Médico='Médico', //2
}

export const persona:Persona={
    id:1,
    nombre:'waco',
    edad:40,
    profesion:Profesion.Ingeniero
}



export const personas:Persona[]=[
    {id:1,nombre:'Wacoldo',edad:40, profesion:Profesion.Ingeniero},
    {id:2,nombre:'Diogenes',edad:30, profesion:Profesion.Astronauta},
    {id:3,nombre:'Tertuliano',edad:32, profesion:Profesion.Médico},
    {id:4,nombre:'Lucidoro',edad:38, profesion:Profesion.Ingeniero},
    {id:5,nombre:'Ladislao',edad:42, profesion:Profesion.Astronauta},
]
//console.log(persona);