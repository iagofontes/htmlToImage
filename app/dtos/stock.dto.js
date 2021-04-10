const StockDto = (dto) => {
    return dto.map((stock) => ({
        stockId: stock.REGKEY_STOCK,
        stockCode: stock.STOCK_CODE,
        stockDescription: stock.STOCK_DESCRIPTION,
        stockQuantity: stock.STOCK_QUANTITY
    }));
}

module.exports = {
    StockDto
}
