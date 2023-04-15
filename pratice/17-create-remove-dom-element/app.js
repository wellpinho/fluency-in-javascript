const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    // add a new li in todo list
    const input = document.querySelector('input')
    const newLi = document.createElement('li')
    newLi.textContent = input.value

    // append add li in last item list
    // ul.append(newLi)

    // prepend add li in first item list
    ul.prepend(newLi)

    // clean valu from input
    input.value = ''

    // Remove the clicked li
    const lis = document.querySelectorAll('li')
    lis.forEach(li => {
        li.addEventListener('click', (event) => {
            const clickedLi = event.target

            clickedLi.remove();
        })
    })
})