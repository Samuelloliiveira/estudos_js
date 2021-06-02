/**Sistema de gastos familiar
 * 
 * Criar um objeto que possuirá 2 propriedades, ambas de tipo array:
 *  *receitas: []
 *  *despesas: []
 * 
 * Agora, crie uma função que irá calcular o total de receitas
 * e despesas e irá mostrar uma mensagem se a família está com
 * saldo positivo ou negativo, seguindo do valor do saldo
 */

let gastosFamiliar = {//obejeto com dois array
    receitas: [1200,1200,250.43,360.45],
    despesas: [320.34,128.45,176.87,1450.00,2000]
}

//função para somar os valores de cada array
function soma(array) {
    let total = 0

    for(let value of array) {
       total += value 
    }

    return total
}

function calculaReceita() {
    //pasando os valores para a função soma e salvando o resultado numa variavel
    const receitas = soma(gastosFamiliar.receitas)
    const despesas = soma(gastosFamiliar.despesas)

    const total = receitas - despesas 

    const totalPositivo = total >= 0 //verificando se saldo é positivo

    let textReceita = 'Negativo' //inicia como negrativo

    if(totalPositivo) {
        textReceita = 'Positivo'//atualiza a variavel caso seja saldo positivo
    }

    console.log(`Seu saldo é ${textReceita}: R$${total.toFixed(2)}`)
}

calculaReceita()