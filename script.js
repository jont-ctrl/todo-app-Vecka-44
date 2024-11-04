let todoTasks = [];
let completedTasks = [];
let taskId = 0;

let completed = true;

let descriptionTask;

// Shows all tasks
function showAllTasks() {
  if (todoTasks.length === 0) {
    alert('Inga uppgifter att visa.');
    return;
  }

  let tasksDescription = '';

  for (let i = 0; i < todoTasks.length; i++) {
    tasksDescription += todoTasks[i].taskDescription + '\n';
  }

  alert('Din att göra lista: \n' + tasksDescription);
}

// Add tasks and then add to todoTasks array
function addTasks(descriptionTask) {
  const todo = {
    id: taskId++,
    taskDescription: descriptionTask,
    done: false,
  };

  todoTasks.push(todo);
  console.log(todoTasks);
  alert('La till: ' + descriptionTask);
}

/* function taskComplete() {
  
} */

while (completed) {
  let chosenOption = prompt(`
    1. Lägg till nya uppgifter
    2. Visa alla aktuella uppgifter.
    3. Markera uppgifter som klara.
    4. Ta bort uppgifter.
    5. Avsluta programmet`);

  switch (chosenOption) {
    case '1':
      // todoTasks.push
      descriptionTask = prompt('Lägg till en uppgift');
      addTasks(descriptionTask);
      break;
    case '2':
      showAllTasks();
      break;
    case '3':
      taskComplete();
      break;
    case '4':
      break;
    case '5':
      completed = false;
      break;
    default:
      alert('Error: måste ange 1-5');
  }
}
