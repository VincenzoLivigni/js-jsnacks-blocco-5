// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const nums = [2, 8, 4, 7, 12, 87];
console.log(nums);

// for
const vuoto = [];
for (let i = 0; i < nums.length; i++) {
     const numero = nums[i];

     if (numero % 2 === 0) {
         vuoto.push(numero)
     }
}
console.log(vuoto);

// forEach
const empty = [];
nums.forEach((numero) => {
     if (numero % 2 === 0) {
         empty.push(numero)
     }
})
console.log(empty);

// filter
const pari = nums.filter((num) => {
if (num % 2 === 0) {
    return num
}
})
console.log(pari);


