const moment = require('moment');
moment().format();

const getHoliday = () => {

    const holidays = {
        christmas: ['01/12/____', '26/12/____', 'christmas.txt'], 
        newyears: ['26/12/____', '04/12/____', 'newyears.txt'],
        mlk: ['14/01/____', '19/01/____', 'mlk.txt'],
        presidents: ['10/02/____', '16/02/____', 'presidents.txt'],
        memorial: ['26/05/____', '01/06/____', 'memorial.txt'],
        independence: ['01/07/____', '05/07/____', 'independence.txt'],
        labor: ['01/09/____', '07/09/____', 'labor.txt'],
        columbus: ['07/10/____', '12/10/____', 'columbus.txt'],
        veterans: ['07/11/____', '12/11/____', 'veterans.txt'],
        thanksgiving: ['20/11/____', '27/11/____', 'thanksgiving.txt']
    }

    const now = moment()
    const checkDate = (open, close) => {
        const [begin, end] = [moment(open, 'DD/MM/____'), moment(close, 'DD/MM/____')]
        return now.isBetween(begin, end, 'days', '[]') 
    }

    const filtered = Object.keys(holidays)
    .filter(key => checkDate(holidays[key][0], holidays[key][1]))

    if (filtered.length == 0 || !filtered) return 'bitly.txt'
    const key = filtered[0]
    return holidays[key][2]; 
}
module.exports = getHoliday
