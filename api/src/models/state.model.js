/*var dbConn = require("../../config/db.config");
var consts=require("../constant.js");
var sp=require("../sp.js");

var state=function(state){
  this.StateId=state.StateId;
  this.StateName=state.StateName;
  this.StateCode=state.StateCode;
  this.CountryId=state.CountryId;
  
  this.CreatedBy=state.CreatedBy;
  this.CreatedDate=consts.currentdate;
  this.LastModifiedBy=state.LastModifiedBy;
  this.LastModifiedDate=consts.currentdate;
  this.IsActive=state.IsActive;
  this.IsDeleted=state.IsDeleted;
}
state.iustate = (stateReqData, result) => {
  //console.log(stateReqData);
  dbConn.query(
    sp.spstate,
    [
      stateReqData.StateId,
      stateReqData.StateName,
      stateReqData.StateCode,
      stateReqData.CountryId,
      
      stateReqData.CreatedBy,
      stateReqData.CreatedDate
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

module.exports=state;
*/


















var consts = require("../constant.js");

var sp = require("../sp.js");

var query=require("../../config/query");


class State
{
    constructor(state)
{
       
      this.StateId = state.StateId;

      this.StateName = state.StateName;
    
    this.StateCode = state.StateCode;
   
     this.CountryId = state.CountryId;
      
        this.IsActive = state.IsActive;
 
       this.IsDeleted = state.IsDeleted;
   
     this.CreatedBy = state.CreatedBy;
  
      this.CreatedDate = consts.currentdata;

        this.LastModifiedBy = state.LastModifiedBy;

        this.LastModifiedDate = consts.currentdata;

    }

  async iustate(stateReqData)
{
        return await query(
            sp.sp_iustate,

            [
                stateReqData.StateId,
                stateReqData.StateName,
                stateReqData.StateCode,
                stateReqData.CountryId,
                stateReqData.CreatedBy
            ]
  
      );
        
    };

    async getStateForDDL()
{
  
      return await query(
            sp.sp_getstateforddl
       
 );

    };
    async getStateForDDLByCountryID(CountryID){
      return await query(
          sp.sp_getstateforddlbycountryid,
          [CountryID]
      );
  };
    async getStateDetail()
{
        return await query(
            sp.sp_getallstate
        );

    };
  
  async getStateDetailByID(id)
{

        return await query(
            sp.sp_getstatebyid,
            [id]
        
);

    };
    async getStateDelete(id)
    {
    
            return await query(
                sp.sp_deletestate,
                [id]
            
    );
    
        };
    

}

module.exports = new State([]);

