// funções construtoras não podem ter métodos dentro
// pois smepre que um novo obj for instanciado será criar o mesmo métodos em memória.


function Student(name, email) {
  this.name = name;
  this.email = email;

  this.login = function () {
    return `${this.name} logged in!`
  }
}


const me = new Student('well', '1well@gmail.com')
const me2 = new Student('well2', 'well@gmail.com')
console.log(me, me2)
console.log('os método login() da classe Students ocupa a mesma alocação de memória?', me.login === me2.login)

// forma correta
function Animals(name, age) {
  this.name = name;
  this.age = age;
}

Animals.prototype.latir = function () {
  return `${this.name} latiu`
}

const animal1 = new Animals('baby', 4)
const animal2 = new Animals('cruel', 2)
console.log(animal1, animal2)
console.log('os método latir() da classe Animals ocupa a mesma alocação de memória?', animal1.latir === animal2.latir)