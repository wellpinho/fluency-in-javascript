class User {
  constructor(name, age, email, phone) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }

  creat(email, password) {
    const login = { email, password }

    localStorage.setItem('login', JSON.stringify(login))

    const newUser = localStorage.getItem('login')

    if (!newUser) {
      return 'erro ao criar usuário, tente novamente'
    }

    return 'user created!'
  }

  login(email, password) {
    const data = JSON.parse(localStorage.getItem('login'));
    const authenticated = data.email === email && data.password === password;

    if (!authenticated) {
      return 'urong email or password'
    } 

    return 'logado!';   
  }

  logout() {
    localStorage.removeItem('login');

    return 'deslogado com sucesso!'
  }
}

const user2 = new User('marcos', 43, 'test@outlook.com', '48987654321');

const created = user2.creat('test@mail.co', '123456')
console.log(created)

// const logado = user2.login('test@mail.co', '123456')
//console.log(logado)

// const logout = user2.logout()
// console.log(logout)