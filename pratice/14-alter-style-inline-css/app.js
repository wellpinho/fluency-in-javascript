const title = document.querySelector('h1')

// acessando todos os atributos css que podemos usar
console.log(title.style)
// pegando o atributo color da lista
console.log(title.style.color)
// adicionar mais estilo css a tag sem sobrescrever o estilo que já tem
title.style.margin = '50px'
// alterando o css já definido de azul para rosa
title.style.color = 'pink'
// alterando tamanho da font
title.style.fontSize = '50px'
// remover um estilo
title.style.margin = ''

