import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_DB_USERNAME ;
const MONGO_PASSWORD = process.env.MONGO_DB_PASSWORD ;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.m77lain.mongodb.net`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        url: MONGO_URL,
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
    },
    server: {
        port: SERVER_PORT,
    },
};
