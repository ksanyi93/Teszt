import { useState } from "react";
// import KmRow from "./Cars-pages/KmRow";
import './Any.css';
// import MileRow from "./Cars-pages/MileRow";
import GetData from "./Convert-pages/GetData";
import Eredmeny from "./Convert-pages/Eredmeny";

/* function Index() {

  const [state, setState] = useState('alap érték')

  return <>
    {state}
    <br />
    <button onClick={()=> setState('Átadom az infót')}>Katt</button>
  </>
}

export default Index; */



//-------------------------- Km átváltás mérföldre ---------------------------
/* function FirstLook() {

  const[mile, setMile] = useState('')

  
  return (
    <>
      <h1>Convert</h1>
      <KmRow valami={setMile}/> = 
      <MileRow value={mile}/>
    
    </>
    
  );
}

export default FirstLook; */


export default function Convert(){


  const[data, setData] = useState('')

  return(
    <>

    <h1>Átváltás</h1>
    <GetData valami={setData}/>
    <Eredmeny value={data}/>

    
    </>

  );
}