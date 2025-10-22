// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }
const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

console.log(students);

// for
for (let i = 0; i < students.length; i++) {
     const studente = students[i];
     
     if (studente.id === 2) {
         console.log(studente);
     }
}

// forEach
students.forEach((alunno) => {
       if (alunno.id === 2) {
         console.log(alunno);
     }
})

// Find
const trovaStudente = students.find((scolaro) => {
         scolaro.id === 2 
         return scolaro;
})
console.log(trovaStudente);
