// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

console.log(people);

// for 

for (let i = 0; i < people.length; i++) {
     const person = people[i];
     console.log(person.name);
}

// forEach
people.forEach((persona) => {
  console.log(persona.name);
})