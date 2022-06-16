let express = require('express');
let app = express();
let morgan = require('morgan')

let users = [
    {id:1, name:'둘리'},
    {id:2, name:'또치'},
    {id:3, name:'마이콜'},
]

app.use(morgan('dev'));

app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10;

    const limit = parseInt(req.query.limit, 10);
    if(Number.isNaN(limit)) {
        return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});

app.listen(3000, () => {
    console.log(`Exmple app listening on port 3000!`);
});

module.exports = app;