const {  Register ,getAllModule,getModulByForma,AggreCategorie,getModulFormaModul,deleteModule,updateModule,getModuleById} = require('../controllers/moduleController');
const express = require('express');
const router = express.Router();
 
router.route('/register').post(Register);
router.route('/getAllModule').get(getAllModule);
router.route('/getModulByForma/:nomForma').get(getModulByForma); 
router.route('/getModule/:nomForma/:nomModul').get(getModulFormaModul); 
router.route('/AggreCategorie').get(AggreCategorie);

router.route('/getModuleById/:id').get(getModuleById);
router.route('/:id').delete(deleteModule);
router.route('/:id').put(updateModule);   

module.exports = router; 