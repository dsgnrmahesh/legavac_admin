var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class MembershipPlanFeature{
    constructor(membershipplanfeature){
        this.MembershipplanfeatureID = membershipplanfeature.MembershipplanfeatureID;
        this.Name = membershipplanfeature.Name;
        
        this.IsActive = membershipplanfeature.IsActive;
        this.IsDeleted = membershipplanfeature.IsDeleted;
        this.CreatedBy = membershipplanfeature.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = membershipplanfeature.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iumembershipplanfeature(membershipplanfeatureReqData){
        return await query(
            sp.sp_iumembershipplanfeature,
            [
                membershipplanfeatureReqData.MembershipplanfeatureID,
                membershipplanfeatureReqData.Name,
                membershipplanfeatureReqData.CreatedBy
            ]
        );
    };
    async getMembershipplanfeatureForDDL(){
        return await query(
            sp.sp_getmembershipplanfeatureforddl
        );
    };
    async getMembershipplanfeatureDetail(){
        return await query(
            sp.sp_getallmembershipplanfeature
        );
    };
    async getMembershipPlanFeatureDetailByID(id){
        return await query(
            sp.sp_getmembershipplanfeatureid,
            [id]
        );
    };
    async getMembershipPlanFeatureDelete(id){
        return await query(
            sp.sp_deletemembershipplanfeature,
            [id]
        );
    };
}
module.exports = new MembershipPlanFeature([]);

