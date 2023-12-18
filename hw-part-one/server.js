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

//magic 8 ball

app.get('/magic/:question', (req, res) => {
    
    let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    res.send(`<h1>${req.params.question}</h1> <h2>${answers[Math.floor(Math.random() * answers.length)]}</h2>`);
})

app.listen(3000, () => {
    console.log('Open!');
})
