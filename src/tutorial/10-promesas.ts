
const mipromesa=new Promise((resolve,reject)=>{
    let devuelto=5000
    setTimeout(()=>{
        if (devuelto==100000) {
            resolve('Me devolvio la plata')
        }
        else
        {
            reject('se hizo el gil con las lucas!!!')
        }
        
    },3000)

})

console.log('Esperando...');

mipromesa.then(resultado=>{
    console.log(resultado);
}).catch(resultado=>{
    console.warn(resultado);
}).finally(()=>{
    console.log("Pa eso tengo plata");
})