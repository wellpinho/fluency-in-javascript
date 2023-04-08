// pegando apenas o valor do atributo da tag a no caso o valor do href
const link = document.querySelector('a')
console.log(link.getAttribute('href')) // https://jsonplaceholder.typicode.com/

// alterando o valor do atributo com setAttribute
link.setAttribute('href', 'https://wellpinho.com')

// alterando o conteudo exibido no html
link.innerText = 'Website do Wellington'

// pega a tag p
const paragraph = document.querySelector('p')
// pega o atributo class dentro da tag p
console.log(paragraph.getAttribute('class'))
// seta um novo valor da class
paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: green')
