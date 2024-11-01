console.log('hello');

let todoTasks = [];
let completedTasks = [];
let taskId = 0;

let completed = true;

let descriptionTask;

// const todo = {
//     id:
//     description:
//     done:
// }
while (completed) {
  function addTasks(descriptionTask) {
    const todo = {
      id: taskId++,
      description: descriptionTask,
      done: false,
    };

    todoTasks.push(todo);
    console.log(todoTasks);
    alert('La till: ' + descriptionTask);
  }

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
      break;
    case '3':
      break;
    case '4':
      break;
    case '5':
      completed = false;
      break;
    default:
      alert('error');
  }
}
