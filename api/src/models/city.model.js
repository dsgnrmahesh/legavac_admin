/*  var dbConn = require("../../config/db.config");
var consts=require("../constant.js");
var sp=require("../sp.js");

var city=function(city){
  this.CityID=city.CityID;
  this.CityName=city.CityName;
  this.CityCode=city.CityCode;
  this.StateID=city.StateID;
  
  this.CreatedBy=city.CreatedBy;
  this.CreatedDate=consts.currentdate;
  this.LastModifiedBy=city.LastModifiedBy;
  this.LastModifiedDate=consts.currentdate;
  this.IsActive=city.IsActive;
  this.IsDeleted=city.IsDeleted;
}
city.iucity = (cityReqData, result) => {
  //console.log(cityReqData);
  dbConn.query(
    sp.spcity,
    [
      cityReqData.CityID,
      cityReqData.CityName,
      cityReqData.CityCode,
      cityReqData.StateID,
      
      cityReqData.CreatedBy,
      cityReqData.CreatedDate
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

module.exports=city;      */
















var consts = require("../constant.js");

var sp = require("../sp.js");

var query=require("../../config/query");


class City
{
    constructor(city)
{
       
      this.CityId = city.CityId;

      this.CityName = city.CityName;
    
      this.CityCode = city.CityCode;
   
      this.StateId = city.StateId;
        
      this.IsActive = city.IsActive;
 
      this.IsDeleted = city.IsDeleted;
    
       this.CreatedBy = city.CreatedBy;
  
      this.CreatedDate = consts.currentdata;

       this.LastModifiedBy = city.LastModifiedBy;

       this.LastModifiedDate = consts.currentdata;

    }

  async iucity(cityReqData)
{
        return await query(
            sp.sp_iucity,

            [
                cityReqData.CityId,
                cityReqData.CityName,
                cityReqData.CityCode,
                cityReqData.StateId,
                cityReqData.CreatedBy
            ]
  
      );
        
    };

    async getCityForDDL()
{
  
      return await query(
            sp.sp_getcityforddl
       
 );

    };
    async getCityForDDLByStateID(StateID){
      return await query(
          sp.sp_getcityforddlbystateid,
          [StateID]
      );
  };
    async getCityDetail()
{
        return await query(
            sp.sp_getallcity
        );

    };
  
  async getCityDetailByID(id)
{

        return await query(
            sp.sp_getallcityid,
            [id]
        
);

    };
    async getCityDelete(id)
    {
    
            return await query(
                sp.sp_deletecity,
                [id]
            
    );
    
        };

}

module.exports = new City([]);


