/**Celsius em Fahrenheit
 * 
 * Crie uma função que receba uma string em celsius ou
 * fahrenheit e faça a transformação de uma unidade para outra
 * 
 * Formulas:
 * C = (F - 32) * 5/9 -> fahrenheit para celcius
 * F = C * 9/5 + 32 -> celcius para fahrenheit
 */

let value = "50f"

function conversion(value) {
    
    const valueArray = Array.from(value)//transformando o value em um array

    //verificando se tem os caracteres
    const convertingFromCelsius = valueArray.includes('C')
    const convertingFromFahrenheit = valueArray.includes('F')

    valueArray.pop()//Removendo os caracteres de texto
    const newValue = Number(valueArray.join(''))//Juntando os caracteres e transformando em number
    
    //verificando se é um número
    if(isNaN(newValue)) {
        return "Use valores validos!"
    }

    let convertedValue;

    if(convertingFromCelsius) {

        return convertedValue = (newValue * 9/5 + 32)+'F'

    }else if(convertingFromFahrenheit) {

        return convertedValue = ((newValue - 32) * 5/9)+'C'

    }else {
        return convertedValue = "Grau não identificado!"
    }

}

const TemperatureConversionResult = conversion(value.toUpperCase())

console.log(TemperatureConversionResult)