var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class MembershipPlan{
    constructor(membershipplan){
        this.MembershipplanID = membershipplan.MembershipplanID;
        this.PlanName = membershipplan.PlanName;
        this.Price = membershipplan.Price;
        this.Durationtype = membershipplan.Durationtype;
        this.Duration = membershipplan.Duration;
        this.MembershipplanfeatureID = membershipplan.MembershipplanfeatureID;
        this.Membershipplanfeature = membershipplan.Membershipplanfeature;
        //this.Name = membershipplan.Name;
        
        this.IsActive = membershipplan.IsActive;
        this.IsDeleted = membershipplan.IsDeleted;
        this.CreatedBy = membershipplan.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = membershipplan.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iumembershipplan(membershipplanReqData){
        return await query(
            sp.sp_iumembershipplan,
            [
                membershipplanReqData.MembershipplanID,
                membershipplanReqData.PlanName,
                membershipplanReqData.Price,
                membershipplanReqData.Durationtype,
                membershipplanReqData.Duration,
                membershipplanReqData.Membershipplanfeature,
                membershipplanReqData.CreatedBy
            ]
        );
    };
    async  getMembershipplanForDDL(){
        return await query(
            sp.sp_getmembershipplanforddl
        );
    };
    async getMembershipplanDetail(){
        return await query(
            sp.sp_getallmembershipplan
        );
    };
    async getMembershipplanDetailByID(id){
        return await query(
            sp.sp_getmembershipplanid,
            [id]
        );
    };
    async getMembershipplanDelete(id){
        return await query(
            sp.sp_deletemembershipplan,
            [id]
        );
    };
    async getMembershipplanDetailSearchText(searchtext){
        return await query(
            sp.sp_membershipplansearch,
            [searchtext]
        );
    };
    async getMembershipPlanForWeb(){
        return await query(
            sp.sp_getmembershipplandetailforweb
        );
    }
}
module.exports = new MembershipPlan([]);
