const puppeteer = require('puppeteer');

(async () => {
  console.log(process.argv[2]);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.argv[2], {waitUntil: 'networkidle2'});
  await page.pdf({path: process.argv[3], format: 'A4'});

  await browser.close();
})();