const Koa = require('koa');
const app = new Koa();
const middleWares = require('./middleware');

app.use(middleWares.logger);

app.use(middleWares.responseTime);

app.use(async ctx => {
    ctx.body = 'Hello World'
});

app.listen(3000);