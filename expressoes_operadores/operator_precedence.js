/**
 * OPERATOR PRECEDENCE
 *  Precedência de operadores
 * 
 * grouping ()
 * negação e incremento ! ++ --
 * multiplicação e divisão * /
 * adição e subtração + -
 * relacional < <= > >=
 * igualdade == != === !==
 * AND &&
 * OR ||
 * condicional ?:
 * assignment (atribuição) = += -= *=
 * 
 */

//Exemplo:
console.log(2 + 8 * 10) //Primeiro multiplica, depois soma
console.log((2 + 8) * 10)//mudando a ordem de precedência com grouping

console.log(3 > 2 > 1)//false
//ele faz (true e maior que 1)
//true = 1
//false = 0 


//OBS: Essa tabelinha é uma pequena referência, existe mais coisas 