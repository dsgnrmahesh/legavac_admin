const SkillModel = require("../models/skill.model");
class SkillController {
    async iuskill(req, res){
        res.send(await SkillModel.iuskill(req.body));
    };

    async getSkillForDDL(req, res){
        res.send(await SkillModel.getSkillForDDL());
    };

    async getSkillDetail(req, res){
        res.send(await SkillModel.getSkillDetail());
    };
    async getSkillDetailByID(req, res){
        res.send(await SkillModel.getSkillDetailByID(req.params.id));
    };
    async getSkillDelete(req, res){
        res.send(await SkillModel.getSkillDelete(req.params.id));
    };
}
module.exports=new SkillController();