var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Freejobalert{
    constructor(freejobalert){
        this.JobalertID = freejobalert.JobalertID;
        this.Keywords = freejobalert.Keywords;
        this.CityId = freejobalert.CityId;
        this.Workexpinyr = freejobalert.Workexpinyr;
        this.Workexpinmonth = freejobalert.Workexpinmonth;
        this.Salaryinlakh = freejobalert.Salaryinlakh;
        this.EmailID =freejobalert.EmailID;
        this.Sendmerelatedjob=freejobalert.Sendmerelatedjob;
        this.isContacted=freejobalert.isContacted;
        this.ContactedDate=freejobalert.ContactedDate;
        this.IsActive = freejobalert.IsActive;
        this.IsDeleted = freejobalert.IsDeleted;
        this.CreatedBy = freejobalert.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = freejobalert.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iufreejobalert(freejobalertReqData){
        return await query(
            sp.sp_iufreejobalert,
            [
                freejobalertReqData.JobalertID,
                freejobalertReqData.Keywords,
                freejobalertReqData.CityId,
                freejobalertReqData.Workexpinyr,
                freejobalertReqData.Workexpinmonth,
                freejobalertReqData.Salaryinlakh,
                freejobalertReqData.EmailID,
                freejobalertReqData.Sendmerelatedjob,
                freejobalertReqData.CreatedBy
            ]
        );
    };
    async  getFreejobalertForDDL(){
        return await query(
            sp.sp_getfreejobalertforddl
        );
    };
    async getFreejobalertDetail(){
        return await query(
            sp.sp_getallfreejobalert
        );
    };
    async getFreejobalertDetailByID(id){
        return await query(
            sp.sp_getfreejobalertid,
            [id]
        );
    };
    async getFreejobalertDelete(id){
        return await query(
            sp.sp_deletefreejobalert,
            [id]
        );
    };
    async getFreejobalertDetailSearchText(searchtext){
        //console.log(freejobalertReqData);
        return await query(
            sp.sp_getallfreejobalertsearch,
            [searchtext]
        );
    };
    async getDdlForFreeJob(){
        return await query(
            sp.sp_getddlforfreejob
        );
    };
}
module.exports = new Freejobalert([]);

