const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {

  // res.send('<p>home page</p>');
  // res.sendFile('./views/index.html', { root: __dirname })
  res.render('index');

});

app.get('/about', (req, res) => {

  // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root: __dirname })

});

//redirect
app.get('/about-my', (req, res) => {
  // res.redirect('/about');

});

//404 page 必须在最下面
app.use((req, res) => {
      res.status(404).sendFile('./views/404.html', { root: __dirname })


});
