const express = require('express');

const app = express();
const path = require('path');
const puppeteerToPdf = require('./src/puppeteer-to-pdf');
const port = process.env.PORT || 80;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

app.get('/getPdf', (req, res) => {
    const { url } = req.query;

    puppeteerToPdf({ url });

    res.contentType('application/pdf');
    res.download('out.pdf');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
