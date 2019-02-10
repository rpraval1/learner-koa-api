const Router = require('koa-router');
const queries = require('../db/queries/categories');

const router = new Router();
const BASE_URL = `/api/v1/categories`;

router.get(BASE_URL, async (ctx) => {
    try {
      const categories = await queries.getAllCategories();
      ctx.body = {
        status: 'success',
        data: categories
      };
    } catch (err) {
      console.log(err);
    }
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const category = await queries.getSingleCategory(ctx.params.id);
      ctx.body = {
        status: 'success',
        data: category
      };
    } catch (err) {
      console.log(err);
    }
});

module.exports = router;