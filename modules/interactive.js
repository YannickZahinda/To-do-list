const toDoList = document.querySelector('.todo-list');

const clearByCompleted = (taskArray) => {
  const clearCompleted = document.getElementById('clear-btn');
  clearCompleted.addEventListener('click', () => {
    let unCompleted = taskArray.filter((task) => task.completed === false);
    unCompleted.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('taskArray', JSON.stringify(unCompleted));
    window.location.reload();
  });
};

const markCompleted = (taskArray, addTask) => {
  const checkBoxes = toDoList.querySelectorAll('input[type="checkbox"]');
  const inputs = toDoList.querySelectorAll('input[type="text"]');

  checkBoxes.forEach((box) => {
    const index = parseInt(box.getAttribute('id'), 10);
    let completed = taskArray[index].completed;
    if (completed) {
      box.checked = true;
      inputs[index].classList.toggle('completed');
    }

    box.addEventListener('change', () => {
      taskArray[index].completed = !taskArray[index].completed;
      inputs[index].classList.toggle('completed');
      addTask();
    });
  });
};

export { clearByCompleted, markCompleted };
