const Koa = require('koa');
const app = new Koa();
const middleWares = require('./middleware');
const indexRoutes = require('./routes');
const singerRoutes = require('./routes/singers');

app.use(middleWares.logger);

app.use(middleWares.responseTime);

app.use(indexRoutes.routes());
app.use(singerRoutes.routes());

app.listen(3000);