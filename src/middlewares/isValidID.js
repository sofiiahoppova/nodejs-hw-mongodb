import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidID = (req, res, next) => {
  const { contactID } = req.params;
  if (!isValidObjectId(contactID)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
};
