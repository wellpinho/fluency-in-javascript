const text = document.querySelector('p')
text.innerText = 'Texto alterado'

// pegando todas as tags para usar os métodos do nodeList
const spans = document.querySelectorAll('span')

spans.forEach((span, index) => {
  span.innerText += ` span inserido ${index + 1}`
})

// para modificar o html usamos o innerHTML
const div = document.querySelector('.content')

div.innerHTML = `<h1>Era paragrafo agora é h1</h1>`

// exemplo de um array com nomes de pessoas vindas do banco
const names = ['João', 'Maria', 'José', 'Pedro']

names.forEach(people => {
  div.innerHTML += `<li>${people}</li>`
})

/*
  Resumindo: 
    innerText altera o texto de uma tag html
    innerHTML altera o html com sua tag
*/
