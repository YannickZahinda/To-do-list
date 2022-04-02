import './style.css';
import {
  renderTasks,
  addTask as Add,
  editTask as Edit,
} from '../modules/app.js';
import { clearByCompleted, markCompleted } from '../modules/interactive.js';

class Task {
  constructor(taskArray) {
    this.taskArray = taskArray;
  }

  render = () => {
    renderTasks(this.taskArray);
    Add(this.addtask, this.taskArray);
    Edit(this.taskArray, this.addtask);
    clearByCompleted(this.taskArray);
    markCompleted(this.taskArray, this.addtask);
  };

  addtask = (data) => {
    if (data) {
      this.taskArray.push(data);
      localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
    } else {
      localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
    }
  };
}

const task = new Task(JSON.parse(localStorage.getItem('taskArray')) || []);
task.render();
task.addtask();
