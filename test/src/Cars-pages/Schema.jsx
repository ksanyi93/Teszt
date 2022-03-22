import { useEffect, useState } from "react";
import Card from "./Card";

function Schema(props) {


  const [hide, setHide] = useState(props.body)

  const[ number, setNumber] = useState(0)

  useEffect(()=>{
    document.title = 'Utolso váltás:' + props.title
  }, [])

  return <article>

    <h1>{props.title}</h1>
    <p>{hide}</p>

    <button className="btn-hide" onClick={()=> setHide('')}>Eltűntetés</button>

    <button className="btn-show" onClick={()=> setHide(props.body) }>Mutatás</button>

    <hr />


    <button className="btn-" onClick={()=> setNumber(number -1)}> - </button>
    <big> {number} </big>
    <button className="btn-plus" onClick={()=> setNumber(number +1)}> + </button>

    <hr />


    <div style={{ display: 'flex', flexWrap: "wrap" }}>
      {props.cards.map( function(item, index) {
        return <Card title={item.title} img={item.img} descr={item.descr} key={index}/>

        
      })}


      {/* <Card title={props.cards[0].title} img={props.cards[0].img} descr={props.cards[0].descr}/>

      <Card title={props.cards[1].title} img={props.cards[1].img} descr={props.cards[1].descr}/>

      <Card title={props.cards[2].title} img={props.cards[2].img} descr={props.cards[2].descr}/> */}

    </div>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates cumque, ut facilis, sed doloremque, rem ipsum necessitatibus veniam reprehenderit veritatis vitae assumenda. Sint nam necessitatibus eos expedita excepturi architecto.</p>


  </article>
}

export default Schema;