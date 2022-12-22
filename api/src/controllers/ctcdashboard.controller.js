const CTCDashboardModel = require("../models/CTCDashboard.model");
class CTCDashboardController {

    async iuCTCDashboard(req, res){
        res.send(await CTCDashboardModel.iuctcdashboard(req.body));
    };
    async getCTCDashboardDetail(req, res){
        res.send(await CTCDashboardModel.getctcdashboarddetail(req.params.id));
    };
    async getCTCDashboardByID(req, res){
        res.send(await CTCDashboardModel.getctcdashboardbyid(req.params.id));
    };
    
    async deleteCTCDashboard(req, res){
        res.send(await CTCDashboardModel.deletectcdashboard(req.params.id));
    };

    async getCTCDashboardDetailForAdmin(req, res){
        res.send(await CTCDashboardModel.getctcdashboarddetailforadmin(req.params.searchtext));
    };
    async getCTCDashboardDetailForAdminByExecutiveID(req, res){
        res.send(await CTCDashboardModel.getctcdashboarddetailforadminbyexecutiveid(req.body));
    };

    async getCTCDashboardByID_invoice(req, res){
        res.send(await CTCDashboardModel.getctcdashboardbyid_invoice(req.params.id));
    };
}
module.exports=new CTCDashboardController();