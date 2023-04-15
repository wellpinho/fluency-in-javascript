const article = document.querySelector('article')

// listando todos os elementos filhos dentro da tag article
console.log(article.children) // HTMLCollection(4) [h1, p, p, p]

// TODO: neste tipo de listagem html colection não da para usar o forEach
// Então como fazer para transformar em array de elementos?
//usamos o Array.from!
console.log(Array.from(article.children)) // (4) [h1, p, p, p]

Array.from(article.children).forEach(element => {
    element.classList.add('article-element')
})

// TODO: pesquisar sobre parentsElement, previousElement, nextElement