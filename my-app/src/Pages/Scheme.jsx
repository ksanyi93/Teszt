import Lapok from './Lapok';

function Scheme(props) {

    return <div class = "body_sec" style={{display: 'flex'}}>

        <section id="Content">
            <h3>{props.title}</h3>

            <img src={props.img} alt="" />
            <p>{props.body}</p>

            {props.lapok.map( function(item, index) {
                return <Lapok title={item.title} body={item.body} img={item.img} key={index}/>
            })}
            

            {/* <Lapok title={props.lapok[0].title} body={props.lapok[0].body} /> */}


        </section>

    </div>
}

export default Scheme;