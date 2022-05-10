/**
 * A promesa de que algo vai acontecer
 * 
 * Uma promesa pode ser:
 * 
 * Pending - Estado inicial
 * Fulfilled - Promesa conluída com sucesso
 * Rejected - Promesa rejeitada
 * Settled - Conluída com sucesso ou erro
 */

let aceitar = false

console.log('pedir uber')

//Pending
const promesa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve("O carro chegou!")
    } else {
        return reject('Pedido negado!')
    }

})

console.log('aguardando')

promesa
    .then(result => { console.log(result) })//Fulfilled
    .catch(erro => console.log(erro))//Rejected
    .finally(() => console.log('finalizada'))//Settled