import * as dotenv from 'dotenv';
dotenv.config();

export const ARANGO_URL = process.env.ARANGO_URL || '';
export const ARANGO_USER = process.env.ARANGO_USER || '';
export const ARANGO_PASS = process.env.ARANGO_PASS || '';
