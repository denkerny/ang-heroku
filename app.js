let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/dist'));


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('server is up!');
})