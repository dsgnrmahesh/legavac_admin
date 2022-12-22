var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class CandidateSkill{
    constructor(candidateskill){
        this.CandidateskillID = candidateskill.CandidateskillID;
        this.Skill = candidateskill.Skill;
        
        this.IsActive = candidateskill.IsActive;
        this.IsDeleted = candidateskill.IsDeleted;
        this.CreatedBy = candidateskill.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = candidateskill.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucandidateskill(candidateskillReqData){
        return await query(
            sp.sp_iucandidateskill,
            [
                candidateskillReqData.CandidateskillID,
                candidateskillReqData.Skill,
                candidateskillReqData.CreatedBy
            ]
        );
    };
    async getCandidateskillForDDL(){
        return await query(
            sp.sp_getcandidateskillforddl
        );
    };
    async getCandidateskillDetail(){
        return await query(
            sp.sp_getallcandidateskill
        );
    };
    async getCandidateskillDetailByID(id){
        return await query(
            sp.sp_getallcandidateskillid,
            [id]
        );
    };
    async getCandidateskillDelete(id){
        return await query(
            sp.sp_deletecandidateskill,
            [id]
        );
    };
}
module.exports = new CandidateSkill([]);

