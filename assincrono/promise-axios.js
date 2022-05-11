/** AXIOS
 *  É um HTTP client baseado em promise
 * que podemos usar no browser e no node
 */

//executar o código no codesandbox, para o node é preciso instalar a dependência axios

import axios from "axios";

//axios devolve uma promessa pedente
axios.get('https://api.github.com/users/Samuelloliiveira')
    //then é o caminho caminho com a promessa resolvida
    .then(res => axios.get(res.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => { console.log(error) })//a promesa deu erro