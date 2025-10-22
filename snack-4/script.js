// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']
const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
];
console.log(posts);

// for
const result = [];
for (let i = 0; i < posts.length; i++) {
     const post = posts[i];
     // console.log(post);
     result.push(post.author)
}
console.log(result);


// forEach
const empty = [];
posts.forEach((post) => {
empty.push(post.author)
});
console.log(empty);

// map
const autore = posts.map((post) => {
return post.author;
})
console.log(autore);


