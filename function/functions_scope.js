//function scope 
let subject = 'create view'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject)); //aqui ele pega o retorno da função
console.log(subject);// aqui ele pega a informação de let