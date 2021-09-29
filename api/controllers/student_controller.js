const Student = require("../model/student");
const jwt = require('jsonwebtoken');
const student = require("../model/student");

exports.create = async (req, res) => {
  if (!req.body.id || !req.body.name || !req.body.year || !req.body.division) {
    res.status(400).send({
      "success": false,
      "message": 'Provide All Details'
    })
  } else {
    Student.create(req.body, function (err, result) {
      if (err) {
        res.status(500).send({
          "success": false,
          "message": 'Error creating student',
          "error": err.toString()
        })
      } else {
        res.status(200).send({
          "success": true,
          "message": 'Successfully Created!'
        })
      }
    })

  }
};

exports.editById = async (req, res) => {
  Student.findOne({ id: req.body.id }, function (err, student) {
    student.name = req.body.name
    student.division = req.body.division
    student.year = req.body.year

    student.save(function (err) {
      if (err) {
        res.status(500).send({
          "success": false,
          "message": 'Error updating student',
          "error": err.toString()
        })
      } else {
        res.status(200).send({
          "success": true,
          "message": 'Successfully Updated!'
        })
      }
    });
  });
};

exports.getAll = async (req, res) => {
  Student.find({}, function (err, students) {
    if (err) {
      res.status(500).send({
        "success": false,
        "message": 'Error Occurred',
        "error": err.toString()
      })
    } else {
      res.status(200).send({
        "success": true,
        "students": students
      })
    }

  });
};

exports.deleteById = async (req, res) => {
  Student.findOneAndRemove({ id: req.body.id }, function (err) {
    if (err) {
      res.status(500).send({
        "success": false,
        "message": 'Could Not Be Deleted!',
        "error": err.toString()
      })
    } else {
      res.status(200).send({
        "success": true,
        "message": "Successfully Deleted!"
      })
    }
  });
};

exports.createJWT = async (req, res) => {
  const token = jwt.sign(
    { user: "admin", email: "admin@gmail.com" },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  res.status(200).send({
    token: token
  })
};