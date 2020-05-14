import { addNewForm, DOM_AUTHOR, DOM_TITLE, DOM_PAGES } from "./dom.js";
import { addBookToLibrary, libraryData } from "./book.js";

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = DOM_TITLE.value;
  let author = DOM_AUTHOR.value;
  let pages = DOM_PAGES.value;
  addBookToLibrary(title, author, pages);
  console.log("FORM CLICK", libraryData());
  clearForm();
  renderLibararyBooks(libraryData());
});

function clearForm() {
  DOM_AUTHOR.value = "";
  DOM_TITLE.value = "";
  DOM_PAGES.value = "";
}

function renderLibararyBooks(books) {
  books.forEach((element, index) => {
    createCard(element, index);
  });
}

function createCard(book, index) {
  var html =
    '<div class="card" id="%id%"><div class="child"> <h2 class="child__title">%title%</h2> <h4 class="child__author">%author%</h4> <p class="child__pages">%pages% pages</p> <a class="child__status-btn">%status%</a></div><div class="child"></div></div>';

  var newHtml = html.replace("%id%", index);
  newHtml = newHtml.replace("%title%", book.title);
  newHtml = newHtml.replace("%author%", book.author);
  newHtml = newHtml.replace("%pages%", book.pages);
  newHtml = newHtml.replace("%status%", book.read);

  document
    .querySelector(".card-container")
    .insertAdjacentHTML("beforeend", newHtml);
}

//GLOBAL INIT
renderLibararyBooks(libraryData());
