const DatabaseService = require('./database.service');
const {StockDto} = require('../dtos/stock.dto');

const searchStocks = async () => {
    const queryString = 'SELECT * FROM TBSTOCK;';
    const result = await DatabaseService.query(queryString, []);
    // console.log(result);
    return StockDto(result);
}

module.exports = {
    searchStocks
};
