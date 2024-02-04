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
