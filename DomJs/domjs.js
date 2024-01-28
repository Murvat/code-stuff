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

function getListContent() {
    let result = [];

    for(let i=1; i<=3; i++){
        let li = document.createElement('li');
        li.append(i);
        result.push(li);
    }
    return result;
}

ul.append(...getListContent())
