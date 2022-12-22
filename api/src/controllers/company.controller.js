const CompanyModel = require("../models/company.model");
class CompanyController {
    async iucompany(req, res){
        res.send(await CompanyModel.iucompany(req.body));
    };
    async getCompanyForDDL(req, res){
        res.send(await CompanyModel.getCompanyForDDL());
    };
    async getCompanyDetail(req, res){
        res.send(await CompanyModel.getCompanyDetail());
    };

    async getCompanyDetailByID(req, res){
        res.send(await CompanyModel.getCompanyDetailByID(req.params.id));
    };
    async getCompanyDelete(req, res){
      res.send(await CompanyModel.getCompanyDelete(req.params.id));
  };
  async getCompanyGSTNo(req, res){
    res.send(await CompanyModel.getCompanyGSTNo(req.params.id));
};
}
module.exports=new CompanyController();