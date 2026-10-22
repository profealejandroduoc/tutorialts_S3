import type { Meal, Meals } from './interfaces/comidas';

let comida='Chicken'

const request=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${comida}`)


console.log("Esperando respuesta....");

console.log(request);

request.then((res)=>{
    
    const respuesta=res.json().then((datos:Meals)=>{
        const url_img=datos.meals[0].strMealThumb;
        const imagen=document.createElement('img')
        imagen.src=url_img
        document.body.append(imagen)


    }).catch((error)=>{
        const url_img='https://http.cat/images/404.jpg'
        const imagen=document.createElement('img')
        imagen.src=url_img
        document.body.append(imagen)
        console.log("No encontrado " + error);
    })
})

   

