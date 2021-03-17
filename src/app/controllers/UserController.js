const fs = require('fs');
import { IdGenerator } from '../../services/IdGenerator';
import { HashManager } from '../../services/HashManager';

class UserController {
  async createUser (request, response) {
    try {
      const { name, email, password } = request.body;

      if(!name || !email || !password) {
        throw new Error('Enter all information for registration');
      };

      if(password.length < 6) {
        throw new Error('The password must contain at least six characters');
      };

      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(password);

      console.log();


      const user = fs.readFileSync('./src/data/database.json', 'utf-8');
      const userAtual = JSON.parse(user);
      userAtual.push({name, email, hashPassword});
      fs.writeFileSync('./src/data/database.json', JSON.stringify(userAtual), 'utf-8')
      response.send({id, name, email, hashPassword});
    } catch (error) {
      response.status(400).send({
        message: error.message
      });
    }
   
  }
}

export default new UserController();