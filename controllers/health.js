const constants = require('../constants')

module.exports.get = () => {
    return new Promise((resolve, reject) => {
        resolve({
            code: constants.HTTP_200,
            message: constants.MSG_ALIVE,
            data: null
        })
    })
}