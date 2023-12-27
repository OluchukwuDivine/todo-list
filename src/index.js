import { ToDo, addTodo } from "./create-to-do";
import {clickedForm, canceledAdd} from "./form";

    //code to check completed tasks using checkboxes
    const checkboxes = document.querySelectorAll(".checkbox");

    //Add event listener to each checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            //Get the corresponding project title paragraph
            const projectTitle = this.closest(".projects").querySelector("#project-title");
            //Toggle the 'strikethrough' class based on checkbox state
            projectTitle.classList.toggle("strikethrough", this.checked);
        });
    });
    //code for checkboxes ends just above here

// Function to handle the delete button click
function handleDeleteButtonClick() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click', () => {
        // Get the parent container of the clicked delete button
        const todoItem = deleteButton.closest('.projects');
        // Remove the todo item from the DOM
        todoItem.remove();
      });
    });
  }
 handleDeleteButtonClick();


  