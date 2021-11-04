// #1
// let  user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//    studentstatus: 'active'
//   };

//   console.log(user.studentstatus);

// #2
// for ციკლი

// var names = ['aleqsi', 'lasha', 'ani', 'taso', 'elo', 'dato']

// for (let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// while ციკლი

// var names = ['aleqsi', 'lasha', 'ani', 'taso', 'elo', 'dato']

// let y=0
// while (y<names.length) {
//     console.log(names[y]);
//     y++;
// }

// #3

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let i of numbers){
//     if(i>5){
//         console.log(i);
//     }
// }

// #4

// let users =  [
//     {username:'test1', status: false},
//     {username:'test2', status: false},
//     {username:'test3', status: true}
// ];
//   for (let i= 0; i<users.length; i++){
//  if (users[i].status===true){
//     console.log(users[i]);
// }
// }


// #5

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

// for (let i = 0; i < arr.length; i++) {
//     const numbers = arr[i];

//     for (let x = 0; x <numbers.length; x++) {
//         const positive = numbers[x];

//         if (positive > 0){
//             console.log(positive);
//         }
//     }
// }


// #6
// let x=6
// let y='6'
// console.log(x===y);
// დაუბრუნებს false იმიტომ რომ სხვადასხვა ტიპებია
// ორი ტოლობის შემთხვევაში გააკეთებდა კონვერტაციას და გამოიტანა true

// #7

// let array = ["html", "css", "bootstrap", "javascript","python"];

// for (let item of array) {
//     if (item.length>5 && item.includes('ava')) {
//         console.log(item);
// }
// }

// #8
// let user = {
// 	name: 'giorgi',
// 	age:  20,
// 	studentstatus: 'active',
// }
// if (user.age > 18 && user.studentstatus==='active') {
//     console.log('HELLO') ;
// }
// else if (user.name==='giorgi'){
//     console.log('HELLO GIORGI');
// }
// else if (user.studentstatus==='axtive' || user.age < 25){
//     console.log('HELLO WORLD');
// }
// else {
//     console.log('error');
// }

// #9
// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

// for (let item of array) {
//     if (typeof item==='string') {
//         console.log(item);
//     }
// }


