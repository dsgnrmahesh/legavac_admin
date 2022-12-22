const FreejobalertModel = require("../models/freejobalert.model");
class FreejobalertController {
    async iufreejobalert(req, res){
        res.send(await FreejobalertModel.iufreejobalert(req.body));
    };

    async getFreejobalertForDDL(req, res){
        res.send(await FreejobalertModel.getFreejobalertForDDL());
    };

    async getFreejobalertDetail(req, res){
        res.send(await FreejobalertModel.getFreejobalertDetail());
    };
    async getFreejobalertDetailByID(req, res){
        res.send(await FreejobalertModel.getFreejobalertDetailByID(req.params.id));
    };
    async getFreejobalertDelete(req, res){
        res.send(await FreejobalertModel.getFreejobalertDelete(req.params.id));
    };
    async getFreejobalertDetailSearchText(req, res){
        res.send(await FreejobalertModel.getFreejobalertDetailSearchText(req.params.searchtext));
    };
    async getDdlForFreeJob(req, res){
        res.send(await FreejobalertModel.getDdlForFreeJob());
    };
}
module.exports=new   FreejobalertController();