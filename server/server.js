const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 
require('./config/config');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));
//app.use( express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3003...')
});

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
},(err, res) => {
    if(err) throw err;
    console.log("base de datos online")
});