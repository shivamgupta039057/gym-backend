const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

  try {

    const {
      username,
      password,
    } = req.body;

    console.log(req.body , "dfkjdsfhskdshjkfdhdjkhdjkhddkjshfdk" , "reqreqreqreqreqreq" , req);

    const user =
    await User.findOne({
      username,
    });

    if (user) {

      return res.status(400).json({

        status: 400,

        message:
        "Username already exists",

      });

    }

    const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

    const newUser =
    await User.create({

      username,

      password:
      hashedPassword,

    });

    return res.status(201).json({

      status: 201,

      message:
      "User created successfully",

      data: newUser,

    });

  } catch (error) {

    return res.status(500).json({

      status: 500,

      message:
      error.message,

    });

  }

};

const login = async (req, res) => {

  try {

    const {
      username,
      password,
    } = req.body;

    const user =
    await User.findOne({
      username,
    });

    if (!user) {

      return res.status(404).json({

        status: 404,

        message:
        "Invalid credentials",

      });

    }

    const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({

        status: 400,

        message:
        "Invalid credentials",

      });

    }

    const token =
    jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    return res.status(200).json({

      status: 200,

      message:
      "Login successful",

      token,

      user: {

        id: user._id,

        username:
        user.username,

      },

    });

  } catch (error) {

    return res.status(500).json({

      status: 500,

      message:
      error.message,

    });

  }

};

const getProfile = async (req, res) => {

  try {

    const user =
    await User.findById(
      req.user.id
    ).select("-password");

    return res.status(200).json({

      status: 200,

      data: user,

    });

  } catch (error) {

    return res.status(500).json({

      status: 500,

      message:
      error.message,

    });

  }

};

module.exports = {
  register,
  login,
  getProfile,
};