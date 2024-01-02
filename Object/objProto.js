let animal  ={
    eats: true,
}
let rabbit = {
    jumps: true,
}

rabbit.__proto__=animal;
console.log(rabbit);
console.log(animal);
console.log(rabbit.eats)
console.log(animal.jumps)