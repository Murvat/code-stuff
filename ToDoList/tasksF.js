const baseUrl=  'https://65ed804d08706c584d99e4df.mockapi.io/api/v1/test';


export const createTask = taskData =>
fetch(baseUrl, {
    method: 'POST',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(taskData)
});

export const updateTask = (taskId, taskData) =>
fetch(`${baseUrl}/${taskId}`, {
    method:'PUT',
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify(taskData)
});

export const deleteTask =(taskId) =>
fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
});

const mapTasks = tasks => tasks
.map((({_id, ...rest})=> ({id: _id, ...rest})));

export const getTaskList = () =>
fetch(baseUrl)
.then(response => response.json())
.then(mapTasks);

getTaskList()
