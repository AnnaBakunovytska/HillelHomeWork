// let obj = {
//   name: prompt('name'),
//   age: 25,
//   job: prompt('job'),
//   gender: 'female'
// }
// for (let key in obj) {
//   console.log(key, obj[key]);
//   if (key === 'age') {
//     if (obj[key] > 18) {
//       alert('Привет');
//     } else { alert('Пока') }
//   }
// }


// Home work lesson 5

// Ex 1
// Создайте смешанный массив, например[1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// arr.splice(3, 3);
// let sum = 0;

// for (let key = 0; key < arr.length; key++) {
//   sum += +arr[key];
//   console.log(sum);
// }

// alert(sum);


// Ex 2
// Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
// Переберите массив и распечатайте в консоли значения его элементов,
// возведенные в пятую степень, не используя функцию Math.pow().

// let randomNumbers = [];
// for (let x = 0; x < 6; x++) {
//   randomNumbers[x] = Math.random().toFixed(2);
//   randomNumbers.push(x);
// }
// console.log(randomNumbers);


// for (let n = 0; n < randomNumbers.length; n++) {
//   let result = randomNumbers[n];
//   for (let i = 1; i < 5; i++) {
//     result *= randomNumbers[n]
//   }
//   console.log(result);
// }


// Ex 3 

// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”


// let arr = ['AngularJS', 'jQuery'];
// arr.unshift('Backbone.js');
// arr.push('ReactJS', 'Vue.js');
// arr.splice(1, 0, 'CommonJS');

// console.log(arr);

// let jQuery = arr[3];
// arr.splice(3, 1);

// alert(`${jQuery} Это здесь лишнее`);


// Ex 4

// Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’
// с помощью любых методов массива(indexOf, splice ...).Затем объедините элементы массива в строку
// и выведите в alert исходный и итоговый варианты.

// let string = 'Как однажды Жак звонарь сломал фонарь головой';
// let space = ' ';
// string = string.split(space);

// string.splice(1, 1);
// string.splice(3, 0, 'однажды');
// string.splice(5, 1);
// string.push('фонарь');

// alert(string.join(' '));



// Ex 5

// Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.


// Без  in или typeOf,  но с ассоциативным массивом(такв интернете было написано:))
// let person = new Map([
//   ['name', 'Anna'],
//   ['age', 23],
//   ['job', 'sportsman'],
//   ['gender', 'female']
// ]);
// console.log(person);
// let quastion = prompt('Input some key of person')
// if (person.has(quastion)) {
//   alert(person.get(quastion));
// } else {
//   person.set(quastion, prompt("set this key"));
// }


// let person = {
//   name: 'Anna',
//   age: 25,
//   job: 'sportsman',
//   gender: 'female',
// };

// let quastion = prompt('Set some key of person');
// let keyExist = false;
// for (let key in person) {
//   if (key == quastion) {
//     keyExist = true;
//     alert(person[key]);
//   }
// }
// if (!keyExist) {
//   person.key = prompt('Set some value');
// }


// // Ex 6

// // Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
// // прочитанными из prompt(например: brand, model, resolution, color...), не используя вспомогательные переменные.
// // Добавьте этот гаджет персоне, созданной ранее

// let phone = {
//   brand: prompt('Set some brand'),
//   model: prompt('Set some model'),
//   color: prompt('Set some color'),
//   camera: prompt('Set some camera')
// };

// person = { phone, ...person };


// console.log(person);

// Ex 7 

// Создайте объект dates для хранения дат.Первая дата – текущая, new Date.
// Вторая дата – текущая дата минус 365 дней.Из prompt читается дата в формате yyyy - MM - dd.
//   Проверьте, попадает ли введенная дата в диапазон дат объекта dates.


// let fd = new Date;
// let sd = new Date(new Date().getTime() - (365 * 24 * 60 * 60 * 1000))
// let objDate = {
//   firsDate: fd,
//   secondDate: sd,
// };

// let setDate = prompt('set date yyyy - MM - dd');
// let space = ' - ';
// setDate = setDate.split(space);
// setDate = setDate.join();
// setDate = new Date(setDate);
// if (setDate < fd && setDate > sd) {
//   alert('true')
// } else {
//   alert('false')
// }


// Ex 8


// Создайте пустой массив.В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
// полученное значение добавляйте в конец созданного массива.После выхода из цикла посчитайте сумму
// всех чисел массива и выведите в alert полученный результат.


// let arr = [];
// for (n = 0; n < 6; n++) {
//   arr.push(prompt());
// }

// arr = arr.filter(Number);
// let sum = 0;

// for (let key = 0; key < arr.length; key++) {
//   sum += +arr[key];
// }

// alert(sum);


// Ex 9

// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

// outer:
// for (let i = 1; i < 11; i++) {
//   let arrey = [];
//   let k = i;
//   console.log(arrey);
//   for (let x = 1; x < 11; x++) {
//     let sum = k * x;
//     let string = k + 'x' + x + '=' + sum;
//     arrey.push(string);
//     if (x === 10) { continue outer }
//   }
// }


// Ex 10

// Создайте структуру данных, полностью описывающую html - разметку картинки.

// let img = {
//   src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//   alt: '',
//   style: {
//     border: '1px solid #ccc'
//   },
//   width: '200'
// };
// JSON.stringify(img);

