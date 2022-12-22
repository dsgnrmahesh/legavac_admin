const AffilationModel = require("../models/affilation.model");
class AffilationController {
    async iuaffilation(req, res){
        res.send(await AffilationModel.iuaffilation(req.body));
    };

    async getAffilationForDDL(req, res){
        res.send(await AffilationModel. getAffilationForDDL());
    };

    async getAffilationDetail(req, res){
        res.send(await AffilationModel.getAffilationDetail());
    };
    async getAffilationDetailByID(req, res){
        res.send(await AffilationModel.getAffilationDetailByID(req.params.id));
    };
    async getAffilationDelete(req, res){
        res.send(await AffilationModel.getAffilationDelete(req.params.id));
    };
    async getAffilationDetailSearchText(req, res){
        res.send(await AffilationModel.getAffilationDetailSearchText(req.params.searchtext));
    };
}
module.exports=new AffilationController();