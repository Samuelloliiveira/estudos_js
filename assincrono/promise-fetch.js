//Executar o código no codesandbox.io
/**fetch api é padrão do browser, não roda no node. Usar axios */

//encadeamento
fetch("https://api.github.com/users/Samuelloliiveira")
    .then(response => response.json())
    .then(data => fetch(data.repos_url))
    .then(res => res.json())
    .then(d => console.log(d))
    .catch(err => console.log(err))