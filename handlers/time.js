const moment = require('moment');
moment().format();

const files = {
    // fallback
    bitly: 'bitly.txt',

    // holidays
    christmas: 'holidays/christmas.txt',
    newyears: 'holidays/newyears.txt',
    mlk: 'holidays/mlk.txt',
    groundhog: 'holidays/groundhog.txt',
    presidents: 'holidays/presidents.txt',
    easter: 'holidays/easter.txt',
    memorial: 'holidays/memorial.txt', // TODO make
    independence: 'holidays/independence.txt', 
    labor: 'holidays/labor.txt',  
    columbus: 'holidays/columbus.txt',  
    veterans: 'holidays/veterans.txt',
    thanksgiving: 'holidays/thanksgiving.txt', 
    
    // random
    swag: 'random/swag.txt'
    
}

const dates = {
    christmas: { start: '01/12/____', end: '26/12/____'},
    newyears: { start: '26/12/____', end: '04/12/____'},
    mlk: { start: '14/01/____', end: '19/01/____'},
    groundhog: { start: '28/01/____', end: '03/02/____'},
    presidents: { start: '10/02/____', end: '16/02/____'},
    easter: { start: '12/04/____', end: '18/04/____'},
    memorial: { start: '26/05/____', end: '01/06/____'},
    independence: { start: '01/07/____', end: '05/07/____'},
    labor: { start: '01/09/____', end: '07/09/____'},
    columbus: { start: '07/10/____', end: '12/10/____'},
    veterans: { start: '07/11/____', end: '12/11/____'},
    thanksgiving: { start: '20/11/____', end: '27/11/____'}
}


// key : [start date, end date, file]
const holidays = {
    christmas: [dates.christmas.start, dates.christmas.end, files.christmas], 
    newyears: [dates.newyears.start, dates.newyears.end, files.newyears],
    mlk: [dates.mlk.start, dates.mlk.end, files.mlk],
    presidents: [dates.presidents.start, dates.presidents.end, files.presidents],
    easter: [dates.easter.start, dates.easter.end, files.easter],
    memorial: [dates.memorial.start, dates.memorial.end, files.memorial],
    independence: [dates.independence.start, dates.independence.end, files.independence],
    labor: [dates.labor.start, dates.labor.end, files.labor],
    columbus: [dates.columbus.start, dates.columbus.end, files.columbus],
    veterans: [dates.veterans.start, dates.veterans.end, files.veterans],
    thanksgiving: [dates.thanksgiving.start, dates.thanksgiving.end, files.thanksgiving]
}

const getHoliday = () => {

    const now = moment()

    const checkDate = (open, close) => {
        const [begin, end] = [moment(open, 'DD/MM/____'), moment(close, 'DD/MM/____')]
        return now.isBetween(begin, end, 'days', '[]') 
    }

    const filtered = Object.keys(holidays)
    .filter(key => checkDate(holidays[key][0], holidays[key][1]))

    if (filtered.length == 0 || !filtered || filtered.length > 1) return files.bitly;
    const key = filtered[0]
    return holidays[key][2]; 
}

const getAscii = (keyword) => {
    return (files[keyword] ? files[keyword] : files.bitly)
}


module.exports = {
    getHoliday,
    getAscii
}
