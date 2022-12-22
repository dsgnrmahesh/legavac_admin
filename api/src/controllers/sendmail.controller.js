const SendMailModel = require("../models/sendmail.model");
class SendMailController {
    async funcsendmail(req, res){
        let _id=0;
        _id=await SendMailModel.funcsendmail(req.body);
        res.send(_id);
    };


//APP

async app_funcsendmail(req, res){
    let _id=0;
    _id=await SendMailModel.funcsendmail(req.body);
    res.send(_id[0]);
};


}
module.exports=new SendMailController();