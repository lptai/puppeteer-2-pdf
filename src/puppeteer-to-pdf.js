const puppeteer = require('puppeteer');
// const out = process.env.OUT;

module.exports = async ({ url }) => {

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });
        const pdf = await page.pdf({ format: 'A4' });

        await browser.close();

        return pdf;
    } catch (e) {
        console.log(e);
    }

};
