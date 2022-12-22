const UserModel = require("../models/user.model");
class UserController {

    async getAdminLoginDetail(req, res){
        res.send(await UserModel.getAdminLoginDetail(req.body));
    };

    async iuusermaster(req, res){
        res.send(await UserModel.iuusermaster(req.body));
    };

    async getUserMasterDetailByID(req, res){
        res.send(await UserModel.getusermasterdetailbyid(req.params.id));
    };
    async getUserMasterDetail(req, res){
        res.send(await UserModel.getusermasterdetail());
    };
    async deleteUserMaster(req, res){
        res.send(await UserModel.deleteusermaster(req.params.id));
    };

    async iuexecutivedata(req, res){
        res.send(await UserModel.iuexecutivedata(req.body));
    };

    async getExecutiveDataByID(req, res){
        res.send(await UserModel.getexecutivedatabyid(req.params.id));
    };
    async getExecutiveData(req, res){
        res.send(await UserModel.getexecutivedata(req.params.id));
    };
    async getExecutiveDataByID_admin(req, res){
        res.send(await UserModel.getexecutivedatabyid_admin(req.body));
    };
    async getExecutiveCompanyData_admin(req, res){
        res.send(await UserModel.getexecutivecompanydata_admin(req.body));
    };
    async getExecutiveDataByCompanyID_admin(req, res){
        res.send(await UserModel.getexecutivedatabycompanyid_admin(req.body));
    };
    async updatecontactpersonstatus(req, res){
        res.send(await UserModel.updatecontactpersonstatus(req.body));
    };
    async getExecutiveDataByExecutiveID(req, res){
        res.send(await UserModel.getexecutivedatabyexecutiveid(req.params.id));
    };
    async deleteExecutiveData(req, res){
        res.send(await UserModel.deleteexecutivedata(req.params.id));
    };
}
module.exports=new UserController();