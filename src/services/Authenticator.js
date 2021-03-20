import * as jwt from 'jsonwebtoken';

class Authenticator {
  static getExpiresIn() {
    return Number(process.env.ACCESS_TOKEN_EXPIRES_IN);
  }

  generateToken(id) {
    return jwt.sign(
      id,
      process.env.JWT_KEY,
      {expiresIn: Authenticator.getExpiresIn()}
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

export default new Authenticator();