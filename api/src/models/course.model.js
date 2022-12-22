var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Course{
    constructor(course){
        this.CourseID = course.CourseID;
        this.CourseName = course.CourseName;
        this.EducationID = course.EducationID;
        
        this.IsActive = course.IsActive;
        this.IsDeleted = course.IsDeleted;
        this.CreatedBy = course.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = course.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucourse(courseReqData){
        return await query(
            sp.sp_iucourse,
            [
                courseReqData.CourseID,
                courseReqData.CourseName,
                courseReqData.EducationID,
                courseReqData.CreatedBy
            ]
        );
    };
    async getCourseForDDL(){
        return await query(
            sp.sp_getcourseforddl
        );
    };
    async getCourseDetail(){
        return await query(
            sp.sp_getallcourse
        );
    };
    async getCourseDetailByID(id){
        return await query(
            sp.sp_getallcourseid,
            [id]
        );
    };
    async getCourseDelete(id){
        return await query(
            sp.sp_deletecourse,
            [id]
        );
    };
}
module.exports = new Course([]);
