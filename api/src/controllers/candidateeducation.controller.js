const CandidateeducationModel = require("../models/candidateeducation.model");
class CandidateeducationController {
    async iucandidateeducation(req, res){
        res.send(await CandidateeducationModel.iucandidateeducation(req.body));
    };

    async getCandidateeducationForDDL(req, res){
        res.send(await CandidateeducationModel.getCandidateeducationForDDL());
    };

    async getCandidateeducationDetail(req, res){
        res.send(await CandidateeducationModel.getCandidateeducationDetail(req.params.id));
    };
    async getCandidateeducationDetailByID(req, res){
        res.send(await CandidateeducationModel.getCandidateeducationDetailByID(req.params.id));
    };
    async getCandidateeducationDelete(req, res){
        res.send(await CandidateeducationModel.getCandidateeducationDelete(req.params.id));
    };
}
module.exports=new   CandidateeducationController();