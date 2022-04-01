const toDoList = document.querySelector('.todo-list');

const renderTasks = (taskArray) => {
  let taskelement = '';
  taskArray.forEach((task) => {
    taskelement += `<li id='${task.index}' class="task">
    <div>
    <input type="checkbox" id="checkbox"/>&nbsp; &nbsp;
    <input type="text" id="${task.index}" value="${task.description}">
    </div>
    <i class="fa fa-trash" aria-hidden="true"></i><li/>`;
  });

  toDoList.innerHTML = taskelement;
};

const addTask = (addTask, taskArray) => {
  const form = document.querySelector('.input-task');
  const input = document.querySelector('#add-to-list-input');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      const task = {
        index: taskArray.length,
        description: input.value.trim(),
        completed: false,
      };
      addTask(task);
      window.location.reload();
    }
  });
};

const removeTask = (taskArray, element, index, addTask) => {
  taskArray.splice(index, 1);
  taskArray.forEach((task, i) => {
    task.index = i;
  });
  element.remove();
  addTask();
  window.location.reload();
};

const editTask = (taskArray, addTask) => {
  const inputs = toDoList.querySelectorAll('input[type="text"]');
  let desc = '';

  inputs.forEach((input) => {
    const liElement = input.parentNode.parentElement;
    const trash = liElement.querySelector('.fa-trash');
    trash.addEventListener('click', () => {
      const li = trash.parentElement;
      const task = li.querySelector('input[type="text"]');
      const index = parseInt(task.getAttribute('id'), 10);
      removeTask(taskArray, li, index, addTask);
    });

    input.addEventListener('focusin', () => {
      input.addEventListener('input', () => {
        desc = input.value;
      });
    });

    input.addEventListener('focusout', () => {
      const index = parseInt(input.getAttribute('id'), 10);
      if (desc.trim()) {
        taskArray[index].description = desc;
        addTask();
      }
    });
  });
};

export { renderTasks, addTask, editTask };
