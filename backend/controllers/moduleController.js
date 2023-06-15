const Module = require('../models/Module');

exports.Register = async (req, res) => {
    try { 
        const newutilisateur = await Module.create({nom:req.body.nom,typeModule:req.body.typeModule,forma:req.body.forma,context:req.body.context,TitreModule:req.body.TitreModule,nomFormation:req.body.nomFormation,numOrdre:req.body.numOrdre  ,text_1:req.body.text_1,progModel:req.body.progModel,programme:req.body.programme,duree:req.body.duree,prix:req.body.prix});
           
        res.status(201).json({
            newutilisateur
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
 
exports.getAllModule = async (req, res) => {
    try {
        const allclients = await Module.find().sort({ numOrdre: 1 });

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getModuleById = async (req, res) => {
    try {
        const allclients = await Module.findById(req.params.id);

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteModule = async (req, res) => {
    try {
        const module = await Module.findByIdAndDelete(req.params.id).sort({ numOrdre: 1 });

        res.status(200).json({
            module
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.updateModule = async (req, res) => {
    try { 
        const {nom,nomFormation, text_1,programme,TitreModule,progModel,typeModule,forma,context, duree,prix,numOrdre} = req.body;

        const module = await Module.findByIdAndUpdate(req.params.id, {nom,numOrdre,forma,nomFormation,typeModule,context,TitreModule,progModel, text_1,programme, duree,prix}, { new: true });
 
        res.status(200).json({
            module
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};