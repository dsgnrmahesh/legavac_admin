import React,{useEffect,useState} from "react";
import {getcountryforddl} from "../config/api";

export default function UserMaster() {
    const [countryddl,setCountryDDL]=useState([]);
    useEffect(()=>{
        BindCountryddl()
    },[])
    async function BindCountryddl() {
        const countryddl = await getcountryforddl();
        if (countryddl.error)
          console.log(countryddl.error);
        else
          //console.log(countryddl.data);
          setCountryDDL(countryddl.data);
      } 
    return(
        <div>
            Name:<input type="text" name="name" />
            UserName:<input type="text" name="username" />
            Image:<input type="file" name="imageupload" />
            Pdf:<input type="file" name="pdfupload" />
            Video:<input type="file" name="videoupload" />
            Country:<select name="ddlcountry">
                <option value="0">Select</option>
                {countryddl.map((item,index)=>
                <option value={item}>{item}</option>
                )}
            </select>
                    </div>
    )
}