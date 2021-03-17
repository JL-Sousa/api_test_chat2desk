import { v4 as uuidv4 } from 'uuid';

export class IdGenerator {
  generateId() {
    return uuidv4();
  };
};