//Operador Condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//condition ? value1 : value2

//Exemplos
//Café da manhã top
let pao = true
let queijo = true

const niceBrakfast = pao && queijo ? 'café top' : 'Café ruim' //Se tiver pao e(and) queijo igual a café top, senão café ruim

console.log(niceBrakfast);


const niceBrakfast = pao || queijo ? 'café top' : 'café ruim' //Se tiver pão ou queijo igual a, senão a...

console.log(niceBrakfast);

//Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can Drive' : "can't drive"
console.log(canDrive);