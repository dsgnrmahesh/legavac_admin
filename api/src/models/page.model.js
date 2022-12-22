var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");

class Page{
    constructor(page){
        this.PageID = page.PageID;
        this.Pagename = page.Pagename;
        this.Title = page.Title;
        this.Description = page.Description;
        
        this.IsActive = page.IsActive;
        this.IsDeleted = page.IsDeleted;
        this.CreatedBy = page.CreatedBy;
        this.CreatedDate = consts.currentdata;
        this.LastModifiedBy = page.LastModifiedBy;
        this.LastModifiedDate = consts.currentdata;
    }
    async iupage(pageReqData){
        return await query(
            sp.sp_iupage,
            [
                pageReqData.PageID,
                pageReqData.Pagename,
                pageReqData.Title,
                pageReqData.Description,
                pageReqData.CreatedBy
            ]
        );
    };
    async getLPageForDDL(){
        return await query(
            sp.sp_getpageforddl
        );
    };
    async getLPageDetail(){
        return await query(
            sp.sp_getallpage
        );
    };
    async getLPageDetailByID(id){
        return await query(
            sp.sp_getallpageid,
            [id]
        );
    };
    async getLPageDelete(id){
        return await query(
            sp.sp_deletepage,
            [id]
        );
    };
}
module.exports = new Page([]);
