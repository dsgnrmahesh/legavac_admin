import React,{useEffect,useState} from 'react';

export default function AssignDocToService() {
    const [state,setState]=useState({
        serviceid:"0",
        documentid:"0"
    })
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
            Select Service:<select name="serviceid" value={state.serviceid} onChange={handlechange}>
                <option value="0">Select</option>
                <option valie="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select><br />
            Document Name:<select name="documentid" multiple onChange={handlechange}>
                <option value="0">Select</option>
                <option valie="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select><br />
            <button onClick={SaveData}>Submit</button><br /> 
            <button>Reset</button>
        </div>
    );
}