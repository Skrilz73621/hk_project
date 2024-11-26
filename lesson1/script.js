// Регулярные выражения - Regular expressions
// Flags - в документации


// const name = prompt('Enter your name'); только для string
// const regExp = /n/i;
// console.log(name.match(regExp)) 


const numbers = '123123123'
const regNum = /[0-9]/g
console.log(numbers.match(regNum))


// i - ignore Register
// g - global serach
// ^[0-9] - все кроме от 0-9
// w - [a-zA-Z0-9]
// W - ^[a-zA-Z0-9]


// const numbers = '123123123asdSDJL_'
// const regNum = /[0-9a-zA-Z_]/g
// console.log(numbers.replace(regNum, '*'))


// const numbers = '123123123'
// const regNum = /^[0-9]/g
// console.log(numbers.replace(regNum, '*'))


// const numbers = '123123123ASS^%&&^'
// const regNum = /[\W\w]/g
// console.log(numbers.replace(regNum, '*'))


//declaration - через function
//expressioin - через const


//Recursion - Рекурсия


// let num = 0
// const counter = () =>{
//     num+=1
//     console.log(num)
//     if (num < 1000){
//         requestAnimationFrame(counter)
//     }
// }
// counter()


// Следующий урок - call stack

