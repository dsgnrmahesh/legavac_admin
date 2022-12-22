//FOR CHARACTER
export function checkonlyletterandcharacter(txt){
    var reg_name_lastname = /^[a-zA-Z\s]*$/;

    if(!reg_name_lastname.test(txt)){ 
        return false;
    }
    else{return true;}
}


//FOR EMAILID
export function checkemailidformat(txt)
{
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

   if(!regex.test(txt))
   { 
        return false;
    }
    else{return true;}
}

//FOR MOBILE NUMBER
export function checkmobilenumberrightway(txt)
{
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    
    if(!regex.test(txt))
    { 
        return false;
    }
    else{return true;}
}

//FOR IMAGE , JPG ,JPEG FORMAT
export function checkimageformat(txt)
{
    var exp = /^.*\.(jpg|JPG)$/;    
      if (!exp.test(txt))
    { 
        return false;
    }
    else{return true;}
    }

    //FOR PDF FILE
    export function checkpdffile(txt){
    var exp = /^.*\.(pdf)$/;      
    if (!exp.test(txt))
    { 
        return false;
    }
    else{return true;}
    }

    //FOR VIDEO MP4 FILE
    export function checkvideoformat(txt)
    {
        var exp = /^.*\.(mvw|MVW|mp4|MP4)$/;      
        if (!exp.test(txt))
        { 
            return false;
        }
        else{return true;}
      }

      //FOR DOC , DOCX  FILE
      export function checkdocformat(txt)
       {
              var exp = /^.*\.(doc|docx)$/; 
             if (!exp.test(txt))
             { 
                return false;
            }
            else{return true;}
        }

        //FOR SALARY WITH SIMPLE AND DECIMAL NUMBERS

        export function checksalary(txt){
            var regexp = /^\d+(\.\d{1,2})?$/;
          if (!regexp.test(txt))
           { 
                 return false;
           }
               else{return true;}
          }

        
        //FOR PINCODE 

        export function checkpincode(txt){
            var reg=/^(\d{4}|\d{6})$/;
            if (!reg.test(txt))
            { 
               return false;
           }
           else{return true;}
           }


//FOR INDIAN FORMAT MOBILE NUMBER

export function checkindiamobile(txt)
{
    var regex = /^[+0]{0,2}(91)?[789][0-9]{9}$/;
    
    if(!regex.test(txt))
    { 
        return false;
    }
    else{return true;}
}


export function checkmobile(txt){
    var exp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    //var exp = /^.*\.(jpg|pdf|doc)$/;    
     if (!exp.test(txt))
   { 
       return false;
   }
   else{return true;}
}




export function checkemail(txt){
   var exp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
   //var exp = /^.*\.(jpg|pdf|doc)$/;    
    if (!exp.test(txt))
  { 
      return false;
  }
  else{return true;}
}



//FOR PRICE WITH SIMPLE AND DECIMAL NUMBERS

export function checkprice(txt){
    var regexp = /^\d+(\.\d{1,2})?$/;
  if (!regexp.test(txt))
   { 
         return false;
   }
       else{return true;}
  }
