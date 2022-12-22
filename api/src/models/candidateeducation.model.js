var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class CandidateEducation{
    constructor(candidateeducation){
        this.CandidateeducationID = candidateeducation.CandidateeducationID;
        this.CandidateID = candidateeducation.CandidateID;
        this.Education=candidateeducation.Education,
        this.Degree = candidateeducation.Degree;
        this.MatriStatus = candidateeducation.MatriStatus;
        this.Institutename = candidateeducation.Institutename;
        this.CollegeName = candidateeducation.CollegeName;
        this.StartYear = candidateeducation.StartYear;
        this.EndYear = candidateeducation.EndYear;
        this.YearOfCompletion = candidateeducation.YearOfCompletion;
        this.Board = candidateeducation.Board;
        this.PerformanceScale = candidateeducation.PerformanceScale;
        this.Performance = candidateeducation.Performance;
        this.Stream = candidateeducation.Stream;
        
        this.IsActive = candidateeducation.IsActive;
        this.IsDeleted = candidateeducation.IsDeleted;
        this.CreatedBy = candidateeducation.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = candidateeducation.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucandidateeducation(candidateeducationReqData){
        return await query(
            sp.sp_iucandidateeducation,
            [
                candidateeducationReqData.CandidateeducationID,
                candidateeducationReqData.CandidateID,
                candidateeducationReqData.Education,
                candidateeducationReqData.Degree,
                candidateeducationReqData.MatriStatus,
                candidateeducationReqData.Institutename,
                candidateeducationReqData.CollegeName,
                candidateeducationReqData.StartYear,
                candidateeducationReqData.EndYear,
                candidateeducationReqData.YearOfCompletion,
                candidateeducationReqData.Board,
                candidateeducationReqData.PerformanceScale,
                candidateeducationReqData.Performance,
                candidateeducationReqData.Stream,
                candidateeducationReqData.CreatedBy
            ]
        );
    };
    async getCandidateeducationForDDL(){
        return await query(
            sp.sp_getcandidateeducationforddl
        );
    };
    async getCandidateeducationDetail(id){
        return await query(
            sp.sp_getallcandidateeducation,
            [id]
        );
    };
    async getCandidateeducationDetailByID(id){
        return await query(
            sp.sp_getallcandidateeducationid,
            [id]
        );
    };
    async getCandidateeducationDelete(id){
        return await query(
            sp.sp_deletecandidateeducation,
            [id]
        );
    };
}
module.exports = new CandidateEducation([]);
