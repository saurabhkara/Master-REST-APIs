import { config as conf } from "dotenv";
conf();

const _config = {
    PORT: process.env.port,
    DATABE_URL: process.env.MONGODB_Connection_STRING
}


export const config = Object.freeze(_config);