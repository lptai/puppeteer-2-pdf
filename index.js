const express = require('express');
const puppeteerToPdf = require('./src/puppeteer-to-pdf');
const app = express();
const port = process.env.PORT || 80;

app.get('/getPdf', (req, res) => {
    const { url } = req.query;

    puppeteerToPdf({ url });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.contentType('application/pdf');
    res.download('out.pdf');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
