import {persona, personas, Profesion, type Persona} from '../data/personas.data'

console.log(persona);

personas.forEach(p=>{
    console.log(p);
})


const getPersonabyId = (id:number): Persona | undefined=>{
    const persona=personas.find((p)=>{
        return p.id==id
    })

    return persona
}


const filtrarbyProfesion=(profesion:Profesion)=>{
    const resultadoFiltro= personas.filter(p=>p.profesion==profesion)
    return resultadoFiltro
}


console.log('RESULTADO DE BUSCAR');
let res=getPersonabyId(5);
if (res===undefined) console.log('persona no encontrada');
else console.log(res.nombre + " encontrado"); 

console.log("RESULTADO FILTRO");
console.log(filtrarbyProfesion(Profesion.Astronauta));