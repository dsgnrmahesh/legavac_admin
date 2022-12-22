var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");
const { sp_getctcdashboardbyid, sp_getctcdashboardbyid_invoice } = require("../sp.js");

class CTCDashboard {
    constructor(ctcdashboard) {
        this.ctcdashboardID = ctcdashboard.ctcdashboardID;
        this.Name = ctcdashboard.Name;
        this.EmailID = ctcdashboard.EmailID;
        this.Mobile = ctcdashboard.Mobile;
        this.Address = ctcdashboard.Address;
        this.Password = ctcdashboard.Password;

        this.IsActive = ctcdashboard.IsActive;
        this.IsDeleted = ctcdashboard.IsDeleted;
        this.CreatedBy = ctcdashboard.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = ctcdashboard.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }


    async iuctcdashboard(ctcdashboardmasterReqData) {
        return await query(
            sp.sp_iuctcdashboard,

            [
                ctcdashboardmasterReqData.ID,
                ctcdashboardmasterReqData.Salutation,
                ctcdashboardmasterReqData.FirstName,
                ctcdashboardmasterReqData.MiddleName,
                ctcdashboardmasterReqData.LastName,
                ctcdashboardmasterReqData.CompanyID,
                ctcdashboardmasterReqData.CompanyName,
                ctcdashboardmasterReqData.JoiningDate,
                ctcdashboardmasterReqData.CTCAmount,
                ctcdashboardmasterReqData.CTCType,
                ctcdashboardmasterReqData.CTC,
                ctcdashboardmasterReqData.CTCPer,
                ctcdashboardmasterReqData.TotalAmount,
                ctcdashboardmasterReqData.GST,
                ctcdashboardmasterReqData.PaymentYear,
                ctcdashboardmasterReqData.CreatedBy,
                ctcdashboardmasterReqData.GSTNo
            ]

        );

    };
    async getctcdashboarddetail(id) {
        return await query(
            sp.sp_getctcdashboarddetail, [id]
        );

    };
    async getctcdashboardbyid(id) {
        return await query(
            sp_getctcdashboardbyid,
            [id]

        );

    };




    async deletectcdashboard(id) {
        return await query(
            sp.sp_deletectcdashboard, [id]
        );

    };
    async getctcdashboarddetailforadmin(searchtext) {
        return await query(
            sp.sp_getctcdashboarddetailforadmin,[searchtext]
        );

    };
    async getctcdashboarddetailforadminbyexecutiveid(ctcdashboardmasterReqData) {
        return await query(
            sp.sp_getctcdashboarddetailforadminbyexecutiveid,
            [ctcdashboardmasterReqData.ExecutiveID,ctcdashboardmasterReqData.CompanyID
            ,ctcdashboardmasterReqData.CreatedDateFrom,ctcdashboardmasterReqData.CreatedDateTo]
        );

    };

    async getctcdashboardbyid_invoice(id) {
        return await query(
            sp_getctcdashboardbyid_invoice,
            [id]

        );

    };

}
module.exports = new CTCDashboard([]);

