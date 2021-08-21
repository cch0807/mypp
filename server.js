const express = require('express');
const path = require('path');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/Source', express.static(path.join(__dirname, '/Soruce')));
app.use('/', express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});



app.listen(8080, () => {
  console.log('Express App on port 8080!');
});