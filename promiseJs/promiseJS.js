// async function f1(){
//     const res = await fetch('asasd');
//     return res.text();
// }

// async function f2(){
//     const res = await fetch('sdfsf')
//     return res.text()
// }
// async function f3(){
//     const res = await fetch('sdfsf')
//     return res.text()
// }


// async function go(){
//     let a = await f1();
//     console.log(a);
//     let b = await f2();
//     console.log(b);
//     console.log(c);5
// }


// function myFunc(callback){
//     const a =[4,5,6];
//     let element =callback(element, a);

// }
// function out(elem, arr){
//     elem=arr.join('-')
// }
// myFunc(out);



// let b = new Promise(function (resolve, reject){
//     setTimeout(()=>{
//         resolve(a = 99);
//     }, 2000);
// })
// b.then(function(){
//     console.log(a);
// });

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     // resolve("PROMISE IS WORKIN");
//     reject(new Error("OUPSS"));
// }, 1000)
// });
// // promise.then((data)=> console.log(data));
// promise.catch((error) => console.log(error));


// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('asdsadasd');
//         reject('asasfdsdf')
//     },1000)
// })

// promise.then((ata)=>console.log(aga))
// .catch((error)=>console.log(error))

// function readFileAsync(filePath, callback){
//     setTimeout(()=>{
//        let  fakeFileContent = 'File Content';
//        callback(null,fakeFileContent);
//     },1000)
// }

// function callback(error,content){
//     if(error){
//         console.log("Read mistake",error);
//     }else{
//         console.log('Content',content)
//     }
// }


// readFileAsync('/path/to/file.txt',callback)

// function fetchDataFromServer(url, callback){
//     setTimeout(()=>{
//         const responseData= {name:"Murvat", age:23};
//         callback(null,responseData)
//     },1500);
// }

// function processServerData(error, data){
//     if(error){
//         console.error('MISTAKE TO GET DATA', error)}
//         else{
//         console.log('Recevied DATA',data)
//     }
// }

// fetchDataFromServer('https://example.com',processServerData)


// let p2 = new Promise((relove,reject)=>{
//     fetch('https://gipofiz.ua')
//     .then(response => {
//         if(response.ok) resolve(response.json());
//         else reject(response);
//     })
//     .catch(error => reject(error));
// });

// console.log(p2);

// p2.then(f1,f2);

// function f1(data){
//     console.log(p2);
//     console.log('success');
//     console.log(data);
// }

// function f2(data){
//     console.log(p2);
//     console.log('problem');
//     console.log(data);
// }
// console.log(p2);
// 8VrexFFeFmMMvD9Y
// const requestHeaders = new Headers();
// requestHeaders.append('apikey',"6b7ab7dc1d4a505");

// fetch('https://api.itgid.info/api/27/random/random-string',{
//     headers: requestHeaders
// })
//     .then(response => response.json())
//     .then(response=>{
//         console.log(response)
//     })

// let pr`omise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// })

// promise.then(function(result){
//     console.log(result)
//     return result*2
// }).then(function(result){
//     console.log(result)
//     return result*2
// }).then(function(result){
//     console.log(result)
//     return result*2
// }).then(function(result){
//     console.log(result)
//     return result*2})
// Promise.all([
//     new Promise(resolve=>setTimeout(()=>resolve(1),1000)),
//     new Promise(resolve=>setTimeout(()=>resolve(2),1000)),
//     new Promise(resolve=>setTimeout(()=>resolve(3),1000))
// ]).then(console.log)


// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/iliakan',
// ];

// let requests = urls.map(url => fetch(url));
// Promise.all(requests)
// .then(responses=>responses.forEach(
//     response=>console.log(`${response.url}: ${response.status}`)
// ));

// let names = ['iliakan', 'remy', 'jeresig'];
// let requests = names.map(name=> fetch(`https://api.github.com/users/${name}`));
// Promise.all(requests).then(responses=>{
//     for(let response of responses)[
//         console.log(`${response.url}: ${response.status}`)
//     ]
//     return responses;
// })
// function f1(){
//     console.log(10)
// };
// async function f2(){
//     console.log(20);
// }
// /// f1()
// f2() 
// console.log(21)
// function promisify(f, manyArgs = false){
//     return function(...args){
//         return new Promise((resolve, reject)=> {
//             function callback(err, ...results){
//                 if(err) {
//                     reject(err);
//                 } else{
//                     resolve(manyArgs ? results: results[0]);
//                 }
//             }
//             args.push(callback);
//             f.call(this, ...args);
//         });
//     };
// };

// f = promisify(f, true);
// f(...).then(arrayOfResults => ..., err=>)

// function loadJson(url){
//     return fetch(url)
//     .then(response =>{ 
        // if(response.status==200){
        // return response.json();
//     }else{
        // throw new Error(response.status);
//     }
//     })
// // }
// let loadJson = async function f (url){
//     await fetch(url);
//     if(response.status==200){
//         return response.json();
//     } else {
//         throw new Error(response.status);
//     }
// }
// loadJson('no-such-user.json')
// .catch(console.log)

// function* generateSequence(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let generator = generateSequence();
// for(let value of generator){
//     console.log(value);
// }

// let sequence =[0, ...generateSequence()]
// console.log(sequence)
// let one = generator.next();
//  console.log(JSON.stringify(one));
//  let two = generator.next();
//  console.log(JSON.stringify(two));
//  let th = generator.next();
//  console.log(JSON.stringify(th));


// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator](){
//         return {
//             current: this.from,
//             last: this.to,
//             next(){
//                 if (this.current <= this.last){
//                     return {done: false, value: this.current++};
//                 }else {
//                     return { done: true};
//                 }
//             }
//         }
//     }
// }
// console.log([...range])
// 
// function* generateSequence(start, end){
//     for (let i=start; i <=end; i++) yield i;
// }

// function* generatePasswordCodes(){
//     yield* generateSequence(48, 57);
//     yield* generateSequence(65, 90);
//     yield* generateSequence(87, 122);
// }

// let str = ''
// for(let code of generatePasswordCodes()){
//     str += String.fromCharCode(code)

// }
// console.log(str)
// console.log (generateSequence(2, 9));
// console.log(new String)