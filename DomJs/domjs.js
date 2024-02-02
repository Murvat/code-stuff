//  const div = document.createElement('div');
// div.classList.add('wrapper');
// const body = document.body;
// body.appendChild(div);

// const header = document.createElement('h1'); // Fix the typo here
// header.textContent = 'DOM (DOCUMENT OBJECT MODEL)';

// div.insertAdjacentElement('beforebegin', header);


// const ul = `
// <ul>
// <li>Jeden</li>
// <li>Dwa</li>
// <li>Trzi</li>
// </ul>`

// div.innerHTML = ul;

// console.log(div)

// 2
// const img = document.createElement('img');

// img.src= 'https://picsum.photos/240';
// img.classList.add('super')

// img.alt = "Super Man"
// img.width=240;

// div.appendChild(img)

// const elemHTML = `
// <div class='pDiv'>
// <p>Paragraf1</p>
// <p>Paragraf2</p>
// </div>`

// const ulList = div.querySelector('ul');
// ulList.insertAdjacentHTML('beforebegin', elemHTML)

// const pDiv = document.querySelector('.pDiv');
// pDiv.children[1].classList.add('text');
// console.log(pDiv.children)
// pDiv.firstElementChild.remove();


// const generateAutoCard = (brand, color, year)=>{
//     return `
//     <div class ="autoCard">
//     <h2>${brand.toUpperCase()} ${year}</h2>
//     <p>Car${brand.toUpperCase()} - ${year}</p>
//     <p>Color:${color}</p>
//     </div>`
// }

// const carsDiv = document.createElement('div');
// carsDiv.classList.add('autos');
// console.log(carsDiv);

// const carList = [
//     {brand: 'Tesla', year: 2015, color: 'red'},
//     {brand: 'Lexus', year:2016, color: 'silver'},
//     {brand: 'Nissan', year:2012, color:'black'}
// ]
// const carsHtml = carList.map(car =>{
//     return generateAutoCard(car.brand, car.color, car.year)
// }).join(' ')
// carsDiv.innerHTML = carsHtml;
// div.insertAdjacentElement('afterbegin', carsDiv)


// function getListContent(){
//     let fragment = new DocumentFragment();
//     for(let i = 1; i<=3; i++){
//         let li = document.createElement('li');
//         li.append(i);
//         fragment.append(li)
//     }

//     return fragment;
// }

// ul.append(getListContent());

// function getListContent() {
//     let result = [];

//     for(let i=1; i<=3; i++){
//         let li = document.createElement('li');
//         li.append(i);
//         result.push(li);
//     }
//     return result;
// }

// ul.append(...getListContent())

// function clear(elem){
//     while (elem.firstChild){
//         elem.firstChild.remove();
//     }
// }

// clear(ol)

// const childElement = document.getElementById('child');
// const parentElement = childElement.parentNode;
// console.log(parentElement);

// const listElement = document.getElementById('list');
// const childNodes = listElement.childNodes;
// console.log(childNodes);

// const parentElement = document.getElementById('parent2');
// const firstChild = parentElement.firstChild;
// const firstElementChild = parentElement.firstElementChild;
// console.log(firstChild);
// console.log(firstChild.nextElementSibling);
// console.log(firstElementChild)
// const parentElement2 = document.getElementById('parent2');
// const lastChild = parentElement2.lastChild;

// console.log(lastChild); // Может вывести: #text
// console.log(lastChild.previousSibling); // Может вывести: null или <p>Второй параграф</p>
// const firstElement = document.getElementById('first');
// const nextSibling=firstElement.nextSibling;
// console.log(nextSibling.previousSibling)





// Задание 1:
// Создайте переменную firstParagraph и присвойте ей первый дочерний 
// элемент внутри контейнера (#container).
// const firstParagraph = document.getElementById('container');
// const childElement = firstParagraph.firstElementChild;
// console.log(childElement)
// Задание 2:
// Создайте переменную nextSiblingOfFirst и присвойте ей следующий 
// соседний узел после firstParagraph.
// const firstParagraph =document.getElementById('first')
// const nextSiblingOfFirst = firstParagraph.nextElementSibling;
// console.log(nextSiblingOfFirst)
// Задание 3:
// Создайте переменную secondParagraph и присвойте ей следующий
//  дочерний элемент после firstParagraph.
// const firstParagraph =document.getElementById('first')
// const secondParagraph = firstParagraph.nextSibling;
// console.log(secondParagraph)


// Задание 4:
// Создайте переменную parentOfSecond и присвойте ей родительский 
// элемент для secondParagraph.
// const secondParagraph = document.getElementById('second')
// const parentOfSecond = secondParagraph.parentElement;
// console.log(parentOfSecond)



// Задание 5:
// Создайте переменную innerElement и присвойте ей дочерний элемент 
// // внутри подконтейнера (#sub-container).
// const innerElement =document.getElementById('sub-container').children;
// console.log(innerElement)
// Задание 6:
// Создайте переменную previousSiblingOfInner и присвойте ей 
// предыдущий соседний узел перед innerElement.
// const previousSiblingofInner =innerElement[0].previousSibling;
// console.log(previousSiblingofInner)
// Задание 7:
// Создайте переменную nextElementOfInner и присвойте ей 
// следующий HTML-элемент после innerElement.
// const innerElement =document.getElementById('sub-container').children;
// const nextElementOfInner = innerElement[0].nextElementSibling;
// console.log(nextElementOfInner);

// Задание 8:
// Создайте переменную parentOfContainer и присвойте ей 
// родительский элемент для #container.
// const parentOfContainer = document.getElementById('container').parentElement;
// console.log(parentOfContainer)
// Задание 9:
// Создайте переменную nextSiblingOfContainer и присвойте ей 
// следующий соседний узел после #container.
// const nextSiblingOfContainer = document.getElementById('container').nextSibling.nextSibling;
// console.log(nextSiblingOfContainer)
// Задание 10:
// Создайте переменную nextElementSiblingOfContainer и 
// присвойте ей следующий HTML-элемент после #container.
// const nextElementSiblingOfContainer = document.getElementById('container').nextElementSibling;
// console.log(nextElementSiblingOfContainer)



// document.addEventListener('DOMContentLoaded', function () {
    // const table = document.getElementById('exampleTable');

    // // Проверка наличия дочерних узлов
    // console.log(table.hasChildNodes()); // Должно вернуть true

    // // Доступ к дочерним элементам
    // const children = table.children;
    // console.log(children); // Коллекция дочерних элементов

    // // Первый и последний дочерние элементы
    // console.log(table.firstElementChild); // Заголовок
    // console.log(table.lastElementChild); // Подвал

    // // Остальной код...

// const table = document.getElementById('exampleTable');
// console.log(table);
// console.log(table.hasChildNodes());
// const children = table.children;
// console.log(children);

// console.log(table.firstElementChild);
// console.log(table.lastElementChild)
// const firstRow = table.rows[1];
// console.log(firstRow.previousElementSibling); // null, так как это первая строка
// console.log(firstRow.nextElementSibling); // Вторая строка
// console.log(firstRow)
// Работа с ячейками
// const firstCell = firstRow.cells[0];
// console.log(firstCell.cellIndex); // Номер ячейки в строке (0)
// console.log(firstCell.parentNode); // Ссылка на строку
// console.log(firstCell.parentNode.sectionRowIndex); // Номер строки в секции (0)
// console.log(firstCell.parentNode.rowIndex); // Номер строки в таблице (1)
// });

// Задание 1: Получить элемент по его id "mainHeading" с помощью getElementById и вывести его текстовое содержание в консоль.
// const mainHeading = document.getElementById('mainHeading');
// console.log(mainHeading.textContent);

// Задание 2: Получить все абзацы с классом "highlight" с помощью getElementsByClassName и выделить их, добавив класс "highlight".
// const paragraphs = document.getElementsByClassName('highlight');
    // Задание 3: Получить первый абзац внутри элемента с классом "container" с помощью querySelector и вывести его текстовое содержание в консоль.
// Задание 3: Получить первый абзац внутри элемента с классом "container" с помощью querySelector и вывести его текстовое содержание в консоль.
// const inElement = document.querySelector('.container p:first-child');
// console.log(inElement.textContent);
    // Задание 4: Получить все элементы списка с помощью getElementsByTagName и вывести их количество в консоль.
    // const elemList = document.getElementsByTagName('li') ;
    // console.log(elemList.length)
    // Задание 5: Получить первый элемент списка с помощью querySelector и выделить его, добавив класс "highlight".
    // const firstElem = document.querySelector('li:first-child').classList.add('highlight')
    // Задание 5: Получить первый элемент списка с помощью querySelector и выделить его, добавив класс "highlight".
// const firstElem = document.querySelector('li:first-child');

// if (firstElem) {
//     firstElem.classList.add('highlight');
// }

    // Задание 6: Проверить, соответствует ли первый элемент списка селектору "li.highlighted" с помощью matches.
    // const firstListItem = document.querySelector('li:first-child');
    // if(firstListItem&&firstListItem.matches('li.highlighted')){
    //     console.log('Первый элемент списка соответствует селектору "li.highlighted".');
    // } else {
    //     console.log('Первый элемент списка НЕ соответствует селектору "li.highlighted".');
    // }

// Задание 7: Найти ближайший родительский элемент для первого элемента списка с классом "highlight" с помощью closest и выделить его, добавив класс "highlight".
// const elemList = document.querySelectorAll('.highlight');
// elemList.forEach((element)=>{
//     const closeElem = element.closest('.highlight').parentNode;
//     console.log(closeElem)
//     closeElem.classList.add('highlight');

// })
// const closeElem = elemList[0].closest('.highlight');

    // Задание 8: Получить все абзацы внутри элемента с классом "container" с помощью elem.querySelectorAll и вывести их количество в консоль.
    // const abElem = document.querySelectorAll('.container');
    // console.log(abElem.length)
    // Задание 9: Получить все элементы с тегом "li" внутри элемента с классом "container" с помощью elem.getElementsByTagName и выделить их, добавив класс "highlight".
 // Задание 9: Получить все элементы с тегом "li" внутри элемента с классом "container" с помощью elem.getElementsByTagName и выделить их, добавив класс "highlight".
// const containerElement = document.querySelector('.container');
// // Проверка наличия элемента с классом "container"
// if (containerElement) {
//   const allLi = containerElement.getElementsByTagName('li');
//   // Перебор всех элементов li и добавление класса "highlight"
//   for (let i = 0; i < allLi.length; i++) {
//     allLi[i].classList.add('highlight');
//   }
// }
 
       // Задание 10: Получить все элементы с классом "highlight" с помощью document.querySelectorAll и вывести их количество в консоль.
    //    const listItem = document.querySelectorAll('.highlight');
    //    console.log(listItem.length);
       // Задание 11: Получить первый абзац с классом "highlight" внутри элемента с классом "container" с помощью elem.querySelector и вывести его текстовое содержание в консоль.
    //    const containerElement = document.querySelector('.container');
    //    if (containerElement) {
    //     const firstElem = document.querySelector('.highlight')
    //     console.log(firstElem.textContent);
    //    }

    // Задание 12: Получить все элементы с атрибутом name с помощью document.getElementsByName и вывести их количество в консоль.
    // const listName = document.getElementsByName('name');
    // console.log(listName.length)
    // Задание 13: Получить все элементы списка с классом "highlight" с помощью document.querySelectorAll и вывести их текстовое содержание в консоль.
    // const listElem = document.querySelectorAll('.highlight');
    // if(listElem){
    //     listElem.forEach((elem)=>{
    //         console.log(elem.textContent);
    //     })
    // }
    // Задание 14: Получить все элементы с тегом "p" внутри элемента с id "mainHeading" с помощью document.getElementById и querySelectorAll, 
    // и выделить их, добавив класс "highlight".
// Задание 14: Получить все элементы с тегом "p" внутри элемента с id "mainHeading" с помощью document.getElementById и querySelectorAll, 
// и выделить их, добавив класс "highlight".
// const mainHeading = document.getElementById('mainHeading');
// if (mainHeading) {
//     const listElem = mainHeading.getElementsByTagName('p');
//     // Преобразование HTMLCollection в массив с помощью оператора распространения
//     const listArray = [...listElem];
//     listArray.forEach((element) => {
//         element.classList.add('highlight');
//     });
// }
    // Задание 15: Получить первый элемент с атрибутом name равным "username" с помощью document.getElementsByName и вывести его значение в консоль.
 // Задание 15: Получить первый элемент с атрибутом name равным "username" с помощью document.getElementsByName и вывести его значение в консоль.
// const elements = document.getElementsByName('username');

// Проверяем, существует ли элемент с атрибутом name "username"
// if (elements.length > 0) {
//     const firstElement = elements[0];
//     console.log(firstElement.value);
// } else {
//     console.log('Элемент с атрибутом name "username" не найден.');
// }


// let  divElement = document.getElementById('exampleDiv');
// let paragraphElement = document.getElementById('exampleParagraph')


// console.log(divElement.nodeType);
// console.log(paragraphElement.nodeType);
// console.log(divElement.nodeName);
// console.log(paragraphElement.nodeName);
// console.log(divElement.textContent);
// console.log(paragraphElement.textContent);
// console.log(divElement.innerHTML);
// console.log(paragraphElement.innerHTML);
// console.log(divElement.outerHTML);
// console.log(paragraphElement.outerHTML);
// divElement.hidden=true;

// Обход DOM-дерева:

// Используйте цикл для обхода всех элементов внутри определенного узла DOM.
// Выведите в консоль тип, имя и текст каждого узла.
// let example = document.getElementById('exampleDiv');

//         function traverseDom(node) {
//             for (let i = 0; i < node.childNodes.length; i++) {
//                 let childNode = node.childNodes[i];
//                 console.log('Node type:', childNode.nodeType);

//                 if (childNode.nodeType === 1) {
//                     console.log('Element Name:', childNode.nodeName);
//                 } else if (childNode.nodeType === 3) {
//                     console.log('Text Content:', childNode.nodeValue.trim());
//                 }

//                 if (childNode.childNodes.length > 0) {
//                     traverseDom(childNode);
//                 }
//             }
//         }

//         traverseDom(example);

// Манипуляции с содержимым:
// Найдите параграф внутри div с id "exampleDiv".
// Измените текст внутри параграфа на "New Content".
// Выведите в консоль полный HTML div с id "exampleDiv" после изменений.
// let elemParagraph = document.getElementById('exampleDiv');
// elemParagraph.textContent= 'Hello Murvat!!';
// console.log(elemParagraph.outerHTML)

// Скрытие элементов:
// Найдите все элементы с тегом "p" на странице.
// Сделайте их скрытыми (используя свойство hidden) с помощью цикла.
// Проверьте, что элементы действительно скрыты, выведя в консоль их состояние.
// Создание новых элементов:
// let neHid = document.querySelectorAll('p');
// neHid.forEach(function(paragraph) {
//     paragraph.hidden = true;
// });
// console.log(neHid);
// Создайте новый элемент "span".
// Установите текст внутри этого элемента на "Dynamic Element".
// Добавьте этот элемент внутрь div с id "exampleDiv".
// Выведите в консоль обновленный HTML div с id "exampleDiv".
// let newSpan = document.createElement('span');
// newSpan.textContent = 'Dynamic Element';
// let elemN = document.getElementById('exampleDiv');
// elemN.appendChild(newSpan); // Use appendChild to add the new span inside the div
// console.log(elemN.outerHTML); // Log the outer HTML of the container element (exampleDiv)
// Удаление элементов:
// Найдите элемент "strong" внутри параграфа с id "exampleParagraph".
// Удалите этот элемент из DOM.
// Выведите в консоль обновленный HTML параграфа с id "exampleParagraph".
// let paragraph = document.getElementById('exampleParagraph');
// let strongElement = paragraph.querySelector('strong');
// // Check if the "strong" element exists before attempting to remove it
// if (strongElement) {
//     strongElement.remove();
//     console.log(paragraph.outerHTML); // Log the updated HTML of the paragraph
// } else {
//     console.log('No <strong> element found in the paragraph.');
// }

// let myDiv = document.getElementById('myDiv');
// let hasClassAttribute = myDiv.hasAttribute('class');
// console.log('Answer:', hasClassAttribute)

// let customAttributeValue = myDiv.getAttribute('data-custom');
// console.log('Answer:', customAttributeValue)

// myDiv.setAttribute('data-custom', '456');
// console.log('New Answer:', myDiv.getAttribute('data-custom'))

// myDiv.removeAttribute('class');
// console.log('new answer: ', myDiv.outerHTML)
// let allAttributes = myDiv.attributes;
// console.log(allAttributes)

// let newParagraph = document.createElement('p');
// newParagraph.textContent = 'New Abzas';

// let textNode = document.createTextNode('this is text node');

// document.body.appendChild(newParagraph);
// document.body.appendChild(textNode);

// console.log(newParagraph)
// console.log(textNode)


// let newElem = document.createElement('div');
// let textNode = document.createTextNode('Example of text');
// let clonedElement = newElem.cloneNode(true);

// document.body.append(newElem);
// document.body.prepend(textNode);
// textNode.before(clonedElement);

// clonedElement.replaceWith('<p>Change<p>');
// textNode.remove();

// let parentElement = document.createElement('div');
// console.log(parentElement)
// let oldCHild = document.createElement('span');
// let newChild = document.createElement('p');
// console.log(oldCHild)
// parentElement.appendChild(oldCHild);
// parentElement.insertBefore(newChild, oldCHild);
// // parentElement.removeChild(oldCHild)
// console.log(parentElement)
// parentElement.replaceChild(newChild, oldCHild);


// let targetElement = document.createElement('div');
// document.body.appendChild(targetElement)
//     targetElement.insertAdjacentHTML('beforebegin', '<p>HTML вставлено перед элементом</p>');
//     targetElement.insertAdjacentHTML('afterbegin', '<p>HTML вставлено в начало элемента</p>');
//     targetElement.insertAdjacentHTML('beforeend', '<p>HTML вставлено в конец элемента</p>');
//     targetElement.insertAdjacentHTML('afterend', '<p>HTML вставлено после элемента</p>');







