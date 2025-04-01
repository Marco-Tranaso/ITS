function getWeekDay(date, language) {
    let daysEn = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    let italian_days = ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA'];

    let index = date.getDay();

    if (language =='en') {
        return daysEn[index];
    } else if (language =='it') {
        return italian_days[index];
    } else {
        return "Invalid language. Use 'en' or 'it'.";
    }
}

let today = new Date();
console.log(getWeekDay(today, 'en')); 
console.log(getWeekDay(today, 'it')); 
console.log(getWeekDay(today, 'fr')); 
