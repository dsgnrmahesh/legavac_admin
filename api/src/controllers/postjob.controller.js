const PostjobModel = require("../models/postjob.model");
class PostjobController {
    async iupostjob(req, res){
        res.send(await PostjobModel.iupostjob(req.body));
    };

    async getPostjobForDDL(req, res){
        res.send(await PostjobModel. getPostjobForDDL());
    };

    async getPostjobDetail(req, res){
        res.send(await PostjobModel.getPostjobDetail(req.params.seachtext));
    };
    async getPostjobDetailByWhereCondition(req, res){
        res.send(await PostjobModel.getPostjobDetailByWhereCondition(req.body));
    };
    async getPostjobDetailByID(req, res){
        res.send(await PostjobModel.getPostjobDetailByID(req.params.id));
    };
    async getPostjobDelete(req, res){
        res.send(await PostjobModel.getPostjobDelete(req.params.id));
    };
    async getPostjobFilterList(req, res){
        res.send(await PostjobModel.getPostjobFilterList(req.body));
    };
    async getPostJobForHome(req,res){
        res.send(await PostjobModel.getPostJobForHome());
    }
}
module.exports=new PostjobController();

