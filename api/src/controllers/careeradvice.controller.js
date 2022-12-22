const CareeradviceModel = require("../models/careeradvice.model");
class CareeradviceController {
    async iucareeradvice(req, res){
        res.send(await CareeradviceModel.iucareeradvice(req.body));
    };

    async getCareeradviceForDDL(req, res){
        res.send(await CareeradviceModel.getCareeradviceForDDL());
    };

    async getCareeradviceDetail(req, res){
        res.send(await CareeradviceModel.getCareeradviceDetail());
    };
    async getCareeradviceDetailByID(req, res){
        res.send(await CareeradviceModel.getCareeradviceDetailByID(req.params.id));
    };
    async getCareeradviceDelete(req, res){
        res.send(await CareeradviceModel.getCareeradviceDelete(req.params.id));
    };
    async getCareerAdviceDetailSearchText(req, res){
        res.send(await CareeradviceModel.getCareerAdviceDetailSearchText(req.params.searchtext));
    };
}
module.exports=new CareeradviceController();