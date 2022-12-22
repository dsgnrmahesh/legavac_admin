var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Contact{
    constructor(contact){
        this.ContactID = contact.ContactID;
        this.Name = contact.Name;
        this.Mobile = contact.Mobile;
        this.EmailID = contact.EmailID;
        this.Message = contact.Message;
        
        this.IsActive = contact.IsActive;
        this.IsDeleted = contact.IsDeleted;
        this.CreatedBy = contact.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = contact.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucontact(contactReqData){
        return await query(
            sp.sp_iucontact,
            [
                contactReqData.ContactID,
                contactReqData.Name,
                contactReqData.Mobile,
                contactReqData.EmailID,
                contactReqData.Message,
                contactReqData.CreatedBy
            ]
        );
    };
    async getContactForDDL(){
        return await query(
            sp.sp_getcontactforddl
        );
    };
    async getContactDetail(){
        return await query(
            sp.sp_getallcontact
        );
    };
    async getContactDetailByID(id){
        return await query(
            sp.sp_getallcontactid,
            [id]
        );
    };
    async getContactDelete(id){
        return await query(
            sp.sp_deletecontact,
            [id]
        );
    };
}
module.exports = new Contact([]);
