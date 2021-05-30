//Semelhante ao if else, mas com outra estrutura
//Tem vários caminhos

let expression = 'a'

switch (expression) {
    case 'a':
        //código
        console.log('a');
        break //é opcional e finaliza o processo, saindo da condicional

    case 'b':
        console.log('b');  
        break

    case 'c':
        console.log('c');
        break

    case 'd':
        console.log('d');
        break

    default: //quando não encontra nenhum caso
        console.log('default');
        break
}



//Calculadora
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
    
        case '-':
            result = number1 - number2
            break
    
        case '*':
            result = number1 * number2
            break
    
        case '/':
            result = number1 / number2
            break
    
        default: 
            console.log('não implementado');
            break
    }

    return result
}

console.log(calculate(4, '+', 8));