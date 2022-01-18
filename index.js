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


document.querySelector(".theme-btn-dark").addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/DarkBackground.jpg)";
  document.querySelector(".title").style.color = "lightgrey";
  document.querySelector("li").style.color = "white";
  document.querySelector("li").style.backgroundColor = "rgba(139, 137, 255, 0.015)";
  document.querySelector("input").style.backgroundColor = "rgba(182, 182, 182, 0.247)";
  document.querySelector("input").style.borderColor = "rgba(107, 107, 107, 0.163)";
  document.querySelector("input").style.color = "rgb(255, 255, 255)";
});
document.querySelector(".theme-btn-blue").addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/BlueBackground.jpg)";
  document.querySelector(".title").style.color = "rgba(11, 11, 68, 0.651)";
  document.querySelector("li").style.color = "white";
  document.querySelector("li").style.backgroundColor = "rgba(89, 87, 201, 0.425)";
  document.querySelector("input").style.backgroundColor = "rgba(112, 112, 112, 0.247)";
  document.querySelector("input").style.borderColor = "rgba(255, 255, 255, 0.363)";
  document.querySelector("input").style.color = "rgb(255, 255, 255)";
});
document.querySelector(".theme-btn-light").addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/LightBackground.jpg)";
  document.querySelector(".title").style.color = "rgba(46, 46, 78, 0.651)";
  document.querySelector("li").style.backgroundColor = "rgba(140, 138, 255, 0.425)";
  document.querySelector("li").style.color = "white";
  document.querySelector("input").style.backgroundColor = "rgba(126, 126, 126, 0.247)";
  document.querySelector("input").style.borderColor = "rgba(255, 255, 255, 0.363)";
  document.querySelector("input").style.color = "rgb(255, 255, 255)";
});