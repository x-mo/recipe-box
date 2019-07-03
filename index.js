const express = require('express');
const app = express();

app.use(express.json());

var recipes = [
  {id:1,name:'recipe 1'},
  {id:2,name:'recipe 2'},
  {id:3,name:'recipe 3'},
  {id:4,name:'recipe 4'},
];

app.get('/',(req,res) => {
  res.send('Hello World');
});

app.get('/api/recipes',(req,res) => {
  res.send([1,2,3,4]);
})

app.get('/api/recipes/:id',(req,res) => {
  //res.send(req.params.id);
  //res.send(req.query);
  const recipe = recipes.find(c => c.id === parseInt(req.params.id));
  if(!recipe) res.status(404).send('The requested recipe is not found!');
  res.send(recipe);
})


app.post('/api/recipes',(req,res) => {
  var recipe = {
    id: recipes.length +1,
    name: req.body.name,
  };

  recipes.push(recipe);
  res.send(recipe);
});

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`listening on port ${port} ...`);
});
