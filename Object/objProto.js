// let animal  ={
//     eats: true,
//     walk(){
//          console.log('Animal Walk')
//     }
// }
// let rabbit = {
//     jumps: true,
// }

// rabbit.__proto__=animal;
// // console.log(rabbit);
// // console.log(animal);
// // console.log(rabbit.eats)
// // console.log(animal.jumps)
// rabbit.walk()
// let animal  ={
//     eats: true,
//     walk(){
//          if(!this.isSleeping){
//             console.log('I walk')
//          }
//     },
//     sleep(){
//         this.isSleeping = true;
//     }
// }
// let rabbit = {
//     name: "Whie Rabbit",
//     __proto__: animal,

// }
// rabbit.sleep();
// console.log(rabbit.isSleeping)
// animal.sleep();
// console.log(animal.isSleeping)

// let animal  ={
//     eats: true,
//     walk(){
//          if(!this.isSleeping){
//             console.log('I walk')
//          }
//     },
//     sleep(){
//         this.isSleeping = true;
//     }
// }
// let rabbit = {
//     name: "Whie Rabbit",
//     __proto__: animal,

// }
// console.log(Object.keys(animal));
// console.log(Object.keys(rabbit));
// for(let key in animal) console.log(key);
// for(let prop in rabbit) console.log(prop);

// for(let key in rabbit){
//     let isOwn = rabbit.hasOwnProperty(key);

//     if(isOwn){
//         console.log(`Our: ${key}`)
//     } else{
//         console.log(`Inherited :${key}`)
//     }
// }

// let head= {
//     glasses: 1
// }
// let table= {
//     pen: 3,
//     __proto__:head
// }
// let bed= {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table

// }
// let pockets= {
//     money: 2000,
//     __proto__: bed

// }

// console.log(bed.glasses)
// console.log(pockets.glasses)

// let animal = {
//     eats: true
// };

// function Rabbit(name){
//     this.name = name;
// }

// Rabbit.prototype = animal;
// let rabbit = new Rabbit ("White Rabbit");

// console.log(rabbit.eats)
