const a = [1,2,3]
const b = [4,5,6]
const j = [8,9,10]

// SPREAD IN ARRAY
// TODO: no concat ele não mantem a ordem
const c = a.concat(0, b, j, 20)
console.log(c)

// TODO: no spread ele mantem a ordem como foi inserido
const d = [0, ...a, ...b, ...j, 20]
console.log(d)

// SPREAD IN OBJETOS
const obj1 = { pai: 'well', agepai: 43 };
const obj2 = { mae: 'mary', agemae: 44 };

const obj3 = Object.assign({}, obj1, obj2) // não fica legível como com spread
console.log(obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

// SPREAD IN STRINGS
const str = 'abc';
console.log([...str]) // [ 'a', 'b', 'c' ]

const reverseString = (string) => [...string].reverse().join('');
console.log(reverseString('123')) 

// DESCOBRIR QUAL NUMERO È MAIOR NO ARRAY
const nums = [7,3,5,3.1,9]
console.log(`Menor numero da lista: ${nums} é: ${Math.min(...nums)}`)
console.log(`Maior numero da lista: ${nums} é: ${Math.max(...nums)}`)