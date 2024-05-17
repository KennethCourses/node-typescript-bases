const { getId } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('./http-client.plugin');
const { axiosPlugin } = require('./axios.plugin');

module.exports = {
    getAge,
    getId,
    http,
    axiosPlugin,
}