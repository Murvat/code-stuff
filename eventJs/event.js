// event



// let json= '{"name": "John", "age":30}';
// let user = JSON.parse(json);
// console.log(user.name);
// let json= '{Mess codedede}';
// try {
// let user = JSON.parse(json);
// console.log(user.name);}
// catch(e){
//     console.log('There is a mistake')
// // }
// function loadScript(){
//     let script = document.createElement('script');
//     script.src=src;
//     document.head.append(script);
// }
// function f1(){
//     console.log(1);
// }
// function f2(){
//     console.log(2);
// }
// function f3(){
//     console.log(3);
// }

// f3();
// f1();
// f2();\\



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

function fetchDataFromServer(url, callback){
    setTimeout(()=>{
        const responseData= {name:"Murvat", age:23};
        callback(null,responseData)
    },1500);
}

function processServerData(error, data){
    if(error){
        console.error('MISTAKE TO GET DATA', error)}
        else{
        console.log('Recevied DATA',data)
    }
}

fetchDataFromServer('https://example.com',processServerData)