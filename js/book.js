let myLibrary = [
  {
    title: "Ruby on Rails Tutorial: Learn Web Development with Rails",
    author: "Michael Hartl",
    pages: 600,
    read: true,
  },
  {
    title: "Agile Web Development with Rails 5",
    author: "Dave Thomas, David Heinemeier Hansson, and Sam Ruby",
    pages: 700,
    read: true,
  },
  {
    title:
      "Crafting Rails 4 Applications: Expert Practices for Everyday Rails Development",
    author: " Jose Valim",
    pages: 810,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

export function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages, false);
  console.log("BOOK", book);
  myLibrary.push(book);
}

export function removeBookFromLibrary(index) {
  const book = myLibrary[index];
  myLibrary = myLibrary.filter((b) => b !== book);
}

export function libraryData() {
  return myLibrary;
}
