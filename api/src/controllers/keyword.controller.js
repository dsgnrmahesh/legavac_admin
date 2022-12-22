/*  const keywordModel = require("../models/keyword.model");

exports.iukeyword = (req, res) => {
    const keywordReqData = new keywordModel(req.body);
    //console.log(propertyReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      keywordModel.iukeyword(keywordReqData, (err, keyword) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Keyword  inserted Successfully",
          data: keyword.KeywordID,
        });
      });
    }
  };
  */

















  const KeywordModel = require("../models/keyword.model");
class KeywordController {
    async iukeyword(req, res){
        res.send(await KeywordModel.iukeyword(req.body));
    };

    async getKeywordForDDL(req, res){
        res.send(await KeywordModel.getKeywordForDDL());
    };

    async getKeywordDetail(req, res){
        res.send(await KeywordModel.getKeywordDetail());
    };

    async getKeywordDetailByID(req, res){
        res.send(await KeywordModel.getKeywordDetailByID(req.params.id));
    };
    async getKeywordDelete(req, res){
      res.send(await KeywordModel.getKeywordDelete(req.params.id));
  };
}
module.exports=new KeywordController();