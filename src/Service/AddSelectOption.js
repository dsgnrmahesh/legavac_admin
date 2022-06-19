import React,{useEffect,useState} from 'react';
import {IU_AdminMaster} from "../config/api";

export default function AddSelectOption() {
    const [state,setState]=useState({})
    useEffect(()=>{

    },[])
    function handlechange(e){
        setState({...state,service:[e.target.value]})
    }
    async function SaveData(){
        console.log(state);
    //    await IU_AdminMaster(state).then(response=>{
    //        console.log(response.data);
    //    });
    }
    return(
        <div>
            Key Name:<select name="service" onChange={handlechange} value={state.key}>
                <option value="0">Select</option>
                <option value="1">1</option>
                </select>
            <br />
            Value:<input type="text" name="value" onChange={handlechange} value={state.value} />
            <button onClick={SaveData}>Submit</button>
            <button>Reset</button>
        </div>
    );
}