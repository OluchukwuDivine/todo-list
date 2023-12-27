import { projectForm } from "./form";
import {submitProjectBtn} from "./index";

const todoContainer = document.querySelector("#container");

export function ToDo(title, priority, date){
    this.title = title;
    this.priority = priority;
    this.date = date;
}

export function renderTodo(){
    // const titleTab = document.querySelector("#title").value;
    // const priorityTab = document.querySelector("#priority").value;
    // const dateTab = document.querySelector("#date").value;
    // const newTodo =  new ToDo(title, priority, date);

    // const newTodoDiv= document.createElement(div);
    // todoContainer.appendChild(newTodoDiv);
    
    console.log("yay")
}


