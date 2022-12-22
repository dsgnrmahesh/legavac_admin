var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Workpermitforusa{
    constructor(workpermitforusa){
        this.ID = workpermitforusa.ID;
        this.Name = workpermitforusa.Name;
        
        this.IsActive = workpermitforusa.IsActive;
        this.IsDeleted = workpermitforusa.IsDeleted;
        this.CreatedBy = workpermitforusa.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = workpermitforusa.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iuworkpermitforusa(workpermitforusaReqData){
        return await query(
            sp.sp_iuworkpermitforusa,
            [
                workpermitforusaReqData.ID,
                workpermitforusaReqData.Name,
                workpermitforusaReqData.CreatedBy
            ]
        );
    };
    async  getWorkpermitforusaForDDL(){
        return await query(
            sp.sp_getworkpermitforusaforddl
        );
    };
    async getWorkpermitforusaDetail(){
        return await query(
            sp.sp_getallworkpermitforusa
        );
    };
    async getWorkpermitforusaDetailByID(id){
        return await query(
            sp.sp_getallworkpermitforusaid,
            [id]
        );
    };
    async getWorkpermitforusaDelete(id){
        return await query(
            sp.sp_deleteworkpermitforusa,
            [id]
        );
    };
}
module.exports = new Workpermitforusa([]);

