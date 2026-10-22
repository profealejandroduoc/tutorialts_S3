import type { Meal, Meals } from './interfaces/comidas';



// const request=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${comida}`)

console.log("Esperando respuesta....");



const mostrarImagen=async ():Promise<void>=>{
    
    let comida='Chicken'

    const request= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${comida}`)
    
    await request.json().then((datos:Meals)=>{
        const url_img=datos.meals[0].strMealThumb;
        const imagen=document.createElement('img')
        imagen.src=url_img
        document.body.append(imagen)
        console.log("esto lo escribir primero");
    })

   
}
mostrarImagen()
console.log("Waiting.....");



// request.then((res)=>{
    
//     const respuesta=res.json().then((datos:Meals)=>{
//         const url_img=datos.meals[0].strMealThumb;
//         const imagen=document.createElement('img')
//         imagen.src=url_img
//         document.body.append(imagen)


//     }).catch((error)=>{
//         const url_img='https://http.cat/images/404.jpg'
//         const imagen=document.createElement('img')
//         imagen.src=url_img
//         document.body.append(imagen)
//         console.log("No encontrado " + error);
//     })
// })

   

