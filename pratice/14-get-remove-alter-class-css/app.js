const paragraph = document.querySelector('p')
// adcionando class a tag p
paragraph.classList.add('error')
// removendo class da tag
paragraph.classList.remove('error')
// inserindo outro estilo css
paragraph.classList.add('success')

const paragraphs = document.querySelectorAll('.p > p')
// innerText pega apenas text visiveis, se o css estiver display: noene ele não pega
// já com textContent, não improta o estado da class ele pega
paragraphs.forEach(paragraph => {
    // includes verifica se no text tem a palavra buscada
    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error')
    }

    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success')
    }
})

// removendo ou inserindo classes no elemento html
const title = document.querySelector('h1')
// com toggle, se o elemento não tem a class ele insere, neste caso insere a class test
// e se ele existir ele rmeove
title.classList.toggle('test')
