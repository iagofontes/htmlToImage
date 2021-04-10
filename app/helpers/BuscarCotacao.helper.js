const buscarCotacaoAtual = async (browser, ativo) => {
    const page = await browser.newPage();

    const qualquerUrl = `https://www.google.com/search?q=ITSA3&oq=${ativo}&aqs=chrome..69i57j0l9.3713j0j1&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerUrl);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.IsqQVc.NprOob.XcVN5d.wT3VGc').innerHTML.toString();
    });

    if (resultado !== null && resultado !== undefined) {
        return parseFloat(resultado.replace(',', '.'));
    } else {
        return 0;
    }
}

module.exports = {
    buscarCotacaoAtual
}
