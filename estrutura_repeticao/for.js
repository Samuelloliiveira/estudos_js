//Estrutura de repetição for
//break - para o loop
//continue - pula a execução do momento


for(let i = 1; i <= 10; i++) {//enquando i for menor que 10 ele vai executar e incrementar
    console.log(i)
}


//pode-se interroper 
for(let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }

    console.log(i);
}

//Pode-se ignorar 
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;//pula o 5 e continua o loop
    }

    console.log(i);
}