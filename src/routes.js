import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (request, response) => {
  return response.json({ ok:false });
});

export default routes;