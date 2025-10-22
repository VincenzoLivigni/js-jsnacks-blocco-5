// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
const numbers = [2, 8, 4, 7, 2, 87];
console.log(numbers);

// for 
let vuoto = [];
for (let i = 0; i < numbers.length; i++) {
    let numero = numbers[i] + 1;
    vuoto.push(numero)
}
console.log(vuoto);

// forEach
let empty = [];
numbers.forEach((num) => {
    empty.push(num + 1)
})
console.log(empty);


// map
const num = numbers.map((numeri) => {
    return numeri + 1;
});
console.log(num);

