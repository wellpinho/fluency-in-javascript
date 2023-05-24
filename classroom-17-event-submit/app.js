const form = document.querySelector('.sign-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // console.log(event.target.username.value)
})

const username = 'Wellpinho';
const pattern = /^[a-zA-Z]{6,}$/;
// const isMatch = pattern.test(username)

// if (isMatch) {
//   console.log('O teste do regex passou!!!')
// } else {
//   console.log('O teste não passou')
// }

// usado para encontrar a posição da string em um paragrafo
const result = username.search(pattern); // retorna o index ou seja a posição


