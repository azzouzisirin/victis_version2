const {  Register ,getAllFormation,searchFormation,getFormationByCteg,deleteFormation,updateFormation,getFormationById} = require('../controllers/formationController');
const express = require('express');
const router = express.Router();

router.route('/register').post(Register);
router.route('/getAllFormation').get(getAllFormation); 
router.route('/getFormationById/:id').get(getFormationById);
router.route('/getByCategorie/:nomCateg').get(getFormationByCteg);
router.route('/searchFormation').get(searchFormation);

router.route('/:id').delete(deleteFormation);
router.route('/:id').put(updateFormation);    
 
module.exports = router;