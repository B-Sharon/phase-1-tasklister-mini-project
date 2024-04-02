document.addEventListener("DOMContentLoaded", () => {
    //setting form to a variable
    const form = document.querySelector("form");

    //adding an event listener to the form
    form.addEventListener("submit", (e) => {
        //preventing the default action
        e.preventDefault();

        //variable to store the description
        const description = e.target.querySelector("#new-task-description").value;

        //pass this value as an argument to the createTask function
        createTask(description);

        //resetting the description after createTask function has run so that an empty description is available for the next task
        form.reset();

    
});
});

//createTask function
function createTask (description, priority)  {
    //create  list and button elements
    const taskList = document.createElement("li");
    const deleteButton = document.createElement("button");

    //add text to button
    deleteButton.textContent = "x";

    //assigning the user's input (description's value) to the textContent of the list
    taskList.textContent = description;

    //setting the color based on the priority value
    taskList.style.color = getPriorityColor(priority);

     //assigning the user's selected priority value to the list's data attribute
     taskList.dataset.priority = priority;

    //appending the button to the list
    taskList.appendChild(deleteButton);

    //adding the list element to the unordered list
    document.getElementById("tasks").appendChild(taskList);

    //adding event listener to the button to delete the list
    deleteButton.addEventListener("click", deleteList);
};

//function to delete list
const deleteList = (e) => {
    e.target.parentNode.remove();
};

//function to get color by priority
function getPriorityColor (priority) {
  switch(priority){
    case 'high':
      return 'red';
    case 'medium':
      return 'yellow';
    case 'low':
      return 'green';
    default:
      return 'black';
  }
}