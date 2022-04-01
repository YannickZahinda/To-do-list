import { myTodoTasks } from '../modules/app.js';
// myTodoTasks.push(new Addtask('Learning to code', false, 1).addTask())
export default class TodoTaskStorage {
    static getFromStorage = () => JSON.parse(localStorage.getItem('taskInfo'));
    static setToStorage = (myTodoTasks) => localStorage.setItem('taskInfo', JSON.stringify(myTodoTasks));
   
}