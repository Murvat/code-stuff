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
const getFlatArray = (arr) =>{
    let floatArray = arr.reduce((acc, num)=>acc.concat(num), [])
    console.log(floatArray);
}
numbers = [1,2,[3,5], [6],[5,6,7,8]]
getFlatArray(numbers)