const express = require('express');
var usersRouter = require('./routes/usersRouter');
var recipesRouter = require('./routes/recipesRouter');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`listening on port ${port} ...`);
});
