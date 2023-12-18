const express = require('express');
const app = express();

//99 bottles of beer on the wall

app.get('/', (req, res) => {
    res.send(`<h1>99 bottles of beer on the wall</h1> <a href="/beer">Start!</a>
    <h1>99 little bugs in the code</h1> <a href="/bugs">Start!</a>
    <h1>Fibonacci</h1> <a href="/fibonacci">Start!</a>`);
})


app.get('/beer', (req, res) => {
    res.send(`<h1>Pass it around</h1> <h2>99 bottles of beer on the wall</h2> <a href="/98">Take one down, pass it around</a>
    `);
})

app.get('/beer/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0) {
        res.send(`<h1>Pass it around</h1> <h2>${req.params.number_of_bottles} bottles of beer on the wall</h2> <a href="/${req.params.number_of_bottles - 1}">Take one down, pass it around</a>`);
    } else if (req.params.number_of_bottles === 0) {
        res.send(`<h1>Pass it around</h1> <h2>No more bottles of beer on the wall</h2> <a href="/">Start over</a>`);
    }
})

//99 little bugs in the code

app.get('/bugs', (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1> <a href="/bugs/98">Take one down, patch it around</a>`);
})

app.get('/bugs/:number_of_bugs', (req, res) => {
    if (req.params.number_of_bugs > 0) {
        res.send(`<h1>${req.params.number_of_bugs} little bugs in the code</h1> <a href="/bugs/${Math.floor(Math.random() * req.params.number_of_bugs * 2)}">Take one down, patch it around</a>`);
    } else {
        res.send(`<h1>0 little bugs in the code</h1> <a href="/bugs">Start over</a>`);
    }
})

//fibonacci

app.get('/fibonacci', (req,res) => {
    res.send(`<h1>Fibonacci</h1> <a href="/fibonacci/0">Start</a>`);
})

app.get('/fibonacci/:number', (req, res) => {
    let fib = [0,1];
    for (let i = 2; i <= req.params.number; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    res.send(`<h1>${fib[req.params.number]}</h1> <a href="/fibonacci/${Number(req.params.number) + 1}">Next</a>`);
})

app.listen(1999, () => {
    console.log("I'm Readyyyyyy");
})