Function

// function pow(x, n) {
//     let result = 1;
//     for(let i=0;i<n;i++) {
//         result*= x;
//     }
//     console.log(result)
// }

// pow(2, 3)

// function pow(x, n) {
//     if (n == 1) {
//         console.log(x);
//     } else {
//         let a = x * pow(x, n - 1);
//         console.log(a);
//     }
// }

// pow(2, 3);

// function factorial(n) {
//     // Base case: factorial of 0 or 1 is 1
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         // Recursive case: n! = n * (n-1)
//         console.log(n)
//         return n * factorial(n - 1);
//     }
// }

// // Example usage:
// console.log(factorial(5)); // Output: 120

// function fibonacci(n) {
//     // Base cases: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
//         // console.log()
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// // Example usage:
// console.log(fibonacci(10)); // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ...
// function f2() {
//     let out = '';
//     for(let i=1;i <=200;i++){
//         out+= i + ' ';
//     }
//     console.log(out)
// }
// f2()

// let i = 0;
// let out = '';
// function f3(){
//     i++;
//     out += i+ ' ';
//     if(i > 30) return;
//     f3()
// }
// f3();
// console.log(out)

// function randomInteger(min, max) {
//     let rand = min + Math.random() *(max +1 -min);
//     return Math.floor(rand)
// }

// let s1 = 0;
// function moneyRecursion(){
//     let m = randomInteger(0, 100);
//     console.log('add: ' + m);
//     s1 += m;
//     console.log('sum: ' + s1)
//     if (s1>= 300) return;
//     moneyRecursion();
// }
// moneyRecursion();

// function moneyCycle(){
//     let s2 = 0;
//     for (let i=0; true; i++){
//         let m = randomInteger(0, 100);
//         console.log('add: ' + m );
//         s2+= m;
//         console.log('sum: '+ s2);
//         if(s2 >= 300) return;
//     }
// }
// moneyCycle()
// 

// function randomInteger(min, max) {
//     let rand = min + Math.random() *(max +1 -min);
//     return Math.floor(rand)
// }

// function CreateBeggar(){
//     let s = 0;
//     return function beggar() {
//         s += randomInteger(0, 100);
//         console.log(s);
//         if(s>= 250) return;
//         beggar()
//     }
// }

// let begg1 = CreateBeggar();
// begg1()

// function inBetween(a, b){
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// let arr = [1, 2, 3 ,4, 5, 6, 7]
// console.log(arr.filter(inBetween(3,6)))

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }
// let arr = [1, 2, 3 ,4, 5, 6, 7]

// console.log(arr.filter(inArray([1,2,6,12])))
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
  
//   function byField(field) {
//     return (a, b) => (a[field] > b[field] ? 1 : -1);
//   }
  
//   // Сортировка по имени
//   users.sort(byField('name'));
//   users.forEach(user => console.log(user.name));
  
//   // Ann, John, Pete
  
//   // Сортировка по возрасту
//   users.sort(byField('age'));
//   users.forEach(user => console.log(user.name));
//   // Pete, Ann, John
// function makeArmy() {
//     let shooters = [];
//     let i = 0;
  
//     while (i < 10) {
//       let shooter = (function(index) {
//         return function() {
//           console.log(index);
//         };
//       })(i);
  
//       shooters.push(shooter);
//       i++;
//     }
  
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   army[0](); // выведет 0
//   army[5](); // выведет 5

//    function makeCounter() {
//     let count=0;
//     function counter(){
//         return count++;
//     }
//     counter.set = value=> count =value;
//     counter.decrease = ()=>count--;
//     return counter
//     }
//   let counter = makeCounter();
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   console.log( counter() );
//   counter.set(10); 
//   console.log( counter() ); 
//   counter.decrease(); 
//   console.log( counter() );
// function createCounter() {
//     let count = 0;

//     return {
//         getCount: () => count,
//         increment: () => count++,
//         setCount: (value) => count = value,
//         decrement: () => count--
//     };
// }

// let myCounter = createCounter();
// console.log(myCounter.setCount(100))

// let timerId = setTimeout(function tick(){
//     console.log('tick');
//     timerId = setTimeout(tick, 2000);
// }, 1000)

// function printNumbers(from, to){
//     let current = from;
//     let timerId = setInterval(function(){
//         console.log(current);
//         if(current ==to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// } 
// printNumbers(5, 10)

// function showNumber(num){
//     console.log(num);
//     if(num<5){
//         setTimeout(showNumber, 1000, ++num);
//     }
// }
// setTimeout(showNumber, 1000, 1);

// function goUp(x) {
//     return x;
// }

// function decorateWithUp(func) {
//     let cache = new Map();
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x); // return cached result if available
//         }
//         let result = func(x);
//         cache.set(x, result);
//         return result;
//     };
// }
// let up = decorateWithUp(goUp);
//     console.log(up(1))
//     console.log(up(3))
//     console.log(up(12))

// function goUp(){
//     console.log(this.name)
// }

// let user = {name: 'Murvat'}
// let consumer  = {name: 'Kyrill'}

// goUp.call(consumer)

// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) { 
//       console.log('Called with' + x);
//          return x * this.someMethod();
// }
// };
// function cachingDecorator(func){
//     let cache = new Map();
//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }
//         let result = func.call(this, x);
//         cache.set(x, result)
//         return result;
//     }
// }

// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(2));
// console.log(worker.slow(2));

// function randomIn(){
//     const min = 100;
//     const max = 200;
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(rand)
// }
// randomIn()
// func();
// func();
// func();
//  func();
//  function func(){
//     console.log(100);
//  }
//  func();
//  func();
//  func();

// function testFunction(){
//     function t3(){
//         console.log('t3 function')
//     }
//     t3();
//     console.log('test function2')
// }

// // testFunction()
// unixTime();
// unixTime();

// function unixTime(){
//     let time = Math.floor(new Date().getTime());
//     console.log(time);
// }
// unixTime(console.log('mmmmm'))
// function unixTime(){
//     console.log('mmmm')
// }
// unixTime();

// function Counter(){
//     let count = 1;
//     count++;
//     console.log(count);
// }
// Counter();
// Counter();
// Counter();
// Counter();

// let count = 1;
// function Counter(){
//     count++;
//     console.log(count*3);
// }
// Counter();
// Counter();
// Counter();
// Counter();
// document.querySelector('.out-1').addEventListener('mousemove', counter)



// sum2();
// function sum2(){
//     let x = 55;
//     let y = 66
//     console.log(x + y)
// }
// sum2();
// let x = 55;
// let y = 66;
// function sum2(){
//     console.log(y+=(x+y))
// }
// sum2()
// sum2()
// sum2()
// sum2()
// function sum3(x, y){

//     console.log(x+=(x+y))
// }

// sum3(55,66)
// sum3(55,66)

// function render(elem,x,y){
//     document.querySelector(elem).textContent = x + y;
// }


// function renderAll(){
//     console.log(arguments)
//     let sum = 0;
//     for(let i=0; i < arguments.length; i++){
//         sum+=arguments[i];
//     }
//     console.log(sum);
// }
// // renderAll(25675,3979,49089)
// function renderAll(...args){
//     console.log(args)
//     let sum =args.reduce((accum,item)=> accum += item)
//     console.log(sum);
// }
// renderAll(32,354,46)

// function showNumber(num){
//     return num
// }
// function showSum(x, func){
//     console.log(func(x))
// }

// showSum(5,showNumber)



