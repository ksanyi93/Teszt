

function Lapok(props) {

    return (
    
        <div className="kicsidiv">


        <h2>{props.title}</h2>

        <img className="img" src={props.img} alt=""/>

        <p>{props.body}</p>


    </div>
    )
}

export default Lapok;