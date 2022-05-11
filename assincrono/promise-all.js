//executar o código no codesandbox
//para rodar o axios a biblioteca precisa ser instalada

import axios from "axios";

Promise.all([
  axios.get('https://api.github.com/users/samuelloliiveira'),
  axios.get('https://api.github.com/users/samuelloliiveira/repos')

])
.then(responses => {
  console.log(responses[0].data.name)
  console.log(responses[1].data.length)
})
.catch(error => console.log(error.message))