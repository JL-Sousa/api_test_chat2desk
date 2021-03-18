import { Router } from 'express';
import UserController from './app/controllers/UserController';
import fs from 'fs';

const routes = new Router();

routes.get('/teste', (request, response) => {
  const user = fs.readFileSync('./src/data/database.json', 'utf-8');
  response.status(200).send(JSON.parse(user));
});

routes.post('/signup', UserController.signup);

export default routes;