import { User } from '../models/User';
import { Authenticator } from '../../services/Authenticator';

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

      const { id } = await User.create(name, email, password);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({id});
      
      return response.status(200).send({
        message: 'User created successfully',
        token
      });

    } catch (error) {
      response.status(400).send({
        message: error.message
      });
    }
   
  }

  async login(request, response) {
    try {
      const email = request.body.email;
      const password = request.body.password;
    } catch (error) {
      response.status(400).send({
        message: error.message
      });
    };
  };
};

export default new UserController();