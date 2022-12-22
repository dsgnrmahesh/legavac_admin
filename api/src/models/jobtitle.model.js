var dbConn = require("../../config/db.config");
/*   var consts=require("../constant.js");
var sp=require("../sp.js");

var jobtitle=function(jobtitle){
  this.JobTitleID=jobtitle.JobtitleID;
  this.JobTitleName=jobtitle.JobtitleName;
  
  this.CreatedBy=jobtitle.CreatedBy;
  this.CreatedDate=consts.currentdate;
  this.LastModifiedBy=jobtitle.LastModifiedBy;
  this.LastModifiedDate=consts.currentdate;
  this.IsActive=jobtitle.IsActive;
  this.IsDeleted=jobtitle.IsDeleted;
}
jobtitle.iujobtitle = (jobtitleReqData, result) => {
  //console.log(jobtitleReqData);
  dbConn.query(
    sp.spjobtitle,
    [
      jobtitleReqData.JobtitleID,
      jobtitleReqData.JobtitleName,
      
      
      jobtitleReqData.CreatedBy,
      jobtitleReqData.CreatedDate
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

module.exports=jobtitle;
*/


















var consts = require("../constant.js");

var sp = require("../sp.js");

var query=require("../../config/query");


class Jobtitle
{
    constructor(jobtitle)
{
       
     this.JobTitleId = jobtitle.JobTitleId;

     this.JobTitleName = jobtitle.JobTitleName;
    
     //this.Password = adminmaster.Password;
   
    //this.Type = adminmaster.Type;
        
       this.IsActive = jobtitle.IsActive;
 
       this.IsDeleted = jobtitle.IsDeleted;
   
     this.CreatedBy = jobtitle.CreatedBy;
  
      this.CreatedDate = consts.currentdata;

        this.LastModifiedBy = jobtitle.LastModifiedBy;

        this.LastModifiedDate = consts.currentdata;

    }

  async iujobtitle(jobtitleReqData)
{
        return await query(
            sp.sp_iujobtitle,

            [
                jobtitleReqData.JobTitleId,
                jobtitleReqData.JobTitleName,
               // jobtitleReqData.Password,
               // jobtitleReqData.Type,
                jobtitleReqData.CreatedBy
            ]
  
      );
        
    };

    async getJobtitleForDDL()
{
  
      return await query(
            sp.sp_getjobtitleforddl
       
 );

    };

    async getJobtitleDetail()
{
        return await query(
            sp.sp_getalljobtitle
        );

    };
  
  async getJobtitleDetailByID(id)
{

        return await query(
            sp.sp_getalljobtitleid,
            [id]
        
);

    };
    async getJobtitleDelete(id)
    {
    
            return await query(
                sp.sp_deletejobtitle,
                [id]
            
    );
    
        };
    

}

module.exports = new Jobtitle([]);

