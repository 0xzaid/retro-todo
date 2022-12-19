const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const todoList = document.getElementById('todo-list');
const clearCompletedButton = document.getElementById('clear-completed');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // get the value of the task input field
    const task = taskInput.value;

    // check if the task input field is empty
    if (!task) {
        // task input is empty, display an error message or return from the function
        alert("Task cannot be empty");
        return;
    }

    // check if the task is already in the list
    const listItems = todoList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === task) {
            // task already exists, display an error message or return from the function
            alert("Task cannot be a duplicate");
            return;
        }
    }

    // Create a new loading icon element
    const loadingIcon = document.createElement('div');
    loadingIcon.classList.add('loading-icon');
    todoList.appendChild(loadingIcon);

    // Show the loading icon for 1 second
    setTimeout(() => {
        loadingIcon.style.display = 'none';

        // create a new list item with a checkbox and label
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = task;

        // append the checkbox and label to the list item, and the list item to the to-do list
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        todoList.appendChild(listItem);

        // clear the task input field
        taskInput.value = '';
    }, 1000);
});


todoList.addEventListener('change', function (event) {
    // if the checkbox that was changed is inside a list item, toggle the class 'completed' on the list item
    const checkbox = event.target;
    const listItem = checkbox.parentNode;
    if (checkbox.type === 'checkbox') {
        listItem.classList.toggle('completed');
    }
});

clearCompletedButton.addEventListener('click', function () {
    // get all the completed list items
    const completedItems = todoList.getElementsByClassName('completed');

    // remove each completed list item from the to-do list
    while (completedItems.length > 0) {
        completedItems[0].parentNode.removeChild(completedItems[0]);
    }
});


window.addEventListener("load", function () {
    const blocks = document.querySelectorAll(".block");
    let index = 0;
    const interval = setInterval(function () {
        blocks[index].style.visibility = "visible";
        index++;
        if (index >= blocks.length) {
            clearInterval(interval);
            document.getElementById("loading").style.display = "none";
        }
    }, 100); // e.g. 500 milliseconds = 0.5 seconds
});


// Array of messages to display in the marquee
var messages = [
    "Welcome to the Retro ToDo list",
    "Add your tasks to the list",
    "Mark them as completed when you're done",
    "Clear completed tasks with the button",
];

// Index of the current message
var messageIndex = 0;

// Function to update the content of the marquee and change its direction
function updateMarquee() {
    // Get the marquee element
    var marquee = document.getElementById("marquee");

    // Update the content of the marquee
    marquee.innerHTML = messages[messageIndex];

    // Increment the message index
    messageIndex = (messageIndex + 1) % messages.length;
}

// Update the marquee every 1000 milliseconds (1 second)
setInterval(updateMarquee, 6000);

