import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import HashManager from '../../services/HashManager';

class SessionController {
  async session(request, response) {
  
    try {
      const { email, password } = request.body;
       
      const user = await User.getUserByEmail(email);
      if(!user) {
        return response.status(401).json({ error: 'User does not exist'});
      }

      const isPasswordCorrect = await HashManager.compare(password, user.hashPassword);

      if(!isPasswordCorrect) {
        return response.status(401).json({ error: 'Incorrect password'});
      }
      
      response.status(200).json({ ok: true });
      
    } catch (error) {
      response.status(400).send({
        message: error.message
      });
    }

  }

}

export default new SessionController();