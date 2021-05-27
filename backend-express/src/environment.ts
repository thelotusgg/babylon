interface Environment {
  mongo_uri: string;
}

export const environment: Environment = {
    mongo_uri: process.env.MONGO_URI || ''
}