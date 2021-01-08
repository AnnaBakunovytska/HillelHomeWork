// let user = {
//   firstName: 'Anna',
//   say: function (hello) {
//     return hello + ' ' + this.firstName;
//   }
// }

// console.log(user.say('Hello'));

// let user2 = {
//   firstName: 'Dasha',
// }

// console.log(user.say.call(user2, 'hello'));
// console.log(user.say.apply(user2, ['hello']));
// let test = user.say.bind(user2, 'Hello');
// console.log(test);


// ///////// HOME WORK ///////////////////

// Ex 1
// Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

// let calculator = {
//   read,
//   sum,
//   multi,
//   diff,
//   div
// };

// function read() {
//   let x;
//   let y;
//   while (isNaN(x)) {
//     x = prompt('x');
//   }
//   while (isNaN(y)) {
//     y = prompt('y');
//   }
//   this.x = +x;
//   this.y = +y;
// };

// function sum() {
//   return this.x + this.y;
// }

// function multi() {
//   return this.x * this.y;
// }

// function diff() {
//   return this.x - this.y;
// }

// function div() {
//   if (this.y === 0) {
//     throw 'На ноль делить нельзя';
//   }
//   return this.x / this.y;
// }

// calculator.read();

// alert(calculator.sum());
// alert(calculator.multi());
// alert(calculator.diff());
// alert(calculator.div());


// Ex 2
// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
// при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

// let coffeeMachine = {
//   message: 'Your coffee is ready!',
//   start: function () {
//     setTimeout(() => alert(this.message), 3000);
//   }
// };

// coffeeMachine.start();


// Ex 3
// Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
// Используйте концепцию chaining для создания цепочки вызовов.

// let counter = {
//   count: 0,
//   inc: function () {
//     this.count++;
//     return this;
//   },
//   dec: function () {
//     this.count--;
//     return this;
//   },
//   getValue: function () {
//     return this.count;
//   }
// };

// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current);


// Ex 4
// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv.Методы объекта ничего не реализуют,
// а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’.Для расчетов все методы используют функционал
// ранее созданного калькулятора.


// let obj = {
//   getSum: function (x, y) {
//     this.x = x;
//     this.y = y;
//     alert(`${x} + ${y} = ${calculator.sum.call(this)}`);
//   },
//   getDiff: function (x, y) {
//     this.x = x;
//     this.y = y;
//     alert(`${x} - ${y} = ${calculator.diff.call(this)}`);
//   },
//   getMulti: function (x, y) {
//     this.x = x;
//     this.y = y;
//     alert(`${x} * ${y} = ${calculator.multi.call(this)}`);
//   },
//   getDiv: function (x, y) {
//     this.x = x;
//     this.y = y;
//     alert(`${x} / ${y} = ${calculator.div.call(this)}`);
//   }
// };

// obj.getDiff(10, 2);



// Ex 5
// Есть следующий код:
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// let country = {
//   name: 'Ukraine',
//   language: 'ukrainian',
//   capital: {
//     name: 'Kyiv',
//     population: 2907817,
//     area: 847.66
//   }
// }

// function format(start, end) {
//   console.log(start + this.name + end);
// }

// format.call(country, '', '');
// format.apply(country, ['[', ']']);
// format.call(country.capital, '', '');
// format.apply(country.capital, ['', '']);
// format.apply(country.capital.name, ['', '']);


// Ex 6
// Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя

// let user = {
//   name: 'Anna'
// };

// let format = function (start, end) {
//   return start + this.name + end;
// }.bind(user);


// console.log(format('<<<', '>>>'));


// Ex 7
// Напишите функцию concat, которая соединяет две строки, разделенные каким - то символом: разделитель
// и строки передаются в параметрах функции.Используя карринг, создайте новую функцию hello, которая
// которая выводит приветствие тому, кто передан в ее параметре:


// function concat(space, name) {
//   return space + name;
// }

// let secondPart = concat.bind(null, ' ', 'Anna');

// function hello(greetings) {
//   return greetings + secondPart();
// }

// console.log(hello('Hello'));



// Рекурсия
// Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – 
// a) используя цикл b) используя рекурсию:

// a //

// let num = function (x) {
//   let sum = 1;
//   for (i = 0; i < 3; i++) {
//     sum *= x;
//   }
//   return sum;
// }

// console.log(num(2));

// b //

// let num = function (number, x, i) {
//   if (x === undefined) {
//     x = 1;
//   }
//   x *= number;
//   if (i === undefined) {
//     i = 0;
//   }
//   i++;
//   if (i < 3) {
//     return num(number, x, i);
//   }
//   return x;
// }

// console.log(num(3));

// Ex 2
// Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

// function counter() {
//   let arr = [...arguments];
//   arr[1] += arr[0];
//   arr.shift();
//   if (arr.length > 2) {
//     return counter(...arr);
//   }
//   return arr[0] + arr[1];
// }

// console.log(counter(1, 2, 3, 4, 5));






