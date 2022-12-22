const ArticleModel = require("../models/article.model");
class ArticleController {
    async iuarticle(req, res){
        res.send(await ArticleModel.iuarticle(req.body));
    };

    async getArticleForDDL(req, res){
        res.send(await ArticleModel.getArticleForDDL());
    };

    async getArticleDetail(req, res){
        res.send(await  ArticleModel.getArticleDetail());
    };
    async getArticleDetailByID(req, res){
        res.send(await ArticleModel.getArticleDetailByID(req.params.id));
    };
    async getArticleDelete(req, res){
        res.send(await ArticleModel.getArticleDelete(req.params.id));
    };
    async getArticleDetailSearchText(req, res){
        res.send(await ArticleModel.getArticleDetailSearchText(req.params.searchtext));
    };
}
module.exports=new ArticleController();