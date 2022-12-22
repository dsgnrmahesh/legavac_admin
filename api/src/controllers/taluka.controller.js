const TalukaModel = require("../models/taluka.model");
class TalukaController {
    async iutaluka(req, res){
        res.send(await TalukaModel.iutaluka(req.body));
    };

    async getTalukaForDDL(req, res){
        res.send(await TalukaModel.getTalukaForDDL());
    };

    async getTalukaForDDLByDistrictID(req, res){
        res.send(await TalukaModel.getTalukaForDDLByDistrictID(req.params.DistrictID));
    };

    async  getTalukaDetail(req, res){
        res.send(await TalukaModel.getTalukaDetail());
    };
    async getTalukaDetailByID(req, res){
        res.send(await TalukaModel.getTalukaDetailByID(req.params.id));
    };
    async DeleteTaluka(req, res){
        res.send(await TalukaModel.DeleteTaluka(req.params.id));
    };
}
module.exports=new TalukaController();