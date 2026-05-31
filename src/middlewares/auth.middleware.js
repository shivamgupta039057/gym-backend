const jwt = require("jsonwebtoken");

module.exports =
async (req, res, next) => {

  try {

    const token =
    req.headers.authorization?.replace(
      "Bearer ",
      ""
    );

    if (!token) {

      return res.status(401).json({

        status: 401,

        message:
        "Unauthorized",

      });

    }

    const decoded =
    jwt.verify(

      token,

      process.env.JWT_SECRET

    );

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({

      status: 401,

      message:
      "Invalid token",

    });

  }

};