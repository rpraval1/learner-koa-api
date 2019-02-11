const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const middleWares = require('./middleware');
const indexRoutes = require('./routes');
const singerRoutes = require('./routes/categories');

const app = new Koa();


app.use(middleWares.logger);

app.use(middleWares.responseTime);
app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(singerRoutes.routes());


app.listen(3000);