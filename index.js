
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const PORT = process.env.PORT || 3333

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


/*
const path = require('path')
const PORT = process.env.PORT || 3333

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

*/