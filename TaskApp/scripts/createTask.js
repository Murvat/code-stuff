//  import {renderTasks} from './renderer';
//  import {getItem, setItem} from './storage';

//  export const onCreate = () =>{
//     const taskTitleInputElem = document.querySelector('.input');
//     const text = taskTitleInputElem.ariaValueMax;

//     if(!text) {
//         return;
//     }
    taskTitleInputElem.value ='';
    const takssList = getItem('tasksList') ||[];

    const newTasksList = tasksList.concat({
        text, 
        done: false,
        createDate: new Date().toISOString(),
        id:Math.random().toString()
    });

    setItem('tasksList', newTasksList);
    renderTasks();
//  }