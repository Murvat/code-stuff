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



// let user = {
//     name: 'Vlad',
//     _password: "***"
// };

// user = new Proxy(user, {
//     get(target, prop){
//         if(prop.startsWith('-')){
//             throw new Error('Rejected')
//         } else {
//             let value = target[prop];
//             return (typeof value === 'function') ? value.bind(target):value;
//         }
//     },
//     set(target, prop, val){
//         if(prop.startsWith('-')){
//             throw new Error('RejectedForChange')
//         } else {
//             target[prop]= val;
//             return true;
//         }
//     },
//     deleteProperty(target, prop){
//         if (prop.startsWith('-')){
//             throw new Error('RejectedTOO')
//         } else {
//             delete target[prop];
//             return true;
//         }
//     },
//     ownKeys(target){
//         return Object.keys(target).filter(key => !key.startsWith('-'))
//     }
// })
// try {
//     console.log(user._password);
// }catch(e){console.log(e.message);}
// try {
//     user._password = "test"
// }catch(e){console.log(e.message);}
// try {
//      delete user._password
// }catch(e){console.log(e.message);}
// try {
//     console.log(user._password);
// }catch(e){console.log(e.message);}
// try {
//     console.log(user._password);
// }catch(e){console.log(e.message);}



// const targetObject = {
//     name: "John",
//     age: 25
// };

// const handler = {
//     get: function(target, prop){
//         console.log(`reading of property ${prop} `)
//     return target[prop];
//     },
//     set: function(target, prop, value) {
//         console.log(`Setting new value of prtoperty ${prop} to ${value}`)
//     target[prop] = value;
//     }
// };

// const proxyObject = new Proxy(targetObject, handler)
// console.log(proxyObject.name);
// proxyObject.age = 26;