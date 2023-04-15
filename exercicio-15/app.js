/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const ul = document.querySelector('ul')
const lis = Array.from(ul.children)
const insertLi = li => li.classList.add('video')
lis.forEach(insertLi)

console.log(ul.children)


/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
const h2 = document.querySelector('h2')
const fatherElement = h2.parentElement
console.log(fatherElement)


/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
const h1 = document.querySelector('h1')
const brotherElement = h1.nextElementSibling
console.log(brotherElement)


/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
const previousBrotherElement = ul.previousElementSibling
console.log(previousBrotherElement) 



/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
const showClickedLi = (event) => console.log(event.target)
const addClickEventLi = (li) => li.addEventListener('click', showClickedLi)

lis.forEach(addClickEventLi)

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button')
const addLiVideoName = ({ name }) => ul.innerHTML += `<li>${name}</li>`
const handlClickButton = () => videos.forEach(addLiVideoName)
button.addEventListener('click', handlClickButton)


/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
const body = document.body
h1.addEventListener('click', () => {
  body.innerHTML = ''
})
