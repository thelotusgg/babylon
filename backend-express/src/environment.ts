import dotenv from 'dotenv';

dotenv.config();

interface Environment {
  port: number | string;
}

const environment: Environment = {
  port: process.env.PORT || 4000,
};

export default environment;
