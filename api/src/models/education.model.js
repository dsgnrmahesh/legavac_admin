var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Education{
    constructor(education){
        this.EducationID = education.EducationID;
        this.EducationName = education.EducationName;
        
        this.IsActive = education.IsActive;
        this.IsDeleted = education.IsDeleted;
        this.CreatedBy = education.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = education.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iueducation(educationReqData){
        return await query(
            sp.sp_iueducation,
            [
                educationReqData.EducationID,
                educationReqData.EducationName,
                educationReqData.CreatedBy
            ]
        );
    };
    async getEducationForDDL(){
        return await query(
            sp.sp_geteducationforddl
        );
    };
    async getEducationDetail(){
        return await query(
            sp.sp_getalleducation
        );
    };
    async getEducationDetailByID(id){
        return await query(
            sp.sp_getalleducationid,
            [id]
        );
    };
    async getEducationDelete(id){
        return await query(
            sp.sp_deleteeducation,
            [id]
        );
    };
}
module.exports = new Education([]);

