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

















