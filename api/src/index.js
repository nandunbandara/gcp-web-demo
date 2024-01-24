'use strict';

import express from 'express';
import cors from 'cors';

import logger from './logger.js';
import config from './config.js';
import router from './router.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(
    config.PORT,
    () => logger.info(`Listening on PORT ${config.PORT}`),
);

mongoose.connect(config.DB_CONNECTION_URL).then(() => {
  logger.info('Connection to database is successful!');
}).catch((err) => {
  logger.error('Failed to connect to the database. ERROR: ' + err.message);
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    data: {
      message: 'Hello from GDG Demo API',
      version: config.VERSION,
    },
  });
});

app.use('/api/v1', router);
