var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");



class Postjob{
    constructor(postjob){
        this.PostjobID = postjob. PostjobID;
        this.CompanyName = postjob.CompanyName;
        this.CompanyEmailID = postjob.CompanyEmailID;
        this.JobDescription = postjob.JobDescription;
        this.JobTitleId = postjob.JobTitleId;
        this.SubJobTitleId = postjob.SubJobTitleId;
        this.CountryId = postjob. CountryId;
        this.StateId = postjob. StateId;
        this.CityId = postjob. CityId;
        this.DistrictId = postjob. DistrictId;
        this.TalukaId = postjob. TalukaId;
        this.SpecializationID = postjob.SpecializationID;
        this.CourseID = postjob.CourseID;
        this.EducationID = postjob.EducationID;
        this.Address = postjob.Address;
        this.Salaryinlakh = postjob.Salaryinlakh;
        this.JobType = postjob.JobType;
        this.NumberOfHireEmployee = postjob.NumberOfHireEmployee;
        this.Responsibilities = postjob.Responsibilities;
        this.Qualifications = postjob.Qualifications;
        this.Requirements = postjob.Requirements;
        this.Benefits = postjob.Benefits;
        this.Jobschedule = postjob.Jobschedule;
        this.SupplementalPay = postjob.SupplementalPay;
        this.ExperienceInY = postjob.ExperienceInY;
        this.ExperienceInM = postjob.ExperienceInM;
        this.PreferedLanguage = postjob.PreferedLanguage;
        this.WorkRemotely = postjob.WorkRemotely;
        this.JobPostDate = postjob.JobPostDate;
       // this.SeachText = postjob.SeachText;
        this.SearchText = postjob.SearchText;
        this.Experience = postjob.Experience;
        
        
	
        this.IsActive = postjob.IsActive;
        this.IsDeleted = postjob.IsDeleted;
        this.CreatedBy = postjob.CreatedBy;
        this.CreatedDate = postjob.currentdata;
        this.LastModifiedBy = postjob.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iupostjob(postjobReqData){
        return await query(
            sp.sp_iupostjob,
            [
                postjobReqData.PostjobID,
                postjobReqData.CompanyName,
               postjobReqData.CompanyEmailID,
                postjobReqData.JobDescription,
                postjobReqData.JobTitleId,
                postjobReqData.SubJobTitleId,
                postjobReqData.CountryId,
                postjobReqData.StateId,
                postjobReqData.CityId,
                postjobReqData.DistrictId,
                postjobReqData.TalukaId,
                postjobReqData.JobType,
                postjobReqData.NumberOfHireEmployee,
                postjobReqData.Qualifications,
                postjobReqData.ExperienceInY,
                postjobReqData.ExperienceInM,
                postjobReqData.CreatedBy
            ]
        );
    };
    async  getPostjobForDDL(){
        return await query(
            sp.sp_getpostjobforddl
        );
    };
    async getPostjobDetail(){
        return await query(
            sp.sp_getallpostjob
        );
    };
    async getPostjobDetailByWhereCondition(postjobReqData){
        return await query(
            sp.sp_getallpostjobbywherecondition,
            [postjobReqData.SearchText,
            postjobReqData.JobTitleId,
            postjobReqData.SubJobTitleId,
            postjobReqData.CityId,
            postjobReqData.CompanyName,
            postjobReqData.Experience,]
        );
    };
    async getPostjobDetailByID(id){
        return await query(
            sp.sp_getallpostjobid,
            [id]
        );
    };
    async getPostjobDelete(id){
        return await query(
            sp.sp_deletepostjob,
            [id]
        );
    };
    async getPostjobFilterList(postjobReqData){
        return await query(
            sp.sp_postedjobfilterlist,
            [postjobReqData.JobTitleId]
        );
    };
    async getPostJobForHome(){
        return await query(
            sp.sp_getpostjobforhome
        );
    }
}
module.exports = new Postjob([]);