const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');

require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//app.use( express.static(__dirname + '/public'));
app.get('/usuario', function (req, res) {
    res.json('get')
  });
 
app.post('/usuario', function (req, res) {
    let body = req.body;
    res.json({
        body
    });
  });

app.delete('/usuario', function (req, res) {
    res.json('delete');
  });

app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;
    res.json({
        id
    });

  });
app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3003...')
});