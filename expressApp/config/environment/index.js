const config = require('./' + process.env.NODE_ENV);

module.exports = {
    API1_URL: function () {
        return config.API1_URL;
    },
    API2_URL: function () {
        return config.API2_URL;
    },
}