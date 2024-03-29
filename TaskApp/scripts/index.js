import {initTodoListHandlers} from './toDoList';
import {renderTasks} from './renderer';

document.addEventListener('DOMContentLoaded', ()=>{
    renderTasks();
    initTodoListHandlers();
});

const onStarageChange = e=>{
    if (e.key === 'tasksList'){
        renderTasks();
    }
};

window.addEventListener('storage', onStarageChange)