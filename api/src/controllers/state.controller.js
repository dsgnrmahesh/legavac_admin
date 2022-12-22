/*  const stateModel = require("../models/state.model");

exports.iustate = (req, res) => {
    const stateReqData = new stateModel(req.body);
    //console.log(propertyReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      stateModel.iustate(stateReqData, (err, state) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Country  inserted Successfully",
          data: state.StateId,
        });
      });
    }
  };
  */












  const StateModel = require("../models/state.model");
class StateController {
    async iustate(req, res){
        res.send(await StateModel.iustate(req.body));
    };

    async getStateForDDL(req, res){
        res.send(await StateModel.getStateForDDL());
    };
    async getStateForDDLByCountryID(req, res){
      res.send(await StateModel.getStateForDDLByCountryID(req.params.CountryID));
  };

    async getStateDetail(req, res){
        res.send(await StateModel.getStateDetail());
    };

    async getStateDetailByID(req, res){
        res.send(await StateModel.getStateDetailByID(req.params.id));
    };
    async getStateDelete(req, res){
      res.send(await StateModel.getStateDelete(req.params.id));
  };
}
module.exports=new StateController();