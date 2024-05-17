const axios = require('axios')

const axiosPlugin = {
    get: async (url) => {
        const response = await axios.get(url);
        return response.data;
    }
}

module.exports = {
    axiosPlugin,
}