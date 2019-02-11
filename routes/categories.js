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
      ctx.status = 400,
      ctx.body = {
        status: 'error',
        body: err.message || 'Sorry, an error has occurred.'
      };
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
      ctx.status = 400,
      ctx.body = {
        status: 'error',
        body: err.message || 'Sorry, an error has occurred.'
      };
    }
});

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const category = await queries.addCategory(ctx.request.category);
    if (category.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'Success',
        body: category
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        body: 'Something went wrong.'
      }
    }
  } catch (err) {
    ctx.status = 400,
    ctx.body = {
      status: 'error',
      body: err.message || 'Sorry, an error has occurred.'
    };
  }
});

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const category = await queries.updateCategory(ctx.params.id, ctx.request.body);
    if (category.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'Success',
        body: category
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        body: 'Category does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400,
    ctx.body = {
      status: 'error',
      body: err.message || 'Sorry, an error has occurred.'
    };
  }
});

module.exports = router;