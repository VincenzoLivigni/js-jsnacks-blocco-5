// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];
console.log(zucchine);


// for 
const zucchinaLunga = [];
const altreZucchine = [];
for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];

  if (zucchina.length > 15) {
    zucchinaLunga.push(zucchina);
  } else {
    altreZucchine.push(zucchina)
  }
}
console.log(zucchinaLunga);
console.log(altreZucchine);


// forEach 
const long = [];
const other = [];
zucchine.forEach((lunga) => {

  if (lunga.length > 15) {
    long.push(lunga);
  } else {
    other.push(lunga)
  }

})
console.log(long);
console.log(other);

// filter 
const filtraZucchineLunghe = zucchine.filter((leLunghe) => {
return leLunghe.length > 15;
})
console.log(filtraZucchineLunghe);

const filtraAltreZucchine = zucchine.filter((leAltre) => {
return leAltre.length < 15;
})
console.log(filtraAltreZucchine);


