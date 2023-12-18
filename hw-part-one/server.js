const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

//greeting route
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger');
})

//greeting route with name
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}, it's so great to see you!`);

})

//tip calc
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tip is $${req.params.total * req.params.tipPercentage / 100}`);
})

app.listen(3000, () => {
    console.log('Open!');
})
