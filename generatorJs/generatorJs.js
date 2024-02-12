// function* getNumbers(){
//     yield 1
//    const a =  yield 2
//     yield 3 + a
// }
// const g = getNumbers()

// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log([...g]) 
// function* getMoreNumbers(){
//     yield* getNumbers()
//     yield* getNumbers()
// }
// console.log([...getMoreNumbers()])

// console.log([...getNumbers()])

// const g = getNumbers()
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next(7).value)

// function* getValues(){
//     let ms = 100
//     while(true){
//         yield ms  
//         ms *= 2
//     }
// }
// const g = getValues()

// for (let i= 0; i< 10; i++){
//     console.log(g.next().value)
// }


// function* genFn(x){
//     return x *2;
// }

// console.log('genFn= ', [genFn]);
// console.log('genFn.toString()= ', [genFn.toString()]);
// console.log('typeof(genfn)', typeof(genFn));
// const fnProto = Object.getPrototypeOf(genFn);
// console.log('fnProto.constructor.name = ', fnProto.constructor.name);
// class Multiplier {
//     constructor(k) {
//         this.value = k;
//     }
//     * genMethod(a){
//         this.value = a* this.value;
//         return a* this.value;

//     }
// } 
// const m1 = new Multiplier(3);
// console.log(m1.genMethod(2).next())
// console.log('m1.genMethod(5).next()=', m1.genMethod(5).next());
// console.log(m1.genMethod(2).next())
// console.log(m1.genMethod(2).next())
// console.log(m1.genMethod(2).next())
// console.log(m1.genMethod(2).next())

// function* counter(begin, end, delta = 1) {
//     let value = begin;
//     while (end> value) {
//         value += delta;
//         yield value;
//     }
// }

// const c = counter(0, 30, 12);
// const val1 = c.next();
// const val2 = c.next();
// const val3 = c.next();
// const val4 = c.next();
// console.log({c, val1, val2, val3, val4});


// function* ids(...args) {
//     let i =0;
//     while(args.length > i){
//         const id = args[i++];
//         if(id === undefined) return -1;
//         yield id;
//     }
// }

// const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
// let val;
// do {
//     val =id.next();
//     console.log({val});
// } while (!val.done);
// function* genfn(){
//     yield* [10, 20, 30];
// }
// const c= genfn();
// const val1 = c.next();
// const val2 = c.next();
// const val3 = c.next();
// console.log({c, val1, val2, val3,val4})

// function* gen1(){
//     yield 10;
//     yield 20;
//     yield 30;
// }

// function* gen2(){
//     yield 40;
//     yield 50;
//     yield 60;
// }
// function* genFn(){
//     yield* gen1();
//     yield* gen2();
// }

// console.log([...genFn()]);