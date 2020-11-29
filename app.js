const list = document.querySelector("#book-list ul");

// DELETE BOOKS
list.addEventListener("click", function (e) {
  if (e.target.classList == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const searchBox = document.forms[0].querySelector("input");
// USING THE SEARCH BOX TO FIND THE BOOKLISTS
searchBox.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.innerText;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "flex";
    } else {
      book.style.display = "none";
    }
  });
});

const FormAdd = document.forms["add-book"];

FormAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  const formAddInput = FormAdd.querySelector('input[type = "text"]').value;

  // lets create the li and its children

  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");
  // lets add the class name to the created spans
  bookName.classList.add("name");
  bookName.innerText = formAddInput;

  // ADDING html classes to the created html tags
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "delete";

  // lets append it to the UL
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

const tabs = document.querySelector(".tabs");
const panel = document.querySelectorAll(".panel"); 

tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panel.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
