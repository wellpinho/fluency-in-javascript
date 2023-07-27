const past = new Date('May 1 2020 7:47:00');
const present = new Date();

const difference = present.getTime() - past.getTime();
console.log(difference);

const seconds = Math.round(difference / 1000);
console.log({ seconds });

const minutes = Math.round(seconds / 60);
console.log({ minutes })

const hours = Math.round(minutes / 60);
console.log({ hours });

const days = Math.round(hours / 24);
console.log({ days });

const months = Math.round(days / 30);
console.log({ months });

const years = Math.round(months / 12);
console.log({ years });






/* TODO:
  converter um timestamp em obj de data
  o timestamp sempre vai pegar o total de milisegundos desde 1/1/1970
  até a data atual
*/
const timestamp = new Date().getTime();
console.log({ timestamp });

// E como converter este valor em milisegundos em um objeto de data?
// Ai temos que instanciar uma nova data passando o timestamp
const objData = new Date(timestamp);
console.log(objData);

// a partir disso podemos desestruturar a data por ano, mês, dias, horas, minutos e segundos
console.log(objData.getFullYear());

// month conta o mes a partir do 0 = janeiro
console.log(objData.getMonth() + 1);

// getDay pega o dia da semana 0 = domingo
console.log(objData.getDay() + 1)

console.log(objData.getHours());
