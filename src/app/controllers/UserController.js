import { User } from '../models/User';
import Authenticator from '../../services/Authenticator';

class UserController {
  async signup(request, response) {
    try {
      const { name, email, password } = request.body;

      if(!name || !email || !password) {
        throw new Error('Enter all information for registration');
      };

      if(password.length < 6) {
        throw new Error('The password must contain at least six characters');
      };

      const emailAlreadyExists = await User.getUserByEmail(email);
      if(emailAlreadyExists) {
        return response.status(401).json({ error: 'This email is already registered'});
      }

      const { id } = await User.create(name, email, password);
      
      return response.status(201).send({
        message: 'User created successfully',
        token: Authenticator.generateToken({id})
      });

    } catch (error) {
      response.status(400).send({
        message: error.message
      });
    }
   
  }

  async login(request, response) {
    try {
      const { email, password }= request.body;
    
    } catch (error) {
      response.status(400).send({
        message: error.message
      });
    };
  };
};

export default new UserController();