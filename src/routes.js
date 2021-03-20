import fs from 'fs';
import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';


const routes = new Router();

routes.post('/signup', UserController.signup);
routes.post('/session', SessionController.session);

routes.get('/login', (request, response) => {
  const user = fs.readFileSync('./src/data/database.json', 'utf-8');
  response.status(200).send(JSON.parse(user));
});


 


export default routes;