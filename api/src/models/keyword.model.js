/*var dbConn = require("../../config/db.config");
var consts=require("../constant.js");
var sp=require("../sp.js");

var keyword=function(keyword){
  this.KeywordID=keyword.KeywordID;
  this.KeywordName=keyword.KeywordName;
  
  this.CreatedBy=keyword.CreatedBy;
  this.CreatedDate=consts.currentdate;
  this.LastModifiedBy=keyword.LastModifiedBy;
  this.LastModifiedDate=consts.currentdate;
  this.IsActive=keyword.IsActive;
  this.IsDeleted=keyword.IsDeleted;
}
keyword.iukeyword = (keywordReqData, result) => {
  //console.log(jobtitleReqData);
  dbConn.query(
    sp.spkeyword,
    [
      keywordReqData.KeywordID,
      keywordReqData.KeywordName,
      
      
      keywordReqData.CreatedBy,
      keywordReqData.CreatedDate
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

module.exports=keyword;
*/






var consts = require("../constant.js");

var sp = require("../sp.js");

var query=require("../../config/query");


class Keyword
{
    constructor(keyword)
{
       
      this.KeywordId = keyword.KeywordId;

      this.KeywordName = keyword.KeywordName;
    
    // this.Password = adminmaster.Password;
   
     // this.Type = adminmaster.Type;
        

        this.IsActive = keyword.IsActive;
 
       this.IsDeleted = keyword.IsDeleted;
   
     this.CreatedBy = keyword.CreatedBy;
  
      this.CreatedDate = consts.currentdata;

        this.LastModifiedBy = keyword.LastModifiedBy;

        this.LastModifiedDate = consts.currentdata;

    }

  async iukeyword(keywordReqData)
{
        return await query(
            sp.sp_iukeywords,

            [
                keywordReqData.KeywordId,
                keywordReqData.KeywordName,
                //adminmasterReqData.Password,
                //adminmasterReqData.Type,
                keywordReqData.CreatedBy
            ]
  
      );
        
    };

    async getKeywordForDDL()
{
  
      return await query(
            sp.sp_getkeywordforddl
       
 );

    };

    async getKeywordDetail()
{
        return await query(
            sp.sp_getallkeyword
        );

    };
  
  async getKeywordDetailByID(id)
{

        return await query(
            sp.sp_getallkeywordid,
            [id]
        
);

    };
    async getKeywordDelete(id)
    {
    
            return await query(
                sp.sp_deletekeyword,
                [id]
            
    );
    
    };
}

module.exports = new Keyword([]);

