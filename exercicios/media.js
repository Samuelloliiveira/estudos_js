//Calcule a média de diversas notas digitadas pelo usuário.

//Para descobrir a média basta somar todas as notas e dividir por 4

//Notas do bimestre
let note1 = 7.5
let note2 = 9.2
let note3 = 4
let note4 = 6.7

//criando array
let studentGrades = []

//alimentando o array
studentGrades.push(note1, note2, note3, note4)

//função para calcular a média
function calculateAverage(grades) {

    let sum = 0

    /**Aqui ele verifica quantos elementos tem no array
     * e enquanto i for menor do que a quantidade, ele
     * vai pegar o conteudo de cada posição e vai
     * somar e atribuir a sum
     */
    for(let i=0; i < grades.length; i++) {
        sum += studentGrades[i]
    }

    return sum / 4 //retornando o valor
    
}

//Passando as notas para a função calcular

console.log(calculateAverage(studentGrades));