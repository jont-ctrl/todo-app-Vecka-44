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
    tasksDescription += `Uppgift: ${todoTasks[i].taskDescription} Done? ${todoTasks[i].done}\n`;
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
  alert('Lade till uppgift: ' + descriptionTask);
}

function taskComplete() {
  if (todoTasks.length === 0) {
    alert('Inga uppgifter att visa.');
    return;
  }

  let tasksDescription = '';

  for (let i = 0; i < todoTasks.length; i++) {
    tasksDescription += `Uppgift: ${todoTasks[i].taskDescription} ID: ${todoTasks[i].id}\n`;
  }

  let taskIdToComplete = Number(
    prompt(
      'Ange ID för uppgiften som ska markeras som klar \n' + tasksDescription
    )
  );

  console.log(taskIdToComplete);
  console.log(typeof taskIdToComplete);
  console.log(todoTasks);
  console.log(typeof todoTasks);

  // Letar med .find() om id finns i array och om det finns returnerar true
  let findIdArray = todoTasks.find((task) => task.id === taskIdToComplete);
  console.log(findIdArray);
  // Tar den hittade ID i task array och gör om den från i objectet .done = true
  findIdArray.done = true;
  console.log(findIdArray);
  console.log(todoTasks);
}

while (completed) {
  let chosenOption = prompt(`
    1. Lägg till nya uppgifter
    2. Visa alla aktuella uppgifter.
    3. Markera uppgifter som klara.
    4. Ta bort uppgifter.
    5. Avsluta programmet`);

  console.log(todoTasks);

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
