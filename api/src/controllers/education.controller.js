const EducationModel = require("../models/education.model");
class EducationController {
    async iueducation(req, res){
        res.send(await EducationModel.iueducation(req.body));
    };

    async getEducationForDDL(req, res){
        res.send(await EducationModel.getEducationForDDL());
    };

    async getEducationDetail(req, res){
        res.send(await EducationModel.getEducationDetail());
    };
    async getEducationDetailByID(req, res){
        res.send(await EducationModel.getEducationDetailByID(req.params.id));
    };
    async getEducationDelete(req, res){
        res.send(await EducationModel.getEducationDelete(req.params.id));
    };
}
module.exports=new EducationController();