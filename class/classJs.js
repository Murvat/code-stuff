// class MyClass{
//     constructor(){}
//     method(){}
// }
// new MyClass()

// class User{
//     constructor(name){
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name)
//     }
// }

// let user = new User("Murvat")
// user.sayHi();

// class User {
//     constructor(name){this.name=name;}
//     sayHi(){console.log(this.name);}
// }

// // console.log(typeof User)
// // console.log(User===User.prototype.constructor)
// // console.log(User.prototype.sayHi)
// console.log(Object.getOwnPropertyNames(User.prototype))

// let User = class {
//     sayHi(){
//         console.log('Hello')
//     }
// }

// let main = new User();
// main.sayHi('MMMM')

// function makeClass(phrase){
//     return class {
//         sayHi(){
//             console.log(phrase)
//         }
//     }
// }

// let User = makeClass('HELLLOOO');
// new User().sayHi()

// class User{
//     constructor(name){
//         this.name = name;
//     }

//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(value.length < 4){
//             console.log('Korotkoe ima');
//             return
//         }
//         this._name= value;
//     }
// }

// let  main = new User('Murvat')
// console.log(main.name);
// main = new User('')
// class User {
//     name = 'Myrvat';

//     sayHi(){
//         console.log(`Hello,${this.name} !`);
//     }
// }
// new User().sayHi();

// class MyClass {
//     prop = value;
//     constructor(){}
//     method(){}
//     get smt(){}
//     set smt(){}
//     [Symbol.iterator](){}
// }

// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} bejit so skorostyu ${this.speed}`)
//     }
//     stop(){
//         this.speed = 0;
//         console.log(`${this.name} stoit nepodvijno`);
//     }

// }
// let animal  = new Animal('Jiraf')
// // animal.run(100)
// // animal.stop()

// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} pracetsa`)
//     }
//     stop(){
//         super.stop();
//         this.hide()
//     }
// }
// let rabbit = new Rabbit('White Rabbit');

// rabbit.run(5)
// rabbit.stop()
// rabbit.hide()


// class User {
//     constructor(username, password){
//         this.username = username;
//         this.password= password
//     }

//     validatePassword(){
//         console.log('HELOOO')
//         if(this.password.length > 6){
//             return true;
//         }
//         return false;
//     }
// }

// let a = 'Murvat';
// let b = '777699u9';

// const gamer = new User(a, b);
// console.log(gamer )
// console.log(gamer.validatePassword() )

// class User {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
// }

// class Student extends User {
//     constructor(username, password, nickname) {
//         super(username, password)
//         this.nickname = nickname;
//     }

//     getStudentCourse() {
//         return [1, 2];
//     }
//     validatePassword(){
//         super.validatePassword()
//         if(this.password.length > 10){
//             return true;
//         }
//         return false;
//     }

// }

// let firstStudent = new Student('a', 'b', 'I123');
// console.log(firstStudent);
// console.log(firstStudent.getStudentCourse());
// console.log(firstStudent.validatePassword());

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log(this.name + ' Hello')
//     }
// }

// const murvat = new User('Murvat');
// // murvat.sayHello()

// class Person extends User{
//     constructor(name, email){
//         super();
//         this.name=name
//         this.email = email;
//     }
// }

// let person = new Person('murvat', 'asdsd')
// console.log(person)
// console.log(person.name)

 
// class User{
//     static staticMethdo(){
//         console.log(this==User);
//     }
// }

// User.staticMethdo()

// class Article{
//     constructor(title, date){
//         this.title = title;
//         this.date = date;
//     }
//     static compare(articleA, articleB){
//         return articleA.date - articleB.date;    }
// }

// let articles = [
//     new Article('HTML', new Date(2019, 1, 1)),
//     new Article('Css', new Date(2029, 0, 1)),
//     new Article('Js', new Date(2011, 11, 1)),
// ];

// articles.sort(Article.compare)
// console.log(articles[1].title)

// class CoffeeMachine {
//     _waterAmount = 0;
//     // constructor(power){
//     //     this.power = power;
//     //     console.log(`Have been created coffee machine ${power}`)
//     // }
//     set waterAmount(value){
//         if(value< 0) throw new Error('Negative value');
//         this._waterAmount=value
//     }
//     get waterAmount(){
//         return this._waterAmount
//     }
//     constructor(power){
//         this._power = power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount=200;
// console.log(coffeeMachine.waterAmount)


// let objectToString = Object.prototype.toString;
// let arr = [];
// console.log(objectToString.call(arr));

// let sayHiMixin = {
//     sayHi(){
//         console.log(`Hello, ${this.name}`);
//     },
//     sayBye(){
//         console.log(`Bye, ${this.name}`);
//     }
// };

// class User {
//     constructor(name){
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User("Murvat").sayHi();
// new User("Murvat").sayBye();

// let sayMixin = {
//     say(phrase){
//         console.log(phrase);
//     }
// }
// let sayHiMixin = {
//     __proto__:sayMixin,
//     sayHi(){
//         super.say(`Hello, ${this.name}`);
//     },
//     sayBye(){
//         super.say(`Bye, ${this.name}`);
//     }
// }

// class User {
//     constructor(name){
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, sayHiMixin);

// new User('Murvat').sayHi();
// console.log(this)


