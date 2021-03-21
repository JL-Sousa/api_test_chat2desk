import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/signup', UserController.signup);
routes.post('/session', SessionController.session);

export default routes;