// console.log('Jack Ma Quates:');

// const list = [
//     "Be a good student", // 0-20
//     "Choose right manager and make a lot of mistakes", // 20 -30
//     "Work on yourself", // 30 - 40
//     "Do things that you are really good at", // 40 - 50 
//     "Invest on young people", // 50 - 60
//     "Then take a rest , everything is too late " //60
// ];

// Callback function
// function giveAdvice(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log('passed here 0');

// giveAdvice(63, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("answer:", data);
//     }
// });
//console.log('passed here 1');

//ASYNC function
// async function giveAdvice(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 3000);
//         });
//     }
// }

//call via then / catch 
// console.log("passed her 0");
// giveAdvice(20)
//     .then((data) => {
//         console.log("answer:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1 ");


//call via async / await
// async function run() {
//     let answer = await giveAdvice(21);
//     console.log(answer);
//     answer = await giveAdvice(31);
//     console.log(answer);
//     answer = await giveAdvice(41);
//     console.log(answer);
// }
// run();

// A- TASK:

// Shunday 2 parametrli function tuzing, 
// hamda birinchi parametrdagi letterni 
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(letter, word) {
//     let count = 0;
//     for (let char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "engineer")); // 3

// ======================================================

// B - TASK:

//Shunday function tuzing, u 1ta string parametrga ega bolsin, 
//hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countDigits(str) {
//     let count = 0;
//     for (let ind in str) {
//         if (str[ind] >= '0' && str[ind] <= '9') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));  // 7 

// ======================================================

// C - TASK:

// class Shop {
//   constructor(bread, noodles, cola) {
//     this.products = {
//       bread: bread,
//       noodles: noodles,
//       cola: cola,
//     };
//   }

//   // Helper method to get the current time
//   getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   // Check current stock
//   checkStock() {
//     const time = this.getCurrentTime();
//     console.log(
//       `At ${time}, stock is: ${this.products.bread} bread, ${this.products.noodles} noodles, ${this.products.cola} cola.`
//     );
//   }

//   // Sell a product
//   sell(product, quantity) {
//     const time = this.getCurrentTime();
//     if (this.products[product] >= quantity) {
//       this.products[product] -= quantity;
//       console.log(`At ${time}, sold ${quantity} ${product}.`);
//     } else {
//       console.log(`At ${time}, not enough ${product} in stock!`);
//     }
//   }

//   // Receive a product
//   receive(product, quantity) {
//     const time = this.getCurrentTime();
//     this.products[product] += quantity;
//     console.log(`At ${time}, received ${quantity} ${product}.`);
//   }
// }

// // Example usage:
// const shop = new Shop(4, 5, 2); 
// shop.checkStock(); 
// shop.sell("bread", 3); 
// shop.receive("cola", 4); 
// shop.checkStock(); 

// ======================================================

// D - TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, 
// hamda agar har ikkala string bir hil harflardan iborat bolsa 
// true aks holda false qaytarsin

// function checkContent(str1, str2) {
//   return str1.split('').sort().join('') 
//   === str2.split('').sort().join('');
// }

// console.log(checkContent("mitgroup", "gmtiprou")); // true

// =======================================================

// E - TASK:

// Shunday function tuzing, u bitta string argumentni 
// qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(str) {
  return str.split('').reverse().join('');
}

console.log(getReverse("hello")); // "olleh"
