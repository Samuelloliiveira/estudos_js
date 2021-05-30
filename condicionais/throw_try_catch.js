//throw -> disparar, lançar

//try...catch -> tentar...pegar

/**Vamos tentar executar um bloco de código, e se der 
 * algum erro, esse erro vai ser disparado e eu posso
 * tentar capturar esse erro
 * */


//se não tiver parametro gera erro
function sayMyName(name = '') {
    if (name == '') {
        throw new Error('Nome é necessário')//normalmente o padrão é passar dentro de um objeto
        //throw 'Nome é necessário -> outra forma de fazer, existe muitas'
    }
    //throw para a aplicação, jogando o erro pra fora
}

try {
    sayMyName()
} catch (e) { //contrario de catch é uncought e aparece quando o erro não é capturado
    console.log(e);
}

//É importante usar para tratar erros na aplicação
//A aplicação continua a ser executada quando o erro é tratado
//Se o erro não for tratado a aplicação é interropida