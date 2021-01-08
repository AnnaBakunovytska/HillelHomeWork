

// function identyty(number) {
//   return number;
// }

// identyty(5);



// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }

// console.log(add(3, 4));
// console.log(sub(3, 4));
// console.log(mul(3, 4));




// function identityf(arg) {
//   return function () {
//     return arg;
//   }
// }
// var three = identityf(3);
// three();




// function formatMoney(amount) {
//   return `$${amount.toFixed(2)}`
// }

// console.log(formatMoney(34.1));




// function isInt(n) {
//   let newN = +n;
//   if (n === null) {
//     return false;
//   }
//   return newN.isInteger();
// }
// console.log(isInt(5));



// function persistence(num) {
//   let numArr = num.toString().split('');
//   let count = 0;
//   let total;
//   while (numArr.length > 1) {
//     total = numArr.reduce(function (sum, currentValue) {
//       return sum * currentValue;
//     })
//     count++;
//     numArr = total.toString().split('');
//   }
//   return count;
// }

// console.log(persistence(457));




// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

// function mult() {
//   let array = [];
//   for (let i = 1; i < 11; i++) {
//     array[i] = [];
//     for (let x = 1; x < 11; x++) {
//       array[i][x] = i * x;
//     }
//   }
//   return array;
// }

// console.log(mult()[5][5]);


// function Animal(value, age) {
//   let name = value;
//   this.age = age;
//   this.say = function () {
//     console.log('Голос');
//   };
//   this.run = function () {
//     console.log('Бег');
//   };
// }

// let animal = new Animal('Lion', 5);
// animal.say();
// animal.run();


// function Dog(value, age) {
//   Animal.call(this, value, age);
//   this.addAge = function () {
//     this.age += 10;
//   };
//   this.say = function () {
//     console.log('Гав');
//   };
//   let parentRun = this.run;
//   this.run = function () {
//     let instruction = prompt('Введите команду');
//     if (instruction === 'Фас') {
//       parentRun();
//     } else {
//       console.log('не знаю такой команды');
//     }
//   }
// }

// let myDog = new Dog('Bobik', 3);
// myDog.say();
// myDog.run();
// console.log(myDog.age);
// myDog.addAge();
// console.log(myDog.age);



