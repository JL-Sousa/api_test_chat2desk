import { Router } from 'express';
import UserController from './app/controllers/UserController';
import fs from 'fs';

const routes = new Router();

routes.post('/signup', UserController.signup);

routes.get('/login', (request, response) => {
  const user = fs.readFileSync('./src/data/database.json', 'utf-8');
  response.status(200).send(JSON.parse(user));
});

export default routes;