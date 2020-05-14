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
});

function clearForm() {
  DOM_AUTHOR.value = "";
  DOM_TITLE.value = "";
  DOM_PAGES = "";
}
