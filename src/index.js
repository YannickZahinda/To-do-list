import './style.css';

const toDoList = document.querySelector('.todo-list');
const myTodoTasks = [
  {
    Description: 'Learning to code',
    Completed: false,
    index: 1,
  },
  {
    Description: 'Learning webpack',
    Completed: true,
    index: 2,
  },
  {
    Description: 'Taking weekly quiz',
    Completed: false,
    index: 3,
  },
  {
    Description: 'Achieve module one',
    Completed: true,
    index: 4,
  },
];

const toDoData = () => {
  for (let task = 0; task < myTodoTasks.length; task += 1) {
    toDoList.innerHTML += `
        <li class="task"><span><input type="checkbox" id="checkbox"/></span> &nbsp; &nbsp; ${myTodoTasks[task].Description}<li/>
        `;
  }
};

toDoData();