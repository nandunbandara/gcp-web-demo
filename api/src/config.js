'use strict';

import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  VERSION: process.env.npm_package_version,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/notes',
};
