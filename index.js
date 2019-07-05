const express = require('express');
var usersRouter = require('./routes/usersRouter');
var recipesRouter = require('./routes/recipesRouter');
var mainRouter = require('./routes/mainRouter');
var ingrediantsRouter = require('./routes/ingrediantsRouter');
var bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/ingrediants', ingrediantsRouter);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`listening on port ${port} ...`);
});
