// // Создание объекта Set
// let mySet = new Set();
// // Добавление элементов
// mySet.add('value1');
// mySet.add(2);
// mySet.add({name: 'John'});
// // 1. add(value): Добавляет новое уникальное значение в Set.
// mySet.add('new value');
// // 2. delete(value): Удаляет значение из Set.
// mySet.delete(2);
// // 3. has(value): Проверяет наличие значения в Set.
// console.log(mySet.has('value1')); // выводит true
// // 4. clear(): Удаляет все значения из Set.
// mySet.clear();
// // 5. forEach(callbackFunction): Вызывает указанную функцию для каждого значения в Set.
// mySet.forEach((value) => {
//   console.log(value);
// });
// // 6. size: Возвращает количество элементов в Set.
// console.log(mySet.size);
// // 7. values() / keys(): Возвращает итератор значений в Set.
// let valuesIterator = mySet.values();
// for (let value of valuesIterator) {
//   console.log(value);
// }
// // 8. Symbol.iterator: Set является итерируемым объектом, и его можно использовать в цикле for...of напрямую.
// for (let value of mySet) {
//   console.log(value);
// }
// // Создание объекта WeakSet
// let myWeakSet = new WeakSet();
// // Создание объектов, которые будут использованы в качестве ключей
// let key1 = { id: 1 };
// let key2 = { id: 2 };
// // Добавление элементов
// myWeakSet.add(key1);
// myWeakSet.add(key2);
// // Проверка наличия ключа
// console.log(myWeakSet.has(key1)); // выводит true
// // Удаление элемента по ключу
// myWeakSet.delete(key2);
// // Пример: объект-ключ будет автоматически удален сборщиком мусора,
// // если на него больше нет ссылок в других местах программы.
// key1 = null;


// Допустим, у нас есть массив arr . Создайте функцию unique(arr) , 
// которая вернёт массив уникальных, не повторяющихсязначений массива arr
// function unique(arr) {
//     let set=new Set(arr)
//      return  newArr = [...set]
//   }
// let value = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// let value = ["Murvat", "Murvat", "Murvat", "1", "1", "2", "3", "3", "3"];
// console.log(unique(value)) ; 

// function unique(arr) {
//     let set = new Set(arr);
//     return Array.from(set);
//   }
//   let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
//   console.log(unique(values));

// Условие задачи:
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Фрагмент кода:
// Условие задачи:
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Фрагмент кода:
// function aclean(arr) {
//     // Создаем объект-мапу для хранения слов без анаграмм
//     let map = new Map();
//     // Проходим по каждому слову в массиве arr
//     for (let word of arr) {
//       // Преобразуем слово в нижний регистр и сортируем буквы
//       let sorted = word.toLowerCase().split('').sort().join('');
//       // Сохраняем слово в объект-мапе по ключу - отсортированной версии слова
//       console.log(sorted)
//       map.set(sorted, word);
//     }
//     // Возвращаем только уникальные значения из объекта-мапы (без анаграмм)
//     return Array.from(map.values());
//   }  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr)); // ожидаемый результат: "nap,teachers,ear" или "PAN,cheaters,era"
    
// Мы хотели бы получить массив ключей map.keys() в переменную и затем работать с ними, 
// например,применить метод .push(). Однако это не срабатывает. 
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
// let map = new Map();
// map.set('name', 'John');
// // Преобразуем итератор в массив
// let keys = Array.from(map.keys());
// // Теперь можно использовать метод push
// keys.push('more');
// console.log(keys);


// Есть массив сообщений. 
// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
//   ];
//   let readStatus = {};
//   // Функция для установки статуса прочтения сообщения
//   function setMessageRead(messageIndex) {
//     readStatus[messageIndex] = true;
//   }
  // Пример установки статуса прочтения для первого сообщения
//   setMessageRead(0);
  // Функция для проверки статуса прочтения сообщения
//   function isMessageRead(messageIndex) {
//     return readStatus[messageIndex] || false;
//   }
  // Пример проверки статуса прочтения для второго сообщения
//   console.log(isMessageRead(1));
// У вас есть доступ к ним, 
// но управление этим массивом происходит где-то ещё. Новые сообщения добавляются, 
// а старые удаляются, и вы не знаете, когда это может произойти.
// Имея такую вводную информацию, нужно решить, какую 
// структуру данных можно использовать для ответа на вопрос "было ли сообщение прочитано?". 
// Структура должна быть подходящей, чтобы однозначно определить,
// было ли прочитано каждое сообщение для каждого объекта сообщения.
// P.S. Когда сообщение удаляется из массива messages, оно также должно исчезать из структуры данных.
// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. 
// Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.


// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
//   ];
//   let readDates = {};
//   // Функция для установки даты прочтения сообщения
//   function setReadDate(messageIndex) {
//     readDates[messageIndex] = new Date();
//   }
//   // Пример установки даты прочтения для первого сообщения
//   setReadDate(0);
//   // Функция для получения даты прочтения сообщения
//   function getReadDate(messageIndex) {
//     return readDates[messageIndex];
//   }
//   // Пример получения даты прочтения для второго сообщения
//   console.log(getReadDate(1));
  


