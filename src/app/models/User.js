import { writeFile} from 'fs';
import { promisify } from 'util';
import IdGenerator from '../../services/IdGenerator';
import HashManager from '../../services/HashManager';
import Database from '../../data/database';

export class User {

  static async create(name, email, password) {
  
    const id = IdGenerator.generateId();

    const hashPassword = await HashManager.hash(password);

    const user = {
      id,
      name,
      email,
      hashPassword
    }

    await Database.writeFileDatabase(user);
   
    return user;
  }
}