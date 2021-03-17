import bcrypt from 'bcryptjs';


  export class HashManager {
    async hash(text) {
      const rounds = Number(process.env.BCRYPT_COST);
      const salt = await bcrypt.genSalt(rounds);
      const result = await bcrypt.hash(text, salt);
      return result;
    };

    async compare(text, hash) {
      return bcrypt.compare(text, hash);
    };
  };  