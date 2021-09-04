const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const checkEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    const checkUsername = await User.findOne({
      where: {
        username: username,
      },
    });

    if (checkEmail) {
      return res.status(401).send({
        status: false,
        msg: "Email Already Registered",
      });
    }

    if (checkUsername) {
      return res.status(401).send({
        status: false,
        msg: "Username Already Registered",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = await User.create({
      ...req.body,
      password: passwordHash,
    });

    res.status(201).send({
      status: true,
      msg: "Signup Success",
      data: {
        name: userData.name,
        email: userData.email,
        username: userData.username,
      },
    });
  } catch (error) {
    res.status(401).send({
      status: false,
      msg: "Signup Failed",
    });
  }
};

exports.Signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkUser = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!checkUser) {
      return res.status(401).send({
        status: false,
        msg: "User Not Registered",
      });
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password);

    if (!checkPassword) {
      return res.status(401).send({
        status: false,
        msg: "Username Or Password Incorrect | Password",
      });
    }

    const token = jwt.sign(
      {
        data: {
          id: checkUser.id,
          name: checkUser.name,
          email: checkUser.email,
          username: checkUser.username,
        },
      },
      process.env.SECRET_KEY
    );

    res.status(201).send({
      status: true,
      msg: "Signin Success",
      userId: checkUser.id,
      token,
    });
  } catch (error) {
    res.status(401).send({
      status: false,
      msg: "Signin Failed",
    });
  }
};

exports.Authorization = async (req, res) => {
  try {
    const loggedUser = req.userData;

    const userData = await User.findOne({
      where: {
        id: loggedUser.id,
      },
    });

    switch (!userData) {
      case true:
        return res.status(401).send({
          status: false,
          msg: "User Not Registred",
        });
      case false:
        return res.status(200).send({
          status: true,
          data: {
            id: userData.id,
            email: userData.email,
            name: userData.name,
          },
        });
      default:
        throw new Error("Unknown");
    }
  } catch (error) {
    res.status(401).send({
      status: false,
      msg: "User Not Registred",
    });
  }
};
