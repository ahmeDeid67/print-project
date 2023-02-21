const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.status(401).json("Not authenticated");
  } else {
    const token = token.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_KEY, (error, user) => {
      if (error)
        res.status(403).json({ status: "fail", msg: "Token is not valid" });
      req.user = user;
      next();
    });
  }
};

module.exports = verifyToken;
