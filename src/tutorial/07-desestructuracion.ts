
interface Persona{
    id:string,
    nombre:string,
    edad:number
    tipo?:string
}

const persona={
    nombre:'Wacoldo',
    edad:21,
    id:'waco'
}

//MUY LENTO
// const p=persona;
// const nombre=p.nombre;
// const edad=p.edad;
// const password=p.pass;

// console.log({nombre},{edad},{password});
// const {id,nombre,edad}=persona;
//console.log({nombre},{edad},{id});


const useContext = ({id,nombre,edad,tipo}:Persona) =>{
    return  {
        uid:id,
        persona:{
                nombre,
                edad
        },
        tipo:tipo || 'cliente'
    };
};

const contexto = useContext(persona);
console.log(contexto.uid);
console.log(contexto.persona.nombre);
console.log(contexto.tipo);

const {uid,persona:{nombre},tipo}=contexto
console.log(uid);
console.log(nombre);
console.log(tipo);