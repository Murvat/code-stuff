// Создание объекта Set
let mySet = new Set();
// Добавление элементов
mySet.add('value1');
mySet.add(2);
mySet.add({name: 'John'});
// 1. add(value): Добавляет новое уникальное значение в Set.
mySet.add('new value');
// 2. delete(value): Удаляет значение из Set.
mySet.delete(2);
// 3. has(value): Проверяет наличие значения в Set.
console.log(mySet.has('value1')); // выводит true
// 4. clear(): Удаляет все значения из Set.
mySet.clear();
// 5. forEach(callbackFunction): Вызывает указанную функцию для каждого значения в Set.
mySet.forEach((value) => {
  console.log(value);
});
// 6. size: Возвращает количество элементов в Set.
console.log(mySet.size);
// 7. values() / keys(): Возвращает итератор значений в Set.
let valuesIterator = mySet.values();
for (let value of valuesIterator) {
  console.log(value);
}
// 8. Symbol.iterator: Set является итерируемым объектом, и его можно использовать в цикле for...of напрямую.
for (let value of mySet) {
  console.log(value);
}
// Создание объекта WeakSet
let myWeakSet = new WeakSet();
// Создание объектов, которые будут использованы в качестве ключей
let key1 = { id: 1 };
let key2 = { id: 2 };
// Добавление элементов
myWeakSet.add(key1);
myWeakSet.add(key2);
// Проверка наличия ключа
console.log(myWeakSet.has(key1)); // выводит true
// Удаление элемента по ключу
myWeakSet.delete(key2);
// Пример: объект-ключ будет автоматически удален сборщиком мусора,
// если на него больше нет ссылок в других местах программы.
key1 = null;

