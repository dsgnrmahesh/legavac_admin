/*   const jobtitleModel = require("../models/jobtitle.model");

exports.iujobtitle = (req, res) => {
    const jobtitleReqData = new jobtitleModel(req.body);
    //console.log(propertyReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      jobtitleModel.iujobtitle(jobtitleReqData, (err, jobtitle) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Job Title   inserted Successfully",
          data: jobtitle.JobtitleID,
        });
      });
    }
  };
  */















  const JobtitleModel = require("../models/jobtitle.model");
  class JobtitleController {
      async iujobtitle(req, res){
          res.send(await JobtitleModel.iujobtitle(req.body));
      };

      async getJobtitleForDDL(req, res){
          res.send(await JobtitleModel.getJobtitleForDDL());
      };

      async getJobtitleDetail(req, res){
          res.send(await JobtitleModel.getJobtitleDetail());
      };

      async getJobtitleDetailByID(req, res){
          res.send(await JobtitleModel.getJobtitleDetailByID(req.params.id));
      };
      async getJobtitleDelete(req, res){
        res.send(await JobtitleModel.getJobtitleDelete(req.params.id));
    };
  }
  module.exports=new JobtitleController();

