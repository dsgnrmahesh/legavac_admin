const CandidateModel = require("../models/candidate.model");
class CandidateController {
    async iucandidate(req, res){
        res.send(await CandidateModel.iucandidate(req.body));
    };

    async getCandidateForDDL(req, res){
        res.send(await CandidateModel.getCandidateForDDL());
    };

    async getCandidateDetail(req, res){
        res.send(await CandidateModel.getCandidateDetail());
    };
    async getCandidateDetailByID(req, res){
        res.send(await CandidateModel.getCandidateDetailByID(req.params.id));
    };
    async getCandidateDelete(req, res){
        res.send(await CandidateModel.getCandidateDelete(req.params.id));
    };
    async getCandidateDetailSearchText(req, res){
        res.send(await CandidateModel.getCandidateDetailSearchText(req.body));
    };
    async candidateregistration(req, res){
        res.send(await CandidateModel.candidateregistration(req.body));
    };
    async updatecandidate(req, res){
        res.send(await CandidateModel.updatecandidate(req.body));
    };
    async updatecandidatelooking(req, res){
        res.send(await CandidateModel.updatecandidatelooking(req.body));
    };
    async getLoginDetail(req, res){
        res.send(await CandidateModel.getlogindetail(req.body));
    };
     async iuappliedjob(req, res){
        res.send(await CandidateModel.iuappliedjob(req.body));
    };
    async getAppliedjobByCandidate(req, res){
        res.send(await CandidateModel.getappliedjobbycandidate(req.params.id));
    };
    async getAppliedjobDetail(req, res){
        res.send(await CandidateModel.getappliedjobdetail());
    };
    async deleteAppliedjob(req, res){
        res.send(await CandidateModel.deleteappliedjob(req.params.id));
    };
    async getallappliedjobsearch(req, res){
        res.send(await CandidateModel.getallappliedjobsearch(req.params.searchtext));
    };
    
}
module.exports=new CandidateController();