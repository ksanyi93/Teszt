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

    </article>
    );
}

export default GetContent