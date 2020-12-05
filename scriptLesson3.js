let name = prompt('Name');
let age = prompt('Age');
if (name === 'John' && age === '29' || name === 'Kate' && age === '15') {
  console.log(`Привет ${name} ${age}`)
} else {
  console.log('Пока')
}

// Ex 1
let x = prompt('Input a number');
if (x > 0) {
  alert('positive')
} else if (x < 0) {
  alert('negative')
}
else {
  alert('null')
};



// Ex 2
let myMoney = prompt('My money');
let friendMoney = prompt('Friend\'s money');
if (+myMoney + +friendMoney > 3000) {
  alert('Поздравляем! Вы летите на Майорку')
} else {
  alert('Пошли пить пиво...')
}



// Ex 3
let age = prompt('Your age?');
if (age >= 20 && age < 27) {
  alert('Выслать повестку')
}


???????
  let needBus = '7' || '225' || '255';
let busCome = prompt('Какой автобус приехал?');
needBus == busCome ? alert('вы едете домой') : alert('ожидаете');


// Ex 5
let day = prompt('Какой сегодня день недели?');
if (day !== 'суббота' && day !== 'воскресенье') {
  alert('иди на  работу')
}
// or
let day = prompt('Какой сегодня день недели?');
if (!(day === 'суббота' || day === 'воскресенье')) {
  alert('иди на  работу')
}
// or
let day = prompt('Какой сегодня день недели?');
if (day === 'суббота' || day === 'воскресенье') { } else { alert('иди на  работу') }


// // Ex 6,7
let x = prompt('Введите значение от -20 до 20');
let y = prompt('Введите значение от -20 до 20');
if (x <= 1 && y >= 3 || y < 0) {
  alert(+x + +y);
} else { alert('Неверно!') }

if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
  x = x * 2
} else { +x + 5 }

alert(x);




// Ex 8
let name = prompt('Введите свое имя');
if (name !== '' && name !== null) {
  alert(`Hello ${name}`)
}



Ex 9

if-else

  let lang = prompt('Введите ru, en или de');
let greeting = '';

if (lang === 'ru') {
  alert(greeting = 'Привет!');
} else if (lang === 'en') {
  alert(greeting = 'Hello!');
} else {
  alert(greeting = 'Hallo!');
}

switch-case

  let lang = prompt('Введите ru, en или de');
  let greeting = '';

  switch (lang) {
    case 'ru':
      alert(greeting = 'Привет!');
      break;
    case 'en':
      alert(greeting = 'Hello!');
      break;
    case 'de':
      alert(greeting = 'Hallo!');
      break;
  }




  //Ex 10
  let month = new Date();

  switch (month.getMonth()) {
    case 0:
    case 1:
    case 11:
      alert('Зима');
      break;
    case 2:
    case 3:
    case 4:
      alert('Весна');
      break;
    case 5:
    case 6:
    case 7:
      alert('Лето');
      break;
    case 8:
    case 9:
    case 10:
      alert('Осень');
      break;
  }

  //a

  let lang = prompt('Введите ru, en');
  let result = month.getDay();
  switch (result) {
    case 1:
      alert(lang === 'ru' ? 'Понедельник' : 'Monday')
      break;
    case 2:
      alert(lang === 'ru' ? 'Вторник' : 'Tuesday')
      break;
    case 3:
      alert(lang === 'ru' ? 'Среда' : 'Wednesday')
      break;
    case 4:
      alert(lang === 'ru' ? 'Четверг' : 'Thursday')
      break;
    case 5:
      alert(lang === 'ru' ? 'Пятница' : 'Fridar')
      break;
    case 6:
      alert(lang === 'ru' ? 'Суббота' : 'Saturday')
      break;
    case 0:
      alert(lang === 'ru' ? 'Воскресенье' : 'Sunday')
      break;
  }