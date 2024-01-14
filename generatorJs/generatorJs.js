// function* getNumbers(){
//     yield 1
//    const a =  yield 2
//     yield 3 + a
// }
// // const g = getNumbers()

// // console.log(g.next().value)
// // console.log(g.next().value)
// // console.log(g.next().value)
// // console.log([...g]) 
// // function* getMoreNumbers(){
// //     yield* getNumbers()
// //     yield* getNumbers()
// // }
// // console.log([...getMoreNumbers()])

// console.log([...getNumbers()])

// const g = getNumbers()
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next(7).value)

function* getValues(){
    let ms = 100
    while(true){
        yield ms  
        ms *= 2
    }
}
const g = getValues()

for (let i= 0; i< 10; i++){
    console.log(g.next().value)
}
