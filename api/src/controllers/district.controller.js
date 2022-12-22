const DistrictModel = require("../models/district.model");
class DistrictController {
    async iudistrict(req, res){
        res.send(await DistrictModel.iudistrict(req.body));
    };

    async getDistrictForDDL(req, res){
        res.send(await DistrictModel.getDistrictForDDL());
    };
    async getDistrictForDDLByServiceID(req, res){
        res.send(await DistrictModel.getDistrictForDDLByServiceID(req.params.id));
    };
    
    async getDistrictForDDLByCityID(req, res){
        res.send(await DistrictModel.getDistrictForDDLByCityID(req.params.CityID));
    };

    async  getDistrictDetail(req, res){
        res.send(await DistrictModel.getDistrictDetail());
    };
    async getDistrictDetailByID(req, res){
        res.send(await DistrictModel.getDistrictDetailByID(req.params.id));
    };
    async DeleteDistrict(req, res){
        res.send(await DistrictModel.DeleteDistrict(req.params.id));
    };
}
module.exports=new DistrictController();