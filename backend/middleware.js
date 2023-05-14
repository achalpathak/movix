function checkAuthorization(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (authHeader !== 'Bearer 123') {
      return res.status(401).json({ message: 'Not Authorized' });
    }
    next();
  }
  

module.exports = { checkAuthorization };