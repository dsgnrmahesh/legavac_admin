var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Faq{
    constructor(faq){
        this.FaqID = faq.FaqID;
        this.Question = faq.Question;
        this.Answer = faq.Answer;
        
        this.IsActive = faq.IsActive;
        this.IsDeleted = faq.IsDeleted;
        this.CreatedBy = faq.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = faq.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iufaq(faqReqData){
        return await query(
            sp.sp_iufaq,
            [
                faqReqData.FaqID,
                faqReqData.Question,
                faqReqData.Answer,
                faqReqData.CreatedBy
            ]
        );
    };
    async getFaqForDDL(){
        return await query(
            sp.sp_getfaqforddl
        );
    };
    async getFaqDetail(){
        return await query(
            sp.sp_getallfaq
        );
    };
    async getFaqDetailByID(id){
        return await query(
            sp.sp_getallfaqid,
            [id]
        );
    };
    async getFaqDelete(id){
        return await query(
            sp.sp_deletefaq,
            [id]
        );
    };
}
module.exports = new Faq([]);
