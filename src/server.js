require('dotenv').config();

const app = require('./app');

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server Rodando na porta ${process.env.SERVER_PORT}`);
});
