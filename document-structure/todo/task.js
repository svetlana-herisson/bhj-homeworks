 const taskForm = document.getElementById("tasks__form");
 const taskInput = document.getElementById("task__input");
 
function removeTaskFunc(event) {
  event.preventDefault();
  event.target.parentElement.remove();
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tasksList = document.getElementById('tasks__list');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const existingTasks = Array.from(tasksList.children).map(task => task.querySelector('.task__title').textContent);
  if (existingTasks.includes(taskText)) {
    alert('Эта задача уже существует!');
    return;
  }

  const taskHtml = 
  `
    <div class="task">
        <div class="task__title">${taskText}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>
  `;

  tasksList.insertAdjacentHTML('beforeend', taskHtml);
  let newTask = tasksList.lastElementChild;
  let removeBtn = newTask.querySelector('.task__remove');
  removeBtn.addEventListener('click', removeTaskFunc);
  
  taskInput.value = '';
  taskInput.focus();
});