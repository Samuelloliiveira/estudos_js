/*
    functions() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

/*começar com letra Maiuscula não é obrigatório, 
mas é uma boa pratica*/
function Person(name) {
    this.name = name //referenciando o argumento de fora da função
    this.walk = function() {
        return this.name + " esta andando..."
    }
}

//instanciando novos objetos
const samuel = new Person("Samuel") //criando objeto
const marco = new Person("Marco")

console.log(samuel.walk(),marco.walk());


//Algumas funções dentro do JS
let nome = String("Samuel")
let numero = Number(45)
let data = Date("2021-04-25")//formato iso

console.log(nome);
console.log(numero);
console.log(data);