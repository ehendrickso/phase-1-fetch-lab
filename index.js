function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(book) {
  //console.log("Hey I'm Here", book)
  const main = document.querySelector('main')
  //console.log("Hey I'm Here", book)
  book.forEach(book => {
    const h1 = document.createElement('h1')
    h1.innerHTML = `<h1>${book.name}</h1>`
    main.appendChild(h1)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
