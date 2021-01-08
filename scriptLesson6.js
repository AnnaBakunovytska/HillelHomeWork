// Ex 1

// Напишите функцию max, которая сравнивает два числа и возвращает большее:

// let max = (first, second) => {
//   return first > second ? first : second;
// }


// Ex 2

// Напишите функцию - аналог Math.min().Функция принимает любое количество чисел и возвращает меньшее из них:


// function mathMin() {
//   let min = arguments[0];
//   for (let i = 0; i < arguments.length - 1; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }

// console.log(mathMin(0, -1, 100, 500, 100500));


// Ex 3

// Изучите перебирающие методы массивов: forEach, filter, map.Создайте массив объектов users(~10 объектов),
// каждый объект имеет поля firstname, lastname, age с разными значениями.Используя встроенные функции массивов:
// Отфильтруйте пользователей младше 18 лет
// Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
  {
    firstName: "Jhone",
    lastName: "Wolf",
    age: 23
  },
  {
    firstName: "Ann",
    lastName: "Snow",
    age: 27
  },
  {
    firstName: "Jes",
    lastName: "Krow",
    age: 9
  },
  {
    firstName: "Martin",
    lastName: "Luter",
    age: 30
  },
  {
    firstName: "Spider",
    lastName: "Man",
    age: 18
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    age: 11
  },
  {
    firstName: "Vasya",
    lastName: "Ivanov",
    age: 14
  },
  {
    firstName: "July",
    lastName: "Filps",
    age: 31
  },
  {
    firstName: "Tet",
    lastName: "Tris",
    age: 99
  },
  {
    firstName: "Kris",
    lastName: "Pot",
    age: 65
  }
];


// let filterUsersAge = users.filter((item) => item.age < 18);
// console.log(filterUsersAge);


// let userFullName = () => {
//   users.forEach((item) => {

//     item.fullName = `${item.firstName} ${item.lastName}`

//   });
// }

// userFullName();
// console.log(users);




// let usersNew = () => {
//   let arr = [];
//   users.map((item) => {
//     arr.push(item.fullName)
//   });
//   return arr;
// }


// console.log(usersNew());

// Ex 4

// Напишите функцию аналог метода массива shift.Функция удаляет из переданного в параметре массива первый элемент.


// let arr = ['Anna', 'Bakunovytska', 23, 'Female'];
// let deleteFirstItem = (array) => {
//   array.splice(0, 1);
// }

// deleteFirstItem(arr);


// Ex 7

// Напишите функцию аналог метода массива push.Функция добавляет в конец переданного в параметре массива произвольное количество элементов.


// let arr = ['Anna', 'Bakunovytska', 23, 'Female'];

// function pushItem() {
//   for (let i = 1; i < arguments.length; i++) {
//     arguments[0][arguments[0].length] = arguments[i];
//   }
// }

// pushItem(arr, 'Ukrainian', 'sportsman', 'JS');



// Ex 6

// Напишите функцию аналог метода Object.assign().Первый параметр функции - целевой объект, поля которого будут изменены или расширены.
// Остальные параметры - объекты - источники, полями которых будет расширяться целевой объект.

// почему ex 5 работает без return, a ex 6 нет


// let sourse = {
//   firstName: 'Tom',
//   age: 10
// };

// function sourseNew(obj) {
//   for (let i = 1; i < arguments.length; i++) {
//     let tempObj = arguments[i];
//     obj = { ...obj, ...tempObj };
//   }
//   return obj;
// }

// sourse = sourseNew(sourse, { firstName: 'John' }, { lastName: 'Dou' });



// Ex 7

// Напишите функцию setComment с параметрами: date, message, author.Дата и текст сообщения
//  - обязательные параметры, если какой - то из них или оба отсутствуют, то выполнение функции должно обрываться,
// а пользователю выдаваться предупреждение(alert) о том, что данные переданы некорректно.Параметр author - опциональный,
// но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’.Функция
// распечатывает в консоле текст в формате:

// let setComment = (date, message, author) => {
//   if (date === undefined || message === undefined) {
//     alert('данные переданы некорректно');
//     return;
//   }
//   if (author === undefined) {
//     author = 'Anonymous'
//   }
//   console.log(author, date);
//   console.log(message);

// }

// setComment('16-04-2020', 'Lalalal', 'Anna');




// Ex 8

// Используя замыкание, напишите функцию createTimer, которая использует метод performance.now()
// для получения текущей временной метки и служит для замера времени выполнения другого кода(код менять,
// видоизменять нельзя, как написан так и должен остаться):


// function createTimer(timer) {
//   let timeBefore = performance.now();
//   return function () {
//     let timeAfter = performance.now();
//     return timeAfter - timeBefore;
//   }
// }

// let timer = createTimer();
// alert('!');
// alert(timer());






// Ex 9

// Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию,
// которая добавляет к первому параметру второй.Функция работает по следующему принципу:


// function createAdder(hello) {
//   return function (name) {
//     return hello + name
//   }
// }

// let hello = createAdder('Hello, ');
// alert(hello('Anna'))


// function createAdder(number) {
//   return function (sum) {
//     return number + sum
//   }
// }

// let number = createAdder(5);
// alert(number(5));

