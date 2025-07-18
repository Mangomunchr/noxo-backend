function isAuthenticated(req, res, next) {
  if (!req.headers['x-user-id']) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

module.exports = { isAuthenticated };