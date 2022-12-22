var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class CareerAdvice{
    constructor(careeradvice){
        this.Caid = careeradvice.Caid;
        this.Title = careeradvice.Title;
        this.VideoImage = careeradvice.VideoImage;
        this.Video = careeradvice.Video;
        
        this.IsActive = careeradvice.IsActive;
        this.IsDeleted = careeradvice.IsDeleted;
        this.CreatedBy = careeradvice.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = careeradvice.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucareeradvice(careeradviceReqData){
        return await query(
            sp.sp_iucareeradvice,
            [
                careeradviceReqData.Caid,
                careeradviceReqData.Title,
                careeradviceReqData.VideoImage,
                careeradviceReqData.Video,
                careeradviceReqData.CreatedBy
            ]
        );
    };
    async getCareeradviceForDDL(){
        return await query(
            sp.sp_getcareeradviceforddl
        );
    };
    async getCareeradviceDetail(){
        return await query(
            sp.sp_getallcareeradvice
        );
    };
    async getCareeradviceDetailByID(id){
        return await query(
            sp.sp_getallcareeradviceid,
            [id]
        );
    };
    async getCareeradviceDelete(id){
        return await query(
            sp.sp_deletecareeradvice,
            [id]
        );
    };
    async getCareerAdviceDetailSearchText(searchtext){
        return await query(
            sp.sp_getallcareeradvicesearch,
            [searchtext]
        );
    };
}
module.exports = new CareerAdvice([]);
