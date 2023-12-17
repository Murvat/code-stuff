// Numbers
// Округление и преобразование:
// Math.round(): Округляет число до ближайшего целого.
// let roundedNumber = Math.round(4.7); // 5

// Math.floor(): Округляет число вниз до ближайшего целого.
// let flooredNumber = Math.floor(4.7); // 4

// Math.ceil(): Округляет число вверх до ближайшего целого.
// let ceiledNumber = Math.ceil(4.3); // 5

// toFixed(): Округляет число до указанного количества знаков после запятой и возвращает строку.
// let fixedNumber = (4.567).toFixed(2); // "4.57"

// Генерация случайных чисел:
// Math.random(): Возвращает случайное число от 0 (включительно) до 1 (исключительно).
// let randomNum = Math.random();

// Генерация случайного целого числа в диапазоне:
// let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

// Работа с числами:

// parseInt(): Преобразует строку в целое число.
// let intNumber = parseInt("123"); // 123

// parseFloat(): Преобразует строку в число с плавающей точкой.
// let floatNumber = parseFloat("3.14"); // 3.14

// isNaN(): Проверяет, является ли значение не числом.
// let isNotANumber = isNaN("abc"); // true

// Операции:
// Оператор + для сложения чисел:
// let sum = 2 + 3; // 5

// Оператор - для вычитания чисел:
// let difference = 5 - 2; // 3

// Оператор * для умножения чисел:
// let product = 4 * 2; // 8

// Оператор / для деления чисел:
// let quotient = 8 / 2; // 4

// Проверка свойств чисел:
// isFinite(): Проверяет, является ли значение конечным числом.
// let finiteNumber = isFinite(42); // true

// isInteger(): Проверяет, является ли число целым.
// let isInteger = Number.isInteger(5); // true

// isSafeInteger(): Проверяет, является ли число "безопасным" целым числом.
// let safeInteger = Number.isSafeInteger(9007199254740992); // false

// Математические операции:
// Math.abs(): Возвращает абсолютное значение числа.
// let absoluteValue = Math.abs(-5); // 5

// Math.pow(): Возводит число в указанную степень.
// let power = Math.pow(2, 3); // 8

// Math.sqrt(): Извлекает квадратный корень числа.
// let squareRoot = Math.sqrt(25); // 5

// Math.log(): Возвращает натуральный логарифм числа.
// let naturalLog = Math.log(2.71828); // 1

// Конвертация в различные системы счисления:

// parseInt() для конвертации в двоичную систему:
// let binaryNumber = parseInt("1010", 2); // 10

// parseInt() для конвертации в восьмеричную систему:
// let octalNumber = parseInt("12", 8); // 10
// parseInt() для конвертации в шестнадцатеричную систему:
// let hexNumber = parseInt("A", 16); // 10

// Проверка на четность/нечетность:
// Проверка на четность:
// let isEven = num % 2 === 0; // true if num is even
// Проверка на нечетность:
// let isOdd = num % 2 !== 0; // true if num is odd

// Number.toFixed():
// Округляет число до указанного количества знаков после запятой и возвращает строку.
// let fixedNumber = (7.891).toFixed(1); // "7.9"

// Number.toPrecision():
// Форматирует число в виде строки в зависимости от указанной точности.
// let precisionNumber = (123.456).toPrecision(4); // "123.5"

// Number.toExponential():
// Преобразует число в экспоненциальную запись.
// let exponentialNumber = (12345).toExponential(); // "1.2345e+4"

// Number.isNaN():
// Проверяет, является ли значение NaN (не числом).
// let isNan = Number.isNaN("abc"); // false

// Number.isFinite():
// Проверяет, является ли значение конечным числом, и не является ли NaN или бесконечностью.
// let isFiniteNumber = Number.isFinite(42); // true

// Number.parseFloat():
// Аналогично глобальной функции parseFloat, но является статическим методом Number.
// let parsedFloat = Number.parseFloat("3.14"); // 3.14

// Number.MAX_VALUE и Number.MIN_VALUE:
// Представляют максимальное и минимальное положительные значения типа "число".
// let maxVal = Number.MAX_VALUE;
// let minVal = Number.MIN_VALUE;

// Math.abs() для поиска расстояния между двумя точками:
// Расстояние между точками (x1, y1) и (x2, y2) в декартовой системе координат.
// let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Math.random() для получения случайного числа в диапазоне [0, 1):
// Получение случайного числа в диапазоне от 0 (включительно) до 1 (исключительно).
// let randomNumInRange = Math.random() * (max - min) + min;

// Math.sign():
// Возвращает знак числа, указывающий на то, является ли число положительным, отрицательным или нулем.
// let sign = Math.sign(-7); // -1

// Math.trunc():
// Усекает десятичную часть числа, возвращая только целую часть.
// let truncatedNumber = Math.trunc(5.78); // 5

// Math.cbrt():
// Возвращает кубический корень числа.
// let cubicRoot = Math.cbrt(27); // 3

// Number.EPSILON:
// Минимальное расстояние между двумя числами, при котором они считаются различными.
// let epsilon = Number.EPSILON;

// Цикл for для перебора числовой последовательности:
// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0, 1, 2, 3, 4
// }

//  Цикл for для перебора чисел в обратном порядке:
// for (let i = 5; i > 0; i--) {
//     console.log(i); // 5, 4, 3, 2, 1
// }

// Цикл while для перебора чисел:
// let i = 0;
// while (i < 5) {
//     console.log(i); // 0, 1, 2, 3, 4
//     i++;
// }

// Цикл do-while для перебора чисел:
// let i = 0;
// do {
//     console.log(i); // 0, 1, 2, 3, 4
//     i++;
// } while (i < 5);
