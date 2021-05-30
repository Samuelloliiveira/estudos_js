//for...of

/*É uma declaração que vai criar atraves de alguma variável
previamente que nós tivermos
*/

let myname = 'Samuel'
let names = ['Felipe','Matheus','Guilherme']

for(let char of myname) {//pegue um caracter por vez de myname = Samuel
    console.log(char)
}

//serve tanto para string quando arrey
for (const name of names) {//pega cada elemento do array
    console.log(name)
}