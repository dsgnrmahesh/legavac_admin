var consts = require("../constant.js");
var sp = require("../sp.js");
var query = require("../../config/query");



class Upload{
    constructor(upload){
        this.FileName = upload.FileName;
    }

    //AFFILATION UPLOAD
    
    async uploadaffilationpdf(uploadReqData){
        const file = uploadReqData.files.file;
       
     file.mv(process.cwd()+"/client/uploads/affilation/pdf/"+file.name, (err) => {
          if (err) {
            console.error(err);
            return  ({success:false});
            //return res.status(500).send(err); 
          }
        });
        return  ({ success: true });
    }
    async uploadaffilationimage(uploadReqData){
      const file = uploadReqData.files.file;
     
   file.mv(process.cwd()+"/client/uploads/affilation/image/"+file.name, (err) => {
        if (err) {
          console.error(err);
          return  ({success:false});
          //return res.status(500).send(err); 
        }
      });
      return  ({ success: true });
  }


    //ARTICLE UPLOAD 

    //PDF
    async uploadarticlepdf(uploadReqData){
        const file = uploadReqData.files.file;
       
     file.mv(process.cwd()+"/client/uploads/article/pdf/"+file.name, (err) => {
          if (err) {
            console.error(err);
            return  ({success:false});
            //return res.status(500).send(err); 
          }
        });
        return  ({ success: true });
    }

//IMAGE
    async uploadarticleimage(uploadReqData){
        const file = uploadReqData.files.file;
       
     file.mv(process.cwd()+"/client/uploads/article/image/"+file.name, (err) => {
          if (err) {
            console.error(err);
            return  ({success:false});
            //return res.status(500).send(err); 
          }
        });
        return  ({ success: true });
    }

    //VIDEOIMAGE
    async uploadarticlevideoimage(uploadReqData){
      const file = uploadReqData.files.file;
     
   file.mv(process.cwd()+"/client/uploads/article/videoimage/"+file.name, (err) => {
        if (err) {
          console.error(err);
          return  ({success:false});
          //return res.status(500).send(err); 
        }
      });
      return  ({ success: true });
  }

   //VIDEOIMAGE
   async uploadcareeradvicevideoimage(uploadReqData){
    const file = uploadReqData.files.file;
   
 file.mv(process.cwd()+"/client/uploads/careeradvice/videoimage/"+file.name, (err) => {
      if (err) {
        console.error(err);
        return  ({success:false});
        //return res.status(500).send(err); 
      }
    });
    return  ({ success: true });
}

//VIDEO
    async uploadarticlevideo(uploadReqData){
        const file = uploadReqData.files.file;
       
     file.mv(process.cwd()+"/client/uploads/article/video/"+file.name, (err) => {
          if (err) {
            console.error(err);
            return  ({success:false});
            //return res.status(500).send(err); 
          }
        });
        return  ({ success: true });
    }


    //CAREERORADVICE UPLOAD

    //VIDEO

    async uploadcareeradvicevideo(uploadReqData){
        const file = uploadReqData.files.file;
       
     file.mv(process.cwd()+"/client/uploads/careeradvice/video/"+file.name, (err) => {
          if (err) {
            console.error(err);
            return  ({success:false});
            //return res.status(500).send(err); 
          }
        });
        return  ({ success: true });
    }

    async uploadresume(uploadReqData){
      const file = uploadReqData.files.file;
     
      file.mv(process.cwd()+"/client/uploads/resume/"+file.name, (err) => {
        if (err) {
          console.error(err);
          return ({success:false});
          //return res.status(500).send(err); 
        }
      });
      return ({ success: true });
  }

  async uploadtestimonialimage(uploadReqData){
    const file = uploadReqData.files.file;
   
    file.mv(process.cwd()+"/client/uploads/testimonial/image/"+file.name, (err) => {
      if (err) {
        console.error(err);
        return  ({success:false});
        //return res.status(500).send(err); 
      }
    });
    return ({ success: true });
}
//IMAGE
async uploadlogoimage(uploadReqData){
  const file = uploadReqData.files.file;
 
file.mv(process.cwd()+"/client/uploads/company/image/"+file.name, (err) => {
    if (err) {
      console.error(err);
      return  ({success:false});
      //return res.status(500).send(err); 
    }
  });
  return  ({ success: true });
}

}
module.exports = new Upload([]);