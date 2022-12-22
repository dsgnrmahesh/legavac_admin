const inputtype=["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range",
"reset","search","submit","tel","text","time","url","week"];
const datatype=["String","Number","Integer","Image","URL"];
const controltype=["input","textarea","select"];


export function getFileName(name,file){
    let today = new Date(),
    date =today.getFullYear() +"-" +(today.getMonth() + 1) +"-" +today.getDate(),
    time =today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    
    return name.replace(/[^A-Z0-9]+/ig, "-")+"-"+date+time+"."+file.name.split('.')[1];
}

export const COMPANY_DETAILS = {
    Name: "LagaVac Resources Pvt Ltd",
    address: "Office No - 1007, Kamdhenu, Sector-14, Kharghar, Navi Mumbai - 410210",
    mobile: "+91 7021912110",
    pancard: "",
    gstno: "27AAECL7848Q1ZK"
  }
export default  {inputtype,datatype,controltype}