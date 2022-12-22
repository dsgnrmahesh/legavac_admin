var consts = require("../constant.js");
var sp = require("../sp.js");
var query=require("../../config/query");

class Company
{
    constructor(company)
{
       
    this.CompanyID = company.CompanyID;
    this.CompanyName = company.CompanyName;
    this.Logo = company.Logo;

    this.IsActive = company.IsActive;
    this.IsDeleted = company.IsDeleted;
    this.CreatedBy = company.CreatedBy;
    this.CreatedDate = consts.currentdata;
    this.LastModifiedBy = company.LastModifiedBy;
    this.LastModifiedDate = consts.currentdata;
}

  async iucompany(companyReqData)
{
        return await query(
            sp.sp_iucompany,

            [
                companyReqData.CompanyID,
                companyReqData.CompanyName,
                companyReqData.Logo,
                companyReqData.CreatedBy
            ]
  
      );
        
    };
    async getCompanyForDDL()
{
  
      return await query(
            sp.sp_getcompanyforddl
       
 );

    };
    async getCompanyDetail()
{
        return await query(
            sp.sp_getallcompany
        );

    };
  
  async getCompanyDetailByID(id)
{

        return await query(
            sp.sp_getallcompanyid,
            [id]
        
);

    };
    async getCompanyDelete(id)
    {
    
            return await query(
                sp.sp_deletecompany,
                [id]
            
    );
    
    };
    async getCompanyGSTNo(id)
    {
    
            return await query(
                sp.sp_getcompanygstno,
                [id]
            
    );
    
    };

}

module.exports = new Company([]);

