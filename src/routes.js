import { Router } from 'express';
import UserController from './app/controllers/UserController';
const fs = require('fs');

const routes = new Router();

routes.get('/teste', (request, response) => {
  const user = fs.readFileSync('./src/data/database.json', 'utf-8');
  response.status(200).send(JSON.parse(user));
});

routes.post('/teste', UserController.createUser);
 /* const { name, email, password } = request.body;
  const user = fs.readFileSync('./src/data/database.json', 'utf-8');
  const userAtual = JSON.parse(user);
  userAtual.push({name, email, password});
  fs.writeFileSync('./src/data/database.json', JSON.stringify(userAtual), 'utf-8')
  response.send({name, email, password});
  */


export default routes;