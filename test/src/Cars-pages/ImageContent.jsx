import GetContent from "./GetContent"


function ImageContent(){

    return (
        <article>

    <h1>Fetch tesztelés</h1>

        <div style={{border: '1px solid black', height: '60%', width: '100%'}}>
            {console.log(data)}
            {data.map( function( item, index){
                <img src={item.id} alt="" key={index}/>
            } )}
        </div>
    

    

    </article>
    )
}

export default ImageContent;