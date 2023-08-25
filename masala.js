//task_1:switch\ case

    weeks();
// function weeks() {
//     let a = 4;
//     switch (a) {
//         case 1:
//             console.log("Dushanba");
//             break;
//         case 2:
//             console.log("Seshanba");
//             break;
//         case 3:
//             console.log("Chorshanba");
//             break;
//         case 4:
//             console.log("Payshanba");
//             break;
//         case 5:
//             console.log("Juma");
//             break;
//         case 6:
//             console.log("Shanba");
//             break;
//         case 7:
//             console.log("Yakshanba");
//             break;
//         default:
//             console.log("Hafta kuni mavjud emas");
//     }
// }

                            //task_2: type conversion vs type coersion

// type coersion - bilmagan holda parda ortida kompyuterni o'zi ma'lumot o'zgartiradi.
// type conversion - biz o'zimiz qo'limiz bilan o'zgartirgan ma'lumotda aytiladi


//task_3: maksimum sonni topish
//     maxNum();
// function maxNum() {
//     let N = parseInt(prompt("Istalgan sonni kiriting: "));
//     let ones = N % 10;
//     let tens = Math.floor((N / 10) % 10);
//     let hundreds = Math.floor(N / 100);
//     let maxNum = ones * 100 + tens * 10 + hundreds;
//     console.log(`Berilgan sonning maksimumi: ${maxNum}` );
// }


//task_4: n butun sondagi raqamlar soni aniqlansin. 
// Number();
// function Number() {
//     let n = parseInt(prompt("Istalgan sonni kiriting: "));
//     let count = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         count++;
//         n = Math.floor(n / 10);
//     }
//     console.log(`Ushbu sonning raqamlari soni: ${count}`);
// }
// task_5: Function deb nimaga aytiladi va uning yaratilish qoidalari?

// Funksiya  - ma'lum bir vazifa bajarishga muljallangan bo'lib, dastur kodining
// bir qismi hisoblanib uni qayta-qayta foydalanish imkoniyati bo'lib kod bo'lagidir.