const puppeteer = require('puppeteer');
// const out = process.env.OUT;

module.exports = async ({ url }) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'out.pdf', format: 'A4' });

    await browser.close();
};
