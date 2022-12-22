var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Skill{
    constructor(skill){
        this.SkillID = skill.SkillID;
        this.Skill = skill.Skill;
        
        this.IsActive = skill.IsActive;
        this.IsDeleted = skill.IsDeleted;
        this.CreatedBy = skill.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = skill.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iuskill(skillReqData){
        return await query(
            sp.sp_iuskill,
            [
                skillReqData.SkillID,
                skillReqData.Skill,
                skillReqData.CreatedBy
            ]
        );
    };
    async getSkillForDDL(){
        return await query(
            sp.sp_getskillforddl
        );
    };
    async getSkillDetail(){
        return await query(
            sp.sp_getallskill
        );
    };
    async getSkillDetailByID(id){
        return await query(
            sp.sp_getallskillid,
            [id]
        );
    };
    async getSkillDelete(id){
        return await query(
            sp.sp_deleteskill,
            [id]
        );
    };
}
module.exports = new Skill([]);

