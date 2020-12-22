// let arr = [
//   {
//     id: 1,
//     name: "Jhone",
//     age: 23,
//     gender: 'm'
//   },
//   {
//     id: 2,
//     name: "Kate",
//     age: 33,
//     gender: 'f'
//   },
//   {
//     id: 3,
//     name: "Bob",
//     age: 12,
//     gender: 'm'
//   },
//   {
//     id: 4,
//     name: "Jack",
//     age: 15,
//     gender: 'm'
//   },
//   {
//     id: 5,
//     name: "Alise",
//     age: 43,
//     gender: 'f'
//   }
// ]


// // forEach

// arr.forEach((item, i, list) => {
//   console.log(item.name)
// });

// //Map

// let updatedArr = arr.map((item, i) => {
//   if (i % 2) {
//     return item;
//   }
//   return {
//     ...item,
//     age: item.age + 5
//   }
// });

// console.log(updatedArr);


// let updArr = arr.map((item) => { item.gender })
// console.log(updArr);


// // filter

// let filterArr = arr.filter((item) => item.age > 18)


// // find

// let findArr = arr.find((item) => item.id === 3);

// // some
// let hasGirls = arr.some((item) => item.gender === 'f');
// // every
// let isAllGirls = arr.every((item) => item.gender === 'f');


// // reduce

// // let result = arr.reduce((acc, item) => {
// //   const sum = acc + item.age;
// //   return sum;
// // }, 0);

// let result = arr.reduce((acc, item) => {
//   const sum = acc + item.name + ' ';
//   return sum;
// }, '');
// console.log(result);

// let result = arr.reduce((acc, item, i) => {
//   const obj = {
//     ...acc,
//     [`user-${i + 1}`]: item
//   }
//   return obj;
// }, {});

// console.log(result);


// let result2 = arr.reduce((acc, item, i) => {
//   if (item.gender === 'm') {
//     const obj = {
//       ...item,
//       age: item.age + 10
//     };
//     return [...acc, obj];
//   }
//   return acc
// }, []);
// console.log(result2);



// arr.push({
//   id: 6,
//   name: "Anna",
//   age: 25,
//   gender: 'f'
// }, {
//   id: 7,
//   name: "Sergey",
//   age: 40,
//   gender: 'm'
// });

// let hasId = arr.some((item) => item.id > 10);

// let findName = arr.find((item) => item.name === 'Kate');

// let arrName = arr.map((item) => {
//   return item.name
// });