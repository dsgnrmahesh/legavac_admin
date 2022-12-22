var http = require("http");
const express=require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
// Require property routes
const route = require('./src/routes/route');
const path = require("path");
app=express();
const fileUpload = require("express-fileupload");
//   require("dotenv").config();

const allowlist = [
    "*",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002"
];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(fileUpload());
app.use('/static', express.static(path.join(__dirname, 'client/public/uploadfile')))

app.get('/',(req,res)=>{
    res.send("hello world");
})





// using as middleware
app.use('/api/legavac', route);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log('Listening on Port:'+PORT)
})
