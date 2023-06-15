const {  Register ,getAllModule,deleteModule,updateModule,getModuleById} = require('../controllers/moduleController');
const express = require('express');
const router = express.Router();
 
router.route('/register').post(Register);
router.route('/getAllModule').get(getAllModule);

router.route('/getModuleById/:id').get(getModuleById);
router.route('/:id').delete(deleteModule);
router.route('/:id').put(updateModule);   

module.exports = router; 