/**Celsius em Fahrenheit
 * 
 * Crie uma função que receba uma string em celsius ou
 * fahrenheit e faça a transformação de uma unidade para outra
 * 
 * Formulas:
 * C = (F - 32) * 5/9 -> fahrenheit para celcius
 * F = C * 9/5 + 32 -> celcius para fahrenheit
 */

let value = "212F"

function conversion(value) {
    let valueArray = Array.from(value)

    //verificando se tem os caracteres
    let convertingFromCelsius = valueArray.includes('C')
    let convertingFromFahrenheit = valueArray.includes('F')

    valueArray.pop()//Removendo os caracteres de texto
    let newValue = Number(valueArray.join(''))//Juntando os caracteres e transformando em number
    
    let convertedValue

    if(convertingFromCelsius) {

        return convertedValue = (newValue * 9/5 + 32)+'F'

    }else if(convertingFromFahrenheit) {

        return convertedValue = ((newValue - 32) * 5/9)+'C'

    }else {
        return convertedValue = "Grau não atribuido!"
    }

}

console.log(conversion(value));