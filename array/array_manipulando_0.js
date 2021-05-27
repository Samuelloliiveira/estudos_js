//Manipulando Arrays

//No array pode-se colocar qualquer tipo de dados, incluido funções
console.log([
    "a", 
    {type: "array"}, 
    function() {return "Olá, Mundo!"
}].length);//contando os elementos do array com length

console.log([
    "a", 
    {type: "array"}, 
    function() {return "Olá, Mundo!"
}][1].type);//acessando o elemento do array e executando


