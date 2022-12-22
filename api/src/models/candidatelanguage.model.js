var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class CandidateLanguage{
    constructor(candidatelanguage){
        this.CandidatelanguageID = candidatelanguage.CandidatelanguageID;
        this.CandidateID = candidatelanguage.CandidateID;
        this.Language = candidatelanguage.Language;
        this.Proficiency = candidatelanguage.Proficiency;
        this.Readlan = candidatelanguage.Readlan;
        this.Writelan = candidatelanguage.Writelan;
        this.Speak = candidatelanguage.Speak;
        
        this.IsActive = candidatelanguage.IsActive;
        this.IsDeleted = candidatelanguage.IsDeleted;
        this.CreatedBy = candidatelanguage.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = candidatelanguage.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucandidatelanguage(candidatelanguageReqData){
        return await query(
            sp.sp_iucandidatelanguage,
            [
                candidatelanguageReqData.CandidatelanguageID,
                candidatelanguageReqData.CandidateID,
                candidatelanguageReqData.Language,
                candidatelanguageReqData.Proficiency,
                candidatelanguageReqData.Readlan,
                candidatelanguageReqData.Writelan,
                candidatelanguageReqData.Speak,
                candidatelanguageReqData.CreatedBy
            ]
        );
    };
    async getCandidatelanguageForDDL(){
        return await query(
            sp.sp_getcandidatelanguageforddl
        );
    };
    async getCandidatelanguageDetail(){
        return await query(
            sp.sp_getallcandidatelanguage
        );
    };
    async getCandidatelanguageDetailByID(id){
        return await query(
            sp.sp_getallcandidatelanguageid,
            [id]
        );
    };
    async getCandidatelanguageDelete(id){
        return await query(
            sp.sp_deletecandidatelanguage,
            [id]
        );
    };
}
module.exports = new CandidateLanguage([]);
