let inputbox = document.querySelector("#inputbx");
let list = document.querySelector("#list");
let btn = document.getElementById("btn");

// inputbox.addEventListener("keyup", function (event) {
//   if (event.key == "Enter") {
//     addItem(this.value);
//     this.value == " ";
//   }
// });

btn.addEventListener("click", function (event) {
  if (inputbox.value != " ") addItem(inputbox.value);
  this.value == " ";
});

let addItem = (inputbox) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<div class="inptbux"><span>${inputbox}</span></div><i></i>`;
  // let listinput = document.getElementsByClassName("inptbux");

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  list.appendChild(listItem);
};

let editItem = (listItem) => {
  let inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.value = listItem.querySelector(".inptbux").innerText;
  inputField.classList.add("inptbux");

  inputField.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      listItem.querySelector(".inptbux").innerText = inputField.value;
      listItem.removeChild(inputField);
    } else if (event.key === "Escape") {
      listItem.removeChild(inputField);
    }
  });

  listItem.appendChild(inputField);
  inputField.focus();
};
