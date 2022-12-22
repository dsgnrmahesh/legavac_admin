/*  const countryModel = require("../models/country.model");

exports.iucountry = (req, res) => {
    const countryReqData = new countryModel(req.body);
    //console.log(propertyReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      countryModel.iucountry(countryReqData, (err, country) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Country  inserted Successfully",
          data: country.CountryID,
        });
      });
    }
  };
  */







  const CountryModel = require("../models/country.model");
class CountryController {
    async iucountry(req, res){
        res.send(await CountryModel.iucountry(req.body));
    };

    async getCountryForDDL(req, res){
        res.send(await CountryModel.getCountryForDDL());
    };

    async getCountryDetail(req, res){
        res.send(await CountryModel.getCountryDetail());
    };

    async getCountryDetailByID(req, res){
        res.send(await CountryModel.getCountryDetailByID(req.params.id));
    };
    async getCountryDelete(req, res){
      res.send(await CountryModel.getCountryDelete(req.params.id));
  };
}
module.exports=new CountryController();