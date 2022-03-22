

export default function KmRow(props){

    return(
        <div>
            <input type="text" placeholder="Írja be a km-ert" onChange={(e)=> props.valami (KmtoMile(e.target.value))}/>

        </div>
    )
}

function KmtoMile(km){
    return km * 0.621
  }