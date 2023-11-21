
const formTrigger= document.querySelector(".form-trigger");
const projectForm= document.querySelector(".project-form");
const cancelAdd=document.querySelector("#cancel-add");

function canceledAdd(){
    projectForm.style.visibility = "hidden";
}

function clickedForm() {
    projectForm.style.visibility = "visible";
}

formTrigger.addEventListener("click", clickedForm);
cancelAdd.addEventListener("click", canceledAdd);

export { projectForm,
         canceledAdd,
         clickedForm,
        };

