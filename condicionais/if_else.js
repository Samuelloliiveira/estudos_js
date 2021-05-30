//Condicionais e controle de fluxo

//É um controle que ajuda nossa aplicação a tomar diferentes caminhos

//se - senão

/*Se algo for verdadeiro nosso sistema acessa um bloco de código
Senão acessa outro bloco de código */

let temperature = 36.5

if (temperature >= 37) {
    console.log('Febre');
}else if (temperature > 36.5 && temperature < 37) {
    console.log('Febre moderada');
}else {
    console.log('Temperatura Normal');
}

//Pode-se ou não usar o else 
//Pode-se usar multiplas condicionais
//Pode usar if else dentro de if else

//Uma boa dica é colocar as condições em variáveis

let highTemperature = temperature >= 37
let mediumTemprerature = temperature > 36.5 && temperature < 37


let temperature = 36.5

if (highTemperature) {

}else if (mediumTemprerature) {

}else {

}
