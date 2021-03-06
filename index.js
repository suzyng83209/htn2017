const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/logme-app/build')));

app.get('/ping', (req, res) => {
    res.status(200).send('pong');
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/logme-app/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Log(me); listening on ${port}`);
