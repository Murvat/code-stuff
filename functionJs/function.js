Function

// function pow(x, n) {
//     let result = 1;
//     for(let i=0;i<n;i++) {
//         result*= x;
//     }
//     console.log(result)
// }

// pow(2, 3)

// function pow(x, n) {
//     if (n == 1) {
//         console.log(x);
//     } else {
//         let a = x * pow(x, n - 1);
//         console.log(a);
//     }
// }

// pow(2, 3);

// function factorial(n) {
//     // Base case: factorial of 0 or 1 is 1
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         // Recursive case: n! = n * (n-1)
//         console.log(n)
//         return n * factorial(n - 1);
//     }
// }

// // Example usage:
// console.log(factorial(5)); // Output: 120

// function fibonacci(n) {
//     // Base cases: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
//         // console.log()
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// // Example usage:
// console.log(fibonacci(10)); // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ...
// function f2() {
//     let out = '';
//     for(let i=1;i <=200;i++){
//         out+= i + ' ';
//     }
//     console.log(out)
// }
// f2()

// let i = 0;
// let out = '';
// function f3(){
//     i++;
//     out += i+ ' ';
//     if(i > 30) return;
//     f3()
// }
// f3();
// console.log(out)

function randomInteger(min, max) {
    let rand = min + Math.random() *(max +1 -min);
    return Math.floor(rand)
}

// let s1 = 0;
// function moneyRecursion(){
//     let m = randomInteger(0, 100);
//     console.log('add: ' + m);
//     s1 += m;
//     console.log('sum: ' + s1)
//     if (s1>= 300) return;
//     moneyRecursion();
// }
// moneyRecursion();

// function moneyCycle(){
//     let s2 = 0;
//     for (let i=0; true; i++){
//         let m = randomInteger(0, 100);
//         console.log('add: ' + m );
//         s2+= m;
//         console.log('sum: '+ s2);
//         if(s2 >= 300) return;
//     }
// }
// moneyCycle()

// 