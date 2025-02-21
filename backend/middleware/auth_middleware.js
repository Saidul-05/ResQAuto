// backend/middleware/auth_middleware.js
module.exports = (req, res, next) => {
  // Dummy authentication: In production, validate JWTs or other tokens.
  const token = req.headers.authorization;
  if (token && token === 'dummy-token') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
