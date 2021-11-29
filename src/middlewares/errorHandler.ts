import { Request, Response, NextFunction } from 'express';

import { AppError } from '../errors/AppError';

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
}
