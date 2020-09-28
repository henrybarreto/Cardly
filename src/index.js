import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';

const app = new Koa();

app.use(logger());
app.use(json());
app.use(bodyparser());

import router from './api/api.js';
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
