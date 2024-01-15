// let target = {};
// let proxy = new Proxy(target, {});

// proxy.test = 5;
// console.log(target.test)
// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
//     get(target, prop){
//         if(prop in target){
//             return target[prop];
//         } else {
//             return 0;
//         }
//     }
// });
// console.log( numbers[1]);
// console.log(numbers[123])

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adios'
// };

// dictionary = new Proxy(dictionary, {
//     get(target, phrase){
//         if(phrase in target) {
//             return target[phrase];
//         }else{
//             return phrase;
//         }
//     }
// });

// console.log(dictionary['Hello']);
// console.log(dictionary['Welcome to Proxy']);

// let numbers = [];

// numbers = new Proxy(numbers, {
//     set(target, prop, val){
//         if(typeof val == 'number'){
//             target[prop] == val;
//             return true;
//         } else {
//             return false;
//         }
//     }
// });

// numbers.push(1)

// let user = {
//     name: 'Vlad',
//     age: 30,
//     _password: "***",
// };

// user = new Proxy(user, {
//     ownKeys(target){
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })

// for(let key in user) console.log(key)

// console.log(Object.keys(user))
// console.log(Object.values(user))


// let user = {};

// user = new Proxy(user, {
//     ownKeys(target){
//         return ['a', 'b', 'c'];
//     },
//     getOwnPropertyDescriptor(target, prop){
//         return {
//             enumerable: true,
//             configurable: true
//         };
//     }
// })

// console.log(Object.keys(user))