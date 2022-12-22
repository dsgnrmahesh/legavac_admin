exports.getJSON=async(res)=>{
    return Object.values(JSON.parse(JSON.stringify(res)));
    //return res.json();
}