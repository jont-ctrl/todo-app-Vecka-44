let todoTasks = [];
let taskId = 0;
// Function to display all tasks in the list
function showAllTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list
    todoTasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.className = task.done ? "completed" : "pending";
        // Add task description
        taskItem.innerHTML = `${task.taskDescription} `;
        // Add complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Mark Complete";
        completeButton.onclick = () => taskComplete(task.id);
        taskItem.appendChild(completeButton);
        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => taskRemove(task.id);
        taskItem.appendChild(deleteButton);
        // Append the task item to the list
        taskList.appendChild(taskItem);
    });
}
// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const descriptionTask = taskInput.value.trim();
    if (descriptionTask === "") {
        alert("Task description cannot be empty.");
        return;
    }
    const todo = {
        id: taskId++,
        taskDescription: descriptionTask,
        done: false
    };
    todoTasks.push(todo);
    taskInput.value = ""; // Clear the input field
    showAllTasks(); // Refresh the list to show the new task
}
// Function to mark a task as complete
function taskComplete(id) {
    const task = todoTasks.find(task => task.id === id);
    if (task) {
        task.done = true;
        showAllTasks(); // Refresh the list to reflect the change
    } else {
        alert("Task not found.");
    }
}
// Function to remove a task
function taskRemove(id) {
    const taskIndex = todoTasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        todoTasks.splice(taskIndex, 1);
        showAllTasks(); // Refresh the list to reflect the deletion
    } else {
        alert("Task not found.");
    }
}
// Event listener for adding a task when clicking the "Add Task" button
document.getElementById("addTaskButton").addEventListener("click", addTask);