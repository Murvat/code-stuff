// // // let n = 10;

// // // let current = 0;
//  // let prev = 1;
// // // let prevPrev  =0;

//  // while (n--> 0) {
// // //     prevPrev = prev;
// // //     prev = current;
//  //     current += prevPrev;
// //  //     console.log(current);
// // }

// // // let man = function(a,b) {
// // //     return (a + b);
// // // }


// // 1)
// // //  Используя конструкцию
// // if..else
// // , напишите код, который получает число через
// // prompt
// // , а затем выводит в
// // alert
// // :
// // 1
// // , если значение больше нуля,
// // -1
// // , если значение меньше нуля,
// // 0
// // , если значение равно нулю.
// // Предполагается, что пользователь вводит только числа.



// // 1)
//  // let num1 =0;
//  // if(num1>0){
//  //     console.log(1)
//  // } else if(num1 < 1){
//  //     console.log(-1)
//  // }else if (num1 = 0){
//  //     console.log(0)
//  // };

// // 2)
// // let result ;
// // if(a+b<4){result='Мало';}
// // else
// // {result='Много';}

// / // // // // // 2)
// / // // // // let result = (a+b<4) ? MALO : mnogo;

//  // // 3)
//  // // let message ;
//  // // if ( login=='Сотрудник'){
//  // // message='Привет';}else
//  // // if(login=='Директор')
//  // // {message= 'Здравствуйте';}else
//  // // if(login==''){message='Нет логина';}
//  // // else{message='';}

// // / // // // let message = (login == 'Member' ) ? Hello :(login == 'Ceo') ? Cesch:(login = '')? Net logina : '';
// // / // // let number = 1;

// //  // // if (number > 0) {
// // / // //     console.log(`${number} is positive.`);
// // / // // } else if (number < 0) {
// // / // //     console.log(`${number} is negative.`);
// // / // // } else {
// // / // //     console.log(`${number} is zero.`);
// // / // // }

// //  // 4)Создайте программу, которая проверяет, является ли введенное число положительным или отрицательным, и выводит соответствующее сообщение.
// // //  let num2 = 0;
// // //  if(num2 >0){
// // //      console.log('Positive')
// // //  }else{
// // // /     console.log('otricatelnoe')
// // // / }

// // // // // let Vage = prompt('Введите возраст:');
// //  // // // let voice = (parseInt(Vage) >= 18) ? 'can' : 'impossible';
// // // / // // // console.log(`Голосование ${voice}`);

// // // / // // 5)Напишите программу, которая принимает на вход число месяца и выводит название времени года (зима, весна, лето, осень).
// // // / // let num =6;
// // // / // let Nmonths = 
// // // / // (num===0)?'january'&&'Winter':
// // // / // (num===1)?'february'&&'Winter':
// // // / // (num===2) ?'march'&&'Spring':
// // // / // (num===3)?'april'&&'Spring':
// // // / // (num===4) ?'may'&&'Spring':
// // // / // (num===5) ?'june'&&'Summer':
// // // / // (num===6) ?'july'&&'Summer':
// // // / // (num===7) ?'august'&&'Summer':
// // // / // (num===8) ?'september'&&'Autumn':
// // // / // (num===9) ?'october'&&'Autumn':
// // // / // (num===10) ?'november'&&'Autumn':
// // // / // (num===11) ?'december'&&'Winter':''
// // // / // console.log(Nmonths);


// // // 6)Создайте программу, которая принимает на вход три числа и выводит максимальное из них.
// // // let num1=222;
// // // let num2=5000;
// // // let num3=121121;
// // // let MaxNum = (num1>num2&&num3)?num1:(num2>num1&&num3)?num2:(num3>num1&&num2)?num3:'';
// // // console.log(MaxNum);
// // // // // // // let num1 = 2;
// // // // // // // let num2 = 10;
// // // // // // // let num3 = 11;

// // // // // // // let MaxNum = (num1 > num2 && num1 > num3) ? num1 :
// // // // // // //              (num2 > num1 && num2 > num3) ? num2 :
// // // // // // //              (num3 > num1 && num3 > num2) ? num3 : '';

// // // // // // // console.log(MaxNum);
// // // // // // Напишите программу, которая принимает на вход возраст пользователя и проверяет, может ли он получить права:

// // // // // // Если возраст от 18 до 65 включительно, выведите "Может получить права".
// // // // // // Если возраст меньше 18, выведите "Слишком молод для вождения".
// // // // // // Если возраст больше 65, выведите "Слишком стар для вождения".
// // // // // let ageUser=30;
// // // // // let result = (ageUser > 18 && ageUser < 65)?'He can get id':(18>ageUser)?'He is very young':(ageUser>65)?'he is very old':'sasa';
// // // // // console.log(result);


// // // 1)
// // // // Создайте программу для расчета бонуса сотрудника в зависимости от его стажа и текущей зарплаты:

// // // // Если стаж менее 2 лет, бонус составляет 5% от зарплаты.
// // // // Если стаж от 2 до 5 лет включительно, бонус составляет 10% от зарплаты.
// // // // Если стаж более 5 лет, бонус составляет 15% от зарплаты.


// // // / / / // // let StajRaboti = 10;
// // // / / / // // let bonusMount = (StajRaboti <= 2)?"BONUS 5%":(StajRaboti>2 && StajRaboti<=5)?"BONUS 10%":(StajRaboti>5)?"bonus 15%":'';
// // // / / / // // console.log(bonusMount);

// // // // 2) Задача на использование switch:
// // // // Задача: Напишите программу, которая принимает на вход число от 1 до 7 и выводит соответствующий день недели. 
// // // / / / // // // Используйте конструкцию switch.
// // // / / / // let a=2;
// // // / / / // switch(a){
// // // / / / //     case 1:
// // // / / / //         console.log('Monday');
// // // / / / //         break;
// // // / / / //     case 2:
// // // / / / //         console.log('Tuesday');
// // // / / / //         break;
// // // / / / //         case 3:
// // // / / / //         console.log('wednesday');
// // // / / / //         break;
// // // / / / //     case 4:
// // // / / / //         console.log('Thursday');
// // // / / / //         break;
// // // / / / //         case 5:
// // // / / / //         console.log('Friday');
// // // / / / //         break;
// // // / / / //     case 6:
// // // / / / //         console.log('Sunday');
// // // / / / //         break;
// // // / / / //         case 7:
// // // / / / //         console.log('Saturday');
// // // / / / //         break;
// // // / / / // };

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

// // / / / // // // // 4) Задача на использование тернарного оператора:
// // / / / // // // // Задача: Напишите программу, которая принимает на вход два числа и выводит сообщение о том, 
// // / / / // // // является ли их сумма четной или нечетной, используя тернарный оператор.

// // / / // // // // // // // // // // let a = 4;
// // / / // // // // // // // // // // let b = 2;

// // / / // // // // // // // // // // let result = (((a+b)/2)-((a+b)%2)<1)?'summa necetnaya':'summa cetnaya';
// // / / // // // // // // // // // // console.log(result)

// // / / // // // // // // // // // let a = 10;
// // / / // // // // // // // // // let b = 2;
// // / / // // // // // // // // // let res = (a+b)%2;
// // / / // // // // // // // // // console.log(res)
// // / / // // // // // // // // let i = 0
// // / / // // // // // // // // while(i!=0) 
// // / / // // // // // // // // {console.log("VVEDI CISLO br")?
// // / / // // // // // // // // break};
// // / / // // // // // // // for(let i=3;i%2>0;i+2){
// // / / // // // // // // // console.log(i)};
// // / / // // // // // // let fibo = [1,1];
// // / / // // // // // // for(let i=1;i<49;i++){
// // / / // // // // // //    fibo.push(fibo[i] + fibo[i-1])}
// // / / // // // // // //    console.log(fibo)

// // / / // // // // // let weekd = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sundat', 'saturday']
// // / / // // // // // for(let days of weekd){
// // / / // // // // //     console.log(days)
// // / / // // // // // };

// // / / // // // // let students=['murvat', 'vusal', 'mamed','babek'];
// // / / // // // // console.log(students);
// // / / // // // // for(let i in students){
// // / / // // // //     console.log(`${parseInt(i) + 1} place : ${students[i]}`)
// // / / // // // // }

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



// // / // // // // // // // // // // new topic



// // / // // // // // // // // // let user = {
// // / // // // // // // // // //     name: 'Murvat',
// // / // // // // // // // // //     age: 30
// // / // // // // // // // // // }

// // / // // // // // // // // // let superUser = user

// // / // // // // // // // // // console.log(superUser.name);
// // / // // // // // // // // // console.log(superUser.age)


// // / // // // // // // // // let User = {
// // / // // // // // // // //     prop1: 20,
// // / // // // // // // // //     prop2: 30,
// // / // // // // // // // //     prop3: 2,
// // / // // // // // // // //     prop4: 'ses'
// // / // // // // // // // // }

// // / // // // // // // // // let User2={}

// // / // // // // // // // // let CounTB = () =>{
// // / // // // // // // // //     for(let key in User){
// // / // // // // // // // //         if(typeof User.key==Number){
// // / // // // // // // // //             key*= 2
// // / // // // // // // // //         }
// // / // // // // // // // //     }
// // / // // // // // // // //     return key
// // / // // // // // // // // }

// // / // // // // // // // // console.log(key)

// // / // // // // // // // let User = {
// // / // // // // // // //     prop1: 20,
// // / // // // // // // //     prop2: 30,
// // / // // // // // // //     prop3: 2,
// // / // // // // // // //     prop4: 'ses'
// // / // // // // // // // };

// // / // // // // // // // let CounTB = () => {
// // / // // // // // // //     for (let key in User) {
// // / // // // // // // //         if (typeof User[key] === 'number') {
// // / // // // // // // //             User[key] *= 2;
// // / // // // // // // //         }
// // / // // // // // // //     }
// // / // // // // // // //     return User;
// // // / // // // // // // // };

// // / // // // // // // // console.log(CounTB());
// // / // // // // // // 1)
// // / // // // // // let sayHello=function(){
// // / // // // // //     console.log('Hello, world')
// // / // // // // //     };
// // / // // // // //     sayHello();
// // / // // // // 2)Function Parameters:
// // / // // // // Declare a function named add that takes two parameters (num1 and num2) and returns their sum.
// // / // // // // Call the function with different arguments to test it.
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
