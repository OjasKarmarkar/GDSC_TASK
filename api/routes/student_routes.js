const studentController = require('../controllers/student_controller');
const express = require('express')
var router = express.Router();
const auth = require("../middleware/auth");

router.get('/new', auth , studentController.create);
router.delete('/delete', auth ,  studentController.deleteById);
router.post('/edit', auth , studentController.editById);
router.get('/all', auth , studentController.getAll);
router.get('/createJWT', studentController.createJWT);
 
 module.exports = router;