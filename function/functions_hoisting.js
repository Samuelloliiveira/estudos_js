//function hoisting

sayMyName()

function sayMyName() {
    console.log('Samuel');
}

//Não acontece hoisting quando:

MyName()//Não é uma função

const MyName = function() {
    console.log('Sam');
}