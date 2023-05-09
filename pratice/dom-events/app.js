const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('texto copiado')
})

// pega as posições do cursos no eixo X e eixo Y
const div = document.querySelector('.box')

div.addEventListener('mousemove', (event) => {
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
    console.log(event.offsetX, event.offsetY)
})

// pega as posições do scroll do documento
// observar no console os atributos: pageX e pageY
document.addEventListener('wheel', (event) => {
    console.log(event, event.pageX, event.pageY)
})