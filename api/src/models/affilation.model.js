var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");



class Affilation{
    constructor(affilation){
        this.AffilationID = affilation.AffilationID;
        this.Title = affilation.Title;
        this.Pdf = affilation.Pdf;
        this.Image=affilation.Image;
        
        this.IsActive = affilation.IsActive;
        this.IsDeleted = affilation.IsDeleted;
        this.CreatedBy = affilation.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = affilation.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iuaffilation(affilationReqData){
        return await query(
            sp.sp_iuaffilation,
            [
                affilationReqData.AffilationID,
                affilationReqData.Title,
                affilationReqData.Pdf,
                affilationReqData.Image,
                affilationReqData.CreatedBy
            ]
        );
    };
    async  getAffilationForDDL(){
        return await query(
            sp.sp_getaffilationforddl
        );
    };
    async getAffilationDetail(){
        return await query(
            sp.sp_getallaffilation
        );
    };
    async getAffilationDetailByID(id){
        return await query(
            sp.sp_getallaffilationid,
            [id]
        );
    };
    async getAffilationDelete(id){
        return await query(
            sp.sp_deleteaffilation,
            [id]
        );
    };
    async getAffilationDetailSearchText(searchtext){
        return await query(
            sp.sp_getallaffilationsearch,
            [searchtext]
        );
    };
}
module.exports = new Affilation([]);

