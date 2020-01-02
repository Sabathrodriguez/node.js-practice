const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('in some middlewear');
    res.send('<h1>adding users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('in another middlewear');
    res.send('<h1>users</h1>');
});

app.listen(3000);