const DesignationModel = require("../models/designation.model");
class DesignationController {
    async iudesignation(req, res){
        res.send(await DesignationModel.iudesignation(req.body));
    };

    async getDesignationForDDL(req, res){
        res.send(await DesignationModel.getDesignationForDDL());
    };
    
}
module.exports=new DesignationController();