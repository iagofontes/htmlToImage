const puppeteer = require('puppeteer');

const webScrapperInitializer = async () => {
    return await puppeteer.launch({headless: true});
}

module.exports = {
    webScrapperInitializer
}
