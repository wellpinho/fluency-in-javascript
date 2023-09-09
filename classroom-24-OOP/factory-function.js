class User {
  #counter = 0; // private

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  incrementCounter() {
    return ++this.#counter;
  }
}

const user = new User('well', 43)
console.log(user)

// com factory function
const userFunc = (name, age) => {
  let counter = 0;

  return {
    name,
    age,
    incrementCounter: () => ++counter,
  }
};

const user2 = userFunc('well', 43);
console.log(user2, user2.incrementCounter);