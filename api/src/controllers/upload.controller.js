const { request } = require("express");
const UploadModel = require("../models/upload.model");
const path=require('path');



class UploadController {

    //UPLOAD AFFILATION 
    //PDF

    async uploadaffilationpdf(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadaffilationpdf(req));
     };
     async uploadaffilationimage(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadaffilationimage(req));
     };


     //UPLOAD ARTICLE

     //PDF
         async uploadarticlepdf(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadarticlepdf(req));
     };

     
     //IMAGE
     async uploadarticleimage(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadarticleimage(req));
     };

     //VIDEOIMAGE
     async uploadarticlevideoimage(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadarticlevideoimage(req));
     };

     //VIDEOIMAGE
     async uploadcareeradvicevideoimage(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadcareeradvicevideoimage(req));
     };


     //VIDEO
     async uploadarticlevideo(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadarticlevideo(req));
     };



     //UPLOAD CAREERORADVICE

     //VIDEO
     async uploadcareeradvicevideo(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadcareeradvicevideo(req));
     };

     async uploadresume(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadresume(req));
     };

     async uploadtestimonialimage(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadtestimonialimage(req));
     };
     async uploadlogoimage(req, res){
        //console.log(req);
         res.send(await UploadModel.uploadlogoimage(req));
     };
}
module.exports=new UploadController();