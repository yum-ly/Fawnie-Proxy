require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');

const cors = require('cors')
let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors())

app.use(express.static(__dirname + '/../client/dist'));


let port = 3006;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});