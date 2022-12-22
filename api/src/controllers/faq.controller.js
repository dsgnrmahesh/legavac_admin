const FaqModel = require("../models/faq.model");
class FaqController {
    async iufaq(req, res){
        res.send(await FaqModel.iufaq(req.body));
    };

    async getFaqForDDL(req, res){
        res.send(await FaqModel.getFaqForDDL());
    };

    async getFaqDetail(req, res){
        res.send(await FaqModel.getFaqDetail());
    };
    async getFaqDetailByID(req, res){
        res.send(await FaqModel.getFaqDetailByID(req.params.id));
    };
    async getFaqDelete(req, res){
        res.send(await FaqModel.getFaqDelete(req.params.id));
    };
}
module.exports=new FaqController();