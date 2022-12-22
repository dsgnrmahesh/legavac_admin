import React,{useEffect,useState} from 'react';

export default function ServiceSetup() {
    const [state,setState]=useState({})
    useEffect(()=>{

    },[])
    function handlechange(e){
        setState({...state,[e.target.name]:[e.target.value]})
    }
    async function SaveData(){
        console.log(state);
    //    await IU_AdminMaster(state).then(response=>{
    //        console.log(response.data);
    //    });
    }
    return(
        <div>
            Select Service:<select name="serviceid" onChange={handlechange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select><br />
            Time:<input type="time" name="time" /><br />
            <button onClick={SaveData}>Submit</button><br />
            <button>Reset</button>
        </div>
    );
}