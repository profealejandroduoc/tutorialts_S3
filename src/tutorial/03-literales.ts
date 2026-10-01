const persona={
    nombre:"Wacoldo",
    apellido:"Soto",
    edad:40,
    direccion:{
        "calle":"algun lugar",
        "numero":12345
    }

}

const otrapersona=structuredClone(persona)
otrapersona["nombre"]="Diogenes"
otrapersona.apellido="Carrasco"
otrapersona.direccion.calle="en otra parte"
otrapersona.direccion.numero=9999999

console.log(persona);
console.log(otrapersona);