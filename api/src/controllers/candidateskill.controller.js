const CandidateskillModel = require("../models/candidateskill.model");
class CandidateskillController {
    async iucandidateskill(req, res){
        res.send(await CandidateskillModel.iucandidateskill(req.body));
    };

    async getCandidateskillForDDL(req, res){
        res.send(await CandidateskillModel.getCandidateskillForDDL());
    };

    async getCandidateskillDetail(req, res){
        res.send(await CandidateskillModel.getCandidateskillDetail());
    };
    async getCandidateskillDetailByID(req, res){
        res.send(await CandidateskillModel.getCandidateskillDetailByID(req.params.id));
    };
    async getCandidateskillDelete(req, res){
        res.send(await CandidateskillModel.getCandidateskillDelete(req.params.id));
    };
}
module.exports=new CandidateskillController();