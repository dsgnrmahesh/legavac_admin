var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Candidate{
    constructor(candidate){
        this.CandidateID = candidate.CandidateID;
        this.FirstName = candidate.FirstName;
        this.MiddleName = candidate.MiddleName;
        this.LastName = candidate.LastName;
        this.Mobile = candidate.Mobile;
        this.EmailID = candidate.EmailID;
        this.Password = candidate.Password;
        this.Dateofbirth = candidate.Dateofbirth!==''?candidate.Dateofbirth:"0000-00-00";
        this.GenderID = candidate.GenderID;
        this.Gender = candidate.Gender;
        this.Hometown = candidate.Hometown;
        this.Pincode = candidate.Pincode;
        this.WorkpermitforUSA = candidate.WorkpermitforUSA;
        this.Workpermitforothercountry = candidate.Workpermitforothercountry;
        this.CommunityID = candidate.CommunityID;
        this.Resumepath = candidate.Resumepath;
        this.LookingFor = candidate.LookingFor;
        this.WorkExpInY=candidate.WorkExpInY;
        this.WorkExpInM=candidate.WorkExpInM;
        this.Searchtext=candidate.Searchtext;
        this.Exp=candidate.Exp;
        this.Salary=candidate.Salary;
        
        this.AppliedjobID=candidate.AppliedjobID;
        this.JobID=candidate.JobID;
        
        this.IsActive = candidate.IsActive;
        this.IsDeleted = candidate.IsDeleted;
        this.CreatedBy = candidate.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = candidate.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucandidate(candidateReqData){
        return await query(
            sp.sp_iucandidate,
            [
                candidateReqData.CandidateID,
                candidateReqData.FirstName,
                candidateReqData.MiddleName,
                candidateReqData.LastName,
                candidateReqData.Mobile,
                candidateReqData.EmailID,
                candidateReqData.Password,
                candidateReqData.Dateofbirth,
                candidateReqData.GenderID,
                candidateReqData.Gender,
                candidateReqData.Hometown,
                candidateReqData.Pincode,
                candidateReqData.WorkpermitforUSA,
                candidateReqData.Workpermitforothercountry,
                candidateReqData.CommunityID,
                candidateReqData.Resumepath,
                candidateReqData.LookingFor,
                candidateReqData.CreatedBy
            ]
        );
    };
    async getCandidateForDDL(){
        return await query(
            sp.sp_getcandidateforddl
        );
    };
    async getCandidateDetail(){
        return await query(
            sp.sp_getallcandidate
        );
    };
    async getCandidateDetailSearchText(candidateReqData){
        return await query(
            sp.sp_getallcandidatesearch,
            [candidateReqData.Searchtext,candidateReqData.Exp,candidateReqData.Salary]
        );
    };
    async getCandidateDetailByID(id){
        return await query(
            sp.sp_getallcandidateid,
            [id]
        );
    };
    async getCandidateDelete(id){
        return await query(
            sp.sp_deletecandidate,
            [id]
        );
    };
    async candidateregistration(candidateReqData){
        return await query(
            sp.sp_candidateregistration,
            [
                candidateReqData.EmailID,
                candidateReqData.Password,
            ]
        );
    };
    async updatecandidatelooking(candidateReqData){
        return await query(
            sp.sp_updatecandidatelooking,
            [
                candidateReqData.CandidateID,
                candidateReqData.LookingFor,
            ]
        );
    };
    async updatecandidate(candidateReqData){
        return await query(
            sp.sp_updatecandidate,
            [
                candidateReqData.CandidateID,
                candidateReqData.FirstName,
                candidateReqData.MiddleName,
                candidateReqData.LastName,
                candidateReqData.Mobile,
                candidateReqData.Dateofbirth,
                candidateReqData.GenderID,
                candidateReqData.Gender,
                candidateReqData.Hometown,
                candidateReqData.Pincode,
                candidateReqData.WorkpermitforUSA,
                candidateReqData.Workpermitforothercountry,
                candidateReqData.CommunityID,
                candidateReqData.Resumepath,
                candidateReqData.WorkExpInY,
                candidateReqData.WorkExpInM,
                candidateReqData.CreatedBy
            ]
        );
    };
    async getlogindetail(candidateReqData){
        return await query(
            sp.sp_getlogindetail,
            [
                candidateReqData.EmailID,
                candidateReqData.Password,
            ]
        );
    };
    
     async iuappliedjob(candidateReqData){
        return await query(
            sp.sp_iuappliedjob,
            [
                candidateReqData.AppliedjobID,
                candidateReqData.CandidateID,
                candidateReqData.JobID,
                candidateReqData.CreatedBy
            ]
        );
    };
    async getappliedjobbycandidate(id){
        return await query(
            sp.sp_getappliedjoblistbycandidateid,
            [
                id
            ]
        );
    };
    async getappliedjobdetail(){
        return await query(
            sp.sp_getappliedjobdetail
        );
    };
    async deleteappliedjob(id){
        return await query(
            sp.sp_deleteappliedjob,
            [id]
        );
    };
    
}
module.exports = new Candidate([]);
