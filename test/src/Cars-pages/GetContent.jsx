import { useEffect, useState } from "react"


function GetContent(){

    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function (result){
            return result.json() 
        } )
        .then(function(result){
            setData( result )
        })
    }, [])


    
    return (
    <article>

    <h1>Fetch tesztelés</h1>

        <div style={{border: '1px solid black', height: '60%', width: '100%'}}>
            {console.log(data)}
            {data.map( function( item, index){
                return <img src={item.thumbnailUrl} alt="" />
            } )}
        </div>
    

    

    </article>
    );
}

export default GetContent;