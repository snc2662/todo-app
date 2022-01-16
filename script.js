/* *******************************************************************
                Init Variables
******************************************************************** */

// Element selector
const ul = document.querySelector("ul");
const toggleBtn = document.querySelector("#toggle");
const inputField = document.querySelector("#input");
const delBtns = document.querySelectorAll(".delete-btn");

/* *******************************************************************
                Helper functions
******************************************************************** */

const removeTodo = (btn) => {
  btn.addEventListener("click", function () {
    const li = this.parentNode;
    li.remove();
  });
};

const addTodo = (item) => {
  // Append input text(item) along with newly created deleteBtn to li and then to ul
  const li = document.createElement("li");
  li.textContent = item;
  const delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.classList.add("delete-btn");
  li.appendChild(delBtn);
  // Add remove functionality to newly created delBtn
  removeTodo(delBtn);
  ul.appendChild(li);
  inputField.value = "";
};

/* *******************************************************************
                
******************************************************************** */

// Add remove functionality to already listed delBtns
delBtns.forEach((btn) => removeTodo(btn));

// Hide and Show input field
toggleBtn.addEventListener("click", function () {
  inputField.classList.toggle("show");
  this.classList.toggle("rotate");
});

// call addTodo after entering the item in input field
inputField.addEventListener("keydown", function (e) {
  if (e.keyCode === 13 && inputField.value.trim().length > 0) {
    addTodo(inputField.value);
  }
});

// Mark down todo item if completed
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("strike-through");
  }
});
