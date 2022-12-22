var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class DashboardMaster{
    constructor(dashboardmaster){
        this.ZoneID = dashboardmaster.ZoneID;
        this.SearchText = dashboardmaster.SearchText;
        this.Type = dashboardmaster.Type;
    }
    async getDashboardCount(){
        return await query(
            sp.sp_dashboard
        );
    };
    async getDashboardServiceDetail(dashboardReqData){
         return await query(
         sp.sp_getdashboardservicedetail,
         [dashboardReqData.SearchText,dashboardReqData.Type]
     );
    };
}
module.exports = new DashboardMaster([]);