import { projectForm, canceledAdd } from "./form";
import {submitProjectBtn, toggleDoneTasks, handleDeleteButtonClick} from "./index";


export function renderTodo(){

    const todoContainer = document.querySelector("#container");
    const Title = document.querySelector("#title").value;
    const Priority = document.querySelector("#priority").value;
    const Date = document.querySelector("#date").value;

    const newTodoDiv= document.createElement("div");
    newTodoDiv.innerHTML= `
    <div class="projects adjustment ${Priority === 'low' ? 'low-priority' : 'high-priority'}">
    <input type="checkbox" name="checkbox" class="checkbox">
    <p id="project-title">${Title}</p>
    <p class="project-date">${Date}</p>
    <button class="project-btns delete-btn btn-delete">delete</button>
</div>
    `
    todoContainer.appendChild(newTodoDiv);
    handleDeleteButtonClick();
    toggleDoneTasks();
    canceledAdd();



    console.log(Priority);
    console.log(Title); 
}





