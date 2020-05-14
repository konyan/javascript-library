let myLibrary = [];

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {
  const myBook = new Book(title, author, pages);

  myLibrary.push(myBook);
}

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("author-input").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(logic.newBook(author, title, pages, read));
  //   clearForm();
  //   render(logic.library);
});

function render() {
  return myLibrary;
}
console.log(myLibrary);
