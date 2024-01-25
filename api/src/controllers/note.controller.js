import {HTTP_STATUS} from '../types.js';
import Note from '../models/note.model.js';
import config from '../config.js';
import {Schema} from 'mongoose';
import logger from '../logger.js';

export const createNote = async (req, res, next) => {
  try {
    const {content} = req.body;

    if (!content) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        statusCode: HTTP_STATUS.BAD_REQUEST,
        error: 'Missing required parameter `content` in request body',
      });
    }

    logger.info(
        `[note.controller] creating new note with content: '${content}'`,
    );

    const note = await new Note({content, version: config.VERSION}).save();

    return res.status(HTTP_STATUS.CREATED).json({
      success: true,
      statusCode: HTTP_STATUS.CREATED,
      data: note,
    });
  } catch (err) {
    next(err);
  }
};

export const readAllNotes = async (req, res, next) => {
  try {
    const {last, limit} = req.params;

    logger.info(
        `[note.controller] reading notes last: ${last} limit: ${limit}`,
    );

    const query = last ? {$gt: new Schema.types.ObjectId(last)} : {};

    const notes = await Note.find(query).limit(parseInt(limit || '10', 10));

    return res.status(HTTP_STATUS.OK).json({
      success: true,
      statusCode: HTTP_STATUS.OK,
      data: notes,
    });
  } catch (err) {
    next(err);
  }
};
