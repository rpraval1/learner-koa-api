const Router = require('koa-router');
const queries = require('../db/queries/singers');

const router = new Router();
const BASE_URL = `/api/v1/categories`;

module.exports = router;