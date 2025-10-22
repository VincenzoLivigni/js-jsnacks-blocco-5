// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
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

     if (studente.name === "Marco Lanci") {
      console.log(studente.class);
     }
}

// forEach
students.forEach((alunno) => {
       if (alunno.name === "Marco Lanci") {
           console.log(alunno.class);
     }
})


// Find 
const trovaClasse = students.find((scolaro) => {
      return scolaro.name === "Marco Lanci"
})
console.log(trovaClasse.class);
