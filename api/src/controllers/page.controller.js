const PageModel = require("../models/page.model");
class PageController {
    async iupage(req, res){
        res.send(await PageModel.iupage(req.body));
    };

    async getLPageForDDL(req, res){
        res.send(await PageModel.getLPageForDDL());
    };

    async getLPageDetail(req, res){
        res.send(await PageModel.getLPageDetail());
    };
    async getLPageDetailByID(req, res){
        res.send(await  PageModel.getLPageDetailByID(req.params.id));
    };
    async getLPageDelete(req, res){
        res.send(await  PageModel.getLPageDelete(req.params.id));
    };
}
module.exports=new PageController();