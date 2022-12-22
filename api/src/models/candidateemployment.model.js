var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class CandidateEmplotment{
    constructor(candidateemployment){
        this.CandidateemploymentID = candidateemployment.CandidateemploymentID;
        this.CandidateID = candidateemployment.CandidateID;
        this.Companyname = candidateemployment.Companyname;
        this.JobTitle = candidateemployment.JobTitle;
        this.AnnualSalaryInLakh = candidateemployment.AnnualSalaryInLakh;
        this.AnnualSalaryInThousand = candidateemployment.AnnualSalaryInThousand;
        this.JoiningDateInY = candidateemployment.JoiningDateInY;
        this.JoiningDateInM = candidateemployment.JoiningDateInM;
        this.RelivingDateInY = candidateemployment.RelivingDateInY;
        this.RelivingDateInM = candidateemployment.RelivingDateInM;
        this.City = candidateemployment.City;
        this.NoticePeriod = candidateemployment.NoticePeriod;
        
        this.IsActive = candidateemployment.IsActive;
        this.IsDeleted = candidateemployment.IsDeleted;
        this.CreatedBy = candidateemployment.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = candidateemployment.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucandidateemployment(candidateemploymentReqData){
        return await query(
            sp.sp_iucandidateemployment,
            [
                candidateemploymentReqData.CandidateemploymentID,
                candidateemploymentReqData.CandidateID,
                candidateemploymentReqData.Companyname,
                candidateemploymentReqData.JobTitle,
                candidateemploymentReqData.AnnualSalaryInLakh,
                candidateemploymentReqData.AnnualSalaryInThousand,
                candidateemploymentReqData.JoiningDateInY,
                candidateemploymentReqData.JoiningDateInM,
                candidateemploymentReqData.RelivingDateInY,
                candidateemploymentReqData.RelivingDateInM,
                candidateemploymentReqData.City,
                candidateemploymentReqData.NoticePeriod,
                candidateemploymentReqData.CreatedBy
            ]
        );
    };
    async getCandidateEmploymentDetailByID(id){
        return await query(
            sp.sp_getcandidateemploymentid,
            [id]
        );
    };
    
}
module.exports = new CandidateEmplotment([]);
