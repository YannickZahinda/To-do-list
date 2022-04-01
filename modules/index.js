export default class TodoTaskStorage {
    static getFromStorage = () => JSON.parse(localStorage.getItem('taskInfo'));
    static setToStorage = (myTodoTasks) => localStorage.setItem('taskInfo', JSON.stringify(myTodoTasks));
   
}