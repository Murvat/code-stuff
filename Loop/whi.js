// let n = 1;
// while(n<=10){
//     console.log(n);
//     n++;
// };
// for(let i = 1; i<=5; i++){
//     for(let j = 1; j<=10;j++){
//         console.log(i ,'x', j ,'=', i*j)
//     }
// }

// function getSpecialNumbers(from, to){
//     let specialNumbers = [];
//     for(let i = from; i<= to; i++){
//         if(i%2===1){
//         specialNumbers.push(i)}
//     }
//     console.log(specialNumbers);
// }
// getSpecialNumbers(40, 60);

// const getSpecialNumbers = numbers =>{
//     let specialNumbers = [];

//     function checkIfSpecial(num){
//         if(num%2 === 1){
//             specialNumbers.push(num)
//         }
//     }
//     numbers.forEach(checkIfSpecial);
//     // for(let i  = 0; i<numbers.length; i++){
       
//     //     if(i % 2 === 1){
           
//     //         specialNumbers.push(numbers[i]);
        
//     //     }
//     // }
//     console.log(specialNumbers);
// }

// arr = [2, 6, 7, 9, 11];
// getSpecialNumbers(arr);

// const getSpecialNumber= numbers =>{
//     let specialNumbers = [];
//     numbers.filter(num=>{
//         if(num %3===0){
//             specialNumbers.push(num);
//         }
//     })

//     console.log(specialNumbers)
// }
// arr = [3, 4,5, 6,9, 12, 15]
// getSpecialNumber(arr);
// const getFlatArray = (arr) =>{
//     let floatArray = arr.reduce((acc, num)=>acc.concat(num), [])
//     console.log(floatArray);
// }
// numbers = [1,2,[3,5], [6],[5,6,7,8]]
// getFlatArray(numbers)
// const transformToObj = arr =>{
//     let obj = {};
//     arr.forEach(element => {
//         obj[element]=element
//     });
//     console.log(obj)
// }

// let massiv = [1, '8', [2,4,5]]
// transformToObj(massiv)
// const getArrayFrom = obj =>{
//     let arr = [];
//     for(val in obj){
//         arr.push(obj[val]);
//     }
//     console.log(arr)
// }


// let building = {
//     name: 'Pietro',
//     floor:1
// }
// getArrayFrom(building)


// const getFileteredArr = obj =>{
//     let filteredArray=Object.entries(obj);
//     let getArr = filteredArray.filter(arr=>{
//         for(elem in arr){
//             if (arr[1]>=18){
//                 console.log(arr)
//             }
//         }}
//     )

//     getArr.map(arr=>arr[0])
//     console.log(getArr)
// }

// let students={
// Murvat:18,
// NIkita:17,
// Vlad: 22,
// }
// getFileteredArr(students)


// let students={
//     Murvat:18,
//     NIkita:17,
//     Vlad: 22,
//     }

    // const getAdults = userObject =>{
    //     const userArray = Object.entries(userObject);

    //     const filteredUserArray = userArray
    //     .filter(user=>user[1]>=18)

    //     const userNames = filteredUserArray
    //     .map(user=>user[0])

    //     console.log(userNames)

    // }
    // getAdults(students)
    // let students={
    //     Murvat:18,
    //     NIkita:17,
    //     Vlad: 22,
    //     }
    //     console.log(Murvat)
    //     let { Vlad:Murvat}= students
    //     console.log(Murvat)
    //     console.log(Murvat)

    // const splitText = (text, len) =>{
    //     const strArr = [];
    //     let startPosition =0;

    //     while(true){
    //         let chunk =text.substr(startPosition, len);

    //         if(chunk.length === 0) {
    //             break;
    //         }
    //         // console.log(chunk)
    //         strArr.push(chunk[0].toUpperCase()+ chunk.slice(1));
    //         startPosition += len;
    //     }
    //     // console.log(strArr)
    //     return strArr.join('\n');

    // };

    // console.log(splitText('abcdefg', 4))

    // const calRes = expression =>{
    //     let sExp = expression.split(' ');
    //     let result;
    //     switch(sExp[1]){
    //         case '+':
    //             result = Number(sExp[0]) + +sExp[2];
    //             break
    //         case '-':
    //            result= Number(sExp[0]) - sExp[2];
    //            break
    //     }
    //     console.log(expression + '='+ result  )
    // }

    // calRes('2 + 5');
    // calRes('7 - 2')
    // it ('17 и в Африке 17 ', ()=>{
    //     expect(17).toEqual(17);
    // });
    // it ('18 и в Африке 17 ', ()=>{
    //     expect(17).not.toEqual(18);
    // });

    
    // const getEvenNumbers = numbers =>
    // numbers.filter(num => (num% 2 == 0));

    // it('should get only even numbers from array', ()=>{
    //     const result = getEvenNumbers([1, 2, 3, 4]);

    //     expect(result).toEqual([2,4 ])
    // }
    // )
    // import GetSum, { getOddNumbers, getSquaredNumbers } from "./new";
    
    // it('should get squared number', ()=>{
    //     const result = getSquaredNumbers([1, 2 ,3])
    //     expect(result).toEqual([1,4,9])
    // })

    // it('should keep odd numbers', ()=>{
    //     const result = getOddNumbers([1, 2 ,3, 4 ,9]);

    //     expect(result).toEqual([1, 3, 9]);
    // })

    // it('should get sum of numbers', ()=>{
    //     const result = GetSum(4 , 9);

    //     expect(result).toEqual(13);
    // })

// const message='Bye'
//     function setMessenger(){
//         function sendMessage(name){
//             const sender = "Groomcod";

//             console.log(`${name}, ${message}, ${sender}`)
//         };


//         function setMessage(text){
//             message = text
//         };

//         return {
//             sendMessage,
//             setMessage
//         }
//     }
// const messenger  = setMessenger();

// messenger.sendMessage('Halo')

// let count;
// function makeCounter(){
//     let count=0;
//     return function(){
//         console.log( count++);
//     }
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter2()
// counter2()
// counter2()
// counter2()
// var vara = 15;
// console.log(vara);
// if(vara){
//     var vara = 21;
// }
// function result(vara){
//     var vara  = 21;
//     console.log() ;
// }
// console.log(vara)

// const user = {
//     Name: 'Murvat',
//     Surname: 'Mustfayv',
//     getFullName()
//     {console.log(`${this.Name}, ${this.Surname}`)},}
    
//     // const getF = user.getFullName.bind(user);
//     const getF = user.getFullName;

//     getF.apply({Name: 'Fuad'});

// function defer(func, ms){
//     return function(){
//         setTimeout(()=>func(...arguments), ms);
//     }
// }

// const sum = (a, b) => {
//     console.log(a+b);
// }

// const deferredSum = defer(sum, 1000);

// deferredSum(1, 4);
     

// const event = {
//     guest:[{name:'Murvat', mail:"m@gmail.com", age:30},
//     {name:'Nikolay', mail:"nik@gmail.com", age:17},
// ],
//     message:'Welcome to the party',
//     getInvitations(){
//         return this.guest
//         .filter(({age})=>age >= 18)
//         .map(({name, mail})=>{console.log(`Hej ${name} `+` ${this.message}` + `${mail}`)}) 
//     }
// }

// event.getInvitations();
//  const user = {
//     firstName: 'Vaue',
//     lastName: 'Nihao',
//     get getFullName(){
//         console.log(`${this.firstName} + ${this.lastName}`)
//     }
//  }

//  user.getFullName;

// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.howOldIsHe = function(){
//         console.log( `${this.name}` ,`${this.age}`)
//     }
// }

// const taleh = new User('Taleh', 29);
// taleh.howOldIsHe();
// const murad = new User('Murad', 30);
// murad.howOldIsHe()


// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     static compare(user1, user2){
//         console.log(user1.age-user2.age);
//     }

//     sayHI(){
//         console.log(hello `${this.name}`);

//     }

//     requestNewPhoto(){
//         console.log(`New photo request was sent to your email`)
//     }

//     setAge(value){
//         if(value < 0){
//             return false;
//         }
//         this.age = value;
//         if(value>= 25){
//             this.requestNewPhoto();
//         }
//         return value;
//     }
// }

// const user1 = new User('Tom', 30)
// const user2 = new User('Murvat', 12)
// User.compare(user1, user2)
// console.log(user1);

// user1.setAge(35);

// class Vehicle{
//     constructor(name, hasWheels){
//         this.hasWheels = hasWheels;
//         this.name = name;
//     }

//     move(){
//         console.log(`${this.name} is moving`);
//     }

//     stop(){
//         console.log(`${this.name} stopped`);
//     }
// }

// class Ship extends Vehicle {
//     constructor (name, speed){
//         super(name, false);
//         this.speed = speed;
//     }

//     startMachine (){
//         console.log(`${this.name} lifting anchor up`);
//         this.move();
//     }

//     stopMachine(){
//         this.stop();
//         console.log(`${this.name} lifting anchor down`)
//     }
// }
 

// const ship1 = new Ship('Aurora', 17);
// console.log(ship1);

// ship1.startMachine();
// ship1.stopMachine();


// class Wallet{
//     constructor(){
//         this._balance = 0;
//     }

//     getBalance(){
//         return this._balance;
//     }

//     deposit(amount){
//         this._balance += amount;
//     }
//     withdraw(amount){
//         if(amount > this._balance) {
//             console.log('No enough funds');
//             return;
//         }

//         this._balance -= amount;
//     }
// }


// const wallet1 = new Wallet();

// console.log(wallet1._balance);
// console.log(wallet1.getBalance())
// console.log(wallet1._balance);
// console.log(wallet1.getBalance());
// console.log(wallet1.withdraw(100));
// console.log(wallet1.getBalance())
// const daysOf = [
//     's', 'm','w'
// ]

// const getDayOfWeek  = (date, days)=> {
//     const day = new Date(date).getDate();
//     const dateInnFuture = new Date(date).setDate(day+ days)
//  return new Date(dateInnFuture).getDay};

//  const result = getDayOfWeek(new Date(2019, 0, 1), 14)
// console.log(new Date(result));


// const calc = initalValue => {
//     let result= initalValue;

//     const calculator = {
//         add(value){
//             result += value
//             return this
//         },
//         div(value){
//             result /= value
//             return this

//         },
//         mult(value){
//             result *= value
//             return this
//         },
//         result(){
//             return result
//         },
//         subs(value){
//             result -= value
//             return this

//         },
        
//     }
//     return calculator;
// }

// const result = calc(10).add(2).mult(10).subs(3).div(2).result();
// console.log(result)

// const favorites = ['id-6', 'id-17'];

// const newLocal = {
//     id: 'id-1',
//     name: 'Products',
//     nodes: [
//         {
//             id: 'id-2',
//             name: 'Food',
//             nodes: [
//                 {
//                     id: 'id-6',
//                     name: 'Drinks',
//                     nodes: []
//                 },
//             ],
//             id: 'id-1',
//             name: 'Products',
//             nodes: []
//         }
//     ]
// };


// const getFavoriteNode = (tree, favorites)=>{
//     const isFavorite = favorites.includes(tree.id);
//     return {
//         ...tree,
//         isFavorite,
//         nodes: tree.nodes.map(childNode=> getFavoriteNode(childNode,favorites))
//     }
// }

// const result = getFavoriteNode(newLocal, favorites);

// console.log(result)

// const sum = a=>b=> a+ b;

// const add3 = sum(3);

// const result = add3(5);
// console.log(result);

// const add3 = value => value + 3;
// const mult2 = value => value * 2;
// const div4 = value => value / 4;

// const compose = (...funcs) => value =>{
//      return funcs.reduce((acc, func)=> func(acc), value);
// };

// const doEvertytonh = compose(
//     add3,
//     mult2,
//     div4
// );

// console.log(doEvertytonh(4))

// const pinger = (num, period)=>{
//     setInterval(()=>{
//         console.log("Ping");
//     },period);
// };

// pinger(10, 1)

// const requestUserData = userİd => {
//     const request = new Promise((resolve, reject) => {
//         if(userİd === 'broken'){
//             setTimeout(()=>{
//                 reject(new Error('User not found'));
//             }, 500) }else{
//                 setTimeout(()=>{
//                     resolve({
//                         name: 'John',
//                         age: 17,
//                         email: `${userİd}`,
//                         userİd
//                     })
//                 }, 1000)
//             }
//         });
//         return request;
// };
    
// requestUserData('broken')
// .then(data=>console.log(data))

// requestUserData('user-1')
// .then
// (data=> console.log(data))
// requestUserData('broken-1')
// .catch(error=> console.log(error))
// .finally(()=>console.log('finally'))

// const asyncCalculator = num => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(num)
//             resolve(num);
//         }, 500);
//     })
//     .then(value =>new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let res = value * value;
//                 const n = console.log(`Squared value ${res}`)
//                 resolve(res)
//             }, 500)
//         }))
//         .then(value=>new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const res = value*2
//                 console.log(`Doubled value: ${res}`)
//                 resolve(res)
//             },500);
//         }))

//         asyncCalculator(5)


// const p = Promise.resolve(17);
// const r =Promise.reject(new Error('Noooo...'));

// const getValueWDelay = (value, delay)=> new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(value)
//         resolve(value);
//     },delay);
// })
// const num1 = getValueWDelay(596,1000)
// const num2 = getValueWDelay(undefined,2000)
// const num3 = getValueWDelay("5",3000)

// const getSum = numbers =>
// numbers
// .filter(value =>!isNaN(value))
// .reduce((acc, num)=> acc + Number(num) , 0)
// const asyncSum = (...asyncNumbers) =>{
//     return Promise.all(asyncNumbers)
//     .then(numbers=>getSum(numbers))
//     .catch(()=>Promise.reject('can\'t calculate'))
// }

// asyncSum(num1, Promise.reject(new Error('err')), num3)
// .then(result => console.log(result)) 
        

const getRandomNum= (from, to)=>{
     from + Math.random() * (to - from)
};
const request = url => new Promise(resolve =>{
    const randomDelay = getRandomNum(1000, 3000);
    setTimeout(() => {
        resolve({
            userData: {
                name: 'Tom',
            age: 17,
            },
            source:url
        })
        
    }, randomDelay);
})
const servers =[
    'https://server.com/us',
    'https://server.com/us',
    'https://server.com/us'
];

const getUserASAP = userId =>{
    const userUrls = servers
    .map(serverUrll => `${serverUrll}/users/${userId}`);

    const requests = userUrls
    .map(userUrl => request(userUrl));
    return Promise.race(requests);
};

getUserASAP('user-id-1')
.then(res => console.log(res))


