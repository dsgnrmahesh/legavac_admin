/*   var dbConn = require("../../config/db.config");
var consts=require("../constant.js");
var sp=require("../sp.js");

var country=function(country){
  this.CountryID=country.CountryID;
  this.CountryName=country.CountryName;
  this.CountryPincode=country.CountryPincode;
  
  
  this.CreatedBy=country.CreatedBy;
  this.CreatedDate=consts.currentdate;
  this.LastModifiedBy=country.LastModifiedBy;
  this.LastModifiedDate=consts.currentdate;
  this.IsActive=country.IsActive;
  this.IsDeleted=country.IsDeleted;   
}
country.iucountry = (countryReqData, result) => {
  console.log(countryReqData);
  dbConn.query(
    sp.spcountry,
    [
      countryReqData.CountryID,
      countryReqData.CountryName,
      countryReqData.CountryPincode,
      
      countryReqData.CreatedBy
      
    ],
    (err, res) => {
      if (err) {
        console.log(result(null, err));
      } else {
        console.log(result(null, res));
      }
    }
  );
};

module.exports=country;
*/







var consts = require("../constant.js");

var sp = require("../sp.js");

var query=require("../../config/query");


class Country
{
    constructor(country)
{
       
       this.CountryId = country.CountryId;

      this.CountryName = country.CountryName;
    
       this.CountryCode = country.CountryCode;
   
        //  this.Type = country.Type;
        
        this.IsActive = country.IsActive;
 
       this.IsDeleted = country.IsDeleted;
   
       this.CreatedBy = country.CreatedBy;
  
      this.CreatedDate = consts.currentdata;

        this.LastModifiedBy = country.LastModifiedBy;

        this.LastModifiedDate = consts.currentdata;

    }

  async iucountry(countryReqData)
{
        return await query(
            sp.sp_iucountry,

            [
                countryReqData.CountryId,
                countryReqData.CountryName,
                countryReqData.CountryCode,
               // countryReqData.Type,
                countryReqData.CreatedBy
            ]
  
      );
        
    };

    async getCountryForDDL()
{
  
      return await query(
            sp.sp_getcountryforddl
       
 );

    };

    async getCountryDetail()
{
        return await query(
            sp.sp_getallcountry
        );

    };
  
  async getCountryDetailByID(id)
{

        return await query(
            sp.sp_getallcountryid,
            [id]
        
);

    };
    async getCountryDelete(id)
    {
    
            return await query(
                sp.sp_deletecountry,
                [id]
            
    );
    
        };

}

module.exports = new Country([]);

