const TestimonialModel = require("../models/testimonial.model");
class TestimonialController {
    async iutestimonial(req, res){
        res.send(await TestimonialModel.iutestimonial(req.body));
    };

    async getTestimonialForDDL(req, res){
        res.send(await TestimonialModel. getTestimonialForDDL());
    };

    async getTestimonialDetail(req, res){
        res.send(await TestimonialModel.getTestimonialDetail());
    };
    async getTestimonialDetailByID(req, res){
        res.send(await TestimonialModel.getTestimonialDetailByID(req.params.id));
    };
    async getTestimonialDelete(req, res){
        res.send(await TestimonialModel.getTestimonialDelete(req.params.id));
    };
    async getTestimonialDetailSearchText(req, res){
        res.send(await TestimonialModel.getTestimonialDetailSearchText(req.params.searchtext));
    };
    async getTestimonialDetailForHome(req, res){
        res.send(await TestimonialModel.getTestimonialDetailForHome());
    };
}
module.exports=new TestimonialController();

