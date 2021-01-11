

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


// function persistence(num) {
//   let numArr = num.toString().split('');
//   let count = 0;
//   let total;
//   while (numArr.length > 1) {
//     total = numArr.reduce(function (mult, currentValue) {
//       return mult * currentValue;
//     })
//     count++;
//     numArr = total.toString().split('');
//   }
//   return count;
// }

// console.log(persistence(999));


// function toCsvText(array) {
//   let updatedArr = array.map((item) => {
//     return item.toString();
//   });
//   return updatedArr.join('\n');
// }

// console.log(toCsvText([[0, 1, 2, 3, 4],
// [10, 11, 12, 13, 14],
// [20, 21, 22, 23, 24],
// [30, 31, 32, 33, 34]]))





// var scoreToTally = function (score) {
//   let itter = score / 5;
//   let ost = score % 5;
//   let scr;
//   switch (ost) {
//     case 0:
//       scr = '';
//       break;
//     case 1:
//       scr = 'a';
//       break;
//     case 2:
//       scr = 'b';
//       break;
//     case 3:
//       scr = 'c';
//       break;
//     case 4:
//       scr = 'd';
//       break;
//     case 5:
//       scr = 'e';
//       break;
//   }
//   return 'e <br>'.repeat(itter) + scr;
// }

// console.log(scoreToTally(23));




// function solve(stones) {
//   let arrStones = stones.split('');
//   let counter = 0;
//   let sum = '';
//   let result = arrStones.reduce((acc, item) => {
//     if (sum === item) {
//       counter++;
//     } else {
//       sum = item;
//     }
//     return counter;
//   }, '');
//   return result;
// }

// console.log(solve("GBRGGRBBBBRRGGGB"));



// function fourSeven(n) {
//   let a = (n === 4);
//   let b = (n === 7);
//   let c = (n === !7 && !4)
//   return;
// }

// console.log(fourSeven(7))


// function spinWords(string) {
//   let arrString = string.split(' ');
//   let appdateString = arrString.reduce((acc, item) => {
//     if (item.length > 4) {
//       item = item.split("").reverse().join("");
//     }
//     let sum = acc && item && `${acc} ${item}`;
//     return sum;
//   }, '');
//   return appdateString;
// }


// console.log(spinWords('This is another test'));




// function compareNumbers(a, b) {
//   if (!(a % 2)) {
//     return a - b;
//   } else return 0;
// }
// arrTo10.sort(compareNumbers)



// function evenBinary(n) {
//   let arrN = n.split(' ');
//   let arrTo10 = arrN.map((item) => {
//     return parseInt(item, 2);
//   });
//   let updatedArr = arrTo10.map((item, i) => {
//     if (item % 2) {
//       return item;
//     }
//     delete item[i];
//   });
//   let filterArr = arrTo10.filter((item) => !(item % 2));

//   filterArr.sort(compareNumbers);

//   for (let i = 0; i < updatedArr.length; i++) {
//     if (updatedArr[i] === undefined) {
//       updatedArr[i] = filterArr.shift()
//     }
//   }

//   function compareNumbers(a, b) {
//     return a - b;
//   }
//   let finalArr = updatedArr.map((item) => {
//     let itemStr = item.toString(2);
//     if (itemStr.length === 1) {
//       return '00' + itemStr;
//     } else if (itemStr.length === 2) {
//       return '0' + itemStr;
//     } else return itemStr;
//   });

//   return finalArr.join(' ');

// }


// console.log(evenBinary("101 111 100 001 010"));