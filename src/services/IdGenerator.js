import { v4 as uuidv4 } from 'uuid';

class IdGenerator {
  generateId() {
    return uuidv4();
  };
};

export default new IdGenerator();