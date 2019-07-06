const path = require("path");
const express = require('express');
const usersRouter = require('./routes/usersRouter');
const recipesRouter = require('./routes/recipesRouter');
const mainRouter = require('./routes/mainRouter');
const ingrediantsRouter = require('./routes/ingrediantsRouter');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'bower_components')));
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
