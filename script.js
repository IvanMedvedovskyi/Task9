// Task 1
let resultString = '';
for (let i =10 ; i<=20 ; i++) {
    resultString += i + (i === 20 ? "" : ",");
}
console.log("Числа від 10 до 20 виведені в рядок: \n" + resultString);


// Task 2
// let result = ""
// for (let i =10 ; i<=20 ; i++) {
//     result += `${i * i}${i === 20 ? "" : ","}` ;
// }
// console.log(result);

// //Task 3
// let number = 7;
// for (let i = 1 ; i <=9 ; i++) {
//     let result = number * i;
//     console.log(number + "*" + i + "=" + result);
// }

// Task 4
// let sum = 0;
// for (let i = 0 ; i<=15 ; i++) {
//     sum = sum + i;
// }
// console.log ("Cума всіх цілих чисел від 1 до 15: " + sum);

// Task 5
// let mult = 1;
// for (let i = 15 ; i<=35 ; i++) {
//     mult = mult * i;
// }
// console.log("Добуток усіх цілих чисел від 15 до 35: " + mult);

// Task 6
// let average = "";
// let sum = 0;
// let n = 500
// for (let i  = 1 ; i <= n ; i++) {
//     sum = sum + i;
// }
// average = sum / n;
// console.log("Середнє арифметичне всіх цілих чисел від 1 до 500: " + average);

// Task 7
// let sum = 0;
// for (let i = 30 ; i <= 80 ; i++) {
//     if (i % 2 === 0 ) {
//         sum = sum + i;
//     }
// }
// console.log("Суму лише парних чисел в діапазоні від 30 до 80: " + sum);

// Task 8
// let resultString = "";
// for (let i = 100 ; i<=200 ; i++) {
//     if (i % 3 === 0){
//         resultString += i + (i === 198 ? "" : ",");
//     }
// }
// console.log("Всі числа в діапазоні від 100 до 200 кратні 3: " + resultString);

// Task 9
// let ourNumber = prompt("Введіть число: ");
// let result = "";
// for (let i = 1 ; i<=ourNumber ; i++) {
//     if (ourNumber % i === 0 ) {
//         result += `${i}${i === Number(ourNumber) ? "" : "," }`;
//     }
// }
// console.log("Дільники числа: " + ourNumber + "\n" + result);

// Task 10
// let ourNumber = prompt("Введіть число: ");
// let result = "";
// for (let i = 1 ; i<=ourNumber ; i++) {
//     if (ourNumber % i === 0 && i % 2 === 0) {
//         result += `${i}${i === Number(ourNumber) ? "" : "," }`;
//     }
// }
// console.log("Парні дільники числа: " + ourNumber + "\n" + result);

// Task 11
// let ourNumber = prompt("Введіть число: ");
// let sum = 0;
// for (let i = 1 ; i<=ourNumber ; i++) {
//     if (ourNumber % i === 0 && i % 2 === 0) {
//         // result += `${i}${i === Number(ourNumber) ? "" : "," }`;
//         sum += i;
//     }
// }
// console.log("Сума парних дільників числа " + ourNumber + "\n" + "Відповідь: "  + sum);

// Task 12
// for (let i = 1 ; i <= 10 ; i++) {
//     console.log("==========================================");
//     for (let k = 1 ; k <=10; k++) {
//         console.log(`${i} x ${k} = ${i * k}`);
//     }
// }
