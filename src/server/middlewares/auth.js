const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const headerAuthorization = req.header("Authorization");
  if (!headerAuthorization) {
    const error = new Error("Token missing");
    error.code = 401;
    next(error);
  } else {
    const token = headerAuthorization.replace("Bearer ", "");

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = id;
      next();
    } catch {
      const error = new Error("Wrong token");
      error.code = 401;
      next(error);
    }
  }
};

module.exports = auth;
