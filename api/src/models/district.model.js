var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class District{
    constructor(district){
        this.DistrictId = district.DistrictId;
        this.DistrictName = district.DistrictName;
        this.DistrictCode = district.DistrictCode;
        this.CityId = district.CityId;
        
        this.IsActive = district.IsActive;
        this.IsDeleted = district.IsDeleted;
        this.CreatedBy = district.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = district.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iudistrict(districtReqData){
        return await query(
            sp.sp_iudistrict,
            [
                districtReqData.DistrictId,
                districtReqData.DistrictName,
                districtReqData.DistrictCode,
                districtReqData.CityId,
                districtReqData.CreatedBy
            ]
        );
    };
    async getDistrictForDDL(){
        return await query(
            sp.sp_getdistrictforddl
        );
    };
    async getDistrictForDDLByCityID(CityId){
        return await query(
            sp.sp_getdistrictforddlbyCityId,
            [CityId]
        );
    };
    async getDistrictDetail(){
        return await query(
            sp.sp_getalldistrict
        );
    };
    async getDistrictDetailByID(id){
        return await query(
            sp.sp_getalldistrictid,
            [id]
        );
    };
    async DeleteDistrict(id){
        return await query(
            sp.sp_deletedistrict,
            [id]
        );
    };
}
module.exports = new District([]);