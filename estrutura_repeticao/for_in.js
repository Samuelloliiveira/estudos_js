/*Cria um loop em cima de um objeto
Pegando as propriedades desse objeto*/

let person = {
    name: 'John',
    age: 20,
    weight: 88.5
}

for(let property in person) {
    console.log(property);//pegando as propriedades do objeto
    console.log(property['name'])//acessando a propriedade
    console.log(property.age)//outra forma de acessar
    console.log(property[property])//pegando todas as propriedades que são convertidas em string
}