console.log('hello');

let todoTasks = [];
let completedTasks = [];

function addTasks() {
  todoTasks.push(prompt('Lägg till en uppgift'));
  console.log(todoTasks);
}

let chosenOption = prompt(`
    1. Lägg till nya uppgifter
    2. Visa alla aktuella uppgifter.
    3. Markera uppgifter som klara.
    4. Ta bort uppgifter.
    5. Avsluta programmet`);

switch (chosenOption) {
  case '1':
    addTasks();
    break;
  case '2':
    break;
  case '3':
    break;
  case '4':
    break;
  case '5':
    break;
  default:
    alert('error');
}
