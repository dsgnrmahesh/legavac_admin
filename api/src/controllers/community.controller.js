const CommunityModel = require("../models/community.model");
class CommunityController {
    async iucommunity(req, res){
        res.send(await CommunityModel.iucommunity(req.body));
    };

    async getCommunityForDDL(req, res){
        res.send(await CommunityModel.getCommunityForDDL());
    };

    async getCommunityDetail(req, res){
        res.send(await CommunityModel.getCommunityDetail());
    };
    async getCommunityDetailByID(req, res){
        res.send(await CommunityModel.getCommunityDetailByID(req.params.id));
    };
    async getCommunityDelete(req, res){
        res.send(await CommunityModel.getCommunityDelete(req.params.id));
    };
}
module.exports=new CommunityController();