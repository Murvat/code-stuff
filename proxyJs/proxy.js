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


// let target = {};
// let proxy = new Proxy(target, {});
// proxy.test = 5;
// console.log(target.test);

// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target){
//             return target[prop];
//         }else{
//             return 0;
//         }
//     }
// });

// console.log(numbers[1]);
// console.log(numbers[123])

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye':'Adios'
// }
// dictionary = new Proxy(dictionary, {
//     get(target, phrase){
//         if(phrase in target){
//             return target[phrase];
//         }else{
//             return phrase;
//         }
//     },
//     set(target, property, value){
//         return phrase
//     }
// });

// console.log(dictionary['Hello']);
// console.log(dictionary['Murvat'])


// let numbers = [];
// numbers = new Proxy(numbers, {
//     set(target, prop, val){
//         if(typeof val === 'number'){
//         target[prop]=val;
//         return true;
//     } else {
//         return false;
//     }}
// });

// numbers.push(1);
// console.log(numbers.push(12))

// let user = {
//     name: 'Mateusz',
//     age: 30,
//     _password:"****"
// }
// user = new Proxy(user, {
//     ownKeys(target){
//         return Object.keys(target).filter(key => !key.startsWith('_'));
//     }
// });

// for(let key in user){
//     console.log(key)
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));


// let user = {};
// user = new Proxy(user, {
//     ownKeys(target){
//         return['a', 'b', 'c'];
//     },
//     getOwnPropertyDescriptor(target, prop){
//         return{
//             enumerable: true,
//             configurable: true,
//         }
//     }
// });
// console.log(Object.keys(user));


// let range = {start: 1, end: 10};
// range = new Proxy(range, {
//     has(target, prop){
//         return prop >= target.start && prop <= target.end;
//     }
// })
// console.log(0 in range)

// function delay(f, ms){
//     return function(){
//         setTimeout(()=> f.apply(this.arguments), ms);
//     };
// }

// function sayHi(){
//     console.log(`Hello, ${user}`);
//     sayHi = delay(sayHi, 3000);
// }

// console.log("MIchael")

// function delay(f, ms){
//     return new Proxy(f, {
//         apply(target, thisArg, args){
//             setTimeout(()=>target.apply(thisArg, args), ms);
//         }
//     });
// }

// function sayHi(user){
//     console.log(`Hello, ${user}`);
// }
// sayHi = delay(sayHi, 3000);

// console.log(sayHi.length);
// let user = {
//     _name: 'Guest',
//     get name(){
//         return this._name;
//     }
// };
// let userProxy = new Proxy(user, {
//     get(target, prop, receiver){
//         return target[prop];
//     }
// });
// 5
// console.log(userProxy.name);

// class User{
//     #name = 'Guest';
//     getName(){
//         return this.#name;
//     }
// }

// let user = new User();
// user = new Proxy(user, {});

// let boundGetName = user.getName.bind(user);
// console.log(boundGetName());


// function curry(f){
//     return function(a){
//         return function(b){
//             return f(a, b);
//         };
//     };
// }

// function sum(a, b){
//     return a + b;
// }

// let curriedSum =curry(sum);
// console.log(curriedSum(1)(2));

// function curry(f){
//     return function(c){
//         return function(d){
//             return f(c,d)
//         }
//     }
// };
// function sum(c,d){
// return c+d
// }
// let curriedSum = curry(sum)

// console.log(curriedSum(5)(6))


// function curry(func){
//     return function curried(...args){
//         if(args.length >= func.length){
//             return func.apply(this, args);
//         } else{
//             return function(...args2){
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }