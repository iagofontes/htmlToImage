const axios = require('axios');

const searchCep = async (cepCode) => {

    let result = await axios.get(`https://viacep.com.br/ws/${cepCode}/json/`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error(err);
        });
    return result;
}

module.exports = {
    searchCep
};
