let n = 10;

let current = 0;
let prev = 1;
let prevPrev  =0;

while (n--> 0) {
    prevPrev = prev;
    prev = current;
    current += prevPrev;
    console.log(current);
}