"use strict"

let arr = ['345567', '2378', '68945', '12323', '45123', '2666666', '242424'],
    arr2 = [],
    num = 0;

for(let i = 0; i < arr.length; i++){
    if(+arr[i][0] === 2 || +arr[i][0] === 4)
        arr2[num++] = arr[i];
}
console.log('Числа которы начинаются с "2" и "4": ', String(arr2));

let number = 100;
let checkInteger = function(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0)
            return true;
    }
}

for(let i = 2; i < number; i++){
    if(checkInteger(i))
        continue;   
    console.log(`Делители этого числа: 1 и ${i}`);
}

//Урок 4
// let lang = 'ru';
// let days = {
//     ru : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрессенье'],
//     en : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };

// if( lang === 'ru' || lang === 'en')
//     console.log(String(days[lang]));

// switch(lang === 'ru' || lang === 'en'){
//     case lang === 'ru':
//     case lang === 'en':
//         console.log(String(days[lang]));
//         break;
//     default:
//         console.log('Не "ru" и не "en"');    
// }

// for (let i = 0; i < days[lang].length; i++) {
//     console.log(days[lang][i]);
//     }

// let namePerson = 'Артём';
// console.log(namePerson === 'Артём' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');