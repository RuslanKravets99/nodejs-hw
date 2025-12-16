import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (createHttpError.isHttpError(err)) {
    res.status(err.status).json({
      message: err.message || err.name,
    });
    return;
  }

  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
};
