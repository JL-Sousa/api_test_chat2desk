import { readFile, writeFile} from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this.DATABASE_JSON = './src/data/database.json';
  }
  async getAllUsers() {
    const userAll = await readFileAsync(this.DATABASE_JSON, 'utf-8');
    return JSON.parse(userAll);
  }

  async writeFileDatabase(user) {
    const dados = await this.getAllUsers();
    dados.push(user);
    await writeFileAsync(this.DATABASE_JSON, JSON.stringify(dados), 'utf-8');
  }
}

export default new Database();