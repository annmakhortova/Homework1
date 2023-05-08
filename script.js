//  11.01.2023
//Задание 1. Написать функцию, которая принимает на вход строку. Возвращает строку, у которой первый символ заглавный, а остальные строчные.
//Пример вызова:
//capitalized («привет Мир!»); //’Привет мир! ’


//function str(a) {
//    srt = a.toLowerCase();
//    let result = srt.charAt(0).toUpperCase() + srt.slice(1);
//      return result;
//}
//  console.log(str('привет Мир!')); // Привет мир!
//  console.log(str('Как у Вас ДелА?')); // Как у вас дела? 


// Задание 2. Написать функцию, которая принимает строку. Если строка имеет между словами более одного пробела, то функция должна удалять лишние и оставлять только один. Вернуть модифицированную строку.
//Пример вызова: removeSpace («Мне нравится     JavaScript!»); // ‘Мне нравится JavaScript! ’
//removeSpace («очЕнь  скоро       я    буДу Web-РазраБотчиком  !»); // ‘очЕнь скоро я буДу Web-РазраБотчиком! ’


//function str(a) {
//    result = a.replace(/ +/g, ' ').trim();
//    return result;
//}
//console.log(str('Мне нравится     JavaScript!')); //Мне нравится JavaScript!
//console.log(str('очЕнь  скоро       я    буДу Web-РазраБотчиком  !')); // очЕнь скоро я буДу Web-РазраБотчиком!


//Задание 3. Написать функцию, которая принимает на вход массив с произвольными значениями, а возвращает массив, содержащий только числа и отсортированные в порядке убывания. Если в переданном массиве нет чисел, вернуть пустой массив.
//Пример вызова:
//getSortedArray ([3, null, ‘0’, 9, 12, ‘a’, false, -5]); //[12, 9, 3, -5]
//getSortedArray ([‘3’, null, ‘0’, ‘a’, ‘5’, false]); //[]


//let arr = [3, null, '0', 9, 12, 'a', false, -5];
//let arrEmpty = [];

//function userArr() {
//  let onlyNumbers = arr.filter(
//    element => typeof element === 'number');
//  onlyNumbers.sort(function (a, b) {
//    return b - a;});
//     if (onlyNumbers === String) {
//    return arrEmpty;
//  };
//  console.log(onlyNumbers);
//}
//userArr();


//Задание 4. Написать функцию, которая на вход принимает массив чисел и callback-функцию. Функция должна возвращать целое число, в зависимости от callback это может быть сумма всех чисел массива, произведение. Функции вычисляющие произведение и сумму чисел массива, также необходимо реализовать.
//Пример вызова:
//getResult ([3, 4, 1, 9], mult); //108
//getResult ([3, 4, 1, 9], sum); //17


//const getResult = (arr, callback) => {
//    return callback(arr);
//  }
  
//function sum(arr) {
//    let sum = 0;
//    for (i = 0; i < arr.length; i++) {
//      sum += arr[i];
//    }
//    return Math.floor(sum);
//};
//function mult(arr) {
//    let total = 1;
//    for (i = 0; i < arr.length; i++) {
//      total *= arr[i];
//    }
//    return Math.floor(total);
//};
//console.log(getResult([3, 4, 1, 9], mult)); //108
//console.log(getResult([3, 4, 1, 9], sum)); //17


//Задание 5. Дан массив объектов:
//const users = [{name: 'Jon', age: 22}, {name: 'Richard', age: 18}, {name: 'Anton', age: 32}, {name: 'Lida', age: 23}, {name: 'Bob', age: 44}];
//Необходимо отсортировать элементы массива в порядке увеличения возраста.
//Пример вызова:
// getSortedArrayObj (users); //[{name: 'Richard', age: 18}, {name: 'Jon', age: 22}, {name: 'Lida', age: 23}, {name: 'Anton', age: 32}, {name: 'Bob', age: 44}]


//const users = [{ name: 'Jon', age: 22 }, { name: 'Richard', age: 18 }, { name: 'Anton', age: 32 }, { name: 'Lida', age: 23 }, { name: 'Bob', age: 44 }];

//function myFunction() {
//  return users.sort((a, b) => a.age - b.age)
//}
//console.log(myFunction());


// Задание 6 (не обязательное). Написать функцию, которая принимает 2 целых числа a и b, и выводит все числа от a до b включительно, порядке возрастания. Если a меньше b, то вывести в порядке убывания. Решение должно быть рекурсивным.
//Пример вызова:
//getNumberSeries (3, -3); //3, 2, 1, 0, -1, -2, -3
//getNumberSeries (5, 5); //5


//function recursion(a, b) {
//   if (a > b) {
//    if (a === b) {
//       return a;
//    }
//     return a + " " + recursion(a - 1, b);
//    } else {
//     if (a === b) {
//       return a;
//    }
//    return a + " " + recursion(a - 1, b);
//   }
// }

//console.log((recursion(3, -3))); //3, 2, 1, 0, -1, -2, -3
//console.log((recursion(5, 5))); //5

//С положительными числами не получается распределить по возрастанию 
//console.log((recursion(9, 4))); //9, 8, 7, 6, 5, 4
//Не подскажете почему так?





//Критерии проверки заданий:
//Код написан без ошибок, соблюдены правила названия переменных, функций.
//В задачах 1-3 и 5 используются методы строк или/и массивов.
//В задании № 6 решение рекурсивное.
//При запуске функций с параметрами из блока «Пример вызова» возвращаются такие же значения, как в примере.