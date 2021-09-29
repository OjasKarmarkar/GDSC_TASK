const studentController = require('../controllers/student_controller');
const express = require('express')
var router = express.Router();

router.get('/new', studentController.create);
router.delete('/delete', studentController.deleteById);
router.post('/edit', studentController.editById);
router.get('/all', studentController.getAll);
router.get('/createJWT', studentController.createJWT);
 
 module.exports = router;