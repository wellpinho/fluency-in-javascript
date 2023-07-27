const form = document.querySelector('form');
const feedback = document.querySelector('.feedback')

const testUsername = username => (/^[a-zA-Z]{6,12}$/).test(username);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValideUsername = testUsername(event.target.username.value);

  if (isValideUsername) {
    return feedback.innerText = 'Nome é válido'
  }

  return feedback.innerText = 'O username deve ter minimo de 6 e maximo de 12 caracters sem numeros ou caracters especiais'
})

form.username.addEventListener('keyup', event => {
  const isValideUsername = testUsername(event.target.value);

  if (isValideUsername) {
    form.username.setAttribute('class', 'success');
    return;
  }

  form.username.setAttribute('class', 'error');
})