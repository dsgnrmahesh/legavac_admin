import React,{useEffect,useState} from 'react';
import {IU_AdminMaster} from "../config/api";

export default function AddService() {
    const [state,setState]=useState({
        service:""
    })
    useEffect(()=>{

    },[])
    function handlechange(e){
        setState({...state,service:[e.target.value]})
    }
    async function SaveData(){
        //console.log(state);
       await IU_AdminMaster(state).then(response=>{
           console.log(response.data);
       });
    }
    return(
        <div>
            Service Name:<input type="text" name="service" onChange={handlechange} value={state.service}/>
            <br />
            <button onClick={SaveData}>Submit</button>
            <button>Reset</button>
        </div>
    );
}