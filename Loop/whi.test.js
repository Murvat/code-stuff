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

    import { getOddNumbers, getSquaredNumbers } from "./new";
    
    it('should get squared number', ()=>{
        const result = getSquaredNumbers([1, 2 ,3])
        expect(result).toEqual([1,4,9])
    })
    
    // const getEvenNumbers = numbers =>
    // numbers.filter(num => (num% 2 == 0));

    // it('should get only even numbers from array', ()=>{
    //     const result = getEvenNumbers([1, 2, 3, 4]);

    //     expect(result).toEqual([2,4 ])
    // }
    // )

    
    
     