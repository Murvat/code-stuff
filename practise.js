STRINGS
// Объединение строк:
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// Длина строки:
// let inputString = "Hello, World!";
// let stringLength = inputString.length;
// console.log(stringLength);
// Извлечение подстроки:
// let sourceString = "This is a sample string";
// let substring = sourceString.slice(5, 10);
// console.log(substring);
// Поиск подстроки:
// let mainString = "JavaScript is fun";
// let searchString = "is";
// let isSubstringPresent = mainString.includes(searchString);
// console.log(isSubstringPresent);
// Замена символов:
// let originalString = "Hello, world!";
// let oldChar = "o";
// let newChar = "a";
// let modifiedString = originalString.split(oldChar).join(newChar);
// console.log(modifiedString);
// Преобразование в верхний/нижний регистр:
// let inputString = "JavaScript is Cool";
// let upperCaseString = inputString.toUpperCase();
// let lowerCaseString = inputString.toLowerCase();
// console.log(upperCaseString, lowerCaseString);
// Удаление лишних пробелов:
// let sentenceWithSpaces = "    Trim this sentence    ";
// let trimmedSentence = sentenceWithSpaces.trim();
// console.log(trimmedSentence);
// Разделение строки:
// let sentenceToSplit = "This is a sample sentence";
// let wordsArray = sentenceToSplit.split(" ");
// console.log(wordsArray);\
// Проверка начала и конца строки:
// let mainString = "Welcome to JavaScript";
// let startString = "Welcome";
// let endString = "Script";
// let startsWithWelcome = mainString.startsWith(startString);
// let endsWithScript = mainString.endsWith(endString);
// console.log(startsWithWelcome, endsWithScript);
// Конкатенация строк:
// let string1 = "Hello";
// let string2 = ", ";
// let string3 = "World!";
// let concatenatedString = string1 + string2 + string3;
// console.log(concatenatedString);
// Преобразование числа в строку:
// let numberValue = 42;
// let stringValue = numberValue.toString();
// console.log(stringValue);
// Проверка наличия символа:
// let checkString = "Programming";
// let targetChar = "g";
// let isCharPresent = checkString.includes(targetChar);
// console.log(isCharPresent);



ARRAYS
// Нахождение индекса элемента:
// let fruitsArray = ["apple", "banana", "cherry", "date"];
// let targetFruit = "banana";
// let fruitIndex = fruitsArray.indexOf(targetFruit);
// console.log(fruitIndex);
// Обратный порядок элементов:
// let reverseArray = [1, 2, 3, 4, 5];
// let reversedArray = reverseArray.reverse();
// console.log(reversedArray);
// Преобразование элементов в строки:
// let numbersArray = [10, 20, 30, 40, 50];
// let stringArray = numbersArray.map(String);
// console.log(stringArray);
// Проверка условия для каждого элемента:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let isConditionMet = numbersArray.every(item => item > condition);
// console.log(isConditionMet);
// Нахождение первого элемента, удовлетворяющего условию:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let firstMatch = numbersArray.find(item => item > condition);
// console.log(firstMatch);
// Удаление повторяющихся элементов:
// let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = Array.from(new Set(arrayWithDuplicates));
// console.log(uniqueArray);
// Создание подмассива на основе условия:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let filteredArray = numbersArray.filter(item => item > condition);
// console.log(filteredArray);
// Объединение элементов в строку:
// let stringArray = ["Hello", " ", "World", "!"];
// let concatenatedString = stringArray.join("");
// console.log(concatenatedString);
// Разворачивание вложенных массивов:
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let flatArray = nestedArray.flat();
// console.log(flatArray);
// Определение существования хотя бы одного элемента, удовлетворяющего условию:
// let numbersArray = [5, 10, 15, 20, 25];
// let condition = 15;
// let isConditionMet = numbersArray.some(item => item > condition);
// console.log(isConditionMet);
// Определение общих элементов двух массивов:
// let firstArray = [1, 2, 3, 4, 5];
// let secondArray = [4, 5, 6, 7, 8];
// let commonElements = firstArray.filter(item => secondArray.includes(item));
// console.log(commonElements);
// Создание нового массива на основе существующего:
// let numbersArray = [1, 2, 3, 4, 5]
// Поиск элемента:
// let numbersArray = [5, 10, 15, 20, 25];
// let targetNumber = 15;
// let a = numbersArray.find(item => item === targetNumber);
// console.log(a);
// Сортировка массива:
// let stringsArray = ["orange", "apple", "banana", "grape"];
// let a  = stringsArray.sort()
// console.log(a)
// Объединение массивов:
// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];
// let a = firstArray.concat(secondArray);
// console.log(a);
// Извлечение подмассива:
// let numbersArray = [5, 10, 15, 20, 25];
// let startIndex = 1;
// let length = 3;
// let a =numbersArray.slice(startIndex, startIndex+length);
// console.log(a)
// Проверка наличия элемента:
// let stringsArray = ["apple", "orange", "banana", "grape"];
// let searchString = "orange";
// let a = searchString.includes(searchString);
// console.log(a)
// Преобразование элементов:
// let numbersArray = [2, 4, 6, 8, 10];
// let incrementValue = 5;
// let a = numbersArray.map(item => item + incrementValue)
// console.log(a);
// Фильтрация элементов:
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = numbersArray.filter(item =>{
//         if(item > 5){
//                 return item
//         }
// })
// console.log(a);
// Нахождение суммы элементов:
// let numbersArray = [1, 2, 3, 4, 5];
// let sum = numbersArray.reduce((prev, item) => prev + item, 0);
// console.log(sum);
// Поиск минимального значения:
// Вводные данные: Массив чисел, например, [5, 2, 8, 1, 6].
// Задача: Найти и вывести минимальное значение в массиве.
// const numbers = [5, 2, 8, 6, 6]
// const minNum = Math.min(...numbers);
// console.log(minNum);
// Фильтрация положительных чисел:
// Вводные данные: Массив чисел, например, [-3, 7, -1, 0, 9].
// Задача: Создать новый массив, содержащий только положительные числа.
// const numbers = [-3, 7, -1, 0, 9]
// const fNum = numbers.filter(item =>item>0);
// console.log(fNum);
// Вычисление среднего значения:
// Вводные данные: Массив чисел, например, [10, 5, 8, 2, 7].
// Задача: Рассчитать и вывести среднее значение элементов массива.
// const num = [10, 5, 8, 2, 7];
// const sum = num.reduce((prev, current) => prev + current, 0);
// const average = sum / num.length;
// console.log(`Среднее значение массива: ${average}`);
// Поиск индекса элемента:
// Вводные данные: Массив строк, например, ['apple', 'banana', 'orange', 'grape'].
// Задача: Найти индекс элемента 'orange' в массиве.
// let arr =  ['apple', 'banana', 'orange', 'grape']
// let a = arr.indexOf('orange');
// console.log(a);
// Объединение массивов:
// Вводные данные: Два массива, например, [1, 2, 3] и [4, 5, 6].
// Задача: Объединить эти два массива в один.
// let arr1 = [1, 2, 3,]
// let arr2 = [4, 5, 6]
// let arr3 = arr1 + arr2
// console.log(arr3);
// let arr4 = arr1.concat(arr2);
// console.log(arr4);
// Подсчет четных чисел:
// Вводные данные: Массив чисел, например, [1, 2, 3, 4, 5, 6].
// Задача: Подсчитать количество четных чисел в массиве.
// let arr = [1, 2, 3, 4, 5, 6]
// let a = arr.filter(item => item%2 === 0)
// console.log(a);
// Удаление дубликатов:
// Вводные данные: Массив строк с повторяющимися значениями, например, ['apple', 'orange', 'banana', 'apple', 'grape'].
// Задача: Создать новый массив, исключив повторяющиеся значения.
// let arr = ['apple', 'orange', 'banana', 'apple', 'grape'];
// let a = [];
// arr.forEach(item => {
//     if (!a.includes(item)) {
//         a.push(item);
//     }
// });
// console.log(a);
// Сортировка в обратном порядке:
// Вводные данные: Массив чисел, например, [3, 1, 4, 1, 5, 9, 2, 6].
// Задача: Отсортировать массив в обратном порядке.
// let arr = [3, 1, 4, 1, 5, 9, 2, 6];
// let b = arr.slice().reverse();
// console.log(b);
// Проверка наличия элемента:
// Вводные данные: Массив чисел и число для проверки, например, [2, 4, 6, 8, 10] и 6.
// Задача: Проверить, содержится ли указанное число в массиве.
// let arr = [2, 4, 6, 8, 10]
// let b = arr.includes(6);
// console.log(b);
// Преобразование элементов массива:
// Вводные данные: Массив чисел, например, [2, 4, 6, 8, 10].
// Задача: Умножить каждый элемент массива на 2 и вывести результат.
// let arr =[2, 4, 6, 8, 10];
// let a = arr.map(item => item *=2);
// console.log(a);

