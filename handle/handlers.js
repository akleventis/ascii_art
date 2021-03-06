const moment = require('moment');
moment().format();
const { files,  holidays } = require('./constants.js')

// /holiday
const getHoliday = (dateTest) => {
    const now = dateTest ? moment(new Date(dateTest)) : moment();

    const checkDate = (open, close) => {
        const [begin, end] = [moment(open, 'DD/MM/____'), moment(close, 'DD/MM/____')]
        return now.isBetween(begin, end, 'days', '[]') 
    }
    const filtered = Object.keys(holidays)
    .filter(key => checkDate(holidays[key][0], holidays[key][1]))

    if (filtered.length == 0 || !filtered) return files.bitly;
    const key = filtered[0]
    return holidays[key][2]; 
}

// /random
const getRandomFile = () => {
    const items = [files.rex, files.kitty, files.swag, files.fire, files.adventuretime, files.cats, files.bear, files.southpark, files.starwars, files.shred, files.yolo, files.flowers, files.newman, files.ufo, files.homer, files.vacation, files.batman, files.newyork];
    const item = items[Math.floor(Math.random()*items.length)];
    return item;
}

// /:keyword
const getAscii = (keyword) => {
    return (files[keyword] ? files[keyword] : files.bitly)
}


module.exports = {
    getHoliday,
    getRandomFile,
    getAscii
}
