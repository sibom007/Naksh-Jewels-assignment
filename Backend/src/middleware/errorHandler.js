export const errorHandler = (err, req, res, next) => {
  // Default values
  const statusCode = err.statusCode || 500;
  const message = err.isOperational
    ? err.message
    : "Something went wrong. Please try again.";

  // Log full error (server-side only)
  console.error({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : "",
    path: req.originalUrl,
    method: req.method,
  });

  res.status(statusCode).json({
    success: false,
    message,
  });
};
