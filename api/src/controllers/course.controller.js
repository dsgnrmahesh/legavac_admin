const CourseModel = require("../models/course.model");
class CourseController {
    async iucourse(req, res){
        res.send(await CourseModel.iucourse(req.body));
    };

    async getCourseForDDL(req, res){
        res.send(await CourseModel.getCourseForDDL());
    };

    async getCourseDetail(req, res){
        res.send(await CourseModel.getCourseDetail());
    };
    async getCourseDetailByID(req, res){
        res.send(await CourseModel.getCourseDetailByID(req.params.id));
    };
    async getCourseDelete(req, res){
        res.send(await CourseModel.getCourseDelete(req.params.id));
    };
}
module.exports=new CourseController();