// // Создание объекта Map
// let myMap = new Map();
// // Добавление элементов
// myMap.set('key1', 'value1');
// myMap.set(2, 'value2');
// myMap.set({name: 'John'}, 'value3');
// // Получение значения по ключу
// console.log(myMap.get('key1')); // выводит 'value1'
// // Проверка наличия ключа
// console.log(myMap.has(2)); // выводит true
// // clear(): Удаляет все элементы из Map.
// myMap.clear();
// // keys(): Возвращает итератор ключей в Map.
// let keysIterator = myMap.keys();
// for (let key of keysIterator) {
//   console.log(key);
// }
// // 3. values(): Возвращает итератор значений в Map.
// let valuesIterator = myMap.values();
// for (let value of valuesIterator) {
//   console.log(value);
// }
// // Удаление элемента по ключу
// myMap.delete(2);
// // entries(): Возвращает итератор пар ключ-значение в Map.
// let entriesIterator = myMap.entries();
// for (let [key, value] of entriesIterator) {
//   console.log(`${key}: ${value}`);
// }

// //  forEach(callbackFunction): Вызывает указанную функцию для каждой пары ключ-значение в Map.
// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// // 6. Symbol.iterator: Map является итерируемым объектом, и его можно использовать в цикле for...of напрямую.
// for (let [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }// Получение количества элементов
// console.log(myMap.size); // выводит 2, так как один элемент был удален

// // Создание объекта WeakMap
// let myWeakMap = new WeakMap();
// // Создание объектов, которые будут использованы в качестве ключей
// let key1 = { id: 1 };
// let key2 = { id: 2 };
// // Добавление элементов
// myWeakMap.set(key1, 'value1');
// myWeakMap.set(key2, 'value2');
// // Получение значения по ключу
// console.log(myWeakMap.get(key1)); // выводит 'value1'
// // Проверка наличия ключа
// console.log(myWeakMap.has(key2)); // выводит true
// // Удаление элемента по ключу
// myWeakMap.delete(key1);
// // Пример: объект-ключ будет автоматически удален сборщиком мусора,
// // если на него больше нет ссылок в других местах программы.
// key2 = null;















// let map=new Map();
// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');
// console.log(map);
// console.log(map.get('1'));
// console.log(map.get(true));

// let obj = {
//     name: 'John',
//     age: 30
// };

// let map = new Map(Object.entries(obj));
// console.log(map.get('name'));

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ])

// console.log(prices)

// let set = new Set();
// let john = {name: "John"}
// let pete = {name: "Pete"}
// let mary = {name: "Mary"}

// set.add(john)
// set.add(mary)
// set.add(pete)
// set.add(mary)
// set.add(pete)
// set.add(john)
// console.log(set)

// const obj = {
//     name:'Murvat',
//     age: 26,
//     job:'Engineer'
// }

// // const entries = [
// //     ['name', 'Murvat'],
// //     ['age', 26],
// //     ['job', 'Fullstack']
// // ]
// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(entries))
// const entries = [
//     ['name', 'Murvat'],
//     ['age', 26],
//     ['job', 'Fullstack']
// ]

// const map = new Map(entries)
// console.log(map.get('age'));
// map 
//     .set('newField', 42)
//     .set(obj,'value of object')
// console.log(map)

// const set = new Set([1, 2, 6, 7, 8,7])
// console.log(set)
// const map = new Map();
// map.set('0', '1');
// map.set('s2', '2s');
// map.set('3s','s3');
// console.log(map)

// const arr = [...map.values()];

// console.log(arr);

// const result = arr.map(value => parseInt(value, 10));
// console.log(result);