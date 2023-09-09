// const numbers = [50, 100, 20]
// const sum = (a, b, c) => a + b + c;
// console.log(sum(...numbers)); // 170

/*
  O problema: e se a quantidade de numeros do array mudar? 
    como vmos retornar corretamente a soma dos params?
*/
// Exempo do problema
const numbers = [2, 2]
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // NaN
// NaN, porque c recebeu undefined e soma de numeros com udefined = NaN

// Solução? uso do spread operator nos params da função!
// Exemplo
const numbers3 = [2, 2, 6]
const sum3 = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum3(...numbers3)); 