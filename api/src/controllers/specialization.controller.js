const SpecializationModel = require("../models/specialization.model");
class SpecializationController {
    async iuspecialization(req, res){
        res.send(await SpecializationModel.iuspecialization(req.body));
    };

    async getSpecializationForDDL(req, res){
        res.send(await SpecializationModel.getSpecializationForDDL());
    };

    async getSpecializationDetail(req, res){
        res.send(await SpecializationModel.getSpecializationDetail());
    };
    async getSpecializationDetailByID(req, res){
        res.send(await SpecializationModel.getSpecializationDetailByID(req.params.id));
    };
    async getSpecializationDelete(req, res){
        res.send(await SpecializationModel.getSpecializationDelete(req.params.id));
    };
}
module.exports=new SpecializationController();