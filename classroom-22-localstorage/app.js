const arr = [
  { a: 1, b: 2},
  { c: 3, d: 4 },
  { e: 5, d: 6 }
]

localStorage.setItem('myArray', JSON.stringify(arr));

const getArrFromStorage = localStorage.getItem('myArray');
const myArrayMapped = JSON.parse(getArrFromStorage)
console.log(myArrayMapped)