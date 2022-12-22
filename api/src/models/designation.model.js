var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Designation{
    constructor(designation){
        this.DesignationId = designation.ID;
        this.DesignationName = designation.Name;

        this.IsActive = designation.IsActive;
        this.IsDeleted = designation.IsDeleted;
        this.CreatedBy = designation.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = designation.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iudesignation(designationReqData){
        return await query(
            sp.sp_iudesignation,
            [
                designationReqData.ID,
                designationReqData.Name,
                designationReqData.CreatedBy
            ]
        );
    };
    async getDesignationForDDL(){
        return await query(
            sp.sp_getdesignationforddl
        );
    };
    
}
module.exports = new Designation([]);