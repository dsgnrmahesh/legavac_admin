var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Specialization{
    constructor(specialization){
        this.SpecializationID = specialization.SpecializationID;
        this.SpecializationName = specialization.SpecializationName;
        this.CourseID = specialization.CourseID;
        
        this.IsActive = specialization.IsActive;
        this.IsDeleted = specialization.IsDeleted;
        this.CreatedBy = specialization.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = specialization.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iuspecialization(specializationReqData){
        return await query(
            sp.sp_iuspecialization,
            [
                specializationReqData.SpecializationID,
                specializationReqData.SpecializationName,
                specializationReqData.CourseID,
                specializationReqData.CreatedBy
            ]
        );
    };
    async getSpecializationForDDL(){
        return await query(
            sp.sp_getspecializationforddl
        );
    };
    async getSpecializationDetail(){
        return await query(
            sp.sp_getallspecialization
        );
    };
    async getSpecializationDetailByID(id){
        return await query(
            sp.sp_getallspecializationid,
            [id]
        );
    };
    async getSpecializationDelete(id){
        return await query(
            sp.sp_deletespecialization,
            [id]
        );
    };
}
module.exports = new Specialization([]);

