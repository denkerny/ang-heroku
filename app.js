let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/dist'));


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('server is up!');
})
