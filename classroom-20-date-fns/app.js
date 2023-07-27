const present = new Date();
console.log(dateFns.format(present, 'MMMM'))
console.log(dateFns.format(present, 'YY'))
console.log(dateFns.format(present, 'dddd'))
console.log(dateFns.format(present, 'DD/MM/YYYY'))

const past = new Date('April 7 2019 17:00')
console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))