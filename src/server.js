import dotenv from 'dotenv';
import app from './app';


dotenv.config();

const server = app.listen(8080, () => {
  if(server) {
    const address = server.address();
    console.log(`Server is running in http://localhost:${address.port}`);
  }else {
    console.error('Failure upon starting server');
  };
});