const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const tasksList = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener('click', (event) => {
    //to prevent refresh from form
    event.preventDefault();
    const inputText = input.value;
    //check if the input is empty or not
    if (inputText !== "") {
        const task = document.createElement("li");
        const taskText = document.createElement("p");
        taskText.textContent = inputText;

        task.appendChild(taskText);
        tasksList.appendChild(task);

        input.value = "";
        empty.style.display = "none";
    }
});