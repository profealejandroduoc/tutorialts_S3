const arreglo:number[]=[1,2,3,4,5,6,7]




const otroarreglo=[...arreglo]
otroarreglo.push(8)


console.log(arreglo);
console.log(otroarreglo);

otroarreglo.pop()
console.log(otroarreglo);
otroarreglo.shift()
console.log(otroarreglo);
otroarreglo.unshift(5)
console.log(otroarreglo);
otroarreglo.splice(2,99)
console.log(otroarreglo);