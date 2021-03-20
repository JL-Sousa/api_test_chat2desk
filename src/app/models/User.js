import IdGenerator from '../../services/IdGenerator';
import HashManager from '../../services/HashManager';
import Database from '../../data/database';

export class User {

  static async create(name, email, password) {
  
    const id = IdGenerator.generateId();

    const hashPassword = await HashManager.hash(password);
    console.log('Hash:',typeof(hashPassword));

    const user = {
      id,
      name,
      email,
      hashPassword
    }

    await Database.writeFileDatabase(user);
   
    return user;
  }

  static async getUserByEmail(email) {
    const usersDados = await Database.getAllUsers();

    const isEmailUser = await usersDados.find( user => {
      return user.email === email;
    })

    return isEmailUser;
  }

  
}