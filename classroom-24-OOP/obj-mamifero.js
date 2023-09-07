class Mammal {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
  }

  incrementAge(age) {
    return this.age + age;
  }
}

class Lion extends Mammal {
  constructor(meanEater) {
    super()
    this.manEater = meanEater
  }

  eatZebras(animals) {
    const diet = animals.filter(animal => 
      animal.species === 'zebra' || animal.species === 'gnu')

    return diet.name
  }
}

const zeca = new Mammal('zebra', 'Baby', 4);
const pompeu = new Mammal('gnu', 'pompeu', 5);
const angus = new Mammal('cavalo', 'angus', 3);
const mufasa = new Lion('lion', 'mufasa', 7)

const animals = [zeca, pompeu, angus]

console.log('Lion diet: ', mufasa.eatZebras(animals))