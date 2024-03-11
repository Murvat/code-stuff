import { onCreate } from "./createTask";
import{onToggle} from './update';

export const initTodoListHandlers = () =>{
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click',onCreate)

    const toDoListElem = document.querySelector('.list');
    toDoListElem.addEventListener('click', onToggle)
}