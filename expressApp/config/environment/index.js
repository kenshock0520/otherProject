const config = require('./' + process.env.NODE_ENV);

module.exports = {
    API_ORIGIN: function () {
        return config.API_ORIGIN;
    }
}