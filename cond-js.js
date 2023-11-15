let a = 3;
let b = 5;
let c = 10;

let d = b * b -4 * a * c;

if(d<0) {
    console.log('KV UR DM');
} else if(d === 0) {
    let x = -b /(12 * a);
    console.log('kv ur hos, x =' +  x);
} else {
    let dRoot = Math.sqrt(d);
    let x1 = (-b+ dRoot) / (2* a);
    let x2 = (-b - dRoot) /(2 * a);
    console.log(`kv ur 2 res= ${x1}\nx2 = ${x2}`
    )
}

