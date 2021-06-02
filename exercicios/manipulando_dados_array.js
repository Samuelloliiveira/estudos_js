/**Buscando e encontando dados em array
 * 
 * 
 * Baseado no array de livros por categorias abaixo, faça os seguintes desafios
 * 
 * .Contar o número de cateforias e o número de livros em cada categoria
 * .contar o número de autores
 * .Mostrar livros do autor Augusto Cury
 * .Transformar a função acima em uma função que irá receber o nome do autor e 
 * devolver os livros desse autor
 */

const booksByCategory = [

    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
    
        ]
    },
    {
        category: "Intelifência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - COmo enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Cobey",
            }
        ]
    }

];

//Questão 1
const totalCategories = booksByCategory.length
console.log("O número de categorias é: ", totalCategories);

//Questão 2
for(let category of booksByCategory) {
    console.log('Total de livros da categóra: ',category.category)
    console.log(category.books.length)
}

//Questão 3
function countAUthors() {
    let authors = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length);
}

countAUthors()


//Questão 4
function booksOfAugustoCury() {
    let books = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books);
}

booksOfAugustoCury()

//Questão 5
function booksOfAuthor(author) {
    let books = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury')