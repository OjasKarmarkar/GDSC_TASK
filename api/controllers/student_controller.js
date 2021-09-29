const Student = require("../model/student");
const jwt = require('jsonwebtoken')

exports.create = async (req, res) => {
    res.status(200).send({
        message:
         "Welcome"
      });
};

exports.editById = async (req, res) => {
    
};

exports.getAll = async (req, res) => {
    
};

exports.deleteById = async (req, res) => {
    
};

exports.createJWT = async (req, res) => {
    const token = jwt.sign(
        {user:"admin" , email:"admin@gmail.com"},
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      res.status(200).send({
          token:token
      })
};