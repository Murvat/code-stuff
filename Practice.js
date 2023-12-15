// // let n = 10;

// // let current = 0;
//  let prev = 1;
// // let prevPrev  =0;

//  while (n--> 0) {
// //     prevPrev = prev;
// //     prev = current;
//      current += prevPrev;
//  //     console.log(current);
// }

// // let man = function(a,b) {
// //     return (a + b);
// // }


// 1)
// //  Используя конструкцию
// if..else
// , напишите код, который получает число через
// prompt
// , а затем выводит в
// alert
// :
// 1
// , если значение больше нуля,
// -1
// , если значение меньше нуля,
// 0
// , если значение равно нулю.
// Предполагается, что пользователь вводит только числа.



// 1)
 // let num1 =0;
 // if(num1>0){
 //     console.log(1)
 // } else if(num1 < 1){
 //     console.log(-1)
 // }else if (num1 = 0){
 //     console.log(0)
 // };

// 2)
// let result ;
// if(a+b<4){result='Мало';}
// else
// {result='Много';}

//  2)
//  let result = (a+b<4) ? MALO : mnogo;

 // // 3)
 // // let message ;
 // // if ( login=='Сотрудник'){
 // // message='Привет';}else
 // // if(login=='Директор')
 // // {message= 'Здравствуйте';}else
 // // if(login==''){message='Нет логина';}
 // // else{message='';}

/// // // let message = (login == 'Member' ) ? Hello :(login == 'Ceo') ? Cesch:(login = '')? Net logina : '';
/// // let number = 1;

 // // if (number > 0) {
 // //     console.log(`${number} is positive.`);
// // } else if (number < 0) {
// //     console.log(`${number} is negative.`);
//// } else {
/// //     console.log(`${number} is zero.`);
//// }

 // 4)Создайте программу, которая проверяет, является ли введенное число положительным или отрицательным, и выводит соответствующее сообщение.
//  let num2 = 0;
//  if(num2 >0){
//      console.log('Positive')
//  }else{
// /     console.log('otricatelnoe')
// / }

// // // let Vage = prompt('Введите возраст:');
//  // // let voice = (parseInt(Vage) >= 18) ? 'can' : 'impossible';
// / // // // console.log(`Голосование ${voice}`);

// / // // 5)Напишите программу, которая принимает на вход число месяца и выводит название времени года (зима, весна, лето, осень).
// / // let num =6;
// / // let Nmonths = 
// / // (num===0)?'january'&&'Winter':
// / // (num===1)?'february'&&'Winter':
// / // (num===2) ?'march'&&'Spring':
// / // (num===3)?'april'&&'Spring':
// / // (num===4) ?'may'&&'Spring':
// / // (num===5) ?'june'&&'Summer':
// / // (num===6) ?'july'&&'Summer':
// / // (num===7) ?'august'&&'Summer':
// / // (num===8) ?'september'&&'Autumn':
// / // (num===9) ?'october'&&'Autumn':
// / // (num===10) ?'november'&&'Autumn':
// / // (num===11) ?'december'&&'Winter':''
// / // console.log(Nmonths);


// 6)Создайте программу, которая принимает на вход три числа и выводит максимальное из них.
// let num1=222;
// let num2=5000;
// let num3=121121;
// let MaxNum = (num1>num2&&num3)?num1:(num2>num1&&num3)?num2:(num3>num1&&num2)?num3:'';
// console.log(MaxNum);
// // // // // let num1 = 2;
// // // // // let num2 = 10;
// // // // // let num3 = 11;

// // // // // let MaxNum = (num1 > num2 && num1 > num3) ? num1 :
// // // // //              (num2 > num1 && num2 > num3) ? num2 :
// // // // //              (num3 > num1 && num3 > num2) ? num3 : '';

// // // // // console.log(MaxNum);
// // // // Напишите программу, которая принимает на вход возраст пользователя и проверяет, может ли он получить права:

// // // // Если возраст от 18 до 65 включительно, выведите "Может получить права".
// // // // Если возраст меньше 18, выведите "Слишком молод для вождения".
// // // // Если возраст больше 65, выведите "Слишком стар для вождения".
// // // let ageUser=30;
// // // let result = (ageUser > 18 && ageUser < 65)?'He can get id':(18>ageUser)?'He is very young':(ageUser>65)?'he is very old':'sasa';
// // // console.log(result);


// // 1)
// // // Создайте программу для расчета бонуса сотрудника в зависимости от его стажа и текущей зарплаты:

// // // Если стаж менее 2 лет, бонус составляет 5% от зарплаты.
// // // Если стаж от 2 до 5 лет включительно, бонус составляет 10% от зарплаты.
// // // Если стаж более 5 лет, бонус составляет 15% от зарплаты.


// // / / / // // let StajRaboti = 10;
// // / / / // // let bonusMount = (StajRaboti <= 2)?"BONUS 5%":(StajRaboti>2 && StajRaboti<=5)?"BONUS 10%":(StajRaboti>5)?"bonus 15%":'';
// // / / / // // console.log(bonusMount);

// // // 2) Задача на использование switch:
// // // Задача: Напишите программу, которая принимает на вход число от 1 до 7 и выводит соответствующий день недели. 
// // / / / // // // Используйте конструкцию switch.
// // / / / // let a=2;
// // / / / // switch(a){
// // / / / //     case 1:
// // / / / //         console.log('Monday');
// // / / / //         break;
// // / / / //     case 2:
// // / / / //         console.log('Tuesday');
// // / / / //         break;
// // / / / //         case 3:
// // / / / //         console.log('wednesday');
// // / / / //         break;
// // / / / //     case 4:
// // / / / //         console.log('Thursday');
// // / / / //         break;
// // / / / //         case 5:
// // / / / //         console.log('Friday');
// // / / / //         break;
// // / / / //     case 6:
// // / / / //         console.log('Sunday');
// // / / / //         break;
// // / / / //         case 7:
// // / / / //         console.log('Saturday');
// // / / / //         break;
// // / / / // };

// // // 3) Задача на использование логических операторов:
// // // Задача: Создайте программу, которая принимает на вход три числа и выводит их в порядке убывания. 
// // // / / / // // // Используйте логические операторы и условия.
// // // / / / let num1 = 1202000;
// // // / / / let num2 = 400;
// // // / / / let num3 = 20200;
// // // / / / let result = (num1 < num2 && num2 < num3) ? `${num3}, ${num2}, ${num1}` :
// // // / / /               (num1 < num3 && num3 < num2) ? `${num2}, ${num3}, ${num1}` :
// // // / / /               (num2 < num1 && num1 < num3) ? `${num3}, ${num1}, ${num2}` :
// // // / / /               (num2 < num3 && num3 < num1) ? `${num1}, ${num3}, ${num2}` :
// // // / / /               (num3 < num1 && num1 < num2) ? `${num2}, ${num1}, ${num3}` :
// // // / / /               (num3 < num2 && num2 < num1) ? `${num1}, ${num2}, ${num3}` : '';
// // // / / / console.log(result);

// // /  4) Задача на использование тернарного оператора:
// // /  Задача: Напишите программу, которая принимает на вход два числа и выводит сообщение о том, 
// // / / / // // // является ли их сумма четной или нечетной, используя тернарный оператор.

// //  // // // // let a = 4;
// //  // // // // let b = 2;

// //  // // // // let result = (((a+b)/2)-((a+b)%2)<1)?'summa necetnaya':'summa cetnaya';
// //  // // // // console.log(result)

// //  // // // let a = 10;
// //  // // // let b = 2;
// //  // // // let res = (a+b)%2;
// //  // // // console.log(res)
// //  // // let i = 0
// //  // // while(i!=0) 
// //  // // {console.log("VVEDI CISLO br")?
// //  // // break};
// //  // for(let i=3;i%2>0;i+2){
// //  // console.log(i)};
// //  let fibo = [1,1];
// //  for(let i=1;i<49;i++){
// //     fibo.push(fibo[i] + fibo[i-1])}
// //     console.log(fibo)

// //  // let weekd = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sundat', 'saturday']
// //  // for(let days of weekd){
// //  //     console.log(days)
// //  // };

// //  let students=['murvat', 'vusal', 'mamed','babek'];
// //  console.log(students);
// //  for(let i in students){
// //      console.log(`${parseInt(i) + 1} place : ${students[i]}`)
// //  }

// // / / // // // let a =[];
// // / / // // // for(let i=0;i<9;++i){
// // / / // // //     a.push(i*i);
// // / / // // // }
// // / / // // // let b=[]
// // / / // // // for(let pow of a ){
// // / / // // //  b.push(pow/2)
// // / / // // // console.log(b)}
// // / / // // let cards = ['2', 'korol', '5','6', 'tuz'];
// // / / // // let hand = [];

// // / / // // for (let card of cards) {
// // / / // //     if (card !== 'korol' && card !== 'tuz') continue;
// // / / // //     hand.push(card);
// // / / // //     console.log('karta ' + card + ' dobavlena v ruku');

// // / / // // }

// // / / // // console.log('karti v ruke',hand );
// // / / // let cards = ['2', 'korol', '5','6', 'tuz','Dami'];
// // / / // console.log('Iwem damu v kolode...');
// // / / // let found = false;

// // / / // for(let card of cards) {
// // / / //     console.log(`Iz kolodi vitanuta karta ${card}`);
// // // / / //     if (card ===  'Dami'){
// // // / / //         found = true;
// // // / / //         break;
// // // / / //     }
// // // / / // }

// // // / / // console.log(found ?'Mi  nashli damu!' : 'v kolode net dam');
// // // / / let func = (a, b) => {
// // // / /     let res = a + b;
// // // / /     return console.log(res);
// // // / / };
// // // / /  func(1, 2);


//  new topic

// / // // // let user = {
// / // // //     name: 'Murvat',
// / // // //     age: 30
// / // // // }

// / // // // let superUser = user

// / // // // console.log(superUser.name);
// / // // // console.log(superUser.age)

// / // // let User = {
// / // //     prop1: 20,
// / // //     prop2: 30,
// / // //     prop3: 2,
// / // //     prop4: 'ses'
// / // // }

// / // // let User2={}

// / // // let CounTB = () =>{
// / // //     for(let key in User){
// / // //         if(typeof User.key==Number){
// / // //             key*= 2
// / // //         }
// / // //     }
// / // //     return key
// / // // }

// / // // console.log(key)

// / // let User = {
// / //     prop1: 20,
// / //     prop2: 30,
// / //     prop3: 2,
// / //     prop4: 'ses'
// / // };

// / // let CounTB = () => {
// / //     for (let key in User) {
// / //         if (typeof User[key] === 'number') {
// / //             User[key] *= 2;
// / //         }
// / //     }
// / //     return User;
// // / // };

// / // console.log(CounTB());
// / 1)
// / // let sayHello=function(){
// / //     console.log('Hello, world')
// / //     };
// / //     sayHello();
// / 2)Function Parameters:
// / Declare a function named add that takes two parameters (num1 and num2) and returns their sum.
// / Call the function with different arguments to test it.
// // / // // // function add(num1, num2){
// // / // // //  return console.log(num1 + num2 );
// // / // // // };

// // / // // // add(5, 15);
// // / // // Default Parameters:
// // / // // Modify the add function to have default values of 0 for 
// // / // both parameters.
// // / // // Test the function with and without providing arguments.

// // / function add(num1 = 0, num2 = 0){
// // /     console.log(num1 + num2);
// // / }

// // / add(5);
// // // // // // // // // // // Anonymous Functions:

// // // // // // // // // // // Create an anonymous function that calculates 
// // // // // // // // // // the square of 
// // // // // // // // // // a number and assign it to a variable.
// // // // // // // // // // // Use the variable to call the function with a 
// // // // // // // // // // specific number.

// // // // // // // // // let counter = function(x,b){
// // // // // // // // //      console.log(b=x**2);
// // // // // // // // // }

// // // // // // // // // counter(200);
// // // // // // // // Return Statement:

// // // // // // // // Write a function named isEven that takes a number 
// // // // // // // as a parameter and returns true if it's even and 
// // // // // // // false if it's odd.
// // // // // // // // Call the function with different numbers and 
// // // // // // // log the result.


// // // // // // function getCounter(a){
// // // // // //     console.log((a%2===0)?true:false);
// // // // // // }

// // // // // // getCounter(6);
// // // // // Conditional Statements:

// // // // // 1)Write a function named isPositive that takes 
// // // // a number as a parameter and logs "Positive" if the number is 
// // // greater than 0, "Zero" if it's 0, and "Negative" if it's less than 0.
// // // // // Test the function with different numbers.'
// // // function isPositive(a){
// // //               a>0 ? console.log('positive'):console.log('Negative')
// // // }
// // // isPositive(-1);
// // // // // Loops - For Loop:
// // // // // 2)Write a function named printNumbers that takes 
// // // // a parameter n and prints numbers from 1 to n using a for loop.
// // // // // Test the function with different values of n.
// // // // // Loops - While Loop:
// //  eventLoper = (n)=>{

// // for(let i=0;i<n;i++)
// // console.log(i)

// // };
// // eventLoper(20);

// // // // // 3)Write a function named countDown that takes a 
// // // // parameter n and counts down from n to 1 using a 
// // // // while loop.
// // // // // Test the function with different values of n.
// // // // // Array Manipulation:

// // // // // 4)Declare an array of numbers and write a function
// // // //  named sumArray that takes an array as a parameter 
// // // //  and returns the sum of its elements.
// // // // // Write a function named findMax that takes an
// // // //  array of numbers and returns the maximum value.
// // // // // String Manipulation:

// // // // // 5)Declare a string variable and write a function 
// // // // named reverseString that takes a string as a parameter and 
// // // returns its reverse.
// // Write a function named isPalindrome that checks if
// //  a given string is a palindrome.
// // Logical Operators:

// // 6)Write a function named isTeenager that takes an 
// // age as a parameter and returns true if the age is 
// // between 13 and 19 (inclusive), otherwise false.
// // Write a function named canVote that takes an age 
// // and citizenship status as parameters and returns true if a 
// // person is eligible to vote.

// // document.querySelector('button').addEventListener('click', () => {});

// // window.addEventListener('resize', () => {});

// // document.addEventListener('DOMContentLoaded', () => { })

// // function globalOnClick() {
// //     alert('HELLO!');
// // }
// // (()=>{
// //     function scopedOnClick() {
// //         alert('Hello');
// //     }
// // })();

// //  (() => {
// //     const dragDiv = document.getElementById('dragDiv');
// //     let x, y, left, top;

// //     function onMove(event) {
// //         event.preventDefault();
// //         dragDiv.style.left = event.clientX - x + left + 'px';
// //         dragDiv.style.top = event.clientY - y + top + 'px';
// //     }

// //     dragDiv.addEventListener('mousedown', event => {
// //         x = event.clientX;
// //         y = event.clientY;
// //         left = parseInt(dragDiv.style.left) || 0;
// //         top = parseInt(dragDiv.style.top) || 0;

// //         window.addEventListener('mousemove', onMove);
// //     });

// //     document.addEventListener('mouseup', () => {
// //         window.removeEventListener('mousemove', onMove);
// //     });
// // })();

//   const nameMurvat = {
//     name: 'Murvat',
//     whoAmI() {
//         console.log(this.name);
//     }
// }

// nameMurvat.whoAmI();
// document.body.addEventListener('mousemove', function(event) {
//     //this-- <body>
//     console.log(this);
//     //event-- object of event
//     console.log(event);
// })// let Guest = prompt("Let's imagine who are u:", "User");
// let acUser = {
// [Guest]:'Murvat',
// };

// alert(acUser.User);
//let Guest = prompt("Let's imagine who are u:", "User");
// let acUser = {
// [Guest]:Guest,
// };

// alert(acUser[Guest]);
// let name = "John"; 

// let userIn = prompt("WHO IS CUSTOMER", `${name}`);
// let dataStock = {
//     [userIn]: `${name}`,
// };

// alert(dataStock[userIn]);
// let userIn = prompt("WHO IS CUSTOMER", "John");
// let dataStock = {
//     [userIn]: userIn,
// };

// alert(dataStock[userIn]);

// 1)Напишите функцию
// isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {name:'Murvat'};
// let isEmpty = function(object) {
//     for (let key in object) {
//         return console.log(false);
//     }
//     return console.log(true);
// }

// isEmpty(schedule);

// alert(isEmpty(schedule));// true 
// schedule["8:30"]="get up";
// alert(isEmpty(schedule));// false


// 2)У нас есть объект, в котором хранятся 
// зарплаты нашей команды:
// let
// salaries={
//  John:100,
// Ann:160,
// Pete:130}

// 3)Создайте объект
// calculator
// (калькулятор) с тремя методами:
// read()(читать) запрашивает два значения и сохраняет 
// их как свойства объекта.
// sum()(суммировать) возвращает сумму сохранённых 
// значений.
// mul()(умножить) перемножает сохранённые значения и 
// возвращает результат.

// let calculator = {
//             // ... ваш код ... 
//                      };         
// calculator.read();
// alert(calculator.sum());
// alert(calculator. mul())

// let calculator = {
//     read: function() {
//         this.a = parseFloat(prompt("Enter the first number:"));
//         this.b = parseFloat(prompt("Enter the second number:"));
//     },

//     sum: function() {
//         return this.a + this.b;
//     },

//     mul: function() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert("Sum: " + calculator.sum());
// alert("Multiplication: " + calculator.mul());
// let calculator = {
//     read: function(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     sum: function() {
//         return this.a + this.b;
//     },

//     mul: function() {
//         return this.a * this.b;
//     }
// };

// calculator.read(5, 6);
// console.log('RENDERING RESULT: ' + calculator.sum(), ',', calculator.mul());
     




        //  let read1 = function(a,b){
        //   return console.log(a,b)
        //    };
        //   let sum1=  function(a,b){
        //   return console.log(a+b)
        //   };
        //    let mul1=  function(a,b){
        //  return console.log(a*b)
        //   };


// 4)У нас есть объект
// ladder
// (лестница), который позволяет подниматься и 
// спускаться:
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;  // return the ladder object for chaining
//     },
//     down() {
//         this.step--;
//         return this;  // return the ladder object for chaining
//     },
//     showStep() {
//         // показывает текущую ступеньку
//         console.log(this.step);
//         return this;  // return the ladder object for chaining
//     }
// };

// ladder
//     .up()
//     .up()
//     .down()
//     .showStep()
//     .down()
//     .showStep()
//     .up()
//     .up()
//     .up()
//     .up()
//     .up()
//     .showStep();



//   Теперь, если нам нужно выполнить несколько 
//   последовательных вызовов,
//    мы можемсделать это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// // 1
// ladder.down();
// ladder.showStep();
// //0
// // Измените код методов up, down и showStep таким 
// // образом,  чтобы их вызов можнобыло сделать по цепочке, 
// // например так:
// ladder
//   .up()
//   .up()
//   .down()
//   .showStep()
//   .down()
//   .showStep();
// 5)Создайте функцию-конструктор Calculator, 
// которая создаёт объекты с тремя методами:
// read()запрашивает два значения при помощи
// promptи сохраняет их значение всвойствах объекта.
// sum()возвращает сумму этих свойств.
// mul()возвращает произведение этих свойств.
// function Calculator() {
//     this.read = function(a, b) {
//         this.a = a;
//         this.b = b;
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read(5, 6);
// console.log(calculator.mul());

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
// 6)Создайте функцию-конструкторAccumulator(startingValue)
// .Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. 
// Начальное значение устанавливаетсяв аргументе конструктора
// startingValue.Метод read() должен использовать prompt
// для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённыхпользователем значений, с учётом начального значения
// startingValue . Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1);  // начальное значение 1
// accumulator.read();  // прибавляет введённое пользователем значение к текущему значению
// accumulator.read();  // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value);  // выведет сумму этих значений

// function Accumulator(startingValue,endValue) {
//       this.startingValue = startingValue;
//       this.endValue = endValue
    

//      this.read = function () {
//         return this.endValue + this.startingValue;
//      };
// }

// let accumulator = new Accumulator(5,10);
// console.log(accumulator.read());

// function Accumulator(startingValue, endValue) {
//     this.startingValue = startingValue;
//     this.endValue = endValue;

//     this.read = function () {
//         return this.endValue + this.startingValue;
//     };
// }

// let accumulator = new Accumulator(5, 20);
// console.log(accumulator.read());

// 1)Основное объявление функции:
// Напишите функцию с именем greet, которая принимает один 
// параметр name и возвращает строку приветствия. Вызовите функцию с 
// // вашим именем и выведите результат в консоль.
// function greet(name) {
//         name
//       console.log('HELLO!', name);
// }
//  greet('Murvat');
// // 2)Параметры по умолчанию:
// // Создайте функцию calculateArea, которая принимает радиус круга и возвращает площадь. 
// // Установите значение по умолчанию для радиуса, например, 1.5. Вызовите 
// // функцию без передачи радиуса и выведите результат в консоль.

// function calculateArea(r) {
//         this.r= 1.5
//      return  3.14 * r**2
// }

// console.log(calculateArea(3));

// 2) Параметры по умолчанию:
// Создайте функцию calculateArea, которая принимает радиус круга и возвращает площадь. 
// Установите значение по умолчанию для радиуса, например, 1.5. Вызовите 
// функцию без передачи радиуса и выведите результат в консоль.

// function calculateArea(r = 1.5) {
//         return 3.14 * r ** 2;
//     }
    
//     console.log(calculateArea(5)); 
    


// /// 3) Переменное количество аргументов:
// // Напишите функцию sumNumbers, которая принимает переменное 
// // количество числовых аргументов и возвращает их сумму. 
// // Вызовите функцию с разным числом аргументов и выведите результат в консоль.

// function sumNumbers() {
//         let sum = 0;
//         for (let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         }
//         return sum;
//     }
    
//     console.log(sumNumbers(1, 5, 0, 7)); 

// // 4).Анонимная функция (лямбда):
// // Создайте анонимную функцию (лямбда-функцию) для вычисления квадрата числа. 
// // Присвойте ее переменной и вызовите функцию с числом 8. Выведите результат в консоль.
    
// let a = function(b){
//         return b**2
// }

// console.log(a(10));
// function counter() {
//         let count = 0;
    
//         function innerCounter() {
//             count++;
//             return count;
//         }
    
//         return innerCounter;
//     }
    
//     // Создаем два счетчика
//     const counter1 = counter();
//     const counter2 = counter();
    
//     // Вызываем функции несколько раз и выводим результаты в консоль
//     console.log(counter1()); // Выведет 1
//     console.log(counter1()); // Выведет 2
//     console.log(counter1()); // Выведет 3
    
//     console.log(counter2()); // Выведет 1 (для второго счетчика)
//     console.log(counter2()); // Выведет 2 (для второго счетчика)
    

// // 6)Простой объект:
// // Создайте объект person с тремя свойствами: name, age и gender. 
// // Присвойте значения этим свойствам и выведите объект в консоль.
// let human = {
//         name,
//         age,
//         gender,
// }

//6) Объект с методом:
// Создайте объект car с двумя свойствами: brand и speed, а также методом accelerate,
// который увеличивает скорость автомобиля.
// Вызовите метод accelerate несколько раз и выведите объект car в консоль.

// let car = {
//         brand:'BMW',
//         speed:60,
//         accelerate:function(){
//                console.log(this.speed+=20)
//         },
// }

// car.accelerate();
// car.accelerate();car.accelerate();
// let car = {
//         brand: 'BMW',
//         speed: 60,
//         maxSpeed: 200, // Добавлено максимальное значение скорости
//         accelerate: function () {
//             if (this.speed < this.maxSpeed) {
//                 this.speed += 20;
//                 console.log(`Accelerated! Current speed: ${this.speed}`);
//             } else {
//                 console.log(`Cannot accelerate beyond the maximum speed of ${this.maxSpeed}`);
//             }
//         },
//         brake: function () {
//             this.speed -= 10;
//             console.log(`Braked! Current speed: ${this.speed}`);
//         }
//     };
    
//     // Вызов методов несколько раз
//     car.accelerate();
//     car.accelerate();
//     car.accelerate();
//     car.accelerate();
//     car.brake();
//    // Create an object person with a sayHello method
// let person = {
//         name: '',  // Assuming you want to have a 'name' property
//         sayHello: function() {
//             console.log('Hello', this.name);
//         }
//     };
    
//     // Set the name property
//     person.name = 'MURVAT';
    
//     // Call the sayHello method
//     person.sayHello();
//     let naytiSummu = ()=> {
//          prompt('vvedi cislo:', a)
//          prompt('vvedi vtoroe cislo:', b)
//          return alert(a+b);
//     }

//     naytiSummu;
// function readNumber() {
//         let num;
    
//         do {
//             num = prompt("Введите число", 0);
//         } while (!isFinite(num));
    
//         if (num === null || num === '') {
//             return null;
//         }
    
//         return +num;
//     }
    
//     alert(`Число: ${readNumber()}`);

// function random(min, max) {
//         return min + Math.random() * (max - min);
//     }
    
//     alert(random(1, 5));
//     alert(random(1, 5));
//     alert(random(1, 5));

///NunmberJS
// let num = 123;
// console.log(num.toString());
// let num =7.89;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// let num2= 6.45;
// console.log(Math.round(num2));
// let num = 9.75;
// console.log(Math.trunc(num));
// let num = 3.14159;
// console.log(num.toFixed(1));

// let num = '4.40$';
// console.log(parseFloat(num));

// let move =( Math.random() *100).toFixed()
// console.log(move); 



// let str  = 'Ya budu front';
// console.log(str.indexOf('Ya'));
// console.log(str.indexOf('budu'));
// console.log(str.indexOf('ont'));

// (() => {
//         let str = 'My name is Murvat';
//         let target = 'a';
//         let pos = 0;
    
//         while (true) {
//             let foundPos = str.indexOf(target, pos);
//             if (foundPos === -1) break;
    
//             console.log(`Found here: ${foundPos}`);
//             pos = foundPos + 1;
//         }
//     })();


//     let str= "murvat";
//      function ucFirst(){
//             let newStr = str[0].toUpperCase()+str.slice(1);
//             console.log(newStr);
//      }
//      ucFirst();

// function ucFirst(str){
//         if(!str) return str;
//         return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('fuad'));

// function checkSpam(str) {
//         if (`${str}`.includes('viagra') || `${str}`.includes('xxx')) {
//             return true;
//         } else {
//             return false;
//         }
//     }
    
//     console.log(checkSpam('viagra'));

// function checkSpam(str){
//         let lowerStr = str.toLowerCase();
//         return lowerStr.includes('viagra') || lowerStr.includes('xxx');

// }
// console.log(checkSpam('Ne xx nikogda ne viagra'))    


// function truncate(str, maxLength) {
//         let newStr = str;
    
//         if (str.length > maxLength) {
//             newStr = str.substring(0, maxLength - 3) + '...';
//         }
    
//         console.log(newStr);
//     }
    
//     truncate('men hele boyumemisem', 10);

// let arr = ['jazz', 'Bluze'];
// console.log(arr.push('rock and roll'));
// console.log(arr);
// console.log(arr[1]='Classic')
// console.log(arr);
// console.log(arr.shift(0))
// console.log(arr);
// console.log(arr.unshift('Rap', 'Raeggy'));
// console.log(arr);



// const people = [
//         {name: 'Murvat', age: 25, budget: 4000},
//         {name: 'Vlad', age: 17, budget: 220},
//         {name: 'Tural', age: 15, budget: 39390},
//         {name: 'Nikita', age: 45, budget: 402100},
//         {name: 'Murad', age: 19, budget: 9000},
//         {name: 'Evgen', age: 23, budget: 12000},
// ]

// for (let i = 0; i < people.length; i++){
//         console.log(people[i])
// }
// for (let person of people){
//         console.log(person);
// }
// people.forEach(function(person, index, pArrr){
//         console.log(person)
//         console.log(index)
//         console.log(pArrr)
// }) 
// people.forEach(person =>console.log(person))

// const newPeople = people.map(person =>{ return person.budget})
// console.log(newPeople);
// const adults = [];
// for (let i = 0; i < people.length;i++) {
//         if (people[i].age >= 18){
//                 adults.push(people[i])
//         } 
// }
// console.log(adults);
    
// const adults = people.filter(person=> {
//         if (person.age >= 18){
//         return true}
// })

// console.log(adults);

// let amount = 0
// for (let i = 0; i< people.length; i++){
//         amount += people[i].budget
// }
// console.log(amount);

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// const a = [9, 8, 19, 5];
// console.log(a.indexOf(4));
// console.log(a.indexOf(9));
// if(a.indexOf(-9) !== -1 ){
//         console.log(true)
// } else {
//         console.log(false)
// }

// const a = [];  
// a[0]= 5;
// a[4]=6;
// const a = [5, 6, 8, 143, 45 ]
// //   let b = a.map((item,index) =>{
// //         console.log(index)
// //         return item*3
// //  });
// //  console.log(b)

//  let c = a.filter((item, index)=>{
//         if(item% 2 === 0){
//                 return index;
//         }
//  })

//  console.log(c)


// const users = [
//         {"name": "Ivanov", "age": 44},
//         {"name": "Petrov", "age": 14},
//         {"name": "putrov", "age": 43},
//         {"name": "alexeev", "age": 37},
// ]


// let newUsers = users.filter(item => {
//         return item.name.includes('pu')
// })
// console.log(newUsers);


// const temp= [0, 2, 4,5 ,6 ,7 ,0,-4, -3];
// const z =[];

// let tf = temp.map(item => {
//         console.log(item)
//         return item * 1.8;
// });

// console.log(tf);

// let a = [33, 44 ,55];
// let b =a.map((item,index, array)=>{
//         if (index == 2){
//                 array[index+1] = 66;
//         }
//         return item
// })
// console.log(b)
// console.log(a);

// const z = [
//         {"name": "Ivanov", "age": 44},
//         {"name": "Petrov", "age": 14},
//         {"name": "putrov", "age": 43},
//         {"name": "alexeev", "age": 37},
// ]

// const zBack = z.map(item => {
//         item.name = item.name.trim().toLocaleLowerCase();
//         return item;
// })
// console.log(zBack);

// const browser = [       
// ]

// // let a = [99, 89];
// // console.log(a);
// // a[0] = 66;
// // console.log(a)
// // a[a.length] = 90;
// // console.log(a);
// browser.push(100, 20, 22, 30);
// console.log(browser);
// console.log(browser.pop());
// console.log(browser)

// const a =[3,2,3,4,5,6,7,8];

// let b = a.filter(item => {
//         if(item> 5)
//         return true;
// })

// console.log(b);
// console.log(a);

// let a = [
//         {"id": 55, "city": "arc"},
//         {"id": 75, "city": "rca"},
//         {"id": 175, "city": "bra"},
// ];

// let b = a.reduce((accum, item) => {
//         accum.push(item.id)
//         return accum;

// }, [])
// console.log('=====');
// console.log(b);

//findIndex
//map
//filter

// const a = [
//         {name: 'Murvat', age:54},
//         {name: 'Vusal', age:30},
//         {name: 'Mamed', age:18},
//         {name: 'Nurlan', age:20},
//         {name: 'Xeyal', age:21},
//         {name: 'Ibrahim', age:22},
//         {name: 'Laman', age:19},        
// ];
// //find
// let b = a.find(item => {
//         if(item.age <= 18){
//                 return true 
//         }
// })
// console.log(b);
// //findindex
// const c = [22,33,5,66,44,33,66]
// let d  = c.findIndex(item =>{
//         if(item> 48) {
//                 return true
//         }
// })
// console.log(d);
// let str = 'hello,hi,world';
// let a = str.split(',')
// console.log(a);

//flat fill keys
// let a = [3,[8,7,4],5];
// let b = a.flat(300);
// console.log(b);

// let c = [1,1,1,1,1,1,1];
// let d  = c.fill(2,3);
// console.log(c);
// console.log(d);

//keys
//  let a = [3,4,5];
//  console.log(Object.keys(a))
// const a = [
//         {name: 'Murvat', age:54},
//         {name: 'Vusal', age:30},
//         {name: 'Mamed', age:18},
//         {name: 'Nurlan', age:20},
//         {name: 'Xeyal', age:21},
//         {name: 'Ibrahim', age:22},
//         {name: 'Laman', age:19},        
// ];
// console.log(Object.keys(a))

// let a = [1, 2, 3 ,4];
// let sum = 0;
// for (let i = 0;i<a.length; i++){
//         sum = sum +a[i];
// }
// console.log(sum);

// let b = a.reduce((prev, item, index ) =>{
//         return prev + item
// })
// console.log(b);

// a = [31,1,2,4,500,63,2];
// let max = a[0];
// for (let i = 0; i<a.length; i++){
//         if (a[i] > max) {
//                 max = a[i];
//         }
// }
// console.log(max);
// a = [31,-1,2,4,50,63,2];
// let aMax = a.reduce((prev, item) =>{
//         if(prev < item) {
//          return item;
//         } else {
//                 return prev;
//         }
// })
// console.log(aMax)


//Объединение строк:
// let firstName = "John";
// let lastName = "Doe";

// let b =  firstName +' ' +  lastName
// console.log(b)
// let inputString = "Hello, World!";
// let a = inputString.length
// console.log(inputString);
// let sourceString = "This is a sample string";
// let a  = sourceString.substring(0,5)
// console.log(a)



// let originalString = "Hello, world!";
// let oldChar = "o";
// let newChar = "a";

// // Заменяем все вхождения символа oldChar на newChar в строке
// originalString = originalString.split(oldChar).join(newChar);

// // Выводим результат
// console.log(originalString);
// let inputString = "JavaScript is Cool";
// console.log(inputString.toLocaleLowerCase())

// let sentenceWithSpaces = "    Trim this sentence    ";
// console.log(sentenceWithSpaces.trim());
// // let sentenceToSplit = "This is a sample sentence";
// // console.log(sentenceToSplit.split(' '));

// let mainString = "Welcome to JavaScript";
// let startString = "Welcome";
// let endString = "Script";
// let  a = () => {
//         if(mainString.indexOf(startString)===0){
//         return true
// }}
// let b = () => {
// }
// console.log(a())

// let checkString = "Programming";
// let targetChar = "g";
// console.log(checkString.includes(targetChar))


















// let mainString = "JavaScript is fun";
// let searchString = "un";

// // let a = mainString.indexOf(searchString);
// // console.log(a);
// let a = mainString.includes(searchString);

// console.log(a)
// let numbersArray = [1, 2, 3, 4, 5];
// let newElement = 6;
// let a = numbersArray.push(newElement);
// console.log(a)
// console.log(numbersArray)

// let stringsArray = ["apple", "banana", "cherry", "date"];
// let a = stringsArray[1];
// console.log(a);
// let numbersArray = [10, 20, 30, 40, 50];
// let indexToUpdate = 2;
// let newValue = 35;
// numbersArray[2]=35;
// console.log(numbersArray)
// let stringsArray = ["cat", "dog", "elephant", "fish"];
// let elementToDelete = "elephant";
// let indexToDelete = stringsArray.indexOf(elementToDelete);
// if (indexToDelete !==-1) {
//         stringsArray.splice(indexToDelete, 1);
//         console.log('deleted')
// }

// Объединение строк:
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Длина строки:
// let inputString = "Hello, World!";
// let stringLength = inputString.length;
// console.log(stringLength);

// Извлечение подстроки:
// let sourceString = "This is a sample string";
// let substring = sourceString.slice(5, 10);
// console.log(substring);

// Поиск подстроки:
// let mainString = "JavaScript is fun";
// let searchString = "is";
// let isSubstringPresent = mainString.includes(searchString);
// console.log(isSubstringPresent);

// Замена символов:
// let originalString = "Hello, world!";
// let oldChar = "o";
// let newChar = "a";
// let modifiedString = originalString.split(oldChar).join(newChar);
// console.log(modifiedString);


// Преобразование в верхний/нижний регистр:
// let inputString = "JavaScript is Cool";
// let upperCaseString = inputString.toUpperCase();
// let lowerCaseString = inputString.toLowerCase();
// console.log(upperCaseString, lowerCaseString);


// Удаление лишних пробелов:
// let sentenceWithSpaces = "    Trim this sentence    ";
// let trimmedSentence = sentenceWithSpaces.trim();
// console.log(trimmedSentence);


// Разделение строки:
// let sentenceToSplit = "This is a sample sentence";
// let wordsArray = sentenceToSplit.split(" ");
// console.log(wordsArray);\

// Проверка начала и конца строки:
// let mainString = "Welcome to JavaScript";
// let startString = "Welcome";
// let endString = "Script";
// let startsWithWelcome = mainString.startsWith(startString);
// let endsWithScript = mainString.endsWith(endString);
// console.log(startsWithWelcome, endsWithScript);

// Конкатенация строк:
// let string1 = "Hello";
// let string2 = ", ";
// let string3 = "World!";
// let concatenatedString = string1 + string2 + string3;
// console.log(concatenatedString);


// Преобразование числа в строку:
// let numberValue = 42;
// let stringValue = numberValue.toString();
// console.log(stringValue);


// Проверка наличия символа:
// let checkString = "Programming";
// let targetChar = "g";
// let isCharPresent = checkString.includes(targetChar);
// console.log(isCharPresent);


// Нахождение индекса элемента:
// let fruitsArray = ["apple", "banana", "cherry", "date"];
// let targetFruit = "banana";
// let fruitIndex = fruitsArray.indexOf(targetFruit);
// console.log(fruitIndex);


// Обратный порядок элементов:
// let reverseArray = [1, 2, 3, 4, 5];
// let reversedArray = reverseArray.reverse();
// console.log(reversedArray);
// Преобразование элементов в строки:
// let numbersArray = [10, 20, 30, 40, 50];
// let stringArray = numbersArray.map(String);
// console.log(stringArray);

// Проверка условия для каждого элемента:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let isConditionMet = numbersArray.every(item => item > condition);
// console.log(isConditionMet);


// Нахождение первого элемента, удовлетворяющего условию:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let firstMatch = numbersArray.find(item => item > condition);
// console.log(firstMatch);


// Удаление повторяющихся элементов:
// let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = Array.from(new Set(arrayWithDuplicates));
// console.log(uniqueArray);


// Создание подмассива на основе условия:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let filteredArray = numbersArray.filter(item => item > condition);
// console.log(filteredArray);

// Объединение элементов в строку:
// let stringArray = ["Hello", " ", "World", "!"];
// let concatenatedString = stringArray.join("");
// console.log(concatenatedString);


// Разворачивание вложенных массивов:
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let flatArray = nestedArray.flat();
// console.log(flatArray);


// Определение существования хотя бы одного элемента, удовлетворяющего условию:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let isConditionMet = numbersArray.some(item => item > condition);
// console.log(isConditionMet);


// Определение общих элементов двух массивов:
// let firstArray = [1, 2, 3, 4, 5];
// let secondArray = [4, 5, 6, 7, 8];
// let commonElements = firstArray.filter(item => secondArray.includes(item));
// console.log(commonElements);

// Создание нового массива на основе существующего:
// let numbersArray = [1, 2, 3, 4, 5]






















// Поиск элемента:
// let numbersArray = [5, 10, 15, 20, 25];
// let targetNumber = 15;
// let a = numbersArray.find(item => item === targetNumber);
// console.log(a);


// Сортировка массива:
// let stringsArray = ["orange", "apple", "banana", "grape"];
// let a  = stringsArray.sort()
// console.log(a)

// Объединение массивов:
// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];
// let a = firstArray.concat(secondArray);
// console.log(a);


// Извлечение подмассива:
// let numbersArray = [5, 10, 15, 20, 25];
// let startIndex = 1;
// let length = 3;
// let a =numbersArray.slice(startIndex, startIndex+length);
// console.log(a)

// Проверка наличия элемента:
// let stringsArray = ["apple", "orange", "banana", "grape"];
// let searchString = "orange";
// let a = searchString.includes(searchString);
// console.log(a)

// Преобразование элементов:
// let numbersArray = [2, 4, 6, 8, 10];
// let incrementValue = 5;
// let a = numbersArray.map(item => item + incrementValue)
// console.log(a);

// Фильтрация элементов:
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = numbersArray.filter(item =>{
//         if(item > 5){
//                 return item
//         }
// })
// console.log(a);


// Нахождение суммы элементов:
// let numbersArray = [1, 2, 3, 4, 5];
// let sum = numbersArray.reduce((prev, item) => prev + item, 0);
// console.log(sum);
// STRINGS
// Объединение строк:
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// Длина строки:
// let inputString = "Hello, World!";
// let stringLength = inputString.length;
// console.log(stringLength);
// Извлечение подстроки:
// let sourceString = "This is a sample string";
// let substring = sourceString.slice(5, 10);
// console.log(substring);
// Поиск подстроки:
// let mainString = "JavaScript is fun";
// let searchString = "is";
// let isSubstringPresent = mainString.includes(searchString);
// console.log(isSubstringPresent);
// Замена символов:
// let originalString = "Hello, world!";
// let oldChar = "o";
// let newChar = "a";
// let modifiedString = originalString.split(oldChar).join(newChar);
// console.log(modifiedString);
// Преобразование в верхний/нижний регистр:
// let inputString = "JavaScript is Cool";
// let upperCaseString = inputString.toUpperCase();
// let lowerCaseString = inputString.toLowerCase();
// console.log(upperCaseString, lowerCaseString);
// Удаление лишних пробелов:
// let sentenceWithSpaces = "    Trim this sentence    ";
// let trimmedSentence = sentenceWithSpaces.trim();
// console.log(trimmedSentence);
// Разделение строки:
// let sentenceToSplit = "This is a sample sentence";
// let wordsArray = sentenceToSplit.split(" ");
// console.log(wordsArray);\
// Проверка начала и конца строки:
// let mainString = "Welcome to JavaScript";
// let startString = "Welcome";
// let endString = "Script";
// let startsWithWelcome = mainString.startsWith(startString);
// let endsWithScript = mainString.endsWith(endString);
// console.log(startsWithWelcome, endsWithScript);
// Конкатенация строк:
// let string1 = "Hello";
// let string2 = ", ";
// let string3 = "World!";
// let concatenatedString = string1 + string2 + string3;
// console.log(concatenatedString);
// Преобразование числа в строку:
// let numberValue = 42;
// let stringValue = numberValue.toString();
// console.log(stringValue);
// Проверка наличия символа:
// let checkString = "Programming";
// let targetChar = "g";
// let isCharPresent = checkString.includes(targetChar);
// console.log(isCharPresent);



// ARRAYS
// Нахождение индекса элемента:
// let fruitsArray = ["apple", "banana", "cherry", "date"];
// let targetFruit = "banana";
// let fruitIndex = fruitsArray.indexOf(targetFruit);
// console.log(fruitIndex);
// Обратный порядок элементов:
// let reverseArray = [1, 2, 3, 4, 5];
// let reversedArray = reverseArray.reverse();
// console.log(reversedArray);
// Преобразование элементов в строки:
// let numbersArray = [10, 20, 30, 40, 50];
// let stringArray = numbersArray.map(String);
// console.log(stringArray);
// Проверка условия для каждого элемента:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let isConditionMet = numbersArray.every(item => item > condition);
// console.log(isConditionMet);
// Нахождение первого элемента, удовлетворяющего условию:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let firstMatch = numbersArray.find(item => item > condition);
// console.log(firstMatch);
// Удаление повторяющихся элементов:
// let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = Array.from(new Set(arrayWithDuplicates));
// console.log(uniqueArray);
// Создание подмассива на основе условия:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let filteredArray = numbersArray.filter(item => item > condition);
// console.log(filteredArray);
// Объединение элементов в строку:
// let stringArray = ["Hello", " ", "World", "!"];
// let concatenatedString = stringArray.join("");
// console.log(concatenatedString);
// Разворачивание вложенных массивов:
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let flatArray = nestedArray.flat();
// console.log(flatArray);
// Определение существования хотя бы одного элемента, удовлетворяющего условию:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let isConditionMet = numbersArray.some(item => item > condition);
// console.log(isConditionMet);
// Определение общих элементов двух массивов:
// let firstArray = [1, 2, 3, 4, 5];
// let secondArray = [4, 5, 6, 7, 8];
// let commonElements = firstArray.filter(item => secondArray.includes(item));
// console.log(commonElements);
// Создание нового массива на основе существующего:
// let numbersArray = [1, 2, 3, 4, 5]
// Поиск элемента:
// let numbersArray = [5, 10, 15, 20, 25];
// let targetNumber = 15;
// let a = numbersArray.find(item => item === targetNumber);
// console.log(a);
// Сортировка массива:
// let stringsArray = ["orange", "apple", "banana", "grape"];
// let a  = stringsArray.sort()
// console.log(a)
// Объединение массивов:
// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];
// let a = firstArray.concat(secondArray);
// console.log(a);
// Извлечение подмассива:
// let numbersArray = [5, 10, 15, 20, 25];
// let startIndex = 1;
// let length = 3;
// let a =numbersArray.slice(startIndex, startIndex+length);
// console.log(a)
// Проверка наличия элемента:
// let stringsArray = ["apple", "orange", "banana", "grape"];
// let searchString = "orange";
// let a = searchString.includes(searchString);
// console.log(a)
// Преобразование элементов:
// let numbersArray = [2, 4, 6, 8, 10];
// let incrementValue = 5;
// let a = numbersArray.map(item => item + incrementValue)
// console.log(a);
// Фильтрация элементов:
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = numbersArray.filter(item =>{
//         if(item > 5){
//                 return item
//         }
// })
// console.log(a);
// Нахождение суммы элементов:
// let numbersArray = [1, 2, 3, 4, 5];
// let sum = numbersArray.reduce((prev, item) => prev + item, 0);
// console.log(sum);
// Поиск минимального значения:
// Вводные данные: Массив чисел, например, [5, 2, 8, 1, 6].
// Задача: Найти и вывести минимальное значение в массиве.
// const numbers = [5, 2, 8, 6, 6]
// const minNum = Math.min(...numbers);
// console.log(minNum);
// Фильтрация положительных чисел:
// Вводные данные: Массив чисел, например, [-3, 7, -1, 0, 9].
// Задача: Создать новый массив, содержащий только положительные числа.
// const numbers = [-3, 7, -1, 0, 9]
// const fNum = numbers.filter(item =>item>0);
// console.log(fNum);
// Вычисление среднего значения:
// Вводные данные: Массив чисел, например, [10, 5, 8, 2, 7].
// Задача: Рассчитать и вывести среднее значение элементов массива.
// const num = [10, 5, 8, 2, 7];
// const sum = num.reduce((prev, current) => prev + current, 0);
// const average = sum / num.length;
// console.log(`Среднее значение массива: ${average}`);
// Поиск индекса элемента:
// Вводные данные: Массив строк, например, ['apple', 'banana', 'orange', 'grape'].
// Задача: Найти индекс элемента 'orange' в массиве.
// let arr =  ['apple', 'banana', 'orange', 'grape']
// let a = arr.indexOf('orange');
// console.log(a);
// Объединение массивов:
// Вводные данные: Два массива, например, [1, 2, 3] и [4, 5, 6].
// Задача: Объединить эти два массива в один.
// let arr1 = [1, 2, 3,]
// let arr2 = [4, 5, 6]
// let arr3 = arr1 + arr2
// console.log(arr3);
// let arr4 = arr1.concat(arr2);
// console.log(arr4);
// Подсчет четных чисел:
// Вводные данные: Массив чисел, например, [1, 2, 3, 4, 5, 6].
// Задача: Подсчитать количество четных чисел в массиве.
// let arr = [1, 2, 3, 4, 5, 6]
// let a = arr.filter(item => item%2 === 0)
// console.log(a);
// Удаление дубликатов:
// Вводные данные: Массив строк с повторяющимися значениями, например, ['apple', 'orange', 'banana', 'apple', 'grape'].
// Задача: Создать новый массив, исключив повторяющиеся значения.
// let arr = ['apple', 'orange', 'banana', 'apple', 'grape'];
// let a = [];
// arr.forEach(item => {
//     if (!a.includes(item)) {
//         a.push(item);
//     }
// });
// console.log(a);
// Сортировка в обратном порядке:
// Вводные данные: Массив чисел, например, [3, 1, 4, 1, 5, 9, 2, 6].
// Задача: Отсортировать массив в обратном порядке.
// let arr = [3, 1, 4, 1, 5, 9, 2, 6];
// let b = arr.slice().reverse();
// console.log(b);
// Проверка наличия элемента:
// Вводные данные: Массив чисел и число для проверки, например, [2, 4, 6, 8, 10] и 6.
// Задача: Проверить, содержится ли указанное число в массиве.
// let arr = [2, 4, 6, 8, 10]
// let b = arr.includes(6);
// console.log(b);
// Преобразование элементов массива:
// Вводные данные: Массив чисел, например, [2, 4, 6, 8, 10].
// Задача: Умножить каждый элемент массива на 2 и вывести результат.
// let arr =[2, 4, 6, 8, 10];
// let a = arr.map(item => item *=2);
// console.log(a);

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в«myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Подсказка: используйте split , чтобы разбить строку на массив символов, потомпеределайте всё как нужно и методом
// join соедините обратно
// let str = 'my-short-string';
// function camelize(str) {
//     let words = str.split('-');
//     for (let i = 1; i < words.length; i++) {
//         words[i]=words[i][0].toUpperCase() + words[i].slice(1)
//         }
//     let camelCaseStr = words.join('');
//     console.log(camelCaseStr);
// }
// camelize(str);

// Напишите функцию
// filterRange(arr, a, b), которая принимает массив arr , 
// ищет элементы со значениями больше или равными
// a и меньше или равными b и возвращаетрезультат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// let arr = [5, 7, 8, 2];
// function filterRange(arr, a, b) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let filteredArray = filterRange(arr, 4, 7);
// console.log(filteredArray);

// Написать функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения, кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// let arr = [5, 7, 8, 2, 10, 12];
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--; 
//         }
//     }
// }
// filterRangeInPlace(arr, 9, 11);
// console.log(arr);


// Сортировать в порядке по убыванию
// let arr = [1, -9, 10, -1, 3, 5, 6];
// function sortNum() {
//     arr.sort((a, b) => b - a);
// }
// sortNum();
// console.log(arr);

// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить
// arr неизменённым.Создайте функцию copySorted(arr) ,которая будет возвращать такую копию.
// function copySorted(arr) {
//     // Используем slice() для создания копии массива
//     let sortedCopy = arr.slice();
//     // Используем sort() для сортировки копии
//     sortedCopy.sort();
//     return sortedCopy;
// }
// let arr = ["apple", "orange", "banana", "grape"];
// let sortedArray = copySorted(arr);
// console.log(sortedArray);  // Отсортированная копия
// console.log(arr);          // Исходный массив остается неизменным

// Реализовать функцию-конструктор Calculator, которая создает объекты калькулятора.
// Реализовать метод calculate(str), который принимает строку в формате 
// "ЧИСЛО оператор ЧИСЛО" (разделено пробелами) и возвращает результат. 
// Метод должен понимать операторы "+" и "-".
// Добавить метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Метод принимает оператор name и функцию с двумя аргументами func(a, b), описывающую ..его.
// Трансформировать в массив имён:
// let calc = new Calculator;
// alert(calc.calculate("3 + 7")); // 10
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8

// function Calculator() {
//     // Хранилище для методов
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     };

//     // Метод для вычисления выражения
//     this.calculate = function (str) {
//         let split = str.split(' ');
//         let a = +split[0];
//         let operator = split[1];
//         let b = +split[2];

//         if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
//             return NaN; // Если оператор не поддерживается или введены некорректные значения, вернем NaN
//         }

//         return this.methods[operator](a, b);
//     };

//     // Метод для добавления новых операций
//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// // Пример использования
// let calc = new Calculator();
// alert(calc.calculate("3 + 7")); // 10
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8

// У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.
// let users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Alice' },
//     { id: 3, name: 'Bob' }
// ];
// let names = users.map(user => user.name);
// console.log(names); // ["John", "Alice", "Bob"]

// Трансформировать в объекты:
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.
// let users = [
//     { id: 1, name: 'John', surname: 'Doe' },
//     { id: 2, name: 'Alice', surname: 'Smith' },
//     { id: 3, name: 'Bob', surname: 'Johnson' }
// ];
// let transformedUsers = users.map(user => ({
//     id: user.id,
//     fullName: `${user.name} ${user.surname}`
// }));
// console.log(transformedUsers);

