import TodoTaskStorage from './index.js';

const toDoList = document.querySelector('.todo-list');
const inputTask = document.getElementById('add-to-list-input');
const myTodoTasks = [];
class displayTask {
  // static taskAdd = () => {
  //     const storedTasks = TodoTaskStorage.getFromStorage();
  //     toDoList.innerHTML = '';
  //     let taskPerAdd = '';
  //     let index = 0;
  //     for (let i = 0; i < storedTasks.length; i += 1) {
  //     //   taskPerAdd += `<li class="card">
  //     //               <h3 class="content">${storedBooks[i].title}, &nbsp; by &nbsp;&nbsp;</h3>
  //     //               <h3 class="content p-content"><em>${storedBooks[i].author}</em></h3>
  //     //               <div class="btn"><button class='remove' value="${storedBooks[i].title}" type="button"> Remove</button></div>
  //     //           </li> <hr>`;

  //     index+=1;
  //       taskPerAdd += `<li id='${index}' class="task"><div><input type="checkbox" id="checkbox"/>&nbsp; &nbsp; ${myTodoTasks[task].description}</div> <button id="remove-task-btn" value="${index}"><i class="fa fa-trash" aria-hidden="true"></i></button><li/>`
  //       toDoList.innerHTML = taskPerAdd;
  //       console.log(toDoList)
  //     }
  //     toDoList.innerHTML = taskPerAdd;
  // };

  static taskAdd() {
    const inputTask = document.getElementById('add-to-list-input');
    if (inputTask.value !== '') {
      let index = 0;
    //   const Task = new Addtask(inputTask.value, index, 'false');
      let taskPerAdd = '';
      myTodoTasks.push(new Addtask(inputTask.value, index, 'false'));
      for (let task = 0; task < myTodoTasks.length; task += 1) {
        index += 1;
        taskPerAdd += `<li id='${index}' class="task"><div><input type="checkbox" id="checkbox"/>&nbsp; &nbsp; ${myTodoTasks[task].description}; index : ${index}</div> <i class="fa fa-trash" aria-hidden="true"></i><li/>`;
        toDoList.innerHTML = taskPerAdd;
        console.log(toDoList);
      }
    }
    inputTask.value = '';
  }
}

class Addtask {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

// class taskAddRemove {
//     static removeByIndex = (index) => {
//         const myTaskArray = TodoTaskStorage.getFromStorage();
//         const filteredTasks = myTaskArray.filter((task) => task.index !== index);
//         localStorage.setItem('myTaskArray', JSON.stringify(filteredTasks));
//     }

//     static addOneTask = (task) => {
//         if(inputTask.value !== ''){
//             // const myTaskArray = TodoTaskStorage.getFromStorage();
//             task.push(new Addtask(inputTask.value));
//             localStorage.setItem('myTaskArray', JSON.stringify(task));
//         }
//     }
// }

export { displayTask };
export { Addtask };
// export { taskAddRemove };
export { inputTask };
export { myTodoTasks };