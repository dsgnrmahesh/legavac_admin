const ContactModel = require("../models/contact.model");
class ContactController {
    async iucontact(req, res){
        res.send(await ContactModel.iucontact(req.body));
    };

    async getContactForDDL(req, res){
        res.send(await ContactModel.getContactForDDL());
    };

    async getContactDetail(req, res){
        res.send(await ContactModel.getContactDetail());
    };
    async getContactDetailByID(req, res){
        res.send(await ContactModel.getContactDetailByID(req.params.id));
    };
    async getContactDelete(req, res){
        res.send(await ContactModel.getContactDelete(req.params.id));
    };
}
module.exports=new ContactController();