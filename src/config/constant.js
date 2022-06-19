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
export default  {inputtype,datatype,controltype}