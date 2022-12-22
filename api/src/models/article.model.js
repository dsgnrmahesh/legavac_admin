var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Article{
    constructor(article){
        this.ArticleID = article.ArticleID;
        this.Title = article.Title;
        this.Pdf = article.Pdf;
        this.Description = article.Description;
        this.Image = article.Image;
        this.VideoImage = article.VideoImage;
        this.Video = article.Video;
        
        this.IsActive = article.IsActive;
        this.IsDeleted = article.IsDeleted;
        this.CreatedBy = article.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = article.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iuarticle(articleReqData){
        return await query(
            sp.sp_iuarticle,
            [
                articleReqData.ArticleID,
                articleReqData.Title,
                articleReqData.Pdf,
                articleReqData.Description,
                articleReqData.Image,
                articleReqData.VideoImage,
                articleReqData.Video,
                articleReqData.CreatedBy
            ]
        );
    };
    async getArticleForDDL(){
        return await query(
            sp.sp_getarticleforddl
        );
    };
    async getArticleDetail(){
        return await query(
            sp.sp_getallarticle
        );
    };
    async getArticleDetailByID(id){
        return await query(
            sp.sp_getallarticleid,
            [id]
        );
    };
    async getArticleDelete(id){
        return await query(
            sp.sp_deletearticle,
            [id]
        );
    };
    async getArticleDetailSearchText(searchtext){
        return await query(
            sp.sp_getallarticlesearch,
            [searchtext]
        );
    };
}
module.exports = new Article([]);

