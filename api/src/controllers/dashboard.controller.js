const DashboardMasterModel = require("../models/dashboard.model");
class DashboardMasterController {
    async getDashboardCount(req, res){
        res.send(await DashboardMasterModel.getDashboardCount());
    };
    async getDashboardServiceDetail(req, res){
        res.send(await DashboardMasterModel.getDashboardServiceDetail(req.body));
    };
}
module.exports=new DashboardMasterController();