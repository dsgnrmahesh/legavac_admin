const CandidateEmploymentModel = require("../models/candidateemployment.model");
class CandidateEmploymentController {
    async iucandidateemployment(req, res){
        res.send(await CandidateEmploymentModel.iucandidateemployment(req.body));
    };
    async getCandidateEmploymentDetailByID(req, res){
        res.send(await CandidateEmploymentModel.getCandidateEmploymentDetailByID(req.params.id));
    };
}
module.exports=new CandidateEmploymentController();