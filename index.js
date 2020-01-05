const express = require('express');

const app = express();
const path = require('path');
const puppeteerToPdf = require('./src/puppeteer-to-pdf');
const port = process.env.PORT || 80;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/getPdf', async (req, res) => {
    const { url } = req.query;

    const pdf = await puppeteerToPdf({ url });

    res.setHeader('Access-Control-Allow-Origin', '*');
    if (pdf) {
        res.contentType('application/pdf');
        res.send(pdf);
    } else {
        res.contentType('application/json');
        res.status(422).send({
            message: 'Cannot get your page',
        });
    }
});

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
