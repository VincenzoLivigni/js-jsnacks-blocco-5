// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const names = ['Edoardo', 'Simone', 'Francesco'];
console.log(names);

// for
for (let i = 0; i < names.length; i++) {
     console.log(names[i]);
}

// con forEach
names.forEach((nomi) => {
    console.log(nomi);
})

