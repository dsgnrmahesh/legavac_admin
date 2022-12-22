/*     const cityModel = require("../models/city.model");

exports.iucity = (req, res) => {
    const cityReqData = new cityModel(req.body);
    //console.log(propertyReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      cityModel.iucity(cityReqData, (err, city) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "City  inserted Successfully",
          data: city.CityID,
        });
      });
    }
  };
  */









  const CityModel = require("../models/city.model");
class CityController {
    async iucity(req, res){
        res.send(await CityModel.iucity(req.body));
    };

    async getCityForDDL(req, res){
        res.send(await CityModel.getCityForDDL());
    };
    async getCityForDDLByStateID(req, res){
      res.send(await CityModel.getCityForDDLByStateID(req.params.StateID));
  };

    async  getCityDetail(req, res){
        res.send(await CityModel.getCityDetail());
    };
    async getCityDetailByID(req, res){
        res.send(await CityModel.getCityDetailByID(req.params.id));
    };
    async getCityDelete(req, res){
      res.send(await CityModel.getCityDelete(req.params.id));
  };
}
module.exports=new CityController();