const moment = require('moment')

function getTime() {
    return {
        time: moment().format('h:mm a')
    }
}

module.exports = getTime