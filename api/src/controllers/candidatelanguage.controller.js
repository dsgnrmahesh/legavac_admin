const CandidatelanguageModel = require("../models/candidatelanguage.model");
class CandidatelanguageController {
    async iucandidatelanguage(req, res){
        res.send(await CandidatelanguageModel.iucandidatelanguage(req.body));
    };

    async getCandidatelanguageForDDL(req, res){
        res.send(await CandidatelanguageModel.getCandidatelanguageForDDL());
    };

    async getCandidatelanguageDetail(req, res){
        res.send(await CandidatelanguageModel.getCandidatelanguageDetail());
    };
    async getCandidatelanguageDetailByID(req, res){
        res.send(await CandidatelanguageModel.getCandidatelanguageDetailByID(req.params.id));
    };
    async getCandidatelanguageDelete(req, res){
        res.send(await CandidatelanguageModel.getCandidatelanguageDelete(req.params.id));
    };
}
module.exports=new CandidatelanguageController();