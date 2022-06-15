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
    res.json(users);
});

app.listen(3000, () => {
    console.log(`Exmple app listening on port 3000!`);
});

module.exports = app;