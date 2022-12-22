const MembershipplanfeatureModel = require("../models/membershipplanfeature.model");
class MembershipplanfeatureController {
    async iumembershipplanfeature(req, res){
        res.send(await MembershipplanfeatureModel.iumembershipplanfeature(req.body));
    };

    async getMembershipplanfeatureForDDL(req, res){
        res.send(await MembershipplanfeatureModel.getMembershipplanfeatureForDDL());
    };

    async getMembershipplanfeatureDetail(req, res){
        res.send(await MembershipplanfeatureModel.getMembershipplanfeatureDetail());
    };
    async getMembershipPlanFeatureDetailByID(req, res){
        res.send(await MembershipplanfeatureModel.getMembershipPlanFeatureDetailByID(req.params.id));
    };
    async getMembershipPlanFeatureDelete(req, res){
        res.send(await MembershipplanfeatureModel.getMembershipPlanFeatureDelete(req.params.id));
    };
}
module.exports=new MembershipplanfeatureController();