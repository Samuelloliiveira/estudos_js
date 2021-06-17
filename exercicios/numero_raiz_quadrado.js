let numero = [4,5,7,6,2]

function raizQuadrada(value){
    let total = []
    
    for(i=0; i < value.length; i++) {

        total.push(value[i] * value[i])
    }
    
    return total
}

console.log(raizQuadrada(numero))