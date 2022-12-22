var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Taluka{
    constructor(taluka){
        this.TalukaId = taluka.TalukaId;
        this.TalukaName = taluka.TalukaName;
        this.TalukaCode = taluka.TalukaCode;
        this.DistrictId = taluka.DistrictId;
        
        this.IsActive = taluka.IsActive;
        this.IsDeleted = taluka.IsDeleted;
        this.CreatedBy = taluka.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = taluka.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iutaluka(talukaReqData){
        return await query(
            sp.sp_iutaluka,
            [
                talukaReqData.TalukaId,
                talukaReqData.TalukaName,
                talukaReqData.TalukaCode,
                talukaReqData.DistrictId,
                talukaReqData.CreatedBy
            ]
        );
    };
    async getTalukaForDDL(){
        return await query(
            sp.sp_gettalukaforddl
        );
    };
    async getTalukaForDDLByDistrictID(DistrictId){
        return await query(
            sp.sp_gettalukaforddlbyDistrictId,
            [DistrictId]
        );
    };
    async getTalukaDetail(){
        return await query(
            sp.sp_getalltaluka
        );
    };
    async getTalukaDetailByID(id){
        return await query(
            sp.sp_getalltalukaid,
            [id]
        );
    };
    async DeleteTaluka(id){
        return await query(
            sp.sp_deletetaluka,
            [id]
        );
    };
}
module.exports = new Taluka([]);