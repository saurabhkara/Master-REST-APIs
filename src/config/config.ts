import { config as conf } from "dotenv";
conf();

const _config = {
    PORT: process.env.port,
    DATABE_URL: process.env.MONGODB_Connection_STRING,
    ENV: process.env.NODE_ENV
}


export const config = Object.freeze(_config);