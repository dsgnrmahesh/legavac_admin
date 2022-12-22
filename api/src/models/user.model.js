var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class User {
    constructor(user) {
        this.UserID = user.UserID;
        this.Name = user.Name;
        this.EmailID = user.EmailID;
        this.Mobile = user.Mobile;
        this.Address = user.Address;
        this.Password = user.Password;

        this.IsActive = user.IsActive;
        this.IsDeleted = user.IsDeleted;
        this.CreatedBy = user.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = user.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }

    async getAdminLoginDetail(userReqData) {
        return await query(
            sp.sp_getadminlogindetail,
            [userReqData.EmailID, userReqData.Password]
        );
    };


    async iuusermaster(usermasterReqData) {
        return await query(
            sp.sp_iuusermaster,

            [
                usermasterReqData.ID,
                usermasterReqData.Salutation,
                usermasterReqData.FirstName,
                usermasterReqData.MiddleName,
                usermasterReqData.LastName,
                usermasterReqData.EmailID,
                usermasterReqData.Mobile,
                usermasterReqData.Location,                
                usermasterReqData.JoiningDate,
                usermasterReqData.Type,
                usermasterReqData.CreatedBy
            ]

        );

    };
    async getusermasterdetailbyid(id) {

        return await query(
            sp.sp_getusermasterdetailbyid,
            [id]

        );

    };



    async getusermasterdetail() {
        return await query(
            sp.sp_getusermasterdetail
        );

    };
    async deleteusermaster(id) {
        return await query(
            sp.sp_deleteusermaster, [id]
        );

    };

    async iuexecutivedata(usermasterReqData)
  {
          return await query(
              sp.sp_iuexecutivedata,  
              [
                  usermasterReqData.ID,
                  usermasterReqData.CompanyID,
                  usermasterReqData.CompanyName,
                  usermasterReqData.ContactPersonName,
                  usermasterReqData.DateOfBirthday,
                  usermasterReqData.EmailID,
                  usermasterReqData.DesignationID,
                  usermasterReqData.Designation,
                  usermasterReqData.ContactMobile,
                  usermasterReqData.DateOfMeeting,
                  usermasterReqData.Remark,
                  usermasterReqData.CreatedBy
              ]
    
        );
          
      };

      async getexecutivedatabyid(id) {
        return await query(
            sp.sp_getallexecutivedataid,
            [id]
        );
    };

    async getexecutivedata(id) {
        return await query(
            sp.sp_getallexecutivedata,[id]
        );
    };

    async getexecutivedatabyid_admin(usermasterReqData) {
        return await query(
            sp.sp_getexecutivedatabyid_admin,[usermasterReqData.SearchText,usermasterReqData.UserID]
        );
    };

    async getexecutivecompanydata_admin(usermasterReqData) {
        return await query(
            sp.sp_getexecutivecompanydata_admin,[usermasterReqData.SearchText,usermasterReqData.UserID]
        );
    };

    async getexecutivedatabycompanyid_admin(usermasterReqData) {
        return await query(
            sp.sp_getexecutivedatabycompanyid_admin,[usermasterReqData.SearchText,usermasterReqData.UserID,usermasterReqData.CompanyID]
        );
    };

    async updatecontactpersonstatus(usermasterReqData) {
        return await query(
            sp.sp_updatecontactpersonstatus,[usermasterReqData.UserID,usermasterReqData.ExeDataID,usermasterReqData.Status]
        );
    };

    async getexecutivedatabyexecutiveid(id) {
        return await query(
            sp.sp_getallexecutivedatabyexecutiveid,[id]
        );
    };
    async deleteexecutivedata(id) {
        return await query(
            sp.sp_deleteexecutivedata, [id]
        );

    };
}
module.exports = new User([]);

