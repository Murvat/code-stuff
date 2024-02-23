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

function getSpecialNumbers(from, to){
    let specialNumbers = [];
    for(let i = from; i<= to; i++){
        if(i%2===1){
        specialNumbers.push(i)}
    }
    console.log(specialNumbers);
}
getSpecialNumbers(40, 60);