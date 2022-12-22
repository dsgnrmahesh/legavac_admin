var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");



class Testimonial{
    constructor(testimonial){
        this.TestimonialId = testimonial.TestimonialId;
        this.TmName = testimonial.TmName;
        this.EmailID = testimonial.EmailID;
        this. Mobile = testimonial. Mobile;
        this.Image = testimonial.Image;
        this.TmDescription = testimonial.TmDescription;
        
        
        this.IsActive = testimonial.IsActive;
        this.IsDeleted = testimonial.IsDeleted;
        this.CreatedBy = testimonial.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = testimonial.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iutestimonial(testimonialReqData){
        return await query(
            sp.sp_iutestimonial,
            [
                testimonialReqData.TestimonialId,
                testimonialReqData.TmName,
                testimonialReqData.EmailID,
                testimonialReqData. Mobile,
                testimonialReqData.Image,
                testimonialReqData.TmDescription,
                testimonialReqData.CreatedBy
            ]
        );
    };
    async  getTestimonialForDDL(){
        return await query(
            sp.sp_gettestimonialforddl
        );
    };
    async getTestimonialDetail(){
        return await query(
            sp.sp_getalltestimonial
        );
    };
    async getTestimonialDetailByID(id){
        return await query(
            sp.sp_getalltestimonialid,
            [id]
        );
    };
    async getTestimonialDelete(id){
        return await query(
            sp.sp_deletetestimonial,
            [id]
        );
    };
    async getTestimonialDetailSearchText(searchtext){
        return await query(
            sp.sp_getalltestimonialsearch,
            [searchtext]
        );
    };
    async getTestimonialDetailForHome(){
        return await query(
            sp.sp_gettestimonialforhome
        );
    };
}
module.exports = new Testimonial([]);


