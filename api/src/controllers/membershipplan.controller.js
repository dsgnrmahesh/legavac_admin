const MembershipplanModel = require("../models/membershipplan.model");
class MembershipplanController {
    async iumembershipplan(req, res){
        res.send(await MembershipplanModel.iumembershipplan(req.body));
    };

    async getMembershipplanForDDL(req, res){
        res.send(await MembershipplanModel. getMembershipplanForDDL());
    };

    async getMembershipplanDetail(req, res){
        res.send(await MembershipplanModel.getMembershipplanDetail());
    };
    async getMembershipplanDetailByID(req, res){
        res.send(await MembershipplanModel.getMembershipplanDetailByID(req.params.id));
    };
    async getMembershipplanDelete(req, res){
        res.send(await MembershipplanModel.getMembershipplanDelete(req.params.id));
    };

    async getMembershipplanDetailSearchText(req, res){
        res.send(await MembershipplanModel.getMembershipplanDetailSearchText(req.params.searchtext));
    };
    async getMembershipPlanForWeb(req, res){
        res.send(await MembershipplanModel.getMembershipPlanForWeb());
    };
}
module.exports=new MembershipplanController();