import dotenv from 'dotenv';
// import logger from 'loglevel';
import mongoose from 'mongoose';

dotenv.config({ path: './.env' });

const { DB_HOST } = process.env;

const DatabaseConfig = mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`🚀 Database ready`);
  })
  .catch((error) => {
    console.log(error);
  });

export default DatabaseConfig;
