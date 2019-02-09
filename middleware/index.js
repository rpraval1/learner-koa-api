
const logger = async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
};

//X-Response-time
const responseTime = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now()-start;
    ctx.set('X-Response-time', `${ms}ms`);
};

module.exports = {
    logger,
    responseTime
}
