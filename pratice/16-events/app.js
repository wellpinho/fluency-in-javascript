const button = document.querySelector('button')

// event addEventListener não precisa ser chamado no html
button.addEventListener('click', () => {
    console.log('clicou')
})

// obtendo todos os lis do html
const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', (event) => {
        const clickedLi = event.target

        if (clickedLi.classList.contains('disabled')) {
            clickedLi.classList.remove('disabled')
        } else {
            clickedLi.classList.add('disabled')
        }
    })
})