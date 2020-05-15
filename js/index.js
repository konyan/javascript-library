import { addNewForm, DOM_AUTHOR, DOM_TITLE, DOM_PAGES } from "./dom.js";
import {
  addBookToLibrary,
  libraryData,
  removeBookFromLibrary,
  changeStatusOfBook,
} from "./book.js";

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
  document.querySelector(".card-container").innerHTML = "";
  books.forEach((element, index) => {
    createCard(element, index);
  });
}

function createCard(book, index) {
  var html;

  if (book.read) {
    html =
      '<div class="card" id="%id%"><div class="child"><i class="child__trash"><svg class="bi bi-trash" width="1.2em" height="1.2em"  viewBox="0 0 16 16" fill="black"  xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd" /> </svg> </i><h2 class="child__title">%title%</h2> <h4 class="child__author">%author%</h4> <p class="child__pages">%pages% pages</p> <a class="btn-child child__status-btn-unread">%status%</a></div><div class="child"></div></div>';
  } else {
    html =
      '<div class="card" id="%id%"><div class="child"><i class="child__trash"><svg class="bi bi-trash" width="1.2em" height="1.2em"  viewBox="0 0 16 16" fill="black"  xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd" /> </svg> </i><h2 class="child__title">%title%</h2> <h4 class="child__author">%author%</h4> <p class="child__pages">%pages% pages</p> <a class="btn-child child__status-btn-read">%status%</a></div><div class="child"></div></div>';
  }

  var newHtml = html.replace("%id%", index);
  newHtml = newHtml.replace("%title%", book.title);
  newHtml = newHtml.replace("%author%", book.author);
  newHtml = newHtml.replace("%pages%", book.pages);
  newHtml = newHtml.replace("%status%", book.read ? "read" : "unread");

  document
    .querySelector(".card-container")
    .insertAdjacentHTML("beforeend", newHtml);
}

//GLOBAL INIT
renderLibararyBooks(libraryData());

document
  .querySelector(".card-container")
  .addEventListener("click", function (event) {
    let trash_id = event.target.parentNode.parentNode.parentNode.id;
    let status_id = event.target.parentNode.parentNode.id;
    console.log("EVENT", status_id);

    if (trash_id) {
      console.log("DELETE ITEM HERE", trash_id);
      removeBookFromLibrary(trash_id);
      renderLibararyBooks(libraryData());
    }

    if (status_id) {
      changeStatusOfBook(status_id);
      renderLibararyBooks(libraryData());
    }
  });
