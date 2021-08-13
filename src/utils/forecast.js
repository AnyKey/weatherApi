const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7dcd12e64ba59c553cfcc3bc2ac0ab6c&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, { body } = {}) => {

        if (error) {
            callback('Unable to connect to weatherstack services!', undefined)
        } else if (body.error) {
            callback('Bad request', undefined)
        } else {
            callback(undefined, 'Temperature: ' + body.current.temperature + ', Feelslike: ' + body.current.feelslike)
        }
    })
}

module.exports = forecast
