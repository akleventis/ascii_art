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
    stpatricks: 'holidays/stpatricks.txt',
    easter: 'holidays/easter.txt',
    cincodemayo: 'holidays/cincodemayo.txt',
    memorial: 'holidays/memorial.txt', 
    independence: 'holidays/independence.txt', 
    labor: 'holidays/labor.txt',  
    columbus: 'holidays/columbus.txt',  
    halloween: 'holidays/halloween.txt',
    veterans: 'holidays/veterans.txt',
    thanksgiving: 'holidays/thanksgiving.txt', 

    // random
    swag: 'random/swag.txt',
    fire: 'random/fire.txt',
    adventuretime: 'random/adventuretime.txt',
    cats: 'random/cats.txt',
    dogs: 'random/dogs.txt',
    southpark: 'random/southpark.txt',
    starwars: 'random/starwars.txt',
    shred: 'random/shred.txt',
    yolo: 'random/yolo.txt',
    flowers: 'random/flowers.txt',
    newman: 'random/newman.txt'
}

const dates = {
    christmas: { start: '01/12/____', end: '25/12/____'},
    newyears: { start: '26/12/____', end: '31/12/____'},
    newyears1: { start: '01/01/____', end: '04/01/____'},
    mlk: { start: '14/01/____', end: '19/01/____'},
    groundhog: { start: '28/01/____', end: '03/02/____'},
    presidents: { start: '17/02/____', end: '22/02/____'},
    stpatricks: { start: '13/03/____', end: '18/03/____'},
    easter: { start: '12/04/____', end: '18/04/____'},
    cincodemayo: {start: '01/05/____', end: '06/05/____'},
    memorial: { start: '26/05/____', end: '01/06/____'},
    independence: { start: '01/07/____', end: '05/07/____'},
    labor: { start: '01/09/____', end: '07/09/____'},
    columbus: { start: '07/10/____', end: '12/10/____'},
    halloween: { start: '26/10/____', end: '01/11/____'},
    veterans: { start: '07/11/____', end: '12/11/____'},
    thanksgiving: { start: '20/11/____', end: '27/11/____'}
}


// key : [start date, end date, file]
const holidays = {
    christmas: [dates.christmas.start, dates.christmas.end, files.christmas], 
    newyears: [dates.newyears.start, dates.newyears.end, files.newyears],
    newyears1: [dates.newyears1.start, dates.newyears1.end, files.newyears],
    mlk: [dates.mlk.start, dates.mlk.end, files.mlk],
    groundhog: [dates.groundhog.start, dates.groundhog.end, files.groundhog],
    presidents: [dates.presidents.start, dates.presidents.end, files.presidents],
    stpatricks: [dates.stpatricks.start, dates.stpatricks.end, files.stpatricks],
    easter: [dates.easter.start, dates.easter.end, files.easter],
    cincodemayo: [dates.cincodemayo.start, dates.cincodemayo.end, files.cincodemayo],
    memorial: [dates.memorial.start, dates.memorial.end, files.memorial],
    independence: [dates.independence.start, dates.independence.end, files.independence],
    labor: [dates.labor.start, dates.labor.end, files.labor],
    columbus: [dates.columbus.start, dates.columbus.end, files.columbus],
    halloween: [dates.halloween.start, dates.halloween.end, files.halloween],
    veterans: [dates.veterans.start, dates.veterans.end, files.veterans],
    thanksgiving: [dates.thanksgiving.start, dates.thanksgiving.end, files.thanksgiving]
}

module.exports = {
    files,
    dates,
    holidays
}