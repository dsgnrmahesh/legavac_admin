var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Community{
    constructor(community){
        this.CommunityID = community.CommunityID;
        this.CommunityName = community.CommunityName;
        
        this.IsActive = community.IsActive;
        this.IsDeleted = community.IsDeleted;
        this.CreatedBy = community.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = community.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iucommunity(communityReqData){
        return await query(
            sp.sp_iucommunity,
            [
                communityReqData.CommunityID,
                communityReqData.CommunityName,
                communityReqData.CreatedBy
            ]
        );
    };
    async getCommunityForDDL(){
        return await query(
            sp.sp_getcommunityforddl
        );
    };
    async getCommunityDetail(){
        return await query(
            sp.sp_getallcommunity
        );
    };
    async getCommunityDetailByID(id){
        return await query(
            sp.sp_getallcommunityid,
            [id]
        );
    };
    async getCommunityDelete(id){
        return await query(
            sp.sp_deletecommunity,
            [id]
        );
    };
}
module.exports = new Community([]);

