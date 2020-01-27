let lang = 'ru';
let days = {
    ru : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрессенье'],
    en : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

if( lang === 'ru' || lang === 'en')
    console.log(String(days[lang]));

switch(lang === 'ru' || lang === 'en'){
    case lang === 'ru':
    case lang === 'en':
        console.log(String(days[lang]));
        break;
    default:
        console.log('Не "ru" и не "en"');    
}

for (let i = 0; i < days[lang].length; i++) {
    console.log(days[lang][i]);
    }

let namePerson = 'Артём';
console.log(namePerson === 'Артём' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');