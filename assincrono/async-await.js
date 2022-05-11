/**
 * - Maneira de escrever promises
 * - Syntactic Sugar
 */

const promessa = new Promise(function (resolve, reject) {

    let promise = false

    if (promise) {    
        return resolve('ok')
    } else {
        return reject('error')
    }

})

// a função start funciona de forma assicrona e espera uma resposta/promessa
async function start() {
    try {
        // o resultado espera uma promessa
        const result = await promessa
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally { 
        console.log('rodar sempre')
    }
}

start()