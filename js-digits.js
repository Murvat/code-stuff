// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let n = 10;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let current = 0;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let prev = 1;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let prevPrev  =0;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // while (n--> 0) {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     prevPrev = prev;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     prev = current;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     current += prevPrev;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(current);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let man = function(a,b) {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     return (a + b);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 1)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // Используя конструкцию
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if..else
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // , напишите код, который получает число через
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // prompt
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // , а затем выводит в
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // alert
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // :
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 1
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // , если значение больше нуля,
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // -1
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // , если значение меньше нуля,
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 0
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // , если значение равно нулю.
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // Предполагается, что пользователь вводит только числа.



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 1)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let num1 =0;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if(num1>0){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(1)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // } else if(num1 < 1){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(-1)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }else if (num1 = 0){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(0)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 2)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let result ;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if(a+b<4){result='Мало';}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // else
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // {result='Много';}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 2)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let result = (a+b<4) ? MALO : mnogo;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 3)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let message ;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if ( login=='Сотрудник'){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // message='Привет';}else
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if(login=='Директор')
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // {message= 'Здравствуйте';}else
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if(login==''){message='Нет логина';}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // else{message='';}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let message = (login == 'Member' ) ? Hello :(login == 'Ceo') ? Cesch:(login = '')? Net logina : '';
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // let number = 1;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // if (number > 0) {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(`${number} is positive.`);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // } else if (number < 0) {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(`${number} is negative.`);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // } else {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(`${number} is zero.`);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // // // // // // // 4)Создайте программу, которая проверяет, является ли введенное число положительным или отрицательным, и выводит соответствующее сообщение.
// // // // // // // // // // // // // // // // // // // // // // // // // // // let num2 = 0;
// // // // // // // // // // // // // // // // // // // // // // // // // // // if(num2 >0){
// // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log('Positive')
// // // // // // // // // // // // // // // // // // // // // // // // // // // }else{
// // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log('otricatelnoe')
// // // // // // // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // // // // // let Vage = prompt('Введите возраст:');
// // // // // // // // // // // // // // // // // // // // // // // // // // let voice = (parseInt(Vage) >= 18) ? 'can' : 'impossible';
// // // // // // // // // // // // // // // // // // // // // // // // // // console.log(`Голосование ${voice}`);

// // // // // // // // // // // // // // // // // // // // // // // // // 5)Напишите программу, которая принимает на вход число месяца и выводит название времени года (зима, весна, лето, осень).
// // // // // // // // // // // // // // // // // // // // // // // // let num =6;
// // // // // // // // // // // // // // // // // // // // // // // // let Nmonths = 
// // // // // // // // // // // // // // // // // // // // // // // // (num===0)?'january'&&'Winter':
// // // // // // // // // // // // // // // // // // // // // // // // (num===1)?'february'&&'Winter':
// // // // // // // // // // // // // // // // // // // // // // // // (num===2) ?'march'&&'Spring':
// // // // // // // // // // // // // // // // // // // // // // // // (num===3)?'april'&&'Spring':
// // // // // // // // // // // // // // // // // // // // // // // // (num===4) ?'may'&&'Spring':
// // // // // // // // // // // // // // // // // // // // // // // // (num===5) ?'june'&&'Summer':
// // // // // // // // // // // // // // // // // // // // // // // // (num===6) ?'july'&&'Summer':
// // // // // // // // // // // // // // // // // // // // // // // // (num===7) ?'august'&&'Summer':
// // // // // // // // // // // // // // // // // // // // // // // // (num===8) ?'september'&&'Autumn':
// // // // // // // // // // // // // // // // // // // // // // // // (num===9) ?'october'&&'Autumn':
// // // // // // // // // // // // // // // // // // // // // // // // (num===10) ?'november'&&'Autumn':
// // // // // // // // // // // // // // // // // // // // // // // // (num===11) ?'december'&&'Winter':''
// // // // // // // // // // // // // // // // // // // // // // // // console.log(Nmonths);


// // // // // // // // // // // // // // // // // // // // // // // 6)Создайте программу, которая принимает на вход три числа и выводит максимальное из них.
// // // // // // // // // // // // // // // // // // // // // // let num1=222;
// // // // // // // // // // // // // // // // // // // // // // let num2=5000;
// // // // // // // // // // // // // // // // // // // // // // let num3=121121;
// // // // // // // // // // // // // // // // // // // // // // let MaxNum = (num1>num2&&num3)?num1:(num2>num1&&num3)?num2:(num3>num1&&num2)?num3:'';
// // // // // // // // // // // // // // // // // // // // // // console.log(MaxNum);
// // // // // // // // // // // // // // // // // // // // // let num1 = 2;
// // // // // // // // // // // // // // // // // // // // // let num2 = 10;
// // // // // // // // // // // // // // // // // // // // // let num3 = 11;

// // // // // // // // // // // // // // // // // // // // // let MaxNum = (num1 > num2 && num1 > num3) ? num1 :
// // // // // // // // // // // // // // // // // // // // //              (num2 > num1 && num2 > num3) ? num2 :
// // // // // // // // // // // // // // // // // // // // //              (num3 > num1 && num3 > num2) ? num3 : '';

// // // // // // // // // // // // // // // // // // // // // console.log(MaxNum);
// // // // // // // // // // // // // // // // // // // // Напишите программу, которая принимает на вход возраст пользователя и проверяет, может ли он получить права:

// // // // // // // // // // // // // // // // // // // // Если возраст от 18 до 65 включительно, выведите "Может получить права".
// // // // // // // // // // // // // // // // // // // // Если возраст меньше 18, выведите "Слишком молод для вождения".
// // // // // // // // // // // // // // // // // // // // Если возраст больше 65, выведите "Слишком стар для вождения".
// // // // // // // // // // // // // // // // // // // let ageUser=30;
// // // // // // // // // // // // // // // // // // // let result = (ageUser > 18 && ageUser < 65)?'He can get id':(18>ageUser)?'He is very young':(ageUser>65)?'he is very old':'sasa';
// // // // // // // // // // // // // // // // // // // console.log(result);


// // // // // // // // // // // // // // // // // 1)
// // // // // // // // // // // // // // // // // // Создайте программу для расчета бонуса сотрудника в зависимости от его стажа и текущей зарплаты:

// // // // // // // // // // // // // // // // // // Если стаж менее 2 лет, бонус составляет 5% от зарплаты.
// // // // // // // // // // // // // // // // // // Если стаж от 2 до 5 лет включительно, бонус составляет 10% от зарплаты.
// // // // // // // // // // // // // // // // // // Если стаж более 5 лет, бонус составляет 15% от зарплаты.


// // // // // // // // // // // // // let StajRaboti = 10;
// // // // // // // // // // // // // let bonusMount = (StajRaboti <= 2)?"BONUS 5%":(StajRaboti>2 && StajRaboti<=5)?"BONUS 10%":(StajRaboti>5)?"bonus 15%":'';
// // // // // // // // // // // // // console.log(bonusMount);

// // // // // // // // // // // // // // // // // 2) Задача на использование switch:
// // // // // // // // // // // // // // // // // Задача: Напишите программу, которая принимает на вход число от 1 до 7 и выводит соответствующий день недели. 
// // // // // // // // // // // // // // Используйте конструкцию switch.
// // // // // // // // // // // // let a=2;
// // // // // // // // // // // // switch(a){
// // // // // // // // // // // //     case 1:
// // // // // // // // // // // //         console.log('Monday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // //     case 2:
// // // // // // // // // // // //         console.log('Tuesday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // //         case 3:
// // // // // // // // // // // //         console.log('wednesday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // //     case 4:
// // // // // // // // // // // //         console.log('Thursday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // //         case 5:
// // // // // // // // // // // //         console.log('Friday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // //     case 6:
// // // // // // // // // // // //         console.log('Sunday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // //         case 7:
// // // // // // // // // // // //         console.log('Saturday');
// // // // // // // // // // // //         break;
// // // // // // // // // // // // };

// // // // // // // // // // // // // // // // 3) Задача на использование логических операторов:
// // // // // // // // // // // // // // // // Задача: Создайте программу, которая принимает на вход три числа и выводит их в порядке убывания. 
// // // // // // // // // // // // // // Используйте логические операторы и условия.
// // // // // // // // // // // let num1 = 1202000;
// // // // // // // // // // // let num2 = 400;
// // // // // // // // // // // let num3 = 20200;
// // // // // // // // // // // let result = (num1 < num2 && num2 < num3) ? `${num3}, ${num2}, ${num1}` :
// // // // // // // // // // //               (num1 < num3 && num3 < num2) ? `${num2}, ${num3}, ${num1}` :
// // // // // // // // // // //               (num2 < num1 && num1 < num3) ? `${num3}, ${num1}, ${num2}` :
// // // // // // // // // // //               (num2 < num3 && num3 < num1) ? `${num1}, ${num3}, ${num2}` :
// // // // // // // // // // //               (num3 < num1 && num1 < num2) ? `${num2}, ${num1}, ${num3}` :
// // // // // // // // // // //               (num3 < num2 && num2 < num1) ? `${num1}, ${num2}, ${num3}` : '';
// // // // // // // // // // // console.log(result);

// // // // // // // // // // // // // // // 4) Задача на использование тернарного оператора:
// // // // // // // // // // // // // // // Задача: Напишите программу, которая принимает на вход два числа и выводит сообщение о том, 
// // // // // // // // // // // // // // является ли их сумма четной или нечетной, используя тернарный оператор.

// // // // // // // // // // let a = 4;
// // // // // // // // // // let b = 2;

// // // // // // // // // // let result = (((a+b)/2)-((a+b)%2)<1)?'summa necetnaya':'summa cetnaya';
// // // // // // // // // // console.log(result)

// // // // // // // // // let a = 10;
// // // // // // // // // let b = 2;
// // // // // // // // // let res = (a+b)%2;
// // // // // // // // // console.log(res)
// // // // // // // // let i = 0
// // // // // // // // while(i!=0) 
// // // // // // // // {console.log("VVEDI CISLO br")?
// // // // // // // // break};
// // // // // // // for(let i=3;i%2>0;i+2){
// // // // // // // console.log(i)};
// // // // // // let fibo = [1,1];
// // // // // // for(let i=1;i<49;i++){
// // // // // //    fibo.push(fibo[i] + fibo[i-1])}
// // // // // //    console.log(fibo)

// // // // // let weekd = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sundat', 'saturday']
// // // // // for(let days of weekd){
// // // // //     console.log(days)
// // // // // };

// // // // let students=['murvat', 'vusal', 'mamed','babek'];
// // // // console.log(students);
// // // // for(let i in students){
// // // //     console.log(`${parseInt(i) + 1} place : ${students[i]}`)
// // // // }

// // // let a =[];
// // // for(let i=0;i<9;++i){
// // //     a.push(i*i);
// // // }
// // // let b=[]
// // // for(let pow of a ){
// // //  b.push(pow/2)
// // // console.log(b)}
// // let cards = ['2', 'korol', '5','6', 'tuz'];
// // let hand = [];

// // for (let card of cards) {
// //     if (card !== 'korol' && card !== 'tuz') continue;
// //     hand.push(card);
// //     console.log('karta ' + card + ' dobavlena v ruku');

// // }

// // console.log('karti v ruke',hand );
// let cards = ['2', 'korol', '5','6', 'tuz','Dami'];
// console.log('Iwem damu v kolode...');
// let found = false;

// for(let card of cards) {
//     console.log(`Iz kolodi vitanuta karta ${card}`);
//     if (card ===  'Dami'){
//         found = true;
//         break;
//     }
// }

// console.log(found ?'Mi  nashli damu!' : 'v kolode net dam');
let func = (a, b) => {
    let res = a + b;
    return console.log(res);
};
 func(1, 2);