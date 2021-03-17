import * as jwt from 'jsonwebtoken';

export class Athenticator {
  static getExpiresIn() {
    return process.env.ACESS_TOKEN_EXPIRES_IN;
  }

  generateToken(id) {
    jwt.sign(
      id,
      process.env.JWT_KEY,
      {expiresIn: Athenticator.getExpiresIn()}
    )
  }

  verify(token) {
    const data = jwt.verify(
      token,
      process.env.JWT_KEY
    )
    return {
      id: data.id
    }
  }
}