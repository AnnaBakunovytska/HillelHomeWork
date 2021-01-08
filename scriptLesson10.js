// function Animal(name, bre) {
//   this.__name = name;
//   this._breed = bre;
// }



// Animal.prototype.comeHere = function comeHere() {
//   console.log(`${this.__name} тут`)
// };

// Animal.prototype.say = function say() {
//   console.log('Привет');
// };

// function Dog(name, bre) {
//   Animal.call(this, name, bre);
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.comeHere = function () {
//   Animal.prototype.comeHere.call(this);
//   console.log('Хозяин');
// };

// Dog.prototype.say = function () {
//   console.log('Гав');
// };

// let myAnimal = new Dog('bobik', 'dog');
// myAnimal.say();
// myAnimal.comeHere();



// class Animal {
//   constructor(name, bre) {
//     this.__name = name;
//     this._breed = bre;
//   }

//   comeHere() {
//     console.log(`${this.__name} тут`)
//   };

//   say() {
//     console.log('Привет');
//   };
// }

// class Dog extends Animal {
//   comeHere() {
//     super.comeHere();
//     console.log('Хозяин');
//   };
//   say() {
//     console.log('Гав');
//   }
// }

