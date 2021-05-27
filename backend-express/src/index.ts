import express from 'express';
import dotenv from 'dotenv';
import mongoose,{Connection} from 'mongoose';
import { environment } from './environment';
import { ApolloServer } from "apollo-server-express";
import typeDefs from './typedefs';
import resolvers from './resolvers';

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.start();
server.applyMiddleware({ app })

let db: Connection;

dotenv.config();

/*try {
    mongoose.connect(environment.mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
    db = mongoose.connection;
} catch { /*maybe implement stacktrace  }*/

app.listen({port:4000});