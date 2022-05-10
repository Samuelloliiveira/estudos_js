// Funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado) {
    console.log('Outras tarefas')
    console.log(dado())
}

// Podemos passar um função como argumento
imprimirDado(function () {
    return 'Olá, Mundo!'
})

// Callback = Chame de volta/Ligar de volta

/* Passamos uma função como argumento 
e depois de um tempo ela será chamada*/