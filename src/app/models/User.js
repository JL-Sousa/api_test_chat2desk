import fs from 'fs';
import { IdGenerator } from '../../services/IdGenerator';
import { HashManager } from '../../services/HashManager';

export class User {

  static async create(name, email, password) {
    const user = fs.readFileSync('./src/data/database.json', 'utf-8');
    const userAtual = JSON.parse(user);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    userAtual.push({id, name, email, hashPassword});
    fs.writeFileSync('./src/data/database.json', JSON.stringify(userAtual), 'utf-8');
    return userAtual;
  }
}