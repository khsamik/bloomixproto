const tasks = document.querySelectorAll('.tasks'); // []


let dragged = null; // dragged = div

tasks.forEach(task => {
  task.addEventListener('dragstart', () => {
    dragged = task;
    task.style.opacity = 0.2;
  });
});

const columns = document.querySelectorAll('.column');

columns.forEach(column => {
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});

columns.forEach(column => {
  column.addEventListener('drop', () => {
    column.appendChild(dragged);
  });
});

tasks.forEach(task => {
  task.addEventListener('dragstart', () => {
    dragged = task;
  });
});

task.addEventListener('dragend', () => {
  task.style.background = 'white';
  task.style.opacity = 1
});