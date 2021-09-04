const jwt = require("jsonwebtoken");

exports.Middleware = (req, res, next) => {
  try {
    let header = req.header("Authorization");

    if (!header) {
      return res.send({
        status: false,
        message: "Access Failed",
      });
    }

    let token = header.replace("Bearer ", "");

    const secretKey = process.env.SECRET_KEY;

    const verified = jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return res.send({
          status: false,
          message: "User Not Authenticated",
        });
      } else {
        return decoded;
      }
    });

    req.userData = verified.data;

    next();
  } catch (error) {
    res.send({
      status: false,
      message: "Middleware Error",
    });
  }
};
