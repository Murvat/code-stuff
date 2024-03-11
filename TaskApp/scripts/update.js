import {renderTasks} from './renderer';
import { getItem, setItem } from './storage';

export const onToggle = e => {
    const isCheckbox = e.target.classList.contains('.list__item-checkbox');

    if(!isCheckbox){
        return;
    }

    const tasksList = getItem('taskList');
    const newTsksList = tasksList
    .map(task => {
        if(task.id === e.target.dataset.id){
            const done = e.target.checked;
            return {
                ...task,
                done,
                finishDate: done
                ? new Date().toISOString()
                : null
            };
        }
        return task;
    });
    setItem('tasksList', newTsksList);

    renderTasks();
};