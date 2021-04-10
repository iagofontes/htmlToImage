const {buscarCotacaoAtual} = require('../helpers/BuscarCotacao.helper');
const {webScrapperInitializer} = require('../helpers/WebScrapperInit');
const {searchStocks} = require('../services/stock.service');

const operarAtivo = async () => {
    const stocks = await searchStocks();
    const browser = await webScrapperInitializer();
    for (let stock of stocks) {
        const valorCotacao = await buscarCotacaoAtual(browser, stock.stockCode);
        console.log(valorCotacao);
        // if (stock.stock)
    }
    await browser.close();
}

module.exports = {
    operarAtivo
}
