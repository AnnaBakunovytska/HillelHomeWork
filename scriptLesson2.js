// Ex 1
let first = 10;
let second = first * 3;
let third = first + second;
alert(`${first} ${second} ${third}`);



// Ex 2
let resultFirstName = prompt('First name');
let resultLastName = prompt('Last name')

let firstName = resultFirstName;
let lastName = resultLastName;

alert(`${'What’s up'} ${firstName} ${lastName}`);



// Ex 3
let firstNumber = prompt('First number')
let secondNumber = prompt('Second number')

let x = firstNumber;
let y = secondNumber;

let addition = parseInt(x) + parseInt(y);
let subtraction = x - y;
let multyplication = x * y;
let division = x / y;

alert(`${addition} ${subtraction} ${multyplication} ${division}`)



// Ex 4
let workHour = prompt('How much work hour per day');
let dayMonth = prompt('How much work days in month');
let moneyHour = prompt('Money per hour ($)');

let salary = workHour * dayMonth * moneyHour;

alert(salary);


// Ex 5
let number = prompt('Input a number');
if (number % 2 === 1) {
  alert('odd');
} else {
  alert('even');
};


// Ex 6
let input = prompt('Input a number');
input = parseInt(input);
// or
// input = input * 1;
alert(typeof input);


// Ex 7
let numberRandom = Math.random() * 100;
numberRandom = Math.round(numberRandom);
let numberInput = prompt('Input a number');
alert(`${numberRandom < numberInput} ${numberRandom} ${numberInput}`);



// Ex 8
let str = prompt('Input "Мне нравится изучать Front-end"');
let likeLearn = prompt('Что тебе нравится изучать?');
alert(str.includes(likeLearn));
let newStr = str.slice(0, 21);
let result = `${newStr} ${likeLearn}`
alert(result);
