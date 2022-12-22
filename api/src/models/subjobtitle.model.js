/*   var dbConn = require("../../config/db.config");
var consts=require("../constant.js");
var sp=require("../sp.js");

var subjobtitle=function(subjobtitle){
  this.SubjobtitleID=subjobtitle.SubJobTitleID;
  this.SubjobtitleName=subjobtitle.SubJobTitleName;
  this.JobtitleID=subjobtitle.JobTitleID;
  

  this.CreatedBy=subjobtitle.CreatedBy;
  this.CreatedDate=consts.currentdate;
  this.LastModifiedBy=subjobtitle.LastModifiedBy;
  this.LastModifiedDate=consts.currentdate;
  this.IsActive=subjobtitle.IsActive;
  this.IsDeleted=subjobtitle.IsDeleted;
}
subjobtitle.iusubjobtitle = (subjobtitleReqData, result) => {
  //console.log(jobtitleReqData);
  dbConn.query(
    sp.spsubjobtitle,
    [
      subjobtitleReqData.subJobTitleID,
      subjobtitleReqData.SubJobTitleName,
      subjobtitleReqData.JobTitleID,
      
      subjobtitleReqData.CreatedBy,
      subjobtitleReqData.CreatedDate
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

module.exports=subjobtitle;
*/



















var consts = require("../constant.js");

var sp = require("../sp.js");

var query=require("../../config/query");


class Subjobtitle
{
    constructor(subjobtitle)
{
       
    this.SubJobTitleId = subjobtitle.SubJobTitleId;

      this.SubJobTitleName = subjobtitle.SubJobTitleName;
    
    this.JobTitleId = subjobtitle.JobTitleId;
   
     //this.Type = adminmaster.Type;
        

        this.IsActive = subjobtitle.IsActive;
 
       this.IsDeleted = subjobtitle.IsDeleted;
   
     this.CreatedBy = subjobtitle.CreatedBy;
  
      this.CreatedDate = consts.currentdata;

        this.LastModifiedBy = subjobtitle.LastModifiedBy;

        this.LastModifiedDate = consts.currentdata;

    }

  async iusubjobtitle(subjobtitleReqData)
{
        return await query(
            sp.sp_iusubjobtitle,

            [
                subjobtitleReqData.SubJobTitleId,
                subjobtitleReqData.SubJobTitleName,
                subjobtitleReqData.JobTitleId,
                //adminmasterReqData.Type,
                subjobtitleReqData.CreatedBy
            ]
  
      );
        
    };

    async getSubjobtitleForDDL(id)
{
  
      return await query(
            sp.sp_getsubjobtitleforddl,
            [id]
       
 );

    };
    async getSubjobtitleForDDLByJobTitleId(id)
{
  
      return await query(
            sp.sp_getsubjobtitleforddlbyjobtitleid,
            [id]
       
 );

    };


    
    async getSubjobtitleDetail()
{
        return await query(
            sp.sp_getallsubjobtitle
        );

    };
  
  async getSubjobtitleDetailByID(id)
{

        return await query(
            sp.sp_getallsubjobtitleid,
            [id]
        
);
  };
  async getSubjobtitleDelete(id)
  {
  
          return await query(
              sp.sp_deletesubjobtitle,
              [id]
          
  );
    };

}

module.exports = new Subjobtitle([]);

