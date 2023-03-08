const jwt = require('jsonwebtoken');
require('dotenv').config()

//cambiar la crotada de aca abajo y mandarla al .env
const secret_key = 'rTaoCQwMkm48EYOXdZ10A0jALBJi7t1ukIxZu0WDodZNINaOosC5wsUnZ8v7Hzkf'

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secret_key, { algorithms: ['RS256'] }, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = {
  verifyToken
}



