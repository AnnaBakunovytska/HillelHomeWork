// // Ex 1
// let x = prompt('Input a number');
// if (x > 0) {
//   alert('positive')
// } else if (x < 0) {
//   alert('negative')
// }
// else {
//   alert('null')
// };



// // Ex 2
// let myMoney = prompt('My money');
// let friendMoney = prompt('Friend\'s money');
// if (+myMoney + +friendMoney > 3000) {
//   alert('Поздравляем! Вы летите на Майорку')
// } else {
//   alert('Пошли пить пиво...')
// }



// // Ex 3
// let age = prompt('Your age?');
// if (age >= 20 && age < 27) {
//   alert('Выслать повестку')
// }


// // Ex 4
// let busCome = prompt('Какой автобус приехал?');
// busCome == 7 || busCome == 225 || busCome == 255 ? alert('вы едете домой') : alert('ожидаете');


// // Ex 5
// let day = prompt('Какой сегодня день недели?');
// if (day !== 'суббота' && day !== 'воскресенье') {
//   alert('иди на  работу')
// }
// // or
// let day = prompt('Какой сегодня день недели?');
// if (!(day === 'суббота' || day === 'воскресенье')) {
//   alert('иди на  работу')
// }
// // or
// let day = prompt('Какой сегодня день недели?');
// if (day === 'суббота' || day === 'воскресенье') { } else { alert('иди на  работу') }


// // // Ex 6,7
// let x = prompt('Введите значение от -20 до 20');
// let y = prompt('Введите значение от -20 до 20');
// if (x <= 1 && y >= 3 || y < 0) {
//   alert(+x + +y);
// } else { alert('Неверно!') }

// if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
//   x = x * 2
// } else { +x + 5 }

// alert(x);




// // Ex 8
// let name = prompt('Введите свое имя');
// if (name !== '' && name !== null) {
//   alert(`Hello ${name}`)
// }



// // Ex 9

// // if-else

// let lang = prompt('Введите ru, en или de');
// let greeting = '';

// if (lang === 'ru') {
//   alert(greeting = 'Привет!');
// } else if (lang === 'en') {
//   alert(greeting = 'Hello!');
// } else {
//   alert(greeting = 'Hallo!');
// }

// // switch-case

// let lang = prompt('Введите ru, en или de');
// let greeting = '';

// switch (lang) {
//   case 'ru':
//     alert(greeting = 'Привет!');
//     break;
//   case 'en':
//     alert(greeting = 'Hello!');
//     break;
//   case 'de':
//     alert(greeting = 'Hallo!');
//     break;
// }




// //Ex 10
// let month = new Date();

// switch (month.getMonth()) {
//   case 0:
//   case 1:
//   case 11:
//     alert('Зима');
//     break;
//   case 2:
//   case 3:
//   case 4:
//     alert('Весна');
//     break;
//   case 5:
//   case 6:
//   case 7:
//     alert('Лето');
//     break;
//   case 8:
//   case 9:
//   case 10:
//     alert('Осень');
//     break;
// }

// //a

// let lang = prompt('Введите ru, en');
// let result = month.getDay();
// switch (result) {
//   case 1:
//     alert(lang === 'ru' ? 'Понедельник' : 'Monday')
//     break;
//   case 2:
//     alert(lang === 'ru' ? 'Вторник' : 'Tuesday')
//     break;
//   case 3:
//     alert(lang === 'ru' ? 'Среда' : 'Wednesday')
//     break;
//   case 4:
//     alert(lang === 'ru' ? 'Четверг' : 'Thursday')
//     break;
//   case 5:
//     alert(lang === 'ru' ? 'Пятница' : 'Fridar')
//     break;
//   case 6:
//     alert(lang === 'ru' ? 'Суббота' : 'Saturday')
//     break;
//   case 0:
//     alert(lang === 'ru' ? 'Воскресенье' : 'Sunday')
//     break;
// }

// // Ex11

// // if-else
// let name = prompt('Name');
// let age = prompt('Age');
// if (name === 'John' && age === '29' || name === 'Kate' && age === '15') {
//   console.log(`Привет ${name} ${age}`)
// } else {
//   console.log('Пока')
// }

// // switch-case
// let name = prompt('Name');
// let age = prompt('Age');
// switch (true) {
//   case name === 'John' && age === '29':
//   case name === 'Kate' && age === '15':
//     alert(`Привет ${name} ${age}`);
//     break;
//   default:
//     alert('Пока');
//     break;
// }

// // Тернарный оператор
// let name = prompt('Name');
// let age = prompt('Age');
// name === 'John' && age === '29' || name === 'Kate' && age === '15' ? alert(`Привет ${name} ${age}`) : alert('Пока')



// // Циклы
// // Ex1
// let i = ".";
// for (; ; i = i + '#.') {
//   if (i === '.#.#.#.#.#.') {
//     alert(i)
//     break;
//   }
// }


// // Ex2
// for (i = 0; i < 11; i++) {
//   console.log(Math.pow(i, 2));
// }



// // Ex 3
// let username = prompt('your name');
// const i = 'Happy birthday to you'
// for (let x = 0; x < 4; x++) {
//   if (x === 2) {
//     console.log(`Happy birthday dear ${username}`)
//   } else { console.log(i) }
// }

// // Ex 4
// let x = confirm();
// for (; ;) {
//   if (x === false) {
//     x = confirm();
//   } else break;
// }


// // Ex 5
// let number = prompt('input a number');
// let result = null
// for (i = 1; i < +number; i += 2) {
//   result += i;
// }
// alert(result);



// // Ex 6
// let counter = 0;
// while (true) {
//   let number = Math.random();
//   counter++;
//   if (number > 0.9) {
//     alert(`${number} ${counter}`);
//     break;
//   }
// }


// Ex 7  

// outer:
// for (let i = 1; i < 11; i++) {
//   let k = i;
//   for (let x = 1; x < 11; x++) {
//     let sum = k * x;
//     let string = k + 'x' + x + '=' + sum;
//     if (x === 11) { continue outer }
//     console.log(string);
//   }
// }



// // Ex 8
// let prev = 0;
// console.log(prev);
// let next = 1;
// console.log(next);
// let k = prev + next;
// for (let x = next; next < 100; (next = prev + next), (prev = x), console.log(next)) {

//   console.log(next);
// }


// let prev = 0;
// console.log(prev);
// let next = 1;
// console.log(next);
// for (; ;) {
//   let x = next;
//   next = prev + next;
//   prev = x;
//   console.log(next)
//   if (next > 100) {
//     break;

//   }
// }

// // Ex 9
// let number = null;
// let sum = 0;
// let x = 0;

// for (let i = 0; true; i++) {
//   x++
//   number = prompt('Введите число')
//   if (number === null)
//     break;
//   console.log(number);
//   sum = sum + +number;
//   console.log(sum);
// }

// alert(x - 1);
// alert(sum);
// alert(sum / (x - 1));



// // Ex 10
// const password = '1234';

// while (true) {
//   let inputPassword = prompt('password');
//   console.log(inputPassword);
//   let isCorrectPassword = (inputPassword === password);
//   if (isCorrectPassword) {
//     alert('Вы успешно авторизованы');
//     break;
//   }
//   if (inputPassword === null) {
//     let wantQuit = confirm('Вы уверены, что хотите отменить авторизацию?');
//     if (wantQuit) {
//       alert('Вы отменили авторизацию');
//       break;
//     }
//   }
// }



// // Ex 11
// for (i = 1; i < 51; i++) {
//   if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
//     console.log('Fizz')
//   } else if (Number.isInteger(i / 5)) {
//     console.log('Buzz')
//   } else if (Number.isInteger(i / 3)) {
//     console.log('FizzBuzz')
//   }
//   console.log(i);
// }


