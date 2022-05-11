// fetch("https://api.github.com/users/Samuelloliiveira")
//     .then(response => response.json())
//     .then(data => fetch(data.repos_url))
//     .then(res => res.json())
//     .then(d => console.log(d))
//     .catch(err => console.log(err))

// executar o código no codesandbox
async function start() {
    const url = "https://api.github.com/users/Samuelloliiveira"

    // try {
    //     const response = await fetch("https://api.github.com/users/Samuelloliiveira")
    //     const user = await response.json()
    //     const reposResponse = await fetch(user.repos_url)
    //     const repos = await reposResponse.json()
    //     console.log(repos)
    // } catch (error) {
    //     console.log(error)
    // }

    const response = await fetch(url)
    const user = await response.json()
    const repos = await fetch(user.repos_url).then(r => r.json()) //também podemos usar o then aqui dentro
    console.log(repos)
}

//podemos usar o catch e o Then aqui fora por que a função retorna uma promise
start().catch(error => console.log(error))