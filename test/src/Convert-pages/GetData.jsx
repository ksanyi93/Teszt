import { useState } from "react";


export default function GetData(props){

    const[adat, setAdat] = useState('')

    return(

        <div>
        <input type="text" placeholder="Írja be az adatot" onChange={(e)=> setAdat(e.target.value)}/>
        <br />  
        <button onClick={()=>  props.valami (Kg(adat))}> Kg </button>
        <button onClick={()=>  props.valami (Euro(adat))}> Euro </button>
        <button onClick={()=>  props.valami (Liter(adat))}> Liter </button>
        
        </div>
    
    
    )
}

function Kg(kg){
    return(
        kg * 1000
    )
};

function Euro(euro){
    return euro * 350
};

function Liter(l){
    return l * 10
};