const sessionFormation = require('../models/SessionFormation');


exports.Register = async (req, res) => {
    try { 
        const newutilisateur = await sessionFormation.create({formation:req.body.formation,duree:req.body.duree,prix:req.body.prix  ,numDordre:req.body.numDordre,Session:req.body.Session,membres:req.body.membres});
           
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
exports.updateModule = async (req, res) => {
    try { 
        const {formation,duree, prix,numDordre,Session,membres} = req.body;

        const module = await Module.findByIdAndUpdate(req.params.id, {formation,duree,prix,numDordre,Session,membres}, { new: true });
 
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
exports.getAllFormation = async (req, res) => {
    try {
        const allclients = await sessionFormation.find();

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.pushMembre = async (req, res) => {
    try {
        const allclients = await sessionFormation.updateOne(
            { _id: req.params.id },
            { $push: { membres: req.body.membres } }
         );

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateSession = async (req, res) => {
    try { 
        const {formation,duree, prix,numDordre,Session} = req.body;

        const module = await sessionFormation.findByIdAndUpdate(req.params.id, {formation,duree,prix,numDordre,Session}, { new: true });
 
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
exports.getAllFormationbetweenData = async (req, res) => {
    try {
        const allclients = await sessionFormation.find({dateDebut:{$gte:req.body.dateDebut,
        $lte: req.body.dateFin}});

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getSessionById = async (req, res) => {
    try {
        const allclients = await sessionFormation.findById(req.params.id);

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
