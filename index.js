const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const tasksList = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (event) => {
  //to prevent refresh from form
  event.preventDefault();
  const inputText = input.value;
  //check if the input is empty or not
  if (inputText !== "") {
    const task = document.createElement("li");
    const taskText = document.createElement("p");
    taskText.textContent = inputText;

    task.appendChild(taskText);
    task.appendChild(addDeleteBtn()); //hoisting practising
    tasksList.appendChild(task);

    input.value = "";
    empty.style.display = "none";
  }
});

const addDeleteBtn = () => {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (event) => {
    const task = event.target.parentElement;
    tasksList.removeChild(task);

    const tasks = document.querySelectorAll("li");
    //if there aren't tasks to delete, then we show the message "all tasks were done"
    if (tasks.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
};
