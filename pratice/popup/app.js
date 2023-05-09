const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', (event) => {
    const clickedElement = event.target.classList[0];
    const popupNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const isValidClick = popupNames.some(popup => popup === clickedElement)

    if (isValidClick) {
        popup.style.display = 'none'
    }
})