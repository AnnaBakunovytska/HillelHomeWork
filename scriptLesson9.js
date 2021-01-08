
// function sequence(start, step) {
//   return function () {
//     return start += step;
//   }
// }

// let generator = sequence(10, 3);
// // var generator2 = sequence(7, 1);

// console.log(generator()); // 10
// // console.log(generator()); // 13

// // console.log(generator2()); // 7

// console.log(generator()); // 16

// // console.log(generator2()); // 8


// /////////////////////////


// function numbers(num) {
//   return num.split('').reverse().join('');
// }

// console.log(numbers('1234456'));

// /////////////////////////


// let obj = {
//   names: [],
//   addName,
//   getNames
// }

// function addName(name) {
//   this.names.push(name);
//   return this
// }

// function getNames() {
//   console.log(this.names.join(', '));
// }

// let result = obj.addName('Jhon').addName('Anna').getNames()

// console.log(result);


// /////////////////////////////


// let arr = [1, 2, 3, 4, 5];

// function showNumber(num) {
//   console.log(arr[0]);
//   arr.shift();

//   if (arr.length > 0) {
//     showNumber(num);
//   }
//   return arr;
// }

// showNumber(arr);

// ///////////


// let number = 257788;

// function sumNumber(num) {
//   let arr = num.toString().split('').map(Number);
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   if (sum > 9) {
//     return sumNumber(sum);
//   }
//   return sum;
// }
// console.log(sumNumber(number));


