import React,{useEffect,useState} from 'react';

export default function ControlSetup() {
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
            Service Name:<select name="serviceid" onChange={handlechange} value={state.serviceid}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select><br />         
            Control Type:<select name="controltype" onChange={handlechange} value={state.controltype}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select><br />
            Label Name:<input type="text" name="lablename" onChange={handlechange} value={state.lablename}/><br />
            Name:<input type="text" name="name" onChange={handlechange} value={state.name}/><br />
            Placeholder:<input type="text" name="placeholder" onChange={handlechange} value={state.placeholder}/><br />
            option:<input type="text" name="option" onChange={handlechange} value={state.option}/><br />
            required:<input type="checkbox" name="chkrequired" onChange={handlechange} value={state.chkrequired} />
            <button onClick={SaveData}>Submit</button><br />
            <button>Reset</button>
        </div>
    );
}