const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});