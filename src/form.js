import { renderTodo } from "./create-to-do";

const formTrigger= document.querySelector(".form-trigger");
const projectForm= document.querySelector(".project-form");
const cancelAdd=document.querySelector("#cancel-add");
const addNewTodo= document.querySelector("#submit-project");

function canceledAdd(){
    projectForm.style.visibility = "hidden";
}
function clickedForm() {
    projectForm.style.visibility = "visible";
}

addNewTodo.addEventListener("click", renderTodo);
formTrigger.addEventListener("click", clickedForm);
cancelAdd.addEventListener("click", canceledAdd);

export { projectForm,
         canceledAdd,
         clickedForm
        };

