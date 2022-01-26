// NUMERO MAYOR Y MENOR DENTRO DE UN ARRAY Y LA SUMA DE LOS MISMOS

// const arrayNUmeros=[2,3,54,78]
// const minMax=(numeros)=>{
//     if(Object.keys(numeros).length===0) return numeros=[]
//     else{
//         const max=Math.max(...numeros)
//         const min=Math.min(...numeros)
//         const sumaMinMax=min+max
//         return {min,max,sumaMinMax}
//     }
// }
// const{min,max,sumaMinMax}=minMax(arrayNUmeros)
// if(min || max || sumaMinMax) console.log(`minimo:${min} maximo:${max} suma de ambos= ${sumaMinMax}`)

const factorial=(num)=>{
    let acumulador=1
  for(let i=num; i > 0; i--){
    console.log(`${i} x${acumulador} =${acumulador= acumulador *i}`)
    // acumulador= acumulador *i comentarl el console log y descomemtar este para ver el resultado final
  }
  return  acumulador
}

console.log(factorial(6))
