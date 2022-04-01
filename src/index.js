import './style.css';
import TodoTaskStorage from '../modules/index.js';
import { displayTask } from '../modules/app.js';
import { Addtask } from '../modules/app.js';
import { taskAddRemove } from '../modules/app.js';
import { inputTask } from '../modules/app.js'


document.getElementById('add-task').addEventListener('click', () => {
  displayTask.taskAdd();
  inputTask.value = '';
  TodoTaskStorage.setToStorage();
})

// document.getElementById('myTaksArray').addEventListener('click', (event) => {
//   const isButton = event.target.nodeName === 'BUTTON';
//   if (!isButton) return;
//   taskAddRemove.removeByIndex(event.target.value);
//   displayTask.taskAdd();
// });



// window.addEventListener('load', () => {
//   const preservedTask = JSON.parse(localStorage.getItem('taskInfo'));
//   const inputTask = document.getElementById('add-to-list-input');
//   inputTask.value = preservedTask.description;
// })