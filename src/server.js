import app from './app';

const server = app.listen(3333, () => {
  if(server) {
    const address = server.address();
    console.log(`Server is running in http://localhost:${address.port}`);
  }else {
    console.error('Failure upon starting server');
  };
});