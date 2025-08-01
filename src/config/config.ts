import { config as conf } from "dotenv";
conf();

const _config = {
    PORT: process.env.port,
}


export const config = Object.freeze(_config);