const WorkpermitforusaModel = require("../models/workpermitforusa.model");
class  WorkpermitforusaController {
    async iuworkpermitforusa(req, res){
        res.send(await  WorkpermitforusaModel.iuworkpermitforusa(req.body));
    };

    async getWorkpermitforusaForDDL(req, res){
        res.send(await  WorkpermitforusaModel.getWorkpermitforusaForDDL());
    };

    async getWorkpermitforusaDetail(req, res){
        res.send(await  WorkpermitforusaModel.getWorkpermitforusaDetail());
    };
    async getWorkpermitforusaDetailByID(req, res){
        res.send(await  WorkpermitforusaModel.getWorkpermitforusaDetailByID(req.params.id));
    };
    async getWorkpermitforusaDelete(req, res){
        res.send(await  WorkpermitforusaModel.getWorkpermitforusaDelete(req.params.id));
    };
}
module.exports=new  WorkpermitforusaController();