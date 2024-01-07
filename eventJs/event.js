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
// }
function loadScript(){
    let script = document.createElement('script');
    script.src=src;
    document.head.append(script);
}
