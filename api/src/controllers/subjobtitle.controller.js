/*   const subjobtitleModel = require("../models/subjobtitle.model");

exports.iusubjobtitle = (req, res) => {
    const subjobtitleReqData = new subjobtitleModel(req.body);
    //console.log(propertyReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      subjobtitleModel.iusubjobtitle(subjobtitleReqData, (err, subjobtitle) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Sub Job Title   inserted Successfully",
          data: subjobtitle.SubJobTitleID,
        });
      });
    }
  };
  */













  const SubjobtitleModel = require("../models/subjobtitle.model");
class SubjobtitleController {
    async iusubjobtitle(req, res){
        res.send(await SubjobtitleModel.iusubjobtitle(req.body));
    };

    async getSubjobtitleForDDL(req, res){
        res.send(await SubjobtitleModel.getSubjobtitleForDDL(req.params.id));
    };

    async getSubjobtitleForDDLByJobTitleId(req, res){
      res.send(await SubjobtitleModel.getSubjobtitleForDDLByJobTitleId(req.params.id));
  };

    

    async getSubjobtitleDetail(req, res){
        res.send(await SubjobtitleModel.getSubjobtitleDetail());
    };

    async getSubjobtitleDetailByID(req, res){
        res.send(await SubjobtitleModel.getSubjobtitleDetailByID(req.params.id));
    };
    async getSubjobtitleDelete(req, res){
      res.send(await SubjobtitleModel.getSubjobtitleDelete(req.params.id));
  };
}
module.exports=new SubjobtitleController();