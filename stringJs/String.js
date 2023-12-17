// String
// charAt(index):
// 1)Возвращает символ по указанному индексу.
// const str = "Hello, World!";
// const charAtIndex = str.charAt(7);
// console.log(charAtIndex); // выводит 'W'
// 2)charCodeAt(index):
// Возвращает Unicode код символа по указанному индексу.
// const str = "Hello, World!";
// const charCodeAtIndex = str.charCodeAt(7);
// console.log(charCodeAtIndex); // выводит 87 (Unicode для 'W')

// Методы для разделения и объединения строк
// 1)concat(str1, str2, ...):
// Объединяет строки.
// const str1 = "Hello";
// const str2 = "World!";
// const combinedString = str1.concat(", ", str2);
// console.log(combinedString); // выводит "Hello, World!"
// 2)split(separator, limit):
// Разбивает строку на массив подстрок, используя указанный разделитель.
// const str = "Hello, World!";
// const words = str.split(", ");
// console.log(words); // выводит ["Hello", "World!"]

// Методы для проверки содержимого строки:
// 1)includes(searchString, position):
// Проверяет, содержится ли подстрока в строке.
// const str = "Hello, World!";
// const containsWorld = str.includes("World");
// console.log(containsWorld); // выводит true
// 2)endsWith(searchString, length):
// Проверяет, заканчивается ли строка указанной подстрокой.
// const str = "Hello, World!";
// const endsWithWorld = str.endsWith("World!");
// console.log(endsWithWorld); // выводит true
// 3)startsWith(searchString, position):
// Проверяет, начинается ли строка указанной подстрокой.
// const str = "Hello, World!";
// const startsWithHello = str.startsWith("Hello");
// console.log(startsWithHello); // выводит true
// 7)indexOf(searchValue, fromIndex):
// Возвращает индекс первого вхождения подстроки.
// const str = "Hello, World!";
// const indexOfWorld = str.indexOf("World");
// console.log(indexOfWorld); // выводит 7
// 8)lastIndexOf(searchValue, fromIndex):
// Возвращает индекс последнего вхождения подстроки.
// const str = "Hello, World!";
// const lastIndexOfO = str.lastIndexOf("o");
// console.log(lastIndexOfO); // выводит 8
// 9)length:
// Возвращает длину строки.
// const str = "Hello, World!";
// const lengthOfString = str.length;
// console.log(lengthOfString); // выводит 13
// 10)localeCompare(compareString, locales, options):
// Сравнивает строки в заданной локали.
// const str1 = "apple";
// const str2 = "banana";
// const comparisonResult = str1.localeCompare(str2);
// console.log(comparisonResult); // может быть отрицательным, нулевым или положительным числом

// Методы для изменения строки
// 1)toLowerCase():
// Преобразует все символы строки в нижний регистр.
// const str = "Hello, World!";
// const lowerCaseString = str.toLowerCase();
// console.log(lowerCaseString); // выводит "hello, world!"
// 2)toUpperCase():
// Преобразует все символы строки в верхний регистр.
// const str = "Hello, World!";
// const upperCaseString = str.toUpperCase();
// console.log(upperCaseString); // выводит "HELLO, WORLD!"
// 3)trim():
// Удаляет пробелы в начале и в конце строки.
// const str = "   Hello, World!   ";
// const trimmedString = str.trim();
// console.log(trimmedString); // выводит "Hello, World!"
// 4)trimStart(), trimLeft():
// Удаляет пробелы в начале строки.
// const str = "   Hello, World!   ";
// const trimmedString = str.trimStart();
// console.log(trimmedString); // выводит "Hello, World!   "
// 5)trimEnd(), trimRight():
// Удаляет пробелы в конце строки.
// const str = "   Hello, World!   ";
// const trimmedString = str.trimEnd();
// console.log(trimmedString); // выводит "   Hello, World!"
// 6)normalize(form):
// Нормализует строку в указанную форму Юникода.
// const str = "é";
// const normalizedString = str.normalize("NFD");
// console.log(normalizedString); // выводит "é"
// 7)repeat(count):
// Повторяет строку указанное количество раз.
// const str = "Hello";
// const repeatedString = str.repeat(3);
// console.log(repeatedString); // выводит "HelloHelloHello"
// 8)replace(searchValue, replaceValue):
// Заменяет подстроку новой строкой.
// const str = "Hello, World!";
// const replacedString = str.replace("World", "Universe");
// console.log(replacedString); // выводит "Hello, Universe!"
// 9)slice(startIndex, endIndex):
// Возвращает вырезанную подстроку между указанными индексами.
// const str = "Hello, World!";
// const slicedString = str.slice(7, 12);
// console.log(slicedString); // выводит "World"
// 10)substring(startIndex, endIndex):
// Возвращает подстроку между указанными индексами.
// const str = "Hello, World!";
// const substring = str.substring(7, 12);
// console.log(substring); // выводит "World"
// 11)substr(startIndex, length):
// Возвращает подстроку, начиная с указанного индекса и имеющую указанную длину.
// const str = "Hello, World!";
// const substring = str.substr(7, 5);
// console.log(substring); // выводит "World"

// OTHER:
//23) valueOf():
// Возвращает примитивное значение строки.
// const strObject = new String("Hello, World!");
// const primitiveValue = strObject.valueOf();
// console.log(primitiveValue); // выводит "Hello, World!"
// 24)toString():
// Возвращает строковое представление объекта.
// const strObject = new String("Hello, World!");
// const stringValue = strObject.toString();
// console.log(stringValue); // выводит "Hello, World!"

// СПОСОБЫ ПЕРЕБИРАНИЯ
//1) Цикл for с использованием charAt и length:
// const str = "Hello, World!";
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }
// 2)Цикл for...of:
// const str = "Hello, World!";
// for (const char of str) {
//     console.log(char);
// }
// 3)Метод split и цикл forEach для массива символов:
// const str = "Hello, World!";
// const charArray = str.split('');
// charArray.forEach(char => {
//     console.log(char);
// });
// 4)Метод split и цикл for...of для массива символов:
// const str = "Hello, World!";
// const charArray = str.split('');
// for (const char of charArray) {
//     console.log(char);
// }
// 5)Метод Array.from и цикл forEach для массива символов:
// const str = "Hello, World!";
// const charArray = Array.from(str);
// charArray.forEach(char => {
//     console.log(char);
// });
// 6)Цикл while с использованием charAt и length:
// const str = "Hello, World!";
// let i = 0;
// while (i < str.length) {
//     console.log(str.charAt(i));
//     i++;
// }
// 7)Цикл for с использованием charCodeAt и length:
// const str = "Hello, World!";
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }