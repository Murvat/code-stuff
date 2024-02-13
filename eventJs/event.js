// event



// let json= '{"name": "John", "age":30}';
// let user = JSON.parse(json);
// console.log(user.name);
// let json= '{Mess codedede}';
// try {
// let user = JSON.parse(json);
// console.log(user.name);}
// catch(e){
//     console.log('There is a mistake')
// // }
// function loadScript(){
//     let script = document.createElement('script');
//     script.src=src;
//     document.head.append(script);
// }
// function f1(){
//     console.log(1);
// }
// function f2(){
//     console.log(2);
// }
// function f3(){
//     console.log(3);
// }

// f3();
// f1();
// f2();\\



// function* genFn(x){
//     return x *2;
// }

// console.log('genFn= ', [genFn]);
// console.log('genFn.toString()= ', [genFn.toString()]);
// console.log('typeof(genfn)', typeof(genFn));
// const fnProto = Object.getPrototypeOf(genFn);
// console.log('fnProto.constructor.name = ', fnProto.constructor.name);

// console.log('typeof(genFn(5))= ', typeof(genFn(5)));
// console.log('genFn(5).toString()=', genFn(5).toString());
// const genProto = Object.getPrototypeOf(genFn(5));
// console.log('genProto= ', genProto);
// console.log('genProto[Symbol.Iterator=', genProto[Symbol.iterator]);
// console.log('genFn(5)=', genFn(5));

// class Multiplier {
//     constructor(k) {
//         this.value = k;
//     }
//     * genMethod(a){
//         this.value = a* this.value;
//         return a* this.value;

//     }
// } 
// const m1 = new Multiplier(3);
// console.log(m1.genMethod(2).next())
// console.log('m1.genMethod(5).next()=', m1.genMethod(5).next());
// console.log(m1.genMethod(2).next())
// console.log(m1.genMethod(2).next())
// console.log(m1.genMethod(2).next())
// console.log(m1.genMethod(2).next())


// class Menu{
//     handleEvent(event){
//         switch(event.type){
//             case 'mousedown':
//                 one.innerHTML = 'Has been pressed'
//             break;
//         case 'mouseup':
//             one.innerHTML +='was pressed while ago' 
//         break;     }
//     }

// }
// let menu = new Menu();
// one.addEventListener('mousedown', menu);
// one.addEventListener('mouseup', menu)

// function HandleClick(event){alert(event.target);}

// let myButton = document.getElementById('one');

// myButton.addEventListener('click', HandleClick)
// document.getElementById('parent').addEventListener('click', function(){
//     alert('parent clicked');
// })
// document.getElementById('child').addEventListener('click', function(){
//     alert('child element');
//     event.stopPropagation();
// })

// let selectedTd; // Исправление: опечатка в названии переменной

// // Исправление: заменить table.onClick на table.addEventListener
// document.querySelector('table').addEventListener('click', function(event) {
//   let target = event.target;
//   if (target.tagName !== 'TD') return;
//   highlight(target);
// });

// function highlight(td) {
//   if (selectedTd) {
//     selectedTd.classList.remove('highlight');
//   }
//   selectedTd = td;
//   selectedTd.classList.add('highlight');
// }

// const btn = document.querySelectorAll('.btn');

// const handleClick= (event) =>{
//     alert('click')
// }

// btn.forEach(button => {
//     button.addEventListener('click', handleClick)
// })

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('listContainer').addEventListener('click', function (event) {
//         if (event.target.tagName === 'LI') {
//             alert('Вы кликнули на элемент списка: ' + event.target.textContent);
//         }
//     });
// });


// document.getElementById('buttonContainer').addEventListener('click', function(event){
//     if(event.target.tagName === 'BUTTON');
//     alert('You pressed:' + event.target.textContent)
// })

// document.addEventListener('DOMContentLoaded', function(){
//     const dynamicList = document.getElementById('dynamicList');
//     const addItemButton = document.getElementById('addItemButton');
//     const newItemInput = document.getElementById('newItemInput');
//     addItemButton.addEventListener('click', function(){
//         const newItemText = newItemInput.value.trim();


//         if (newItemText !== ''){
//             const newItem = document.createElement('li');
//             newItem.textContent = newItemText;
//             dynamicList.appendChild(newItem);
//             newItemInput.value = '';
//         }
//     });

//     dynamicList.addEventListener('click', function(event){
//         if(event.target.tagName === 'LI'){
//             const confirmed = confirm('Are you sure?')

//             if(confirmed){
//                 event.target.remove();
//             }
//         }
//     })
// })


// document.addEventListener('DOMContentLoaded', function(){
//     const filterList = document.getElementById('filterList');
//     const filterButtons = document.getElementById('filterButtons');

//     filterButtons.addEventListener('click', function(event){
//         if(event.target.tagName === 'BUTTON'){
//             const category = event.target.dataset.category;

//             Array.from(filterList.children).forEach(function(item){
//                 const itemCategory = item.dataset.category;
//                 if(category === 'all' || category === itemCategory){
//                     item.style.display = 'block';
//                 }else {
//                     item.style.display = 'none';
//                 }
//             });
//         }
//     })
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const taskList = document.getElementById('taskList');
//     const newTaskInput = document.getElementById('newTaskInput');
//     const addTaskButton = document.getElementById('addTaskButton');

//     addTaskButton.addEventListener('click', function () {
//         const taskText = newTaskInput.value.trim();

//         if (taskText !== '') {
//             const taskItem = createTaskElement(taskText);
//             taskList.appendChild(taskItem);
//             newTaskInput.value = '';
//         }
//     });

//     // Делегирование для редактирования и удаления задач
//     taskList.addEventListener('click', function (event) {
//         const target = event.target;

//         if (target.classList.contains('edit-task')) {
//             editTask(target);
//         } else if (target.classList.contains('delete-task')) {
//             deleteTask(target);
//         }
//     });

//     function createTaskElement(text) {
//         const taskItem = document.createElement('li');
//         taskItem.textContent = text;

//         const editButton = document.createElement('button');
//         editButton.textContent = 'Редактировать';
//         editButton.classList.add('edit-task');

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Удалить';
//         deleteButton.classList.add('delete-task');

//         taskItem.appendChild(editButton);
//         taskItem.appendChild(deleteButton);

//         return taskItem;
//     }

//     function editTask(editButton) {
//         const taskItem = editButton.parentElement;
//         const newText = prompt('Введите новый текст задачи:', taskItem.textContent);

//         if (newText !== null) {
//             taskItem.textContent = newText;

//             // Добавляем кнопки редактирования и удаления снова
//             const editButton = document.createElement('button');
//             editButton.textContent = 'Редактировать';
//             editButton.classList.add('edit-task');

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Удалить';
//             deleteButton.classList.add('delete-task');

//             taskItem.appendChild(editButton);
//             taskItem.appendChild(deleteButton);
//         }
//     }

//     function deleteTask(deleteButton) {
//         const taskItem = deleteButton.parentElement;
//         taskItem.remove();
//     }
// });


// const target= document.getElementById('target');
// const container = document.getElementById('container');

// target.addEventListener('mousedown', function(event) {
//     console.log('mousedown');
// });
// target.addEventListener('mouseup', function(event){
//     console.log('mouseup')
// })

// container.addEventListener('mousemove', function(event){
//     console.log(`mousemove-clientX: ${event.clientX}, clientY: ${event.clientY}`)
// })
// 4. mouseover event
// target.addEventListener('mouseover', function(event) {
//     console.log('mouseover');
// });
// // 5. mouseout event
// target.addEventListener('mouseout', function(event) {
//     console.log('mouseout');
// });
// // 6. mouseenter event
// target.addEventListener('mouseenter', function(event) {
//     console.log('mouseenter');
// });
// container.addEventListener('mousemove', function(event) {
//     console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`);
//     console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`);
//     console.log(`target: ${event.target.id}`);
//     console.log(`relatedTarget: ${event.relatedTarget ? event.relatedTarget.id : 'null'}`);
// });
// let isDragging = false;
// let initialX;
// let initialY;
// target.addEventListener('mousedown', function(event){
//     isDragging = true;
//     initialX = event.clientX - target.offsetLeft;
//     initialX = event.clientY - target.offsetTop;
// });


// container.addEventListener('mousedown', function(event){
//     isDragging = true;
//     initialX = event.clientX-target.offsetLeft;
//     initialy = event.clientY - target.offsetTop;
// });

// container.addEventListener('mousemove', function(event){
//     if(isDragging){
//         const newX = event.clientX - initialX;
//         const newY = event.clientY- initialY;

//         const maxX = container.clientWidth - target.offsetWidth;
//         const maxY = container.clientHeight - target.offsetHeight;

//         const boundedX = Math.min(Math.max(0, newX), maxX);
//         const boundedY = Math.min(Math.max(0, newY), maxY);

//         target.style.left = `${boundedX}px`;
//         target.style.top = `${boundedY}px`;
//     }
// });

// container.addEventListener('mouseup', function(event) {
//     isDragging = false
// }
// )
// document.addEventListener('keydown', function(event) {
//     console.log(`keydown - Key pressed: ${event.key}, Code: ${event.code}`);
// });
// document.addEventListener('keyup', function(event) {
//     console.log(`keyup - Key released: ${event.key}, Code: ${event.code}`);
// });

// window.addEventListener('scroll', function(event) {
//     console.log('scroll');
// });

// document.addEventListener('keydown', function(event){
//     if(event.key === 'ArrowDown'){
//         console.log('Arrow donw key pressed');
//     } 
//     if(event.code === 'KeyA'){
//         console.log('key A pressed')
//     }
// })

// document.addEventListener('keydown', function(event){
//     if(event.key === 'Arrowdown' || event.key === 'ArrowUp') {
//         event.preventDefault(); // Prevent scrolling when arrow keys are pressed
//     }
// })
// const forms = document.forms;
// console.log(forms);
// const form = document.getElementById('form2');
// const elements = form.elements;
// console.log(elements);
// const usernameInput = document.getElementById('username');
// const agreeCheckbox = document.getElementById('agree');

// usernameInput.value = 'John Doe';
// agreeCheckbox.checked = true;


// const messageTextarea = document.getElementById('message');
// messageTextarea.value = 'This is a sample message';

// const colorsSelect = document.getElementById('colors');
// console.log(colorsSelect.options);
// console.log(colorsSelect.value);
// console.log(colorsSelect.selectedIndex);
// document.addEventListener('DOMContentLoaded', function(){
//     const input1 = document.getElementById('input1');
//     input1.addEventListener('focus', function(){
//         this.classList.add('highlight')
//     });
//     input1.addEventListener('blur', function(){
//         this.classList.remove('highlight');
//     })

// const input2 = document.getElementById('input2');
// input2.addEventListener('focusin', function(){
//     this.classList.add('highlight');
//     input2.addEventListener('focusout', function(){
//         this.classList.remove('highlight');
//     })
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// button1.addEventListener('focus', function(){
//     this.style.background = 'red';
// })

// button1.addEventListener('blur', function(){
//     this.style.backgroundColor='';
// })

// button2.addEventListener('focus', function(){
//     this.style.backgroundColor = 'blue'
// });
// button2.addEventListener('blur', function(){
//     this.style.backgroundColor='';
// })

// const div1 = document.getElementById('div1');
// div1.addEventListener('focusin', function(){
//     this.style.border = '2px solid green';
// })
// div1.addEventListener('focusout', function(){
//     this.style.border = '';
// });

// const list = document.getElementById('list');
// list.addEventListener('focusin', function(event){
//     const target = event.target;
//     if(target.tagName === 'LI') {
//         target.style.backgroundColor = 'yellow';
//     }
// });

// list.addEventListener('focusout', function(){
//     const target = event.target;
//     if(target.tagName === "LI"){
//         target.style.backgroundColor = '';
//     }
// })

// });

// document.getElementById('selectElement').addEventListener('change', function(event){
//     console.log('Selected option:', event.target.value);
// });

// document.getElementById('inputElement').addEventListener('input', function(event){
//     console.log('Input:', event.target.value);
// });

// document.getElementById('cutElement').addEventListener('cut', function(event){
//     console.log('Text cut')
// })

// document.getElementById('copyElement').addEventListener('copy', function(event){
//     console.log('text copied');
// })

// document.getElementById('pasteElement').addEventListener('paste', function(event){
//     console.log('Text pasted');
// });
// document.getElementById('formElement').addEventListener('submit', function(event){
//     // event.preventDefault();
// })


// Пример обработчика события submit на элементе формы
// document.getElementById('formElement').addEventListener('submit', function(event) {
//     event.preventDefault(); // Отмена отправки формы по умолчанию

//     // Валидация данных перед отправкой
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const usernameError = document.getElementById('usernameError');
//     const passwordError = document.getElementById('passwordError');
//     let isValid = true;

//     if (username.trim() === '') {
//         usernameError.textContent = 'Username is required';
//         isValid = false;
//     } else {
//         usernameError.textContent = '';
//     }

//     if (password.trim() === '') {
//         passwordError.textContent = 'Password is required';
//         isValid = false;
//     } else {
//         passwordError.textContent = '';
//     }

    

//     if (isValid) {
//         const formData = new FormData(event.target);
//         console.log('Form submitted with data:', Object.fromEntries(formData.entries()));
//     } else {
//         console.log('Form submission aborted due to validation errors.');
//     }
// });


// let table = document.getElementById('age-table');

// table.getElementsByTagName('lable');

// document.querySelectorAll('#age-table label'
// )
// table.rows[0].cells[0]

// table.getElementsByTagName('td')[0];

// table.querySelector('td');

// let form  =document.getElementsByName('search')[0];

// document.querySelector('form[name = search]');
// form.getElementsByTagName('in')
