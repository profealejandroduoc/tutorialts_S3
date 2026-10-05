// function saludar(){
//     console.log("Hola");
// }

// saludar()


function saludar(nombre:string):string{
    return `Hola ${nombre}`;
}


console.log(saludar('Wacoldo'));

const saludarConFlecha = (nombre:string) => {
    return `Hola ${nombre} con Flecha`
}

console.log(saludarConFlecha('Diogenes'));

function datosUsuario(){
    return {
        username:'wacoldo',
        password:'12345'
    }
}

console.log(datosUsuario());
console.log(datosUsuario().username);
const pass=datosUsuario().password
console.log(pass);

const usr=datosUsuario();
console.log(usr.username,usr.password);
const nombre_usuario=usr.username;
console.log(nombre_usuario);

// const saludarConFlecha = (nombre:string) => {
//     return `Hola ${nombre} con Flecha`
// }
const datosUsuarioconFlecha = ()=>{
    return {
        username:'diogenes',
        password:'5432431'
    }
}

console.log(datosUsuarioconFlecha());

//SIMPLIFICAR FUNCIONES
const saludosimple=(nombre:string)=> `Hola ${nombre} simplificado`

console.log(saludosimple('Tertuliano'));

const sumar=(a:number,b:number)=> a+b;
console.log(sumar(5,4));

const numeros=[1,2,3,4,5,6,7,8]
console.log(numeros);
console.log("Foma 1");

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}
console.log("Foma 2");
//forma 2
for (const n in numeros) {
    console.log(numeros[n]);
}
//FORMA 3
console.log("FORMA 3");
for (const n of numeros) {
    console.log(n);
}
//FORMA 4
console.log("FORMA 4");
numeros.forEach(n => {
    console.log(n);
});

//FORMA ULTRA RAPIDA
console.log("FORMA RAPIDA");
numeros.forEach(console.log);
numeros.forEach(n => console.log(n))